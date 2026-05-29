'use client';

import { MapPin, Bed, Car, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';

const properties = [
  {
    id: 1,
    title: 'Modern Family Home',
    location: 'Denpasar Selatan',
    price: 'Rp 850 juta',
    beds: 3,
    cars: 2,
    features: ['Kolam Renang', 'Taman Besar', 'Garasi 2 Mobil'],
    image: 'linear-gradient(135deg, rgba(59, 130, 246, 0.1) 0%, rgba(6, 182, 212, 0.05) 100%)'
  },
  {
    id: 2,
    title: 'Luxury Residence',
    location: 'Denpasar Utara',
    price: 'Rp 1.2 miliar',
    beds: 4,
    cars: 3,
    features: ['Kolam Renang', 'Home Theater', 'Taman Landscape', 'Garasi 3 Mobil'],
    image: 'linear-gradient(135deg, rgba(59, 130, 246, 0.15) 0%, rgba(6, 182, 212, 0.1) 100%)',
    featured: true
  },
  {
    id: 3,
    title: 'Cozy Apartment',
    location: 'Denpasar Pusat',
    price: 'Rp 500 juta',
    beds: 2,
    cars: 1,
    features: ['Ruang Gym', 'Kolam Renang', 'Lobby Modern'],
    image: 'linear-gradient(135deg, rgba(59, 130, 246, 0.1) 0%, rgba(6, 182, 212, 0.05) 100%)'
  }
];

export default function PricingCards() {
  return (
    <section className="relative py-20 lg:py-32 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-5xl font-bold">
            <span className="bg-gradient-to-r from-blue-300 via-blue-400 to-cyan-300 bg-clip-text text-transparent">
              Featured Properties
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Handpicked properties matching your preferences
          </p>
        </div>

        {/* Properties grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {properties.map((property) => (
            <div
              key={property.id}
              className={`group relative rounded-2xl overflow-hidden border transition-all duration-300 ${
                property.featured
                  ? 'border-blue-400/50 lg:scale-105 lg:shadow-2xl glow-blue-lg'
                  : 'border-blue-500/20 hover:border-blue-400/40 hover:glow-blue'
              }`}
            >
              {/* Background gradient */}
              <div
                className="absolute inset-0 opacity-20 group-hover:opacity-30 transition-opacity"
                style={{ background: property.image }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-950 via-transparent to-transparent" />

              {/* Featured badge */}
              {property.featured && (
                <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-blue-600/80 text-white text-xs font-semibold glow-blue">
                  Featured
                </div>
              )}

              {/* Content */}
              <div className="relative p-6 flex flex-col h-full">
                {/* Property image placeholder */}
                <div className="w-full h-40 rounded-xl mb-6 bg-gradient-to-br from-blue-600/10 to-cyan-600/10 border border-blue-500/20 flex items-center justify-center">
                  <div
                    className="w-32 h-32 rounded-lg"
                    style={{ background: property.image }}
                  />
                </div>

                {/* Title and location */}
                <h3 className="text-xl font-bold text-white mb-2">{property.title}</h3>
                <div className="flex items-center gap-2 text-gray-400 text-sm mb-4">
                  <MapPin className="w-4 h-4" />
                  {property.location}
                </div>

                {/* Price */}
                <div className="text-3xl font-bold bg-gradient-to-r from-blue-300 to-cyan-300 bg-clip-text text-transparent mb-4">
                  {property.price}
                </div>

                {/* Specs */}
                <div className="flex gap-4 mb-6 text-sm text-gray-300">
                  <div className="flex items-center gap-2">
                    <Bed className="w-4 h-4 text-blue-400" />
                    {property.beds} Kamar
                  </div>
                  <div className="flex items-center gap-2">
                    <Car className="w-4 h-4 text-blue-400" />
                    {property.cars} Mobil
                  </div>
                </div>

                {/* Features */}
                <div className="space-y-2 mb-6 flex-1">
                  {property.features.map((feature, i) => (
                    <div key={i} className="flex items-start gap-2 text-sm text-gray-300">
                      <Check className="w-4 h-4 text-blue-400 mt-0.5 flex-shrink-0" />
                      {feature}
                    </div>
                  ))}
                </div>

                {/* CTA Button */}
                <Button
                  className={`w-full rounded-lg font-semibold transition-all ${
                    property.featured
                      ? 'bg-blue-600 hover:bg-blue-700 text-white glow-blue'
                      : 'bg-blue-600/50 hover:bg-blue-600 text-white'
                  }`}
                >
                  View Details
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
