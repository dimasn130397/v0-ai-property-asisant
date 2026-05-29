'use client';

import { Zap, Brain, Clock, Shield, Search, Smartphone } from 'lucide-react';

const features = [
  {
    icon: Brain,
    title: 'AI-Powered Chatbot',
    description: 'Intelligent assistant that understands your preferences and provides personalized property recommendations.'
  },
  {
    icon: Search,
    title: 'Smart Search',
    description: 'Advanced filtering with natural language understanding to find exactly what you\'re looking for.'
  },
  {
    icon: Clock,
    title: 'Instant Responses',
    description: 'Get property details, pricing, and availability information in seconds, not hours.'
  },
  {
    icon: Zap,
    title: 'Real-time Updates',
    description: 'Stay informed with live property listings and price changes across the market.'
  },
  {
    icon: Shield,
    title: 'Verified Properties',
    description: 'All listings are verified and authenticated for your peace of mind and security.'
  },
  {
    icon: Smartphone,
    title: 'Mobile Optimized',
    description: 'Browse properties and chat with AI anytime, anywhere on any device.'
  }
];

export default function Features() {
  return (
    <section className="relative py-20 lg:py-32 px-4 bg-gradient-to-b from-background via-background to-blue-950/10">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-5xl font-bold">
            <span className="bg-gradient-to-r from-blue-300 via-blue-400 to-cyan-300 bg-clip-text text-transparent">
              Powerful Features
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Everything you need to find, analyze, and purchase your ideal property
          </p>
        </div>

        {/* Features grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="group p-6 rounded-2xl border border-blue-500/20 bg-blue-500/5 hover:bg-blue-500/10 hover:border-blue-400/40 transition-all duration-300 hover:glow-blue"
              >
                <div className="flex flex-col gap-4">
                  <div className="w-12 h-12 rounded-lg bg-blue-600/20 flex items-center justify-center group-hover:bg-blue-600/40 transition-colors">
                    <Icon className="w-6 h-6 text-blue-400 group-hover:text-blue-300 transition-colors" />
                  </div>
                  <h3 className="font-semibold text-lg text-white">{feature.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{feature.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
