'use client';

import { MessageCircle, Shield, Sparkles, Users, Zap, Award, ArrowRight, Bot } from 'lucide-react'
import Link from 'next/link'
import ChatDemo from '@/components/ChatDemo'
import ScrollToTop from '@/components/ScrollToTop'

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white overflow-x-hidden">
      {/* Dynamic graphic background with glassy effects */}
      <div className="bg-pattern"></div>
      <div className="glass-overlay"></div>
      
      {/* Additional floating elements for depth */}
      <div className="fixed inset-0 pointer-events-none opacity-30">
        <div className="absolute top-10 left-1/4 w-72 h-72 bg-gradient-to-br from-white/10 to-transparent rounded-full blur-2xl animate-float-slow"></div>
        <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-gradient-to-tl from-white/8 to-transparent rounded-full blur-3xl animate-float-slow-reverse"></div>
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-gradient-to-tr from-white/6 to-transparent rounded-full blur-2xl animate-float-slow"></div>
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-4">
        <div className="glass max-w-7xl mx-auto px-6 py-3 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Bot className="w-6 h-6" />
            <span className="font-bold text-xl glass-text">AIChatCraft</span>
          </div>
          <div className="hidden md:flex gap-6 text-sm">
            <button 
              onClick={() => document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' })}
              className="hover:text-gray-300 transition cursor-pointer"
            >
              Features
            </button>
            <button 
              onClick={() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })}
              className="hover:text-gray-300 transition cursor-pointer"
            >
              Pricing
            </button>
            <button 
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="hover:text-gray-300 transition cursor-pointer"
            >
              Contact
            </button>
          </div>
          <button className="glass px-4 py-2 rounded-lg hover:bg-white/10 transition text-sm">
            Get Started
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-block glass px-4 py-2 rounded-full text-sm mb-6 animate-fade-in-up">
            <span className="text-gray-300">🚀 Now accepting clients for Q1 2026</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight animate-fade-in-up">
            Create AI Chatbots That <br />
            <span className="glass-text">Feel Human</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-400 mb-8 max-w-3xl mx-auto animate-fade-in-up">
            Affordable, secure, and personalized AI chatbots for your business. 
            No robotic responses. Just natural conversations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up">
            <button className="btn-glass glass-strong px-8 py-4 rounded-lg font-semibold text-lg flex items-center justify-center gap-2">
              Start Free Consultation
              <ArrowRight className="w-5 h-5" />
            </button>
            <button 
              onClick={() => {
                const demoSection = document.getElementById('demo-section');
                if (demoSection) {
                  demoSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
              }}
              className="glass px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white/10 transition flex items-center justify-center gap-2 cursor-pointer"
            >
              <MessageCircle className="w-5 h-5" />
              Chat with AI Demo
            </button>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="py-12 px-6 border-y border-white/10">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-3xl font-bold glass-text">99.9%</div>
            <div className="text-sm text-gray-400 mt-1">Uptime Security</div>
          </div>
          <div>
            <div className="text-3xl font-bold glass-text">500+</div>
            <div className="text-sm text-gray-400 mt-1">Characters Created</div>
          </div>
          <div>
            <div className="text-3xl font-bold glass-text">24/7</div>
            <div className="text-sm text-gray-400 mt-1">Support</div>
          </div>
          <div>
            <div className="text-3xl font-bold glass-text">100%</div>
            <div className="text-sm text-gray-400 mt-1">Custom Built</div>
          </div>
        </div>
      </section>

      {/* AI Demo Showcase - Main Feature */}
      <section id="demo-section" className="py-20 px-6 bg-gradient-to-b from-transparent via-white/5 to-transparent">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-block px-4 py-2 glass rounded-full text-sm mb-4">
              🚀 Experience It Live
            </div>
            <h2 className="text-5xl md:text-6xl font-bold mb-4 glass-text">
              Your AI Assistant, <br />Ready to Chat
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              This isn't just a demo - it's a preview of the exact AI experience you'll get. 
              Natural conversations, instant responses, and personality that matches your brand.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="order-2 md:order-1">
              <ChatDemo />
            </div>
            <div className="order-1 md:order-2 space-y-6">
              <div className="glass p-6 rounded-xl">
                <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                  <Sparkles className="w-6 h-6 text-blue-400" />
                  What You Can Do
                </h3>
                <ul className="space-y-2 text-gray-300 text-sm">
                  <li>• Ask about our services</li>
                  <li>• Get instant pricing info</li>
                  <li>• Discuss your specific needs</li>
                  <li>• Experience natural conversation</li>
                </ul>
              </div>
              <div className="glass p-6 rounded-xl">
                <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                  <Zap className="w-6 h-6 text-yellow-400" />
                  Why This Matters
                </h3>
                <p className="text-gray-300 text-sm">
                  This demo uses the same technology your customers will experience. 
                  No robotic responses, no awkward pauses - just genuine, helpful AI.
                </p>
              </div>
              <button 
                onClick={() => {
                  const contactSection = document.getElementById('contact');
                  if (contactSection) {
                    contactSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
                  }
                }}
                className="w-full btn-glass glass-strong px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white/20 transition cursor-pointer"
              >
                Start Your Free Consultation →
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 glass-text">Everything You Need</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <FeatureCard 
              icon={<Shield className="w-8 h-8" />}
              title="Top-Notch Security"
              description="Enterprise-grade encryption and data protection. Your conversations stay private."
            />
            <FeatureCard 
              icon={<Sparkles className="w-8 h-8" />}
              title="Personalized Characters"
              description="Create AI personas that match your brand voice and personality perfectly."
            />
            <FeatureCard 
              icon={<Users className="w-8 h-8" />}
              title="Human-Like Conversations"
              description="Advanced natural language processing that doesn't sound like a robot."
            />
            <FeatureCard 
              icon={<Zap className="w-8 h-8" />}
              title="Affordable Pricing"
              description="Premium quality without the premium price tag. Starting at $99/month."
            />
            <FeatureCard 
              icon={<Award className="w-8 h-8" />}
              title="Free Consultation"
              description="Get expert advice on what you need before committing to anything."
            />
            <FeatureCard 
              icon={<MessageCircle className="w-8 h-8" />}
              title="24/7 Availability"
              description="Your AI assistant works around the clock, just like you do."
            />
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 px-6 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 glass-text">Simple, Transparent Pricing</h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            <PricingCard 
              name="Starter"
              price="$99"
              period="/month"
              features={[
                "1 AI Character",
                "Basic customization",
                "Email support",
                "5,000 messages/month"
              ]}
              highlighted={false}
            />
            <div className="relative">
              <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 z-10">
                <div className="px-5 py-1.5 bg-gradient-to-r from-white via-gray-200 to-white text-black rounded-full text-xs font-bold shadow-lg border-2 border-white/30 animate-pulse">
                  ⭐ MOST POPULAR
                </div>
              </div>
              <PricingCard 
                name="Professional"
                price="$299"
                period="/month"
                features={[
                  "3 AI Characters",
                  "Advanced customization",
                  "Priority support",
                  "25,000 messages/month",
                  "API access"
                ]}
                highlighted={true}
              />
            </div>
            <PricingCard 
              name="Enterprise"
              price="Custom"
              period=""
              features={[
                "Unlimited characters",
                "Full customization",
                "Dedicated support",
                "Unlimited messages",
                "White-label options"
              ]}
              highlighted={false}
            />
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6 border-t border-white/10">
        <div className="max-w-7xl mx-auto">
          <div className="glass-strong p-8 md:p-12 rounded-2xl">
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h2 className="text-3xl font-bold mb-4 glass-text">Ready to Get Started?</h2>
                <p className="text-gray-400 mb-6">
                  Let's discuss your AI chatbot needs. Free consultation, no obligations.
                </p>
                
                <div className="space-y-4">
                  <button className="w-full btn-glass glass px-6 py-4 rounded-lg flex items-center justify-center gap-3 hover:bg-white/10 transition">
                    <span className="text-green-400">📱</span>
                    Chat on WhatsApp
                  </button>
                  <button 
                    onClick={() => {
                      const demoSection = document.getElementById('demo-section');
                      if (demoSection) {
                        demoSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
                      }
                    }}
                    className="w-full glass px-6 py-4 rounded-lg flex items-center justify-center gap-3 hover:bg-white/10 transition cursor-pointer"
                  >
                    <MessageCircle className="w-5 h-5 text-blue-400" />
                    Chat with AI Assistant
                  </button>
                  <button className="w-full glass px-6 py-4 rounded-lg flex items-center justify-center gap-3 hover:bg-white/10 transition">
                    <span className="text-gray-400">✉️</span>
                    Send Email
                  </button>
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-4">What happens next?</h3>
                <ol className="space-y-3 text-gray-400">
                  <li className="flex gap-3">
                    <span className="text-white font-bold">1.</span>
                    Free 30-minute consultation call
                  </li>
                  <li className="flex gap-3">
                    <span className="text-white font-bold">2.</span>
                    Custom AI design proposal
                  </li>
                  <li className="flex gap-3">
                    <span className="text-white font-bold">3.</span>
                    Development & testing
                  </li>
                  <li className="flex gap-3">
                    <span className="text-white font-bold">4.</span>
                    Launch & ongoing support
                  </li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-white/10">
        <div className="max-w-7xl mx-auto text-center text-gray-500 text-sm">
          <div className="flex justify-center gap-6 mb-4">
            <button 
              onClick={() => document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' })}
              className="hover:text-gray-300 transition cursor-pointer"
            >
              Features
            </button>
            <button 
              onClick={() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })}
              className="hover:text-gray-300 transition cursor-pointer"
            >
              Pricing
            </button>
            <button 
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="hover:text-gray-300 transition cursor-pointer"
            >
              Contact
            </button>
          </div>
          <p>© 2026 AIChatCraft. All rights reserved.</p>
        </div>
      </footer>

      {/* Scroll to Top Button */}
      <ScrollToTop />
    </main>
  )
}

