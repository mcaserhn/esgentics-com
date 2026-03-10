// config/site.ts
export const siteConfig = {
  name: "adenexus",
  defaultTitle: "adenexus - Turnkey Smart Building Solutions",
  
  // 定义各页面的标题前缀
  titles: {
    home: "Home",
    technology: "Technology",
    solutions: "Solutions",
    caseStudies: "Case Studies",
    aboutUs: "About Us",
    contact: "Contact"
  } as const,
};

// 辅助函数：生成完整标题 (页面名 - 品牌名)
export function getFullTitle(pageKey: keyof typeof siteConfig.titles) {
  return `${siteConfig.titles[pageKey]} - ${siteConfig.name}`;
}
