"use client";
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useLanguage } from '../components/LanguageProvider';

export default function About() {
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
            {translations?.about?.hero?.title || 'Building Trust Across Borders.'}
          </motion.h1>
          <motion.p 
            className="text-xl text-gray-200 max-w-3xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {translations?.about?.hero?.subtitle || 'A next-generation construction technology company with a global reach and European heritage.'}
          </motion.p>
        </div>
      </section>

      {/* Who We Are Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <motion.div 
              className="md:w-1/2 mb-10 md:mb-0"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">{translations?.about?.who_we_are?.title || 'Singapore Hub. Global Reach.'}</h2>
              <p className="text-lg text-dark-gray mb-8">
                {translations?.about?.who_we_are?.body || 'ESGentics is a next-generation construction technology company headquartered in Singapore. We serve clients across Southeast Asia, North America, Europe, and the Middle East.'}
              </p>
              <div className="space-y-4">
                {
                  (translations?.about?.who_we_are?.features || [
                    "Headquartered in Singapore",
                    "Global presence in key markets",
                    "Multilingual team of experts",
                    "Local knowledge with global expertise"
                  ]).map((item, index) => (
                    <div key={index} className="flex items-start">
                      <div className="mt-1 mr-4 text-primary-red">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                          <polyline points="22 4 12 14.01 9 11.01"></polyline>
                        </svg>
                      </div>
                      <p className="text-dark-gray">{item}</p>
                    </div>
                  ))
                }
              </div>
            </motion.div>
            <motion.div 
              className="md:w-1/2"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              {/* 世界地图占位 */}
              <div className="w-full h-64 md:h-80 bg-light-gray rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <div className="w-24 h-24 mx-auto mb-4 border-4 border-primary-red rounded-full flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary-red">
                      <circle cx="12" cy="12" r="10"></circle>
                      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
                      <path d="M2 12h20"></path>
                    </svg>
                  </div>
                  <p className="text-dark-gray">{translations?.about?.who_we_are?.map_title || 'Global Presence Map'}</p>
                  <p className="text-xs text-gray-500 mt-2">{translations?.about?.who_we_are?.map_subtitle || 'Highlighting: SG/NA/EU/ME'}</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Heritage Section */}
      <section className="py-20 bg-light-gray">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <motion.div 
              className="md:w-1/2 mb-10 md:mb-0 order-2 md:order-1"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              {/* 国际化团队素材图占位 */}
              <div className="w-full h-64 md:h-80 bg-white rounded-lg shadow-sm flex items-center justify-center">
                <div className="text-center">
                  <div className="w-24 h-24 mx-auto mb-4 border-4 border-primary-red rounded-full flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary-red">
                      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                      <circle cx="9" cy="7" r="4"></circle>
                      <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                      <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                    </svg>
                  </div>
                  <p className="text-dark-gray">Global Team</p>
                </div>
              </div>
            </motion.div>
            <motion.div 
              className="md:w-1/2 order-1 md:order-2"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">{translations?.about?.heritage?.title || 'European Engineering DNA.'}</h2>
              <p className="text-lg text-dark-gray mb-8">
                {translations?.about?.heritage?.body || 'Backed by European capital, we inherit a tradition of precision, rationality, and long-term thinking. We believe in building assets that last generations, not just quarters.'}
              </p>
              <div className="space-y-4">
                {
                  (translations?.about?.heritage?.features || [
                    "European precision engineering",
                    "Long-term sustainable thinking",
                    "Rational approach to problem-solving",
                    "Focus on quality and durability"
                  ]).map((item, index) => (
                    <div key={index} className="flex items-start">
                      <div className="mt-1 mr-4 text-primary-red">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                          <polyline points="22 4 12 14.01 9 11.01"></polyline>
                        </svg>
                      </div>
                      <p className="text-dark-gray">{item}</p>
                    </div>
                  ))
                }
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">{translations?.about?.values?.title || 'Our Core Values'}</h2>
            <p className="text-lg text-dark-gray max-w-3xl mx-auto">
              {translations?.about?.values?.body || 'Guiding principles that shape everything we do.'}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {(translations?.about?.values?.items || [
              {
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary-red">
                    <path d="M20 7h-4V4c0-1.1-.9-2-2-2h-4c-1.1 0-2 .9-2 2v3H4c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V9c0-1.1-.9-2-2-2z"></path>
                    <polyline points="16 17 12 13 8 17"></polyline>
                  </svg>
                ),
                title: "Integrity",
                description: "Honesty and transparency in all our dealings."
              },
              {
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary-red">
                    <circle cx="12" cy="12" r="10"></circle>
                    <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path>
                    <line x1="12" y1="17" x2="12.01" y2="17"></line>
                  </svg>
                ),
                title: "Innovation",
                description: "Pushing the boundaries of what's possible with AI."
              },
              {
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary-red">
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                    <circle cx="9" cy="7" r="4"></circle>
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                    <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                  </svg>
                ),
                title: "Collaboration",
                description: "Working together to achieve exceptional results."
              },
              {
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary-red">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                  </svg>
                ),
                title: "Sustainability",
                description: "Building for a better future."
              }
            ]).map((item, index) => (
              <motion.div 
                key={index}
                className="card bg-light-gray p-8 rounded-lg shadow-sm"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <div className="mb-6">{item.icon}</div>
                <h3 className="text-xl font-bold mb-4">{item.title}</h3>
                <p className="text-dark-gray">{item.description}</p>
              </motion.div>
            ))}
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
            {translations?.about?.cta?.title || 'Ready to work with us?'}
          </motion.h2>
          <motion.p 
            className="text-lg text-gray-200 mb-10 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {translations?.about?.cta?.body || 'Our team of experts is ready to help you bring your intelligent construction project to life.'}
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Link href={lang === 'en' ? '/contact' : `/${lang}/contact`} className="btn-primary inline-block">
              {translations?.about?.cta?.cta || 'Get in Touch'}
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}