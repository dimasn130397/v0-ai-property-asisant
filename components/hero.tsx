'use client';

import { ArrowRight, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-4 py-20 lg:py-32">
      {/* Background glow elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-20 right-10 w-72 h-72 bg-cyan-500/5 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="relative max-w-5xl mx-auto text-center space-y-8">
        {/* Badge */}
        <div className="flex items-center justify-center gap-2 inline-flex mx-auto px-4 py-2 rounded-full border border-blue-500/30 bg-blue-500/5 glow-blue">
          <Sparkles className="w-4 h-4 text-blue-400" />
          <span className="text-sm text-blue-300">
          Next.js • Telegram Bot API • Vercel
          </span>
        </div>

        {/* Main heading */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight text-balance">
          <span className="bg-gradient-to-r from-blue-300 via-blue-400 to-cyan-300 bg-clip-text text-transparent">
          AI Property Assistant
          </span>
          <br />
          Real-Time Lead Management
        </h1>

        {/* Subheading */}
        <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto text-balance leading-relaxed">
          Meet your intelligent property assistant. Get instant information, pricing, and schedule surveys with our advanced AI chatbot powered by machine learning.
        </p>
        <div className="flex flex-wrap justify-center gap-3 pt-4">
  <span className="px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-300 text-sm">
    Next.js
  </span>
  <span className="px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-300 text-sm">
    TypeScript
  </span>
  <span className="px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-300 text-sm">
    Telegram Bot API
  </span>
  <span className="px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-300 text-sm">
    Vercel
  </span>
</div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
          <Button 
            size="lg" 
            className="bg-blue-600 hover:bg-blue-700 text-white glow-blue-lg rounded-full px-8 group"
          >
            Start Exploring <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
          <Button 
            size="lg" 
            variant="outline" 
            className="border-blue-500/50 text-blue-300 hover:bg-blue-500/10 rounded-full px-8"
          >
            Watch Demo
          </Button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-4 md:gap-8 pt-12 border-t border-blue-500/10">
          <div className="space-y-1">
            <p className="text-2xl md:text-3xl font-bold text-blue-300">500+</p>
            <p className="text-sm text-gray-400">Properties Available</p>
          </div>
          <div className="space-y-1">
            <p className="text-2xl md:text-3xl font-bold text-blue-300">95%</p>
            <p className="text-sm text-gray-400">Satisfaction Rate</p>
          </div>
          <div className="space-y-1">
            <p className="text-2xl md:text-3xl font-bold text-blue-300">24/7</p>
            <p className="text-sm text-gray-400">AI Support</p>
          </div>
        </div>
      </div>
    </section>
  );
}
