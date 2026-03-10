import { generatePageMetadata } from '../lib/page-metadata-helper';

export async function generateMetadata({ params }: { params?: { locale: string } }) {
  return generatePageMetadata("compliance", params?.locale || 'en');
}
