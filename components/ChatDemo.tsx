'use client';

import React from 'react';
import { Send } from 'lucide-react';

export default function ChatDemo() {
  const [messages, setMessages] = React.useState<Array<{role: 'user' | 'ai', content: string}>>([
    { role: 'ai', content: "Hi! I'm your AI assistant. How can I help you today? I can tell you about our chatbot services, pricing, or answer any questions." }
  ]);
  const [input, setInput] = React.useState('');
  const [isLoading, setIsLoading] = React.useState(false);
  const [sessionId, setSessionId] = React.useState('');
  const messagesEndRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    // Generate or get session ID
    const stored = localStorage.getItem('aiChatSession');
    if (stored) {
      setSessionId(stored);
    } else {
      const newSession = `session_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
      localStorage.setItem('aiChatSession', newSession);
      setSessionId(newSession);
    }
  }, []);

  React.useEffect(() => {
    // Only auto-scroll if there are user messages (not just the initial AI greeting)
    if (messages.length > 1) {
      messagesEndRef.current?.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }
  }, [messages]);

  const sendMessage = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage = input.trim();
    setInput('');
    
    // Add user message immediately
    setMessages(prev => [...prev, { role: 'user', content: userMessage }]);
    setIsLoading(true);

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: userMessage, sessionId }),
      });

      const data = await response.json();
      
      // Add AI response
      setMessages(prev => [...prev, { role: 'ai', content: data.output }]);
    } catch (error) {
      // Silent failure - show friendly response
      setMessages(prev => [...prev, { 
        role: 'ai', 
        content: "I'd love to chat more about your AI chatbot needs! What specific features are you looking for?" 
      }]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      if (!e.shiftKey) {
        e.preventDefault();
        e.stopPropagation();
        e.nativeEvent.stopImmediatePropagation();
        sendMessage();
      }
      // Shift+Enter allows new line (default behavior)
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    e.stopPropagation();
    e.nativeEvent.stopImmediatePropagation();
    sendMessage();
    return false;
  };

  return (
    <div className="chat-container glass rounded-2xl overflow-hidden">
      <div className="bg-white/5 p-4 border-b border-white/10 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <div className={`w-2 h-2 rounded-full ${isLoading ? 'bg-yellow-400 animate-pulse' : 'bg-green-400'} transition-colors duration-300`}></div>
          <span className="font-semibold">AI Assistant Demo</span>
        </div>
      </div>
      
      <div className="h-80 overflow-y-auto p-4 space-y-3">
        {messages.map((msg, i) => (
          <div 
            key={i} 
            className={`chat-bubble-${msg.role} p-3 max-w-[85%] ${msg.role === 'user' ? 'ml-auto' : ''} message-fade-in`}
          >
            <p className="text-sm leading-relaxed">{msg.content}</p>
          </div>
        ))}
        {isLoading && (
          <div className="chat-bubble-ai p-3 max-w-[85%]">
            <div className="typing-indicator">
              <div className="typing-dot"></div>
              <div className="typing-dot"></div>
              <div className="typing-dot"></div>
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>
      
      <div className="p-4 border-t border-white/10">
        <form onSubmit={handleSubmit} className="flex gap-2">
          <input 
            type="text" 
            placeholder="Type your message..." 
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            disabled={isLoading}
            className="flex-1 bg-white/5 border border-white/10 rounded-lg px-4 py-2 focus:outline-none focus:border-white/30 transition-all duration-300 disabled:opacity-50 hover:bg-white/10 focus:bg-white/10"
          />
          <button 
            type="submit"
            disabled={isLoading || !input.trim()}
            className="glass px-4 py-2 rounded-lg hover:bg-white/10 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed active:scale-95"
          >
            <Send className="w-5 h-5" />
          </button>
        </form>
        <p className="text-xs text-gray-500 mt-2 text-center">
          {isLoading ? 'AI is thinking...' : 'Live AI demo - try asking about pricing, features, or security!'}
        </p>
      </div>
    </div>
  );
}