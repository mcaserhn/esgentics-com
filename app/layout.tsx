import '../styles/globals.css';
import Header from './components/Header';
import Footer from './components/Footer';
import { LanguageProvider } from './components/LanguageProvider';
import { usePathname } from 'next/navigation';

export function generateMetadata() {
  return {
    title: 'adenexus',
    description: 'Turnkey smart building solutions powered by AI agents & NVIDIA hardware. ESG-compliant, global delivery. Headquartered in Singapore.',
    keywords: 'AI construction, intelligent building, ESG compliance, turnkey engineering, NVIDIA partner, Singapore tech',
  };
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
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
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>{pageTitle} - adenexus</title>
        <meta name="robots" content="index, follow" />
        <meta httpEquiv="Content-Language" content="en" />
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