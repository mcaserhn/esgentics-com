"use client";
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useLanguage } from '../../components/ui/LanguageProvider';
import Button from '../../components/ui/Button';

export default function Compliance() {
  const { lang, translations } = useLanguage();
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-aden-dark-blue text-white py-20 md:py-32">
        <div className="container-content">
          <motion.h1 
            className="text-4xl md:text-5xl lg:text-6xl font-title font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {translations?.compliance?.hero?.title || 'Global Compliance & Data Sovereignty.'}
          </motion.h1>
          <motion.p 
            className="text-xl text-gray-200 max-w-3xl font-body"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {translations?.compliance?.hero?.subtitle || 'We ensure compliance with global standards and guarantee data sovereignty for our clients.'}
          </motion.p>
        </div>
      </section>

      {/* Legal Entity Section */}
      <section className="py-20 bg-white">
        <div className="container-content">
          <motion.div 
            className="mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-aden-dark-blue rounded-full flex items-center justify-center mr-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                  <path d="M20 7h-4V4c0-1.1-.9-2-2-2h-4c-1.1 0-2 .9-2 2v3H4c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V9c0-1.1-.9-2-2-2z"></path>
                  <polyline points="16 17 12 13 8 17"></polyline>
                </svg>
              </div>
              <h2 className="text-3xl md:text-4xl font-title font-bold">{translations?.compliance?.legal_entity?.title || 'Registered in Singapore.'}</h2>
            </div>
            <p className="text-lg text-aden-dark-gray font-body max-w-3xl">
              {translations?.compliance?.legal_entity?.body || 'ESGentics Pte. Ltd. is incorporated under the laws of Singapore. All contracts are governed by Singapore International Arbitration Centre (SIAC) rules.'}
            </p>
          </motion.div>

          {/* Data Sovereignty Section */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-aden-dark-blue rounded-full flex items-center justify-center mr-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                  <circle cx="12" cy="12" r="10"></circle>
                  <line x1="12" y1="8" x2="12" y2="12"></line>
                  <line x1="12" y1="16" x2="12.01" y2="16"></line>
                </svg>
              </div>
              <h2 className="text-3xl md:text-4xl font-title font-bold">{translations?.compliance?.data_sovereignty?.title || 'Data Residency Guarantee.'}</h2>
            </div>
            <p className="text-lg text-aden-dark-gray font-body max-w-3xl mb-10">
              {translations?.compliance?.data_sovereignty?.body || 'We understand the sensitivity of your data. Our infrastructure ensures that project data is processed and stored within your region (EU, NA, ME, or SE Asia), complying with GDPR, PDPA, and local data laws.'}
            </p>

            {/* Data Sovereignty Statement Box */}
            <div className="bg-aden-light-gray border-l-4 border-aden-orange p-6 rounded-r-lg shadow-sm">
              <h3 className="text-xl font-title font-bold mb-4 text-aden-dark-blue">{translations?.compliance?.data_sovereignty?.statement_title || 'Data Sovereignty Statement'}</h3>
              <p className="text-aden-dark-gray font-body">
                {translations?.compliance?.data_sovereignty?.statement_body || 'No data is transferred to mainland China. Our servers are located in Singapore, Europe, and North America.'}
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Compliance Standards Section */}
      <section className="py-20 bg-aden-light-gray">
        <div className="container-content">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-title font-bold mb-6">{translations?.compliance?.standards?.title || 'Global Compliance Standards'}</h2>
            <p className="text-lg text-aden-dark-gray font-body max-w-3xl mx-auto">
              {translations?.compliance?.standards?.body || 'We adhere to the highest international standards for data protection and construction practices.'}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {(translations?.compliance?.standards?.items || [
              {
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-aden-dark-blue">
                    <path d="M20 7h-4V4c0-1.1-.9-2-2-2h-4c-1.1 0-2 .9-2 2v3H4c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V9c0-1.1-.9-2-2-2z"></path>
                    <polyline points="16 17 12 13 8 17"></polyline>
                  </svg>
                ),
                title: "GDPR Compliance",
                description: "Fully compliant with European Union data protection regulations."
              },
              {
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-aden-dark-blue">
                    <path d="M20 7h-4V4c0-1.1-.9-2-2-2h-4c-1.1 0-2 .9-2 2v3H4c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V9c0-1.1-.9-2-2-2z"></path>
                    <polyline points="16 17 12 13 8 17"></polyline>
                  </svg>
                ),
                title: "PDPA Compliance",
                description: "Adheres to Singapore's Personal Data Protection Act."
              },
              {
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-aden-dark-blue">
                    <path d="M20 7h-4V4c0-1.1-.9-2-2-2h-4c-1.1 0-2 .9-2 2v3H4c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V9c0-1.1-.9-2-2-2z"></path>
                    <polyline points="16 17 12 13 8 17"></polyline>
                  </svg>
                ),
                title: "ESG Standards",
                description: "Meets international Environmental, Social, and Governance standards."
              }
            ]).map((item, index) => (
              <motion.div 
                key={index}
                className="bg-white p-8 rounded-lg shadow-sm"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <div className="mb-6">{item.icon}</div>
                <h3 className="text-xl font-title font-bold mb-4">{item.title}</h3>
                <p className="text-aden-dark-gray font-body">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="container-content text-center">
          <motion.h2 
            className="text-3xl md:text-4xl font-title font-bold mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {translations?.compliance?.cta?.title || 'Need more information about our compliance standards?'}
          </motion.h2>
          <motion.p 
            className="text-lg text-aden-dark-gray mb-10 max-w-3xl mx-auto font-body"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {translations?.compliance?.cta?.body || 'Our team is ready to provide detailed information about our compliance practices and data sovereignty policies.'}
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Link href={lang === 'en' ? '/contact' : `/${lang}/contact`} passHref>
              <Button variant="primary">
                {translations?.compliance?.cta?.cta || 'Contact Us'}
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
