'use client';

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
            {translations?.about?.hero?.title || 'adenexus'}
          </motion.h1>
          <motion.p 
            className="text-xl text-gray-200 max-w-3xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {translations?.about?.hero?.subtitle || 'A next-generation construction technology company headquartered in Singapore Dedicated to managing, digitalizing, and optimizing the decarbonization of the built environment through its portfolio of AI digital twin platforms, building data solutions, and industrial real estate expertise.'}
          </motion.p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">{translations?.about?.mission?.title || 'Our Mission'}</h2>
            <p className="text-2xl font-medium text-deep-blue mb-8">
              {translations?.about?.mission?.body || 'Digitalize, Optimize, and Future-Proof Buildings & Cities'}
            </p>
            <p className="text-lg text-dark-gray max-w-3xl mx-auto mb-12">
              We believe the buildings of tomorrow must be:
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {translations?.about?.mission?.beliefs?.map((belief, index) => (
              <motion.div 
                key={index}
                className="bg-light-gray rounded-lg p-8 shadow-sm"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <p className="text-dark-gray">{belief}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Differentiation Section */}
      <section className="py-20 bg-light-gray">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">{translations?.about?.differentiation?.title || 'What Makes Us Different'}</h2>
            <p className="text-2xl font-medium text-deep-blue mb-8">
              {translations?.about?.differentiation?.body || 'Engineering + AI + NVIDIA Hardware'}
            </p>
            <p className="text-lg text-dark-gray max-w-3xl mx-auto">
              {translations?.about?.differentiation?.description || 'Unlike pure software providers or traditional engineering firms, we bridge the gap between construction and intelligence.'}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Technology Partner Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-10">
            <motion.div 
              className="md:w-1/2 mb-10 md:mb-0"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">{translations?.about?.technology_partner?.title || 'Our Technology Partner'}</h2>
              <p className="text-2xl font-medium text-deep-blue mb-8">
                {translations?.about?.technology_partner?.body || 'Powered by NVIDIA'}
              </p>
              <p className="text-lg text-dark-gray mb-8">
                {translations?.about?.technology_partner?.description || "As a proud member of the NVIDIA Partner Network, we integrate the world's most advanced computing hardware into our engineering solutions."}
              </p>
              <div className="space-y-4">
                {translations?.about?.technology_partner?.features?.map((feature, index) => (
                  <div key={index} className="flex items-start">
                    <div className="mt-1 mr-4 text-primary-red">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                        <polyline points="22 4 12 14.01 9 11.01"></polyline>
                      </svg>
                    </div>
                    <p className="text-dark-gray">{feature}</p>
                  </div>
                ))}
              </div>
            </motion.div>
            <motion.div 
              className="md:w-1/2"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              {/* NVIDIA 合作伙伴标志 */}
              <div className="w-full h-64 md:h-80 bg-gray-100 rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <div className="w-32 h-32 mx-auto mb-4 border-4 border-primary-red rounded-full flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary-red">
                      <path d="M18 3v4a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V3"></path>
                      <path d="M3 11h18"></path>
                      <path d="M3 16h18"></path>
                      <path d="M10 21h4"></path>
                    </svg>
                  </div>
                  <p className="text-dark-gray font-bold">NVIDIA Partner</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* AI Platform Section */}
      <section className="py-20 bg-light-gray">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">{translations?.about?.ai_platform?.title || 'The AI Platform for Sustainable Buildings'}</h2>
            <p className="text-lg text-dark-gray max-w-3xl mx-auto mb-8">
              {translations?.about?.ai_platform?.body || 'Akila is our core digital twin and AI platform—a unified real estate data system that turns building data into the fuel for portfolio-level AI, automated control, and efficiency.'}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {translations?.about?.ai_platform?.features?.map((feature, index) => (
              <motion.div 
                key={index}
                className="bg-white rounded-lg p-8 shadow-sm"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <p className="text-dark-gray font-medium">{feature}</p>
              </motion.div>
            ))}
          </div>
          <motion.p 
            className="text-center text-lg text-dark-gray mt-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {translations?.about?.ai_platform?.deployment || 'Deployed across 15 million square meters globally.'}
          </motion.p>
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