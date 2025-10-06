import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface InlineVideoSpinnerProps {
  size?: 'xs' | 'sm' | 'md';
  className?: string;
}

const InlineVideoSpinner: React.FC<InlineVideoSpinnerProps> = ({
  size = 'sm',
  className = ''
}) => {
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [videoError, setVideoError] = useState(false);

  const sizeClasses = {
    xs: 'w-4 h-4',
    sm: 'w-6 h-6',
    md: 'w-8 h-8'
  };

  const handleVideoLoad = () => {
    setVideoLoaded(true);
  };

  const handleVideoError = () => {
    setVideoError(true);
  };

  return (
    <div className={`inline-flex items-center justify-center ${className}`}>
      {!videoError ? (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: videoLoaded ? 1 : 0.3, scale: 1 }}
          transition={{ duration: 0.2 }}
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
          {!videoLoaded && (
            <div className="absolute inset-0 flex items-center justify-center bg-gray-100 rounded-full">
              <div className="w-2 h-2 border border-vd-blue border-t-transparent rounded-full animate-spin"></div>
            </div>
          )}
        </motion.div>
      ) : (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.2 }}
          className={`${sizeClasses[size]} border border-vd-blue border-t-transparent rounded-full animate-spin`}
        />
      )}
    </div>
  );
};

export default InlineVideoSpinner;
