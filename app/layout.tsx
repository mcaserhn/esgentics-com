'use client';

import '../styles/globals.css';
import Header from './components/Header';
import Footer from './components/Footer';
import { LanguageProvider } from './components/LanguageProvider';
import { useLanguage } from './components/LanguageProvider';

function AppContent({ children }: { children: React.ReactNode }) {
  const { lang, direction } = useLanguage();
  
  return (
    <html lang={lang} dir={direction}>
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>ESGentics | AI-Powered Intelligent Construction from Singapore</title>
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