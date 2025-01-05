import { useState, useRef, useCallback } from 'react';

interface UseVideoProps {
  url: string;
  onError?: (error: Error) => void;
}

export function useVideo({ url, onError }: UseVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [hasError, setHasError] = useState(false);

  const loadVideo = useCallback(async () => {
    const video = videoRef.current;
    if (!video) return;

    try {
      setIsLoading(true);
      video.src = url;
      await video.load();
      await new Promise((resolve, reject) => {
        video.onloadeddata = resolve;
        video.onerror = reject;
      });
    } catch (error) {
      setHasError(true);
      onError?.(error as Error);
    } finally {
      setIsLoading(false);
    }
  }, [url, onError]);

  const togglePlay = useCallback(async () => {
    const video = videoRef.current;
    if (!video || hasError) return;

    try {
      if (!video.src) {
        await loadVideo();
      }

      if (video.paused) {
        await video.play();
        setIsPlaying(true);
      } else {
        await video.pause();
        setIsPlaying(false);
      }
    } catch (error) {
      setHasError(true);
      onError?.(error as Error);
    }
  }, [hasError, loadVideo, onError]);

  return {
    videoRef,
    isLoading,
    isPlaying,
    hasError,
    togglePlay
  };
}