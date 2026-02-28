"use client";
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useLanguage } from '../components/LanguageProvider';

export default function Technology() {
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
            {translations?.technology?.hero?.title || 'The Technology Behind the Build.'}
          </motion.h1>
          <motion.p 
            className="text-xl text-gray-200 max-w-3xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {translations?.technology?.hero?.subtitle || 'Advanced AI agents and NVIDIA-powered hardware working together to revolutionize construction.'}
          </motion.p>
        </div>
      </section>

      {/* AI Agents Section */}
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
              <h2 className="text-3xl md:text-4xl font-bold mb-6">{translations?.technology?.ai_agents?.title || 'Autonomous AI Agents.'}</h2>
              <p className="text-lg text-dark-gray mb-8">
                {translations?.technology?.ai_agents?.body || 'Our proprietary algorithms deploy intelligent agents that monitor, decide, and optimize construction processes in real-time. Reducing human error and maximizing efficiency.'}
              </p>
              <div className="space-y-4">
                {
                  (translations?.technology?.ai_agents?.features || [
                    "Real-time monitoring and analytics",
                    "Autonomous decision making",
                    "Predictive maintenance",
                    "Optimized resource allocation"
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
              {/* AI 工作流程概念图 */}
              <div className="w-full h-80 md:h-80 relative rounded-lg overflow-hidden">
                <img 
                  src="/images/renders/esgentics_render_R05_workflow_tech_web_1024x1024_v1.png" 
                  alt="AI Workflow Conceptual Diagram" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white text-sm bg-black bg-opacity-50 px-3 py-1 rounded">
                  AI Workflow Conceptual Diagram
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Hardware Section */}
      <section className="py-20 bg-deep-blue text-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-10">
            <motion.div 
              className="md:w-1/2 mb-10 md:mb-0 order-2 md:order-1"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              {/* NVIDIA 硬件抽象图占位 */}
              <div className="w-full h-64 md:h-80 bg-gray-800 rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <div className="w-24 h-24 mx-auto mb-4 border-4 border-primary-red rounded-full flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary-red">
                      <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
                      <line x1="8" y1="21" x2="16" y2="21"></line>
                      <line x1="12" y1="17" x2="12" y2="21"></line>
                    </svg>
                  </div>
                  <p className="text-gray-300">NVIDIA Edge Computing</p>
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
              <h2 className="text-3xl md:text-4xl font-bold mb-6">{translations?.technology?.hardware?.title || 'Powered by NVIDIA Edge Computing.'}</h2>
              <p className="text-lg text-gray-200 mb-8">
                {translations?.technology?.hardware?.body || 'We leverage NVIDIA\'s robust hardware ecosystem to ensure high-performance computing at the edge. Reliable, scalable, and built for harsh construction environments.'}
              </p>
              <div className="space-y-4">
                {
                  (translations?.technology?.hardware?.features || [
                    "High-performance edge computing",
                    "Ruggedized for construction sites",
                    "Scalable architecture",
                    "Energy-efficient operation"
                  ]).map((item, index) => (
                    <div key={index} className="flex items-start">
                      <div className="mt-1 mr-4 text-primary-red">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                          <polyline points="22 4 12 14.01 9 11.01"></polyline>
                        </svg>
                      </div>
                      <p className="text-gray-200">{item}</p>
                    </div>
                  ))
                }
              </div>
              <div className="mt-8 inline-block bg-primary-red bg-opacity-20 px-4 py-2 rounded-full">
                <span className="text-primary-red font-medium">Official Partner Technology</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* NVIDIA Partner Section */}
      <section className="py-16 bg-light-gray">
        <div className="container mx-auto px-4 text-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-block bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-center justify-center space-x-4">
                <div className="w-16 h-16 bg-gray-800 rounded-full flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                    <path d="M18 3v4a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V3"></path>
                    <path d="M3 11h18"></path>
                    <path d="M3 16h18"></path>
                    <path d="M10 21h4"></path>
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-deep-blue">{translations?.technology?.nvidia_partner?.title || 'NVIDIA Partner'}</h3>
                  <p className="text-dark-gray">{translations?.technology?.nvidia_partner?.subtitle || 'Powered by NVIDIA technology'}</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 text-center">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {translations?.technology?.cta?.title || 'Ready to harness the power of AI for your construction project?'}
          </motion.h2>
          <motion.p 
            className="text-lg text-dark-gray mb-10 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {translations?.technology?.cta?.body || 'Our team of experts is ready to help you implement intelligent construction solutions tailored to your specific needs.'}
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Link href={lang === 'en' ? '/contact' : `/${lang}/contact`} className="btn-primary inline-block">
              {translations?.technology?.cta?.cta || 'Get Started'}
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}