function FeatureCard({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) {
  return (
    <div className="glass p-6 rounded-xl hover:bg-white/10 transition">
      <div className="text-white mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-400 text-sm">{description}</p>
    </div>
  )
}

function PricingCard({ name, price, period, features, highlighted }: { name: string, price: string, period: string, features: string[], highlighted: boolean }) {
  return (
    <div className={`glass p-8 rounded-xl flex flex-col ${highlighted ? 'glass-strong border-white/20' : ''} hover:bg-white/10 transition`}>
      <div>
        <h3 className="text-2xl font-bold mb-2">{name}</h3>
        <div className="mb-6">
          <span className="text-4xl font-bold glass-text">{price}</span>
          <span className="text-gray-400 ml-1">{period}</span>
        </div>
        <ul className="space-y-3 mb-6">
          {features.map((feature, i) => (
            <li key={i} className="flex items-start gap-2 text-sm text-gray-300">
              <span className="text-green-400">✓</span>
              {feature}
            </li>
          ))}
        </ul>
      </div>
      <div className="mt-auto">
        <button className={`w-full py-3 rounded-lg font-semibold transition ${highlighted ? 'btn-glass glass-strong' : 'glass hover:bg-white/10'}`}>
          Get Started
        </button>
      </div>
    </div>
  )
}

