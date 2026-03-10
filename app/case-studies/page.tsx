'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { useLanguage } from '../../components/ui/LanguageProvider';
import Button from '../../components/ui/Button';

export default function CaseStudiesPage() {
  const { lang, translations } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState('all');

  // 客户成功案例数据
  const caseStudies = [
    {
      title: 'IKEA',
      description: 'Energy monitoring and HVAC optimization across their retail portfolio.',
      size: '4.6 Million m²',
      details: '70 stores including 4 shopping malls',
      image: '/images/renders/adenexus-com_render_R02_seasia_solution_web_1024x1024_v1.png',
      category: 'retail',
    },
    {
      title: 'DB Schenker',
      description: 'PV management, IEQ and energy monitoring, digitalized operation and management.',
      size: '54,000 m²',
      image: '/images/renders/adenexus-com_render_R03_eu_ecoplant_web_1024x1024_v1.png',
      category: 'logistics',
    },
    {
      title: 'Ariston',
      description: 'Smart Factory Intelligence with Real-Time Production Line Analytics.',
      size: '20,000 m²',
      image: '/images/renders/adenexus-com_render_R04_me_datanexus_web_1024x1024_v1.png',
      category: 'manufacturing',
    },
    {
      title: 'Saint-Gobain R&D Center',
      description: 'IAQ and energy monitoring, retrofit simulation, HVAC optimization.',
      size: '15,000 m²',
      image: '/images/renders/adenexus-com_render_R01_hero_web_1024x1024_v1.png',
      category: 'industrial',
    }
  ];

  // 分类列表
  const categories = [
    { value: 'all', label: 'All Categories' },
    { value: 'retail', label: 'Retail' },
    { value: 'logistics', label: 'Logistics' },
    { value: 'manufacturing', label: 'Manufacturing' },
    { value: 'industrial', label: 'Industrial' }
  ];

  // 过滤案例研究
  const filterCaseStudies = () => {
    if (selectedCategory === 'all') {
      return caseStudies;
    }
    return caseStudies.filter(study => study.category === selectedCategory);
  };

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
            {translations?.caseStudies?.hero?.title || 'Client Success Stories'}
          </motion.h1>
          <motion.p 
            className="text-xl text-gray-200 max-w-3xl font-body"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {translations?.caseStudies?.hero?.subtitle || 'Discover how our AI-driven solutions have transformed projects across different sectors.'}
          </motion.p>
        </div>
      </section>

      {/* Trusted By Section */}
      <section className="py-20 bg-white">
        <div className="container-content">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-title font-bold mb-6">{translations?.caseStudies?.trusted_by?.title || 'Trusted By Industry Leaders'}</h2>
          </motion.div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-7 gap-8">
            {
              (translations?.caseStudies?.trusted_by?.categories || [
                { name: 'Commercial', companies: 'Brookfield Properties, REinvent Ventures, CCH Asset' },
                { name: 'Retail', companies: 'IKEA' },
                { name: 'Manufacturing', companies: 'Harman, Ariston, Gerflor' },
                { name: 'Logistics', companies: 'DB Schenker, CEVA Logistics' },
                { name: 'Infrastructure', companies: 'SNCF' },
                { name: 'Hospitality', companies: 'The Standard High Line' },
                { name: 'Industrial', companies: 'Saint-Gobain, Arkema' }
              ]).map((category, index) => (
                <motion.div 
                  key={index}
                  className="bg-aden-light-gray rounded-lg p-6 shadow-sm"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <h3 className="font-title font-bold mb-2 text-aden-dark-blue">{category.name}</h3>
                  <p className="text-sm text-aden-dark-gray font-body">{category.companies}</p>
                </motion.div>
              ))
            }
          </div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="py-20 bg-aden-light-gray">
        <div className="container-content">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-title font-bold mb-6">{translations?.caseStudies?.featured?.title || 'Featured Client Success Stories'}</h2>
          </motion.div>
          
          {/* Category Filter */}
          <motion.div 
            className="flex flex-wrap justify-center gap-4 mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {categories.map((category) => (
              <button
                key={category.value}
                onClick={() => setSelectedCategory(category.value)}
                className={`px-6 py-3 rounded-full text-sm font-body font-medium transition-all ${selectedCategory === category.value ? 'bg-aden-orange text-white' : 'bg-aden-light-gray text-aden-dark-gray hover:bg-gray-200'}`}
              >
                {category.label}
              </button>
            ))}
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {filterCaseStudies().map((study, index) => (
              <motion.div 
                key={index}
                className="bg-white rounded-lg shadow-sm overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="h-48 overflow-hidden">
                  <img 
                    src={study.image} 
                    alt={study.title} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-title font-bold text-aden-dark-blue">{study.title}</h3>
                    <span className="bg-aden-orange text-white text-sm px-3 py-1 rounded-full">
                      {study.size}
                    </span>
                  </div>
                  {study.details && (
                    <p className="text-sm text-gray-500 mb-4 font-body">{study.details}</p>
                  )}
                  <p className="text-aden-dark-gray font-body mb-4">{study.description}</p>
                  <Link 
                    href={lang === 'en' ? '/contact' : `/${lang}/contact`}
                    className="text-aden-orange font-body font-medium hover:underline"
                  >
                    {translations?.caseStudies?.view_case_study || 'View Case Study'}
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-aden-dark-blue text-white">
        <div className="container-content text-center">
          <motion.h2 
            className="text-3xl md:text-4xl font-title font-bold mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {translations?.caseStudies?.cta?.title || 'Ready to transform your project?'}
          </motion.h2>
          <motion.p 
            className="text-lg text-gray-200 mb-10 max-w-3xl mx-auto font-body"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {translations?.caseStudies?.cta?.body || 'Our team of experts is ready to help you implement intelligent construction solutions tailored to your specific needs.'}
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Link href={lang === 'en' ? '/contact' : `/${lang}/contact`} passHref>
              <Button variant="primary">
                {translations?.caseStudies?.cta?.cta || 'Get in Touch'}
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
