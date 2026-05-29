'use client';

import Hero from '@/components/hero';
import Features from '@/components/features';
import ChatDemo from '@/components/chat-demo';
import PricingCards from '@/components/pricing-cards';
import SurveyBooking from '@/components/survey-booking';
import Testimonials from '@/components/testimonials';
import Footer from '@/components/footer';

export default function Page() {
  return (
    <main className="min-h-screen bg-background">
      <Hero />
      <Features />
      <ChatDemo />
      <PricingCards />
      <SurveyBooking />
      <Testimonials />
      <Footer />
    </main>
  );
}
