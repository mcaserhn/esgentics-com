'use client';

import '../styles/globals.css';
import Header from './components/Header';
import Footer from './components/Footer';
import { LanguageProvider } from './components/LanguageProvider';
import { useLanguage } from './components/LanguageProvider';
import { usePathname } from 'next/navigation';

function AppContent({ children }: { children: React.ReactNode }) {
  const { lang, direction } = useLanguage();
  const pathname = usePathname();
  
  // 根据路径生成页面标题
  const getPageTitle = () => {
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
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <LanguageProvider>
      <AppContent>{children}</AppContent>
    </LanguageProvider>
  );
}