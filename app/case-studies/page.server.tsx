import { generatePageMetadata } from '../lib/page-metadata-helper';

export async function generateMetadata({ params }: { params?: { locale: string } }) {
  return generatePageMetadata("case-studies", params?.locale || 'en');
}
