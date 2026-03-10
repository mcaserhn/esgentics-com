// lib/metadata.config.ts

export const SITE_NAME = "adenexus";

// 定义路由与标题 Key 的映射
export const PAGE_TITLE_MAP: Record<string, string> = {
  "": "nav.home", // Home 页通常是空路径
  "technology": "nav.technology",
  "solutions": "nav.solutions",
  "case-studies": "nav.caseStudies",
  "about": "nav.aboutUs",
  "contact": "nav.contact",
  "privacy-policy": "legal.privacyPolicy",
  "terms-of-service": "legal.termsOfService",
  "data-sovereignty-statement": "legal.dataSovereignty",
  "compliance": "legal.compliance",
};
