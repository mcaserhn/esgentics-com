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

      {/* Turnkey Section */}
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
              <h2 className="text-3xl md:text-4xl font-bold mb-6">{translations?.solutions?.turnkey?.title || 'A-Z Turnkey Engineering.'}</h2>
              <p className="text-lg text-dark-gray mb-8">
                {translations?.solutions?.turnkey?.body || 'We handle everything. Design, procurement, construction, and commissioning. One contract, one responsibility, zero hassle.'}
              </p>
              <div className="space-y-4">
                {
                  (translations?.solutions?.turnkey?.features || [
                    "Concept design and planning",
                    "Procurement and supply chain management",
                    "Construction and installation",
                    "Commissioning and handover"
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
              {/* A-Z 流程图占位 */}
              <div className="w-full h-64 md:h-80 bg-light-gray rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <div className="w-24 h-24 mx-auto mb-4 border-4 border-primary-red rounded-full flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary-red">
                      <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>
                    </svg>
                  </div>
                  <p className="text-dark-gray">A-Z Process Flow</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Operations Section */}
      <section className="py-20 bg-light-gray">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-10">
            <motion.div 
              className="md:w-1/2 mb-10 md:mb-0 order-2 md:order-1"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              {/* ESG 可视化占位 */}
              <div className="w-full h-64 md:h-80 bg-white rounded-lg shadow-sm flex items-center justify-center">
                <div className="text-center">
                  <div className="w-24 h-24 mx-auto mb-4 border-4 border-primary-red rounded-full flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary-red">
                      <circle cx="12" cy="12" r="10"></circle>
                      <line x1="12" y1="8" x2="12" y2="12"></line>
                      <line x1="12" y1="16" x2="12.01" y2="16"></line>
                    </svg>
                  </div>
                  <p className="text-dark-gray">ESG Monitoring Dashboard</p>
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
              <h2 className="text-3xl md:text-4xl font-bold mb-6">{translations?.solutions?.operations?.title || 'Long-Term Operations & ESG.'}</h2>
              <p className="text-lg text-dark-gray mb-8">
                {translations?.solutions?.operations?.body || 'Construction is just the beginning. Our AI agents continue to monitor building health, energy usage, and carbon footprint throughout the asset\'s lifecycle.'}
              </p>
              <div className="space-y-4">
                {
                  (translations?.solutions?.operations?.features || [
                    "Real-time building performance monitoring",
                    "Energy usage optimization",
                    "Carbon footprint tracking",
                    "Predictive maintenance scheduling"
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

      {/* Conceptual Showcase Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">{translations?.solutions?.conceptual_showcase?.title || 'Conceptual Showcase.'}</h2>
            <p className="text-lg text-dark-gray max-w-3xl mx-auto">
              {translations?.solutions?.conceptual_showcase?.body || 'Explore our conceptual designs that demonstrate the capabilities of our intelligent construction solutions.'}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {
              (translations?.solutions?.conceptual_showcase?.projects || [
                {
                  title: "Smart Hub - Southeast Asia Concept",
                  description: "Intelligent commercial hub with integrated AI systems for optimal operations.",
                  region: "Southeast Asia"
                },
                {
                  title: "Eco-Plant - European Standard Concept",
                  description: "Sustainable manufacturing facility with zero carbon footprint and AI-driven efficiency.",
                  region: "European"
                },
                {
                  title: "Data Nexus - Middle East Concept",
                  description: "State-of-the-art data center with advanced cooling and energy management systems.",
                  region: "Middle East"
                }
              ]).map((item, index) => (
                <motion.div 
                  key={index}
                  className="card bg-light-gray rounded-lg overflow-hidden shadow-sm"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                >
                  {/* 3D 概念渲染图 */}
                  <div className="h-64 relative overflow-hidden">
                    <img 
                      src={`/images/renders/esgentics_render_R0${index + 2}_${['seasia_solution', 'eu_ecoplant', 'me_datanexus'][index]}_web_1024x1024_v1.png`} 
                      alt={item.title} 
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute bottom-2 right-2 text-white text-xs bg-black bg-opacity-50 px-2 py-1 rounded">
                      {item.region} - Simulation
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                    <p className="text-dark-gray mb-4">{item.description}</p>
                    <div className="inline-block bg-primary-red bg-opacity-10 px-3 py-1 rounded-full">
                      <span className="text-primary-red text-sm font-medium">Concept</span>
                    </div>
                  </div>
                </motion.div>
              ))
            }
          </div>
          <p className="text-center text-sm text-gray-500 mt-8">
            {translations?.solutions?.conceptual_showcase?.disclaimer || '*All visuals are conceptual simulations for capability demonstration'}
          </p>
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