import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Settings, Cookie, Shield, ChevronDown, ChevronUp, Link as LinkIcon } from 'lucide-react';
import { Link } from 'react-router-dom';
import { isConsentCached, saveConsent, getCachedConsent } from '../utils/cookieConsent';

export interface ConsentPreferences {
  strictlyNecessary: boolean;
  performance: boolean;
  functional: boolean;
  advertising: boolean;
}

interface CookieConsentBannerProps {
  onAccept?: (preferences: ConsentPreferences) => void;
}

const CookieConsentBanner: React.FC<CookieConsentBannerProps> = ({ onAccept }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [showCustomize, setShowCustomize] = useState(false);
  const [preferences, setPreferences] = useState<ConsentPreferences>({
    strictlyNecessary: true, // Always enabled
    performance: false,
    functional: false,
    advertising: false
  });

  useEffect(() => {
    // Check if consent is already cached
    const checkConsent = async () => {
      const cached = await isConsentCached();
      if (!cached) {
        // Small delay for better UX
        setTimeout(() => {
          setIsVisible(true);
          // Prevent body scroll when banner is visible
          document.body.style.overflow = 'hidden';
        }, 500);
      }
    };

    checkConsent();
  }, []);

  const handleAcceptAll = async () => {
    const allAccepted: ConsentPreferences = {
      strictlyNecessary: true,
      performance: true,
      functional: true,
      advertising: true
    };
    
    await saveConsent(allAccepted);
    setIsVisible(false);
    document.body.style.overflow = '';
    onAccept?.(allAccepted);
  };

  const handleRejectAll = async () => {
    const onlyNecessary: ConsentPreferences = {
      strictlyNecessary: true,
      performance: false,
      functional: false,
      advertising: false
    };
    
    await saveConsent(onlyNecessary);
    setIsVisible(false);
    document.body.style.overflow = '';
    onAccept?.(onlyNecessary);
  };

  const handleSavePreferences = async () => {
    await saveConsent(preferences);
    setIsVisible(false);
    document.body.style.overflow = '';
    onAccept?.(preferences);
  };

  const handleToggle = (key: keyof ConsentPreferences) => {
    if (key === 'strictlyNecessary') return; // Cannot disable
    setPreferences(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  if (!isVisible) return null;

  return (
    <AnimatePresence>
      {isVisible && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[9998]"
            onClick={() => {}} // Prevent closing on backdrop click
          />
          
          {/* Banner */}
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 100, opacity: 0 }}
            transition={{ 
              type: 'spring',
              damping: 25,
              stiffness: 300,
              duration: 0.5
            }}
            className="fixed bottom-0 left-0 right-0 z-[9999] p-4 sm:p-6"
            role="dialog"
            aria-modal="true"
            aria-labelledby="cookie-consent-title"
          >
            <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden">
              {/* Header */}
              <div className="bg-gradient-to-r from-vd-blue to-vd-blue-dark text-white p-6">
                <div className="flex items-start justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="bg-white/20 p-2 rounded-lg">
                      <Cookie className="w-6 h-6" />
                    </div>
                    <div>
                      <h2 id="cookie-consent-title" className="text-xl font-bold mb-1">
                        Cookie Preferences
                      </h2>
                      <p className="text-sm text-blue-100">
                        We use cookies to enhance your browsing experience and analyze site traffic
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 max-h-[60vh] overflow-y-auto">
                {!showCustomize ? (
                  // Simple view
                  <div className="space-y-4">
                    <p className="text-gray-700 leading-relaxed">
                      We use cookies and similar technologies to help personalize content, tailor and measure ads, and provide a better experience. By clicking "Accept All", you consent to our use of cookies. You can customize your preferences or reject non-essential cookies.
                    </p>
                    
                    <div className="flex items-center space-x-2 text-sm text-gray-600">
                      <LinkIcon className="w-4 h-4" />
                      <Link to="/cookie-policy" className="text-vd-blue hover:text-vd-blue-dark underline">
                        Cookie Policy
                      </Link>
                      <span className="mx-2">•</span>
                      <Link to="/privacy-policy" className="text-vd-blue hover:text-vd-blue-dark underline">
                        Privacy Policy
                      </Link>
                    </div>
                  </div>
                ) : (
                  // Customize view
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-4">
                        Customize Your Cookie Preferences
                      </h3>
                      
                      {/* Cookie Categories */}
                      <div className="space-y-4">
                        {/* Strictly Necessary */}
                        <div className="border border-gray-200 rounded-lg p-4">
                          <div className="flex items-center justify-between mb-2">
                            <div className="flex items-center space-x-3">
                              <Shield className="w-5 h-5 text-vd-blue" />
                              <div>
                                <h4 className="font-semibold text-gray-900">Strictly Necessary</h4>
                                <p className="text-sm text-gray-600">Required for the site to function</p>
                              </div>
                            </div>
                            <div className="bg-vd-blue text-white px-3 py-1 rounded-full text-xs font-semibold">
                              Always On
                            </div>
                          </div>
                          <p className="text-sm text-gray-600 mt-2">
                            These cookies are essential for the website to function properly. They enable core functionality such as security, network management, and accessibility.
                          </p>
                        </div>

                        {/* Performance & Analytics */}
                        <div className="border border-gray-200 rounded-lg p-4">
                          <div className="flex items-center justify-between mb-2">
                            <div className="flex items-center space-x-3">
                              <div className="w-5 h-5" />
                              <div>
                                <h4 className="font-semibold text-gray-900">Performance & Analytics</h4>
                                <p className="text-sm text-gray-600">Help us improve our website</p>
                              </div>
                            </div>
                            <button
                              onClick={() => handleToggle('performance')}
                              className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                                preferences.performance ? 'bg-vd-orange' : 'bg-gray-300'
                              }`}
                              role="switch"
                              aria-checked={preferences.performance}
                            >
                              <span
                                className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                                  preferences.performance ? 'translate-x-6' : 'translate-x-1'
                                }`}
                              />
                            </button>
                          </div>
                          <p className="text-sm text-gray-600 mt-2">
                            These cookies collect information about how visitors use our website, such as which pages are visited most often and if visitors get error messages.
                          </p>
                        </div>

                        {/* Functional */}
                        <div className="border border-gray-200 rounded-lg p-4">
                          <div className="flex items-center justify-between mb-2">
                            <div className="flex items-center space-x-3">
                              <div className="w-5 h-5" />
                              <div>
                                <h4 className="font-semibold text-gray-900">Functional</h4>
                                <p className="text-sm text-gray-600">Remember your preferences</p>
                              </div>
                            </div>
                            <button
                              onClick={() => handleToggle('functional')}
                              className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                                preferences.functional ? 'bg-vd-orange' : 'bg-gray-300'
                              }`}
                              role="switch"
                              aria-checked={preferences.functional}
                            >
                              <span
                                className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                                  preferences.functional ? 'translate-x-6' : 'translate-x-1'
                                }`}
                              />
                            </button>
                          </div>
                          <p className="text-sm text-gray-600 mt-2">
                            These cookies allow the website to remember choices you make and provide enhanced, personalized features.
                          </p>
                        </div>

                        {/* Advertising & Social */}
                        <div className="border border-gray-200 rounded-lg p-4">
                          <div className="flex items-center justify-between mb-2">
                            <div className="flex items-center space-x-3">
                              <div className="w-5 h-5" />
                              <div>
                                <h4 className="font-semibold text-gray-900">Advertising & Social</h4>
                                <p className="text-sm text-gray-600">Used for marketing and social features</p>
                              </div>
                            </div>
                            <button
                              onClick={() => handleToggle('advertising')}
                              className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                                preferences.advertising ? 'bg-vd-orange' : 'bg-gray-300'
                              }`}
                              role="switch"
                              aria-checked={preferences.advertising}
                            >
                              <span
                                className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                                  preferences.advertising ? 'translate-x-6' : 'translate-x-1'
                                }`}
                              />
                            </button>
                          </div>
                          <p className="text-sm text-gray-600 mt-2">
                            These cookies are used to deliver advertisements and track campaign performance. They may also be used to build a profile of your interests.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Footer Actions */}
              <div className="bg-gray-50 px-6 py-4 border-t border-gray-200">
                <div className="flex flex-col sm:flex-row items-center justify-between space-y-3 sm:space-y-0 sm:space-x-3">
                  <button
                    onClick={() => setShowCustomize(!showCustomize)}
                    className="flex items-center space-x-2 text-gray-600 hover:text-vd-blue transition-colors text-sm font-medium"
                  >
                    <Settings className="w-4 h-4" />
                    <span>{showCustomize ? 'Hide' : 'Customize'} Preferences</span>
                    {showCustomize ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                  </button>
                  
                  <div className="flex items-center space-x-3">
                    {showCustomize ? (
                      <button
                        onClick={handleSavePreferences}
                        className="px-6 py-2.5 bg-vd-blue hover:bg-vd-blue-dark text-white font-semibold rounded-lg transition-colors shadow-md hover:shadow-lg"
                      >
                        Save Preferences
                      </button>
                    ) : (
                      <>
                        <button
                          onClick={handleRejectAll}
                          className="px-6 py-2.5 bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold rounded-lg transition-colors"
                        >
                          Reject All
                        </button>
                        <button
                          onClick={handleAcceptAll}
                          className="px-6 py-2.5 bg-vd-orange hover:bg-vd-orange-alt text-white font-semibold rounded-lg transition-colors shadow-md hover:shadow-lg"
                        >
                          Accept All
                        </button>
                      </>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default CookieConsentBanner;

