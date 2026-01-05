export class RateLimiter {
  private limits: Map<string, { count: number; resetTime: number }> = new Map();
  private maxRequests: number;
  private windowMs: number;

  constructor(maxRequests: number = 10, windowMs: number = 60000) {
    this.maxRequests = maxRequests;
    this.windowMs = windowMs;
  }

  checkLimit(identifier: string): boolean {
    const now = Date.now();
    const current = this.limits.get(identifier);

    if (current && current.count >= this.maxRequests) {
      if (now < current.resetTime) {
        return false; // Rate limited
      } else {
        // Reset
        this.limits.set(identifier, { count: 1, resetTime: now + this.windowMs });
        return true;
      }
    }

    if (!current) {
      this.limits.set(identifier, { count: 1, resetTime: now + this.windowMs });
    } else {
      current.count++;
    }

    return true;
  }

  getRemaining(identifier: string): number {
    const now = Date.now();
    const current = this.limits.get(identifier);
    
    if (!current) return this.maxRequests;
    if (now >= current.resetTime) return this.maxRequests;
    
    return Math.max(0, this.maxRequests - current.count);
  }
}

export const chatRateLimiter = new RateLimiter(10, 60000); // 10 requests per minute