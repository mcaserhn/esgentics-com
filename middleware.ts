import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// 支持的语言列表
const supportedLanguages = ['en', 'fr', 'ar', 'de'];

// 默认语言
const defaultLanguage = 'en';

// 中间件处理函数
export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  
  // 检查是否已经有语言前缀
  const pathSegments = pathname.split('/').filter(Boolean);
  const langCode = pathSegments[0];
  
  // 如果路径是 API 路由，直接通过
  if (pathname.startsWith('/api/')) {
    return NextResponse.next();
  }
  
  // 如果路径是静态资源，直接通过
  if (pathname.startsWith('/_next/') || pathname.startsWith('/images/')) {
    return NextResponse.next();
  }
  
  // 检查是否是语言前缀路径
  if (supportedLanguages.includes(langCode)) {
    // 从路径中移除语言前缀，以便 Next.js 能够找到正确的页面组件
    const cleanPath = pathname.replace(`/${langCode}`, '');
    const newUrl = new URL(cleanPath || '/', request.url);
    
    // 保存语言代码到请求头，以便页面组件能够获取
    const response = NextResponse.rewrite(newUrl);
    response.headers.set('x-language', langCode);
    return response;
  }
  
  // 对于根路径，直接通过
  if (pathname === '/' || pathname === '') {
    return NextResponse.next();
  }
  
  // 其他路径也直接通过
  return NextResponse.next();
}

// 配置中间件匹配路径
export const config = {
  matcher: [
    /*
     * 匹配所有请求路径，除了：
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
};
