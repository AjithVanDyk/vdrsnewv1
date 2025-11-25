import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

export type Language = 'en' | 'fr' | 'es';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

interface LanguageProviderProps {
  children: ReactNode;
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>(() => {
    // Get language from localStorage first
    const savedLanguage = localStorage.getItem('vdrs-language') as Language;
    if (savedLanguage && ['en', 'fr', 'es'].includes(savedLanguage)) {
      return savedLanguage;
    }
    
    // Detect language from browser location/navigator
    const detectLanguage = (): Language => {
      // Try to get language from navigator
      const browserLang = navigator.language || (navigator as any).userLanguage;
      const langCode = browserLang.split('-')[0].toLowerCase();
      
      // Map common language codes to our supported languages
      if (langCode === 'fr') return 'fr';
      if (langCode === 'es') return 'es';
      
      // Check if user is in a French-speaking region (Canada, France, etc.)
      try {
        const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
        if (timezone.includes('America/Montreal') || timezone.includes('America/Toronto') || 
            timezone.includes('Europe/Paris') || timezone.includes('America/Quebec')) {
          // Check if browser language is French
          if (browserLang.toLowerCase().includes('fr')) return 'fr';
        }
        
        // Check if user is in a Spanish-speaking region
        if (timezone.includes('America/Mexico') || timezone.includes('America/Bogota') || 
            timezone.includes('America/Buenos_Aires') || timezone.includes('America/Santiago')) {
          if (browserLang.toLowerCase().includes('es')) return 'es';
        }
      } catch (e) {
        // Fallback if timezone detection fails
      }
      
      // Default to English
      return 'en';
    };
    
    return detectLanguage();
  });

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem('vdrs-language', lang);
  };

  useEffect(() => {
    // Update document language attribute for accessibility
    document.documentElement.lang = language;
  }, [language]);

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};


