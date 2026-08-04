import React, { useEffect, useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';

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
  const [progress, setProgress] = useState(18);
  const prefersReducedMotion = useReducedMotion();

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

  useEffect(() => {
    if (prefersReducedMotion) {
      setProgress(0);
      return;
    }

    const interval = window.setInterval(() => {
      setProgress((value) => {
        if (value >= 96) {
          return 34;
        }
        return value + Math.floor(Math.random() * 6) + 4;
      });
    }, 260);

    return () => window.clearInterval(interval);
  }, [prefersReducedMotion]);

  return (
    <div className={`flex flex-col items-center justify-center ${containerSizeClasses[size]} p-4`}>
      <div className="relative">
        {prefersReducedMotion ? (
          <div className={`${sizeClasses[size]} rounded-full border-4 border-vd-blue/70 flex items-center justify-center`}>
            <span className="w-3 h-3 rounded-full bg-vd-blue" />
          </div>
        ) : (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, ease: 'easeOut' }}
            className={`${sizeClasses[size]} relative flex items-center justify-center`}
          >
            <motion.span
              className="absolute inset-0 rounded-full border-[3px] border-vd-blue/30"
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 4.5, ease: 'linear' }}
            />
            <motion.span
              className="absolute inset-1 rounded-full border-[3px] border-vd-blue/50 border-t-transparent"
              animate={{ rotate: -360 }}
              transition={{ repeat: Infinity, duration: 2.8, ease: 'linear' }}
            />
            <motion.span
              className="absolute inset-3 rounded-full border-[3px] border-vd-orange/80 border-t-transparent"
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 1.4, ease: 'linear' }}
            />
            <motion.div
              className="relative flex flex-col items-center justify-center"
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}
            >
              <span className="w-3 h-3 rounded-full bg-vd-orange shadow shadow-vd-orange/40" />
              <span className="mt-2 text-xs font-semibold text-vd-blue">{Math.min(progress, 99)}%</span>
            </motion.div>
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
              {[0, 0.2, 0.4].map((delay) => (
                <motion.div
                  key={`spinner-dot-${delay}`}
                  animate={{ opacity: [0.3, 1, 0.3], y: [-2, 0, -2] }}
                  transition={{ duration: 1.4, repeat: Infinity, delay }}
                  className="w-2 h-2 bg-vd-blue rounded-full"
                />
              ))}
            </div>
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default VideoLoadingSpinner;
