import React from 'react';
import { motion } from 'framer-motion';
import { Play, Pause } from 'lucide-react';
import { useVideo } from '../../hooks/useVideo';
import type { GalleryItem as GalleryItemType } from '../../config/types';

interface GalleryItemProps {
  item: GalleryItemType;
  index: number;
}

export default function GalleryItem({ item, index }: GalleryItemProps) {
  const {
    videoRef,
    isLoading,
    isPlaying,
    hasError,
    togglePlay
  } = useVideo({
    url: item.url,
    onError: (error) => console.error('Video Error:', error)
  });

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="relative group aspect-square rounded-xl overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-[#6B2FD9] to-[#06B6D4] rounded-xl opacity-0 group-hover:opacity-75 transition-opacity duration-300" />

      {item.type === 'video' ? (
        <>
          <video
            ref={videoRef}
            className="w-full h-full object-cover"
            playsInline
            loop
            src={item.url}
            preload="metadata"
          />
          <button
            onClick={togglePlay}
            disabled={isLoading}
            className="absolute inset-0 flex items-center justify-center bg-black/30 opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-black/40"
            aria-label={isPlaying ? 'Pause video' : 'Play video'}
          >
            <div className="transform transition-all duration-300 hover:scale-110">
              {isLoading ? (
                <div className="w-16 h-16 border-4 border-white border-t-transparent rounded-full animate-spin" />
              ) : hasError ? (
                <div className="text-white text-center">
                  <span className="block text-3xl">⚠️</span>
                  <span className="text-sm">Error loading video</span>
                </div>
              ) : isPlaying ? (
                <Pause className="w-16 h-16 text-white" />
              ) : (
                <Play className="w-16 h-16 text-white" />
              )}
            </div>
          </button>
        </>
      ) : (
        <img
          src={item.url}
          alt={item.description}
          className="w-full h-full object-cover"
          onError={(e) => {
            console.error('Image Error:', e);
            e.currentTarget.src = 'https://via.placeholder.com/400x400?text=Image+Not+Found';
          }}
        />
      )}

      <div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <p className="text-white text-lg font-semibold text-center">
          {item.description}
        </p>
      </div>
    </motion.div>
  );
}