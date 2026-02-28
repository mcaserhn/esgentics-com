"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import LanguageSwitcher from './LanguageSwitcher';
import { useLanguage } from './LanguageProvider';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { lang, setLang, translations } = useLanguage();
  const router = useRouter();

  // 生成带语言前缀的导航链接
  const navLinks = [
    { name: translations?.navigation?.home || 'Home', href: lang === 'en' ? '/' : `/${lang}/` },
    { name: translations?.navigation?.technology || 'Technology', href: lang === 'en' ? '/technology' : `/${lang}/technology` },
    { name: translations?.navigation?.solutions || 'Solutions', href: lang === 'en' ? '/solutions' : `/${lang}/solutions` },
    { name: translations?.navigation?.compliance || 'Compliance', href: lang === 'en' ? '/compliance' : `/${lang}/compliance` },
    { name: translations?.navigation?.about || 'About Us', href: lang === 'en' ? '/about' : `/${lang}/about` },
  ];

  // 处理语言切换
  const handleLanguageChange = (newLang: string) => {
    const currentPath = window.location.pathname;
    let newPath;

    if (newLang === 'en') {
      // 英语为默认，移除路径前缀
      newPath = currentPath.replace(/^\/(fr|ar|de)/, '');
      // 确保路径以/开头
      if (!newPath.startsWith('/')) {
        newPath = `/${newPath}`;
      }
    } else {
      // 其他语言，添加/替换路径前缀
      if (currentPath === '/' || !currentPath.match(/^\/(fr|ar|de)/)) {
        // 如果是根路径或没有语言前缀，直接添加语言前缀
        newPath = `/${newLang}${currentPath === '/' ? '' : currentPath}`;
      } else {
        // 否则，替换现有的语言前缀
        newPath = currentPath.replace(/^\/(fr|ar|de)/, `/${newLang}`);
      }
    }

    setLang(newLang);
    router.push(newPath);
  };

  return (
    <header className="bg-deep-blue text-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 relative">
        <div className="flex justify-between items-center">
          {/* Logo 居左 */}
          <Link href={lang === 'en' ? '/' : `/${lang}/`} className="flex items-center flex-shrink-0 z-1001">
            <span className="text-2xl font-bold">ESGentics</span>
          </Link>

          {/* 中间导航菜单（绝对居中） */}
          <nav className="hidden md:block absolute left-1/2 transform -translate-x-1/2 z-1000">
            <div className="flex space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-white hover:text-primary-red font-medium transition-colors relative group"
                >
                  {link.name}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary-red transition-all group-hover:w-full"></span>
                </Link>
              ))}
            </div>
          </nav>

          {/* 右侧：语言切换器 */}
          <div className="flex items-center gap-4 flex-shrink-0 z-1001">
            <LanguageSwitcher 
              currentLang={lang} 
              onLanguageChange={handleLanguageChange} 
            />
            <Link href={lang === 'en' ? '/contact' : `/${lang}/contact`} className="hidden md:block bg-primary-red hover:bg-red-700 text-white px-4 py-2 rounded-md font-medium transition-colors">
              {translations?.navigation?.contact || 'Contact'}
            </Link>
            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-white"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 py-4 border-t border-gray-700">
            <div className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-white hover:text-primary-red font-medium transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <div className="pt-4 border-t border-gray-700">
                <LanguageSwitcher 
                  currentLang={lang} 
                  onLanguageChange={handleLanguageChange} 
                />
              </div>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}