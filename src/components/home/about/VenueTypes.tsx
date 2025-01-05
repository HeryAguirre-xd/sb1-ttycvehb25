import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { eventTypes } from '../../../config/eventTypes';

export default function VenueTypes() {
  return (
    <div className="space-y-8">
      <div className="grid grid-cols-2 gap-4">
        {eventTypes.map((venue, index) => (
          <motion.div
            key={venue}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ scale: 1.05, rotateY: 10 }}
            className="group relative"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-[#6B2FD9] to-[#06B6D4] rounded-xl opacity-75 blur group-hover:opacity-100 transition-opacity" />
            <div className="relative bg-[#1A0B2E]/80 backdrop-blur-sm p-6 rounded-xl border border-[#4F46E5]/20">
              <div className="absolute inset-0 bg-gradient-to-r from-[#6B2FD9]/20 to-[#06B6D4]/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity" />
              <span className="relative text-white font-semibold z-10">{venue}</span>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="flex justify-center"
      >
        <Link
          to="/gallery"
          className="relative group inline-flex items-center px-8 py-3 overflow-hidden rounded-xl"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-[#6B2FD9] to-[#06B6D4] opacity-70 group-hover:opacity-100 transition-opacity duration-300" />
          <span className="relative text-white font-semibold text-lg flex items-center gap-2">
            Mira Nuestra Galería!
            <ArrowRight className="w-5 h-5 transform transition-transform group-hover:translate-x-1" />
          </span>
        </Link>
      </motion.div>
    </div>
  );
}