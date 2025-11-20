import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Mail, CheckCircle } from 'lucide-react';

interface NewsletterPopupProps {
  isOpen: boolean;
  onClose: () => void;
  email: string;
  setEmail: (email: string) => void;
  emailError: string;
  isSubscribing: boolean;
  subscriptionSuccess: boolean;
  onSubscribe: () => void;
  onMaybeLater: () => void;
}

const NewsletterPopup: React.FC<NewsletterPopupProps> = ({
  isOpen,
  onClose,
  email,
  setEmail,
  emailError,
  isSubscribing,
  subscriptionSuccess,
  onSubscribe,
  onMaybeLater
}) => {
  if (!isOpen) return null;

  // Prevent body scroll when modal is open and ensure modal is visible
  useEffect(() => {
    if (isOpen) {
      // Scroll to top immediately
      window.scrollTo(0, 0);
      // Prevent body scroll
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[9999] flex items-center justify-center p-4"
        style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, zIndex: 9999 }}
        onClick={onClose}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-8 relative"
          onClick={(e) => e.stopPropagation()}
          style={{ maxHeight: '90vh' }}
        >
          <button
            onClick={onClose}
            aria-label="Close newsletter popup"
            className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
          >
            <X className="w-6 h-6" />
          </button>

          <div className="text-center">
            <div className="w-16 h-16 bg-vd-blue rounded-full flex items-center justify-center mx-auto mb-4">
              <Mail className="w-8 h-8 text-white" />
            </div>

            <h2 className="text-2xl font-bold text-vd-blue mb-2">Never Miss an Update</h2>
            <p className="text-gray-600 mb-6">
              Subscribe to get the latest recycling technology news and industry insights.
            </p>

            {subscriptionSuccess ? (
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-green-600 mb-2">Successfully Subscribed!</h3>
                <p className="text-gray-600 mb-4">
                  Thank you for subscribing. You'll receive our latest updates.
                </p>
                <button
                  onClick={onClose}
                  className="bg-vd-blue text-white px-6 py-2 rounded-lg font-semibold hover:bg-vd-blue-dark transition-colors"
                >
                  Close
                </button>
              </div>
            ) : (
              <div className="space-y-4">
                <div>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-vd-blue focus:border-transparent"
                    autoComplete="email"
                  />
                  {emailError && (
                    <p className="text-red-500 text-sm mt-1">{emailError}</p>
                  )}
                </div>

                <button
                  onClick={onSubscribe}
                  disabled={isSubscribing}
                  className="w-full bg-vd-blue text-white py-3 rounded-lg font-semibold hover:bg-vd-blue-dark transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubscribing ? 'Subscribing...' : 'Subscribe Now'}
                </button>

                <button
                  onClick={onMaybeLater}
                  className="w-full text-gray-500 hover:text-gray-700 transition-colors"
                >
                  Maybe later
                </button>
              </div>
            )}
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default NewsletterPopup;


