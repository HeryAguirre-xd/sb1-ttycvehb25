import React from 'react';
import { ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <div className="relative min-h-screen">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?auto=format&fit=crop&q=80")',
        }}
      >
        <div className="absolute inset-0 bg-black/60" />
      </div>
      
      <div className="relative container mx-auto px-4 pt-32 pb-16 min-h-screen flex items-center">
        <div className="max-w-3xl text-white">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Experience the Magic of Live Music
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-200">
            25 years of creating unforgettable musical experiences across all genres.
            From intimate gatherings to grand celebrations, we bring your events to life.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              to="/contact"
              className="inline-flex items-center px-6 py-3 bg-amber-500 text-black font-semibold rounded-lg hover:bg-amber-400 transition"
            >
              Book Now
              <ChevronRight className="ml-2 h-5 w-5" />
            </Link>
            <Link
              to="/music"
              className="inline-flex items-center px-6 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-black transition"
            >
              Listen to Our Music
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}