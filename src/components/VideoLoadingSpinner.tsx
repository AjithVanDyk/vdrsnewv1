import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface VideoLoadingSpinnerProps {
  message?: string;
  size?: 'small' | 'medium' | 'large';
  showMessage?: boolean;
}

const VideoLoadingSpinner: React.FC<VideoLoadingSpinnerProps> = ({
  message = 'Loading...',
  size = 'medium',
  showMessage = true
}) => {
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [videoError, setVideoError] = useState(false);

  const sizeClasses = {
    small: 'w-16 h-16',
    medium: 'w-24 h-24',
    large: 'w-32 h-32'
  };

  const containerSizeClasses = {
    small: 'min-h-[100px]',
    medium: 'min-h-[150px]',
    large: 'min-h-[200px]'
  };

  const handleVideoLoad = () => {
    setVideoLoaded(true);
  };

  const handleVideoError = (e: React.SyntheticEvent<HTMLVideoElement, Event>) => {
    setVideoError(true);
  };

  return (
    <div className={`flex flex-col items-center justify-center ${containerSizeClasses[size]} p-4`}>
      <div className="relative">
        {/* Video Spinner */}
        <AnimatePresence>
          {!videoError && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: videoLoaded ? 1 : 0.3, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.3 }}
              className={`${sizeClasses[size]} rounded-full overflow-hidden bg-gray-100 flex items-center justify-center`}
            >
              <video
                src="/Images/spinner-loading-video.mp4"
                autoPlay
                loop
                muted
                playsInline
                preload="auto"
                className="w-full h-full object-cover"
                onLoadedData={handleVideoLoad}
                onCanPlay={handleVideoLoad}
                onError={handleVideoError}
              />
            </motion.div>
          )}
        </AnimatePresence>

        {/* Fallback Spinner */}
        <AnimatePresence>
          {videoError && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.3 }}
              className={`${sizeClasses[size]} rounded-full border-4 border-vd-blue border-t-transparent animate-spin bg-gray-100 flex items-center justify-center`}
            >
              <div className="w-8 h-8 bg-vd-blue rounded-full animate-pulse"></div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Loading Overlay */}
        {!videoLoaded && !videoError && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="absolute inset-0 flex items-center justify-center bg-gray-100 rounded-full"
          >
            <div className="w-8 h-8 border-2 border-vd-blue border-t-transparent rounded-full animate-spin"></div>
          </motion.div>
        )}
      </div>

      {/* Loading Message */}
      {showMessage && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mt-4 text-center"
        >
          <p className="text-gray-600 font-medium">{message}</p>
          <div className="flex justify-center mt-2">
            <div className="flex space-x-1">
              <motion.div
                animate={{ opacity: [0.4, 1, 0.4] }}
                transition={{ duration: 1.5, repeat: Infinity, delay: 0 }}
                className="w-2 h-2 bg-vd-blue rounded-full"
              />
              <motion.div
                animate={{ opacity: [0.4, 1, 0.4] }}
                transition={{ duration: 1.5, repeat: Infinity, delay: 0.2 }}
                className="w-2 h-2 bg-vd-blue rounded-full"
              />
              <motion.div
                animate={{ opacity: [0.4, 1, 0.4] }}
                transition={{ duration: 1.5, repeat: Infinity, delay: 0.4 }}
                className="w-2 h-2 bg-vd-blue rounded-full"
              />
            </div>
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default VideoLoadingSpinner;
