import { NextRequest, NextResponse } from 'next/server';
import { chatRateLimiter } from '@/lib/rate-limit';

const WEBHOOK_URL = 'https://n8n.dudeid.site/webhook/aichat';

export async function POST(request: NextRequest) {
  try {
    // Get client IP for rate limiting
    const ip = request.headers.get('x-forwarded-for') || 
               request.headers.get('remote-addr') || 
               'unknown-ip';

    // Check rate limit
    if (!chatRateLimiter.checkLimit(ip)) {
      // Rate limited - silent failure with friendly response
      return NextResponse.json(
        { output: "I'm currently helping other visitors. Please try again in a moment!" },
        { status: 200 }
      );
    }

    // Parse request body
    const { message, sessionId } = await request.json();

    // Validate input
    if (!message || typeof message !== 'string' || message.trim().length === 0) {
      return NextResponse.json(
        { output: "Hello! How can I help you today?" },
        { status: 200 }
      );
    }

    // Call n8n webhook
    console.log('Calling n8n webhook:', WEBHOOK_URL);
    console.log('Sending payload:', { message: message.trim(), sessionId: sessionId || 'anonymous' });
    
    const response = await fetch(WEBHOOK_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        message: message.trim(),
        sessionId: sessionId || 'anonymous',
      }),
      // Add timeout to prevent hanging
      signal: AbortSignal.timeout(30000),
    });

    console.log('n8n response status:', response.status);
    console.log('n8n response ok:', response.ok);

    if (!response.ok) {
      const errorText = await response.text();
      console.log('n8n error response:', errorText);
      
      // Return the actual error for debugging
      return NextResponse.json(
        { output: `n8n error: ${response.status} - ${errorText}` },
        { status: 200 }
      );
    }

    // Handle streaming response
    const contentType = response.headers.get('content-type');
    console.log('Content-Type:', contentType);
    
    let output = "I'm here to help! Tell me more about what you need.";
    
    if (contentType && contentType.includes('application/json')) {
      // Regular JSON response
      const data = await response.json();
      console.log('n8n response data:', data);
      output = data.output || data.message || data.response || output;
    } else {
      // Streaming response - read as text and parse
      const text = await response.text();
      console.log('n8n streaming response:', text);
      
      // Try to parse as JSON first
      try {
        const data = JSON.parse(text);
        output = data.output || data.message || data.response || output;
      } catch (e) {
        // If it's streaming SSE format, extract the data
        // SSE format: data: {"output":"..."}
        const lines = text.split('\n');
        for (const line of lines) {
          if (line.startsWith('data:')) {
            try {
              const data = JSON.parse(line.substring(5).trim());
              if (data.output) {
                output = data.output;
                break;
              }
            } catch (parseError) {
              // Skip invalid JSON lines
            }
          }
        }
      }
    }

    return NextResponse.json({ output }, { status: 200 });

  } catch (error) {
    console.error('Chat API error:', error);
    
    // Handle unknown error type
    const errorMessage = error instanceof Error ? error.message : 'Unknown error occurred';
    
    return NextResponse.json(
      { output: `Error: ${errorMessage}` },
      { status: 200 }
    );
  }
}

// Also support GET for health check
export async function GET() {
  return NextResponse.json({ status: 'ready' }, { status: 200 });
}