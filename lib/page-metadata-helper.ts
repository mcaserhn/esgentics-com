// lib/page-metadata-helper.ts
import { PAGE_TITLE_MAP, SITE_NAME } from './metadata.config';
import { loadLanguage } from './i18n';

export async function generatePageMetadata(pageId: string, locale: string) {
  const dict = await loadLanguage(locale);
  
  // 从字典中获取翻译后的标题，如果没有则 fallback 到英文或 ID
  const rawTitleKey = PAGE_TITLE_MAP[pageId];
  const pageTitle = rawTitleKey 
    ? (dict as any)[rawTitleKey] || pageId 
    : SITE_NAME;

  return {
    title: pageTitle, 
    description: dict?.common?.siteDescription || 'AI-Driven Construction. Sustainable Future.',
    openGraph: {
      title: pageTitle,
      description: dict?.common?.siteDescription || 'AI-Driven Construction. Sustainable Future.',
      type: 'website',
    },
  };
}
