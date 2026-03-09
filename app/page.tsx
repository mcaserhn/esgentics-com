"use client";
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useLanguage } from './components/LanguageProvider';

export default function Home() {
  const { lang, translations } = useLanguage();
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="hero bg-deep-blue text-white py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="relative w-full h-96 md:h-96 rounded-lg overflow-hidden">
            {/* 3D 全球AI网络概念图 */}
            <img 
              src="/images/renders/esgentics_render_R01_hero_web_1024x1024_v1.png" 
              alt="Global AI Network Concept" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-deep-blue/80 to-transparent flex items-center">
              <div className="px-6 md:px-10 lg:px-16 max-w-3xl">
                <motion.h1 
                  className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-white leading-tight"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                >
                  {translations?.home?.hero?.title || 'Intelligent Construction. Sustainable Legacy.'}
                </motion.h1>
                <motion.p 
                  className="text-lg md:text-xl mb-8 text-gray-100 max-w-xl leading-relaxed"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  {translations?.home?.hero?.subtitle || 'AI-driven turnkey engineering solutions powered by NVIDIA hardware. From concept to operation, we deliver intelligent construction projects across Southeast Asia, Europe, North America, and the Middle East.'}
                </motion.p>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  <Link href={lang === 'en' ? '/solutions' : `/${lang}/solutions`} className="btn-primary inline-block">
                    {translations?.home?.hero?.cta || 'Explore Solutions'}
                  </Link>
                </motion.div>
              </div>
            </div>
            <div className="absolute bottom-4 right-4 text-white text-sm bg-black bg-opacity-50 px-3 py-1 rounded">
              Conceptual Simulation
            </div>
          </div>
          <div className="mt-12 flex justify-center">
            <div className="bg-gray-800 bg-opacity-50 px-6 py-3 rounded-full flex items-center space-x-3">
              <div className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                  <path d="M18 3v4a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V3"></path>
                  <path d="M3 11h18"></path>
                  <path d="M3 16h18"></path>
                  <path d="M10 21h4"></path>
                </svg>
              </div>
              <span className="text-sm text-gray-300">Computing Partner: NVIDIA</span>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">{translations?.home?.services?.title || 'Our Services'}</h2>
            <p className="text-lg text-dark-gray max-w-3xl mx-auto mb-8">
              {translations?.home?.services?.subtitle || 'We serve clients across Southeast Asia, North America, Europe, and the Middle East, spanning a diverse range of sectors:'}
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              {translations?.home?.services?.sectors?.map((sector, index) => (
                <motion.span 
                  key={index}
                  className="bg-light-gray px-4 py-2 rounded-full text-sm font-medium"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                >
                  {sector}
                </motion.span>
              ))}
            </div>
            <p className="text-lg text-dark-gray mt-8">
              {translations?.home?.services?.cities || 'Supporting private sector modernization & net-zero in +80 cities.'}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Value Proposition Section */}
      <section className="py-20 bg-light-gray">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">{translations?.home?.value_prop?.title || 'Future-proof your assets with AI-driven turnkey engineering'}</h2>
            <p className="text-lg text-dark-gray max-w-3xl mx-auto">
              {translations?.home?.value_prop?.body || 'From concept to operation, we integrate NVIDIA-powered hardware with intelligent digital twin platforms to deliver construction projects that are smarter, faster, and built for net-zero.'}
            </p>
          </motion.div>

          <motion.div 
            className="max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold mb-6">{translations?.home?.how_we_get_there?.title || 'How we get there:'}</h3>
            <ul className="space-y-6">
              {translations?.home?.how_we_get_there?.items?.map((item, index) => (
                <motion.li 
                  key={index}
                  className="flex items-start"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                >
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary-red flex items-center justify-center text-white font-bold text-sm mr-4 mt-1">
                    {index + 1}
                  </div>
                  <p className="text-dark-gray">{item}</p>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-14 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <motion.div 
              className="md:w-1/2 mb-10 md:mb-0"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-2xl md:text-3xl font-bold mb-6">{translations?.home?.trust?.title || 'Global Standards. European Heritage.'}</h3>
              <p className="text-lg text-dark-gray mb-8">
                {translations?.home?.trust?.body || 'Headquartered in Singapore, backed by European capital. We bring precision engineering and long-term ESG compliance to every project.'}
              </p>
              <Link href={lang === 'en' ? '/about' : `/${lang}/about`} className="btn-primary inline-block">
                {translations?.navigation?.about || 'Learn More'}
              </Link>
            </motion.div>
            <motion.div 
              className="md:w-1/2"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              {/* 国际化团队素材图占位 */}
              <div className="w-full h-64 md:h-80 bg-gray-300 rounded-lg flex items-center justify-center">
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
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-14 bg-deep-blue text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.h2 
              className="text-3xl md:text-4xl font-bold mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              {translations?.home?.cta?.title || 'Ready to start your intelligent construction project?'}
            </motion.h2>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Link href={lang === 'en' ? '/contact' : `/${lang}/contact`} className="btn-primary inline-block">
                {translations?.home?.cta?.cta || 'Get in Touch'}
              </Link>
            </motion.div>
        </div>
      </section>
    </div>
  );
}