import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-xl mx-auto">
          <h3 className="text-xl font-bold mb-6 text-center">Contáctanos</h3>
          <div className="space-y-4">
            <a href="tel:+15202237972" className="flex items-center justify-center hover:text-[#39FF14] transition">
              <Phone className="h-5 w-5 mr-2" />
              +1 (520) 223-7972
            </a>
            <a href="mailto:info@estradas.com" className="flex items-center justify-center hover:text-[#39FF14] transition">
              <Mail className="h-5 w-5 mr-2" />
              eryestrada1@gmail.com
            </a>
            <div className="flex items-center justify-center">
              <MapPin className="h-5 w-5 mr-2" />
              Rio Rico, Arizona
            </div>
          </div>
        </div>

        <div className="text-center text-gray-400 border-t border-gray-800 pt-8 mt-8">
          © {new Date().getFullYear()} Estradas International. All rights reserved.
        </div>
      </div>
    </footer>
  );
}