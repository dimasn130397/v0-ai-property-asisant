'use client';

import { Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Andi Wijaya',
    role: 'Property Investor',
    content: 'The AI assistant helped me find the perfect investment property in just 30 minutes. Incredible efficiency!',
    rating: 5,
    avatar: 'AW'
  },
  {
    name: 'Siti Nurhaliza',
    role: 'First-time Buyer',
    content: 'As a first-time homebuyer, I was overwhelmed. The AI chatbot explained everything clearly and guided me through the process.',
    rating: 5,
    avatar: 'SN'
  },
  {
    name: 'Budi Hartanto',
    role: 'Business Executive',
    content: 'Finally, a property search tool designed for busy professionals. I could browse properties during my lunch break on my phone.',
    rating: 5,
    avatar: 'BH'
  },
  {
    name: 'Citra Dewi',
    role: 'Relocating Professional',
    content: 'Moving to a new city was stressful, but the AI assistant made finding my new home incredibly smooth and enjoyable.',
    rating: 5,
    avatar: 'CD'
  }
];

export default function Testimonials() {
  return (
    <section className="relative py-20 lg:py-32 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-5xl font-bold">
            <span className="bg-gradient-to-r from-blue-300 via-blue-400 to-cyan-300 bg-clip-text text-transparent">
              What Our Users Say
            </span>
          </h2>
          <p className="text-gray-400 text-lg">
            Join thousands of satisfied customers who found their dream homes
          </p>
        </div>

        {/* Testimonials grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="group p-6 rounded-2xl border border-blue-500/20 bg-blue-500/5 hover:bg-blue-500/10 hover:border-blue-400/40 transition-all duration-300 hover:glow-blue"
            >
              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-blue-400 text-blue-400" />
                ))}
              </div>

              {/* Content */}
              <p className="text-gray-300 mb-6 leading-relaxed">"{testimonial.content}"</p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-600 to-cyan-600 flex items-center justify-center text-white font-semibold text-sm">
                  {testimonial.avatar}
                </div>
                <div>
                  <p className="font-semibold text-white">{testimonial.name}</p>
                  <p className="text-sm text-blue-300">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16 pt-12 border-t border-blue-500/10">
          <div className="text-center space-y-2">
            <p className="text-4xl font-bold text-blue-300">4.9/5</p>
            <p className="text-gray-400">Average Rating</p>
          </div>
          <div className="text-center space-y-2">
            <p className="text-4xl font-bold text-blue-300">10K+</p>
            <p className="text-gray-400">Happy Customers</p>
          </div>
          <div className="text-center space-y-2">
            <p className="text-4xl font-bold text-blue-300">500+</p>
            <p className="text-gray-400">Properties Sold</p>
          </div>
        </div>
      </div>
    </section>
  );
}
