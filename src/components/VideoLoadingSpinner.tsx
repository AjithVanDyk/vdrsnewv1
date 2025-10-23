import React from 'react';
import { motion } from 'framer-motion';

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

  return (
    <div className={`flex flex-col items-center justify-center ${containerSizeClasses[size]} p-4`}>
      <div className="relative">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3 }}
          className={`${sizeClasses[size]} rounded-full flex items-center justify-center bg-gradient-to-br from-vd-blue/20 to-vd-blue/10`}
        >
          <motion.div
            className="absolute inset-0 rounded-full border-[6px] border-vd-blue/30 border-t-vd-blue"
            animate={{ rotate: 360 }}
            transition={{ duration: 1.2, repeat: Infinity, ease: 'linear' }}
          />
          <motion.div
            className="relative flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.15, duration: 0.4 }}
          >
            <div className="w-6 h-6 rounded-full bg-vd-blue/80 blur-[1px]" />
          </motion.div>
        </motion.div>
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
