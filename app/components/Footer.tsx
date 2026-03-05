'use client';

import Link from 'next/link';
import { useLanguage } from './LanguageProvider';

export default function Footer() {
  const { lang, translations } = useLanguage();
  return (
    <footer className="bg-deep-blue text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">ESGentics</h3>
            <p className="text-gray-300">
              {translations?.footer?.description || 'Intelligent Construction. Sustainable Legacy.'}
            </p>
          </div>

          <div>
            <h4 className="font-bold mb-4">{translations?.footer?.quick_links || 'Quick Links'}</h4>
            <ul className="space-y-2">
              <li>
                <Link href={lang === 'en' ? '/' : `/${lang}/`} className="text-gray-300 hover:text-white transition-colors">
                  {translations?.navigation?.home || 'Home'}
                </Link>
              </li>
              <li>
                <Link href={lang === 'en' ? '/technology' : `/${lang}/technology`} className="text-gray-300 hover:text-white transition-colors">
                  {translations?.navigation?.technology || 'Technology'}
                </Link>
              </li>
              <li>
                <Link href={lang === 'en' ? '/solutions' : `/${lang}/solutions`} className="text-gray-300 hover:text-white transition-colors">
                  {translations?.navigation?.solutions || 'Solutions'}
                </Link>
              </li>
              <li>
                <Link href={lang === 'en' ? '/about' : `/${lang}/about`} className="text-gray-300 hover:text-white transition-colors">
                  {translations?.navigation?.about || 'About Us'}
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">{translations?.footer?.legal || 'Legal'}</h4>
            <ul className="space-y-2">
              <li>
                <Link href={lang === 'en' ? '/privacy-policy' : `/${lang}/privacy-policy`} className="text-gray-300 hover:text-white transition-colors">
                  {translations?.footer?.privacy || 'Privacy Policy'}
                </Link>
              </li>
              <li>
                <Link href={lang === 'en' ? '/terms-of-service' : `/${lang}/terms-of-service`} className="text-gray-300 hover:text-white transition-colors">
                  {translations?.footer?.terms || 'Terms of Service'}
                </Link>
              </li>
              <li>
                <Link href={lang === 'en' ? '/data-sovereignty-statement' : `/${lang}/data-sovereignty-statement`} className="text-gray-300 hover:text-white transition-colors">
                  {translations?.footer?.data_sovereignty || 'Data Sovereignty Statement'}
                </Link>
              </li>
              <li>
                <Link href={lang === 'en' ? '/compliance' : `/${lang}/compliance`} className="text-gray-300 hover:text-white transition-colors">
                  {translations?.footer?.compliance || 'Compliance'}
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">{translations?.footer?.contact || 'Contact'}</h4>
            <ul className="space-y-2">
              <li className="text-gray-300">
                {translations?.footer?.company_name || 'ESGentics Pte. Ltd.'}
              </li>
              <li className="text-gray-300">
                {translations?.footer?.address || '9 Raffles Place, Republic Plaza, Singapore 048619'}
              </li>
              <li className="text-gray-300">
                {translations?.footer?.europe_address || '8 Rue Lemercier, 75017 Paris, France'}
              </li>
              <li className="text-gray-300">
                {translations?.footer?.email || 'contact@esgentics.com'}
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-300 mb-4 md:mb-0">
              {translations?.footer?.copyright || '© 2026 ESGentics Pte. Ltd. Singapore. All Rights Reserved.'}
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect x="2" y="9" width="4" height="12"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </a>
            </div>
          </div>
          <p className="text-gray-400 text-sm mt-4">
            {translations?.footer?.data_statement || 'Servers hosted in Singapore/AWS Global. No data residency in mainland China.'}
          </p>
        </div>
      </div>
    </footer>
  );
}