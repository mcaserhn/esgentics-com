'use client';

import React from 'react';
import Header from './Header';
import Footer from './Footer';
import { useLanguage } from './LanguageProvider';
import { usePathname } from 'next/navigation';

interface AppContentProps {
  children: React.ReactNode;
}

export const AppContent: React.FC<AppContentProps> = ({ children }) => {
  const { lang, direction } = useLanguage();
  const pathname = usePathname();
  
  // 根据路径生成页面标题
  const getPageTitle = () => {
    if (!pathname) return 'Home';
    const path = pathname.replace(/^\//, '').replace(/^[a-z]{2}\/?/, '');
    switch (path) {
      case '':
        return 'Home';
      case 'technology':
        return 'Technology';
      case 'solutions':
        return 'Solutions';
      case 'case-studies':
        return 'Case Studies';
      case 'about':
        return 'About Us';
      case 'contact':
        return 'Contact';
      default:
        return 'Home';
    }
  };
  
  const pageTitle = getPageTitle();
  
  return (
    <html lang={lang} dir={direction}>
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>{pageTitle} - adenexus</title>
        <meta name="description" content="Turnkey smart building solutions powered by AI agents & NVIDIA hardware. ESG-compliant, global delivery. Headquartered in Singapore." />
        <meta name="keywords" content="AI construction, intelligent building, ESG compliance, turnkey engineering, NVIDIA partner, Singapore tech" />
        <meta name="robots" content="index, follow" />
        <meta httpEquiv="Content-Language" content={lang} />
        <meta name="geo.region" content="SG" />
      </head>
      <body className={direction === 'rtl' ? 'rtl' : ''}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
};
