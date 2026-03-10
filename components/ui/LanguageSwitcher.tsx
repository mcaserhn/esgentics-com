'use client';

import { useState, useEffect } from 'react';

interface LanguageSwitcherProps {
  currentLang: string;
  onLanguageChange: (lang: string) => void;
}

const LanguageSwitcher: React.FC<LanguageSwitcherProps> = ({ currentLang, onLanguageChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // 检测屏幕尺寸
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 1024);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // 语言列表
  const languages = [
    { code: 'en', name: 'English' },
    { code: 'fr', name: 'Français' },
    { code: 'ar', name: 'العربية', dir: 'rtl' },
    { code: 'de', name: 'Deutsch' },
  ];

  // 处理语言选择
  const handleLanguageSelect = (langCode: string) => {
    onLanguageChange(langCode);
    if (isMobile) {
      setIsOpen(false);
    }
  };

  // 点击外部关闭菜单
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (!target.closest('.language-switcher')) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  return (
    <div className="language-switcher relative flex-shrink-0 z-1001">
      <button
        className="lang-toggle flex items-center gap-2 bg-transparent border border-rgba(255, 255, 255, 0.3) rounded-md px-4 py-2 text-white font-medium text-sm transition-all hover:bg-rgba(255, 255, 255, 0.1) hover:border-rgba(255, 255, 255, 0.5)"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        aria-haspopup="true"
        aria-label="Select language"
      >
        <svg className="globe-icon w-5 h-5 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="12" cy="12" r="10"></circle>
          <line x1="2" y1="12" x2="22" y2="12"></line>
          <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
        </svg>
        <span className="lang-current">
          {languages.find(lang => lang.code === currentLang)?.name || 'English'}
        </span>
        <svg className={`chevron-icon w-4 h-4 flex-shrink-0 transition-transform ${isOpen ? 'rotate-180' : ''}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <polyline points="6 9 12 15 18 9"></polyline>
        </svg>
      </button>

      {/* 悬浮语言菜单 */}
      <div
        className={`lang-dropdown absolute top-[calc(100%+12px)] right-0 bg-white rounded-lg shadow-lg min-w-[320px] max-w-[400px] opacity-0 visibility-hidden transform -translate-y-2 transition-all duration-300 z-1002 pointer-events-none ${isOpen ? 'opacity-100 visibility-visible translate-y-0 pointer-events-auto' : ''}`}
        role="menu"
      >
        <div className={`lang-grid grid gap-1 p-3 max-h-[480px] overflow-y-auto ${isMobile ? 'grid-cols-1' : 'grid-cols-2'}`}>
          {languages.map((lang) => (
            <button
              key={lang.code}
              className={`lang-item flex items-center gap-3 p-3 text-gray-800 text-sm rounded-md transition-all hover:bg-gray-100 hover:text-aden-orange ${currentLang === lang.code ? 'bg-gray-100 text-aden-orange font-semibold' : ''}`}
              onClick={() => handleLanguageSelect(lang.code)}
              role="menuitem"
              style={{ direction: (lang.dir || 'ltr') as 'ltr' | 'rtl' }}
            >
              <span className="lang-name flex-1 whitespace-nowrap overflow-hidden text-ellipsis">
                {lang.name}
              </span>
              {currentLang === lang.code && (
                <span className="lang-check text-aden-orange font-bold flex-shrink-0">✓</span>
              )}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LanguageSwitcher;