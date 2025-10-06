import React from 'react';
import { motion } from 'framer-motion';
import VideoLoadingSpinner from './VideoLoadingSpinner';

interface LoadingFallbackProps {
  message?: string;
  size?: 'sm' | 'md' | 'lg';
  useVideoSpinner?: boolean;
}

const LoadingFallback: React.FC<LoadingFallbackProps> = ({ 
  message = 'Loading...', 
  size = 'md',
  useVideoSpinner = true
}) => {
  const sizeClasses = {
    sm: 'h-6 w-6',
    md: 'h-12 w-12',
    lg: 'h-16 w-16'
  };

  const videoSizeMap = {
    sm: 'small' as const,
    md: 'medium' as const,
    lg: 'large' as const
  };

  if (useVideoSpinner) {
    console.log('LoadingFallback using VideoLoadingSpinner');
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <VideoLoadingSpinner 
          message={message} 
          size={videoSizeMap[size]}
          showMessage={true}
        />
      </div>
    );
  }

  console.log('LoadingFallback using CSS spinner');

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3 }}
        className="flex flex-col items-center space-y-4"
      >
        <div className="relative">
          <div className={`animate-spin rounded-full ${sizeClasses[size]} border-t-2 border-b-2 border-vd-orange`}></div>
          <div className={`absolute inset-0 animate-ping rounded-full ${sizeClasses[size]} border border-vd-orange opacity-20`}></div>
        </div>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-gray-600 font-medium"
        >
          {message}
        </motion.p>
      </motion.div>
    </div>
  );
};

export default LoadingFallback;




