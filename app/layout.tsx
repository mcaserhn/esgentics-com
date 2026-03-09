import '../styles/globals.css';
import { LanguageProvider } from './components/LanguageProvider';
import { AppContent } from './components/AppContent';

export function generateMetadata() {
  return {
    title: 'adenexus',
    description: 'Turnkey smart building solutions powered by AI agents & NVIDIA hardware. ESG-compliant, global delivery. Headquartered in Singapore.',
    keywords: 'AI construction, intelligent building, ESG compliance, turnkey engineering, NVIDIA partner, Singapore tech',
  };
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <LanguageProvider>
      <AppContent>{children}</AppContent>
    </LanguageProvider>
  );
}