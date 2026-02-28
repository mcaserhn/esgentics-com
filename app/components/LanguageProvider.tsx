'use client';

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { usePathname } from 'next/navigation';
import { supportedLanguages, defaultLanguage, loadLanguage, detectLanguage, getLanguageDirection } from '../lib/i18n';

interface LanguageContextType {
  lang: string;
  setLang: (lang: string) => void;
  translations: any;
  direction: 'ltr' | 'rtl';
  isLoading: boolean;
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
  const pathname = usePathname();
  const [lang, setLang] = useState<string>(defaultLanguage);
  const [translations, setTranslations] = useState<any>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  // 加载语言文件
  const loadTranslations = async (language: string) => {
    setIsLoading(true);
    try {
      const data = await loadLanguage(language);
      setTranslations(data);
    } catch (error) {
      console.error('Failed to load translations:', error);
    } finally {
      setIsLoading(false);
    }
  };

  // 从URL中检测语言
  const detectLanguageFromUrl = () => {
    let path;
    
    if (typeof window !== 'undefined') {
      path = window.location.pathname;
    } else if (pathname) {
      path = pathname;
    } else {
      return defaultLanguage;
    }
    
    const pathSegments = path.split('/').filter(Boolean);
    const langCode = pathSegments[0];
    
    if (supportedLanguages.includes(langCode)) {
      return langCode;
    }
    
    return defaultLanguage;
  };

  // 初始化语言
  useEffect(() => {
    const initialLang = detectLanguageFromUrl();
    setLang(initialLang);
    loadTranslations(initialLang);
  }, [pathname]);

  // 语言变化时加载新的翻译
  useEffect(() => {
    loadTranslations(lang);
  }, [lang]);

  const value = {
    lang,
    setLang,
    translations,
    direction: getLanguageDirection(lang),
    isLoading,
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};
