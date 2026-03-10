// 语言处理工具函数

// 支持的语言列表
export const supportedLanguages = ['en', 'fr', 'ar', 'de'];

// 默认语言
export const defaultLanguage = 'en';

// 加载语言文件
export const loadLanguage = async (lang: string): Promise<any> => {
  try {
    const langFile = await import(`../locales/${lang}.json`);
    return langFile.default;
  } catch (error) {
    console.error(`Failed to load language: ${lang}`, error);
    // 加载失败时返回默认语言
    const defaultLangFile = await import(`../locales/${defaultLanguage}.json`);
    return defaultLangFile.default;
  }
};

// 检测当前语言
export const detectLanguage = (pathname?: string): string => {
  let path;
  
  if (typeof window !== 'undefined') {
    path = window.location.pathname;
  } else if (pathname) {
    path = pathname;
  } else {
    return defaultLanguage;
  }

  const langCode = path.split('/')[1];
  
  if (supportedLanguages.includes(langCode)) {
    return langCode;
  }
  
  return defaultLanguage;
};

// 生成带语言前缀的 URL
export const getLanguageUrl = (lang: string, path: string): string => {
  if (lang === defaultLanguage) {
    // 英语为默认语言，不需要前缀
    return path;
  }
  
  // 移除现有语言前缀
  const cleanPath = path.replace(/^\/(fr|ar|de)/, '');
  
  // 添加新语言前缀
  return `/${lang}${cleanPath || '/'}`;
};

// 获取当前语言的方向（LTR 或 RTL）
export const getLanguageDirection = (lang: string): 'ltr' | 'rtl' => {
  // 阿拉伯语使用 RTL
  if (lang === 'ar') {
    return 'rtl';
  }
  return 'ltr';
};
