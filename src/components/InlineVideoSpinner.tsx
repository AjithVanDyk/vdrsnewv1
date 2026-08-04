import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';

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
  const reducedMotion = useReducedMotion();

  return (
    <div className={`inline-flex items-center justify-center ${className}`}>
      {reducedMotion ? (
        <span className={`${sizeClasses[size]} rounded-full border-2 border-vd-blue/70`} />
      ) : (
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.2 }}
          className={`${sizeClasses[size]} relative flex items-center justify-center`}
        >
          <motion.span
            className="absolute inset-0 rounded-full border-2 border-vd-blue/20"
            animate={{ rotate: 360 }}
            transition={{ duration: 2.4, repeat: Infinity, ease: 'linear' }}
          />
          <motion.span
            className="absolute inset-1 rounded-full border-2 border-vd-blue/40 border-t-transparent"
            animate={{ rotate: -360 }}
            transition={{ duration: 1.6, repeat: Infinity, ease: 'linear' }}
          />
          <motion.span
            className="absolute inset-2 rounded-full border border-vd-orange/70 border-t-transparent"
            animate={{ rotate: 360 }}
            transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
          />
          <span className="w-1.5 h-1.5 rounded-full bg-vd-orange shadow-lg shadow-vd-orange/30" />
        </motion.div>
      )}
    </div>
  );
};

export default InlineVideoSpinner;
