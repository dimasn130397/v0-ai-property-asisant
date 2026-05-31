'use client';

import { useState } from 'react';
import { Calendar, Clock, User, Phone, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function SurveyBooking() {
  const [formData, setFormData] = useState({
  name: '',
  email: '',
  phone: '',
  date: '',
  time: '',
  property: '',
  notes: '',
});
  const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  try {
    const response = await fetch('/api/telegram', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      alert('Survey request sent successfully!');

      setFormData({
        name: '',
        email: '',
        phone: '',
        date: '',
        time: '',
        property: '',
        notes: '',
      });
    } else {
      alert('Failed to send request.');
    }
  } catch (error) {
    alert('Something went wrong.');
  }
};

  return (
    <section className="relative py-20 lg:py-32 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Background glow */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl"></div>
        </div>

        {/* Section header */}
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl md:text-5xl font-bold">
            <span className="bg-gradient-to-r from-blue-300 via-blue-400 to-cyan-300 bg-clip-text text-transparent">
              Schedule Your Survey
            </span>
          </h2>
          <p className="text-gray-400 text-lg">
            Book a property viewing with our professional agents
          </p>
        </div>

        {/* Form container */}
        <div className="rounded-3xl border border-blue-500/30 bg-blue-500/5 p-8 md:p-12 glow-blue backdrop-blur-sm">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Name */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-blue-300 flex items-center gap-2">
                  <User className="w-4 h-4" />
                  Full Name
                </label>
                <input
  type="text"
  placeholder="Your name"
  required
  value={formData.name}
  onChange={(e) =>
    setFormData({ ...formData, name: e.target.value })
  }
  className="w-full px-4 py-3 rounded-lg bg-blue-950/40 border border-blue-500/30 text-white placeholder-gray-500 focus:outline-none focus:border-blue-400/50 transition-colors"
/>
              </div>

              {/* Email */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-blue-300 flex items-center gap-2">
                  <Mail className="w-4 h-4" />
                  Email Address
                </label>
                <input
  type="email"
  placeholder="your@email.com"
  required
  value={formData.email}
  onChange={(e) =>
    setFormData({ ...formData, email: e.target.value })
  }
  className="w-full px-4 py-3 rounded-lg bg-blue-950/40 border border-blue-500/30 text-white placeholder-gray-500 focus:outline-none focus:border-blue-400/50 transition-colors"
/>
              </div>

              {/* Phone */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-blue-300 flex items-center gap-2">
                  <Phone className="w-4 h-4" />
                  Phone Number
                </label>
                <input
  type="tel"
  placeholder="+62 (812) 345-6789"
  required
  value={formData.phone}
  onChange={(e) =>
    setFormData({ ...formData, phone: e.target.value })
  }
  className="w-full px-4 py-3 rounded-lg bg-blue-950/40 border border-blue-500/30 text-white placeholder-gray-500 focus:outline-none focus:border-blue-400/50 transition-colors"
/>
              </div>

              {/* Date */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-blue-300 flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  Preferred Date
                </label>
                <input
  type="date"
  required
  value={formData.date}
  onChange={(e) =>
    setFormData({ ...formData, date: e.target.value })
  }
  className="w-full px-4 py-3 rounded-lg bg-blue-950/40 border border-blue-500/30 text-white placeholder-gray-500 focus:outline-none focus:border-blue-400/50 transition-colors"
/>
              </div>

              {/* Time */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-blue-300 flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  Preferred Time
                </label>
                <select
  required
  value={formData.time}
  onChange={(e) =>
    setFormData({ ...formData, time: e.target.value })
  }
  className="w-full px-4 py-3 rounded-lg bg-blue-950/40 border border-blue-500/30 text-white placeholder-gray-500 focus:outline-none focus:border-blue-400/50 transition-colors"
>
  <option value="">Select time</option>
  <option value="09:00">09:00 AM</option>
  <option value="10:00">10:00 AM</option>
  <option value="11:00">11:00 AM</option>
  <option value="14:00">02:00 PM</option>
  <option value="15:00">03:00 PM</option>
  <option value="16:00">04:00 PM</option>
</select>
              </div>

              {/* Property Interest */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-blue-300">Property of Interest</label>
                <select
  required
  value={formData.property}
  onChange={(e) =>
    setFormData({ ...formData, property: e.target.value })
  }
  className="w-full px-4 py-3 rounded-lg bg-blue-950/40 border border-blue-500/30 text-white placeholder-gray-500 focus:outline-none focus:border-blue-400/50 transition-colors"
>
  <option value="">Select property</option>
  <option value="modern">Modern Family Home</option>
  <option value="luxury">Luxury Residence</option>
  <option value="cozy">Cozy Apartment</option>
</select>
              </div>
            </div>

            {/* Message */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-blue-300">Additional Notes</label>
             <textarea
  placeholder="Tell us about your preferences or questions..."
  rows={4}
  value={formData.notes}
  onChange={(e) =>
    setFormData({ ...formData, notes: e.target.value })
  }
  className="w-full px-4 py-3 rounded-lg bg-blue-950/40 border border-blue-500/30 text-white placeholder-gray-500 focus:outline-none focus:border-blue-400/50 transition-colors resize-none"
/>
            </div>

            {/* Submit Button */}
            <Button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg glow-blue-lg transition-all"
            >
              Schedule Survey Now
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
}
