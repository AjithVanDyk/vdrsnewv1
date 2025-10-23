import React from 'react';
import { motion } from 'framer-motion';

interface InlineVideoSpinnerProps {
  size?: 'xs' | 'sm' | 'md';
  className?: string;
}

const InlineVideoSpinner: React.FC<InlineVideoSpinnerProps> = ({
  size = 'sm',
  className = ''
}) => {
  const sizeClasses = {
    xs: 'w-4 h-4',
    sm: 'w-6 h-6',
    md: 'w-8 h-8'
  };

  return (
    <div className={`inline-flex items-center justify-center ${className}`}>
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.2 }}
        className={`${sizeClasses[size]} relative flex items-center justify-center`}
      >
        <motion.span
          className="absolute inset-0 rounded-full border-2 border-vd-blue/30 border-t-vd-blue"
          animate={{ rotate: 360 }}
          transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
        />
        <span className="w-2 h-2 rounded-full bg-vd-blue" />
      </motion.div>
    </div>
  );
};

export default InlineVideoSpinner;
