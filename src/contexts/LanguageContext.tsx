import React, { createContext, useContext, useState, useEffect } from 'react';

export type Language = 'fr' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (language: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// Import translations
import { translations } from '@/translations';

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('fr');
  const [isInitialized, setIsInitialized] = useState(false);

  // Initialize language from localStorage on client side
  useEffect(() => {
    try {
      const savedLanguage = localStorage.getItem('language') as Language;
      if (savedLanguage && (savedLanguage === 'fr' || savedLanguage === 'en')) {
        setLanguage(savedLanguage);
      }
    } catch (error) {
      console.warn('Could not access localStorage:', error);
    }
    setIsInitialized(true);
  }, []);

  // Save language preference to localStorage
  useEffect(() => {
    if (!isInitialized) return;
    
    try {
      localStorage.setItem('language', language);
      // Update document lang attribute for SEO
      document.documentElement.lang = language;
    } catch (error) {
      console.warn('Could not save to localStorage:', error);
    }
  }, [language, isInitialized]);

  // Translation function
  const t = (key: string): string => {
    try {
      const keys = key.split('.');
      let translation: any = translations[language];
      
      for (const k of keys) {
        translation = translation?.[k];
      }
      
      return translation || key;
    } catch (error) {
      console.warn('Translation error for key:', key, error);
      return key;
    }
  };

  // Render loading state until initialized
  if (!isInitialized) {
    return null;
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};