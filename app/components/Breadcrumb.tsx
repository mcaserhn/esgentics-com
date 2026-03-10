'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useLanguage } from './LanguageProvider';

export default function Breadcrumb() {
  const pathname = usePathname();
  const { lang, translations } = useLanguage();
  
  // 解析路径并生成面包屑项
  const generateBreadcrumbItems = () => {
    const items = [];
    const pathParts = pathname.split('/').filter(part => part && part !== lang);
    
    // 添加首页项
    items.push({
      label: translations?.navigation?.home || 'Home',
      href: lang === 'en' ? '/' : `/${lang}`
    });
    
    // 添加路径中的其他项
    let currentPath = lang === 'en' ? '' : `/${lang}`;
    
    pathParts.forEach((part, index) => {
      currentPath += `/${part}`;
      
      // 转换路径部分为可读标签
      let label = part.charAt(0).toUpperCase() + part.slice(1).replace(/-/g, ' ');
      
      // 特殊处理一些路径
      switch(part) {
        case 'case-studies':
          label = translations?.navigation?.caseStudies || 'Case Studies';
          break;
        case 'about-us':
          label = translations?.navigation?.about || 'About Us';
          break;
        case 'contact':
          label = translations?.navigation?.contact || 'Contact';
          break;
        case 'technology':
          label = translations?.navigation?.technology || 'Technology';
          break;
        case 'solutions':
          label = translations?.navigation?.solutions || 'Solutions';
          break;
      }
      
      items.push({
        label,
        href: currentPath,
        isCurrent: index === pathParts.length - 1
      });
    });
    
    return items;
  };
  
  const breadcrumbItems = generateBreadcrumbItems();
  
  // 只有当有多个面包屑项时才显示
  if (breadcrumbItems.length <= 1) {
    return null;
  }
  
  return (
    <nav className="bg-gray-50 border-b border-gray-200">
      <div className="container mx-auto px-4 py-3">
        <ol className="flex items-center space-x-2 text-sm">
          {breadcrumbItems.map((item, index) => (
            <li key={index}>
              {item.isCurrent ? (
                <span className="text-gray-600">{item.label}</span>
              ) : (
                <Link href={item.href} className="text-primary-red hover:underline">
                  {item.label}
                </Link>
              )}
              {index < breadcrumbItems.length - 1 && (
                <span className="mx-2 text-gray-400">/</span>
              )}
            </li>
          ))}
        </ol>
      </div>
    </nav>
  );
}