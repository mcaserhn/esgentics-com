import { Metadata } from 'next';
import '../styles/globals.css';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import { LanguageProvider } from '../components/ui/LanguageProvider';
import { SITE_NAME } from '../lib/metadata.config';
import { loadLanguage } from '../lib/i18n';

// 全局 Metadata
export async function generateMetadata({ params }: { params?: { locale: string } }) {
  // 获取当前语言的品牌名
  const locale = params?.locale || 'en';
  const dict = await loadLanguage(locale);
  
  return {
    title: {
      default: dict?.common?.siteName || SITE_NAME,
      template: `%s | ${dict?.common?.siteName || SITE_NAME}`,
    },
    description: dict?.common?.siteDescription || 'Turnkey smart building solutions powered by AI agents & NVIDIA hardware. ESG-compliant, global delivery. Headquartered in Singapore.',
    keywords: 'AI construction, intelligent building, ESG compliance, turnkey engineering, NVIDIA partner, Singapore tech',
    openGraph: {
      title: dict?.common?.siteName || SITE_NAME,
      description: dict?.common?.siteDescription || 'Turnkey smart building solutions powered by AI agents & NVIDIA hardware. ESG-compliant, global delivery. Headquartered in Singapore.',
      type: 'website',
    },
  };
}

export default function RootLayout({ children, params }: { children: React.ReactNode, params?: { locale: string } }) {
  return (
    <html lang={params?.locale || "en"}>
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="robots" content="index, follow" />
        <meta httpEquiv="Content-Language" content={params?.locale || "en"} />
        <meta name="geo.region" content="SG" />
      </head>
      <body>
        <LanguageProvider>
          <Header />
          <main>{children}</main>
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}