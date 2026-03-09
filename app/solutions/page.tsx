"use client";
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useLanguage } from '../components/LanguageProvider';

export default function Solutions() {
  const { lang, translations } = useLanguage();
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-deep-blue text-white py-20 md:py-32">
        <div className="container mx-auto px-4">
          <motion.h1 
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {translations?.solutions?.hero?.title || 'End-to-End Intelligent Solutions.'}
          </motion.h1>
          <motion.p 
            className="text-xl text-gray-200 max-w-3xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {translations?.solutions?.hero?.subtitle || 'From design to long-term ESG operations, we provide turnkey intelligent construction solutions.'}
          </motion.p>
        </div>
      </section>

      {/* Asset Classes Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">{translations?.solutions?.asset_classes?.title || 'Tailored Solutions for Every Industry'}</h2>
            <p className="text-lg text-dark-gray max-w-3xl mx-auto mb-8">
              Our AI-driven engineering solutions are specifically designed to address the unique challenges and opportunities in each industry we serve.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {
              (translations?.solutions?.asset_classes?.classes || []).map((assetClass, index) => (
                <motion.div 
                  key={index}
                  className="bg-light-gray rounded-lg p-8 shadow-sm"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <h3 className="text-xl font-bold mb-6">{assetClass.name}</h3>
                  <ul className="space-y-4">
                    {assetClass.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start">
                        <div className="mt-1 mr-4 text-primary-red">
                          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                            <polyline points="22 4 12 14.01 9 11.01"></polyline>
                          </svg>
                        </div>
                        <p className="text-dark-gray">{feature}</p>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))
            }
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="py-20 bg-light-gray">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">{translations?.solutions?.case_studies?.title || 'Featured Client Success Stories'}</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {
              (translations?.solutions?.case_studies?.cases || []).map((caseStudy, index) => (
                <motion.div 
                  key={index}
                  className="bg-white rounded-lg overflow-hidden shadow-sm"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <div className="p-8">
                    <div className="flex justify-between items-start mb-4">
                      <h3 className="text-xl font-bold">{caseStudy.name}</h3>
                      <span className="bg-primary-red text-white text-sm px-3 py-1 rounded-full">
                        {caseStudy.size}
                      </span>
                    </div>
                    {caseStudy.details && (
                      <p className="text-sm text-gray-500 mb-4">{caseStudy.details}</p>
                    )}
                    <p className="text-dark-gray">{caseStudy.description}</p>
                  </div>
                </motion.div>
              ))
            }
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-deep-blue text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {translations?.solutions?.cta?.title || 'Ready to transform your construction project?'}
          </motion.h2>
          <motion.p 
            className="text-lg text-gray-200 mb-10 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {translations?.solutions?.cta?.body || 'Our turnkey solutions deliver intelligent construction from concept to operation.'}
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Link href={lang === 'en' ? '/contact' : `/${lang}/contact`} className="btn-primary inline-block">
              {translations?.solutions?.cta?.cta || 'Get a Quote'}
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}