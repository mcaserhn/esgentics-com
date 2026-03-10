'use client';

import React, { useState } from 'react';
import { useLanguage } from '../components/LanguageProvider';

export default function CaseStudiesPage() {
  const { translations } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState('all');

  // 客户成功案例数据
  const caseStudies = [
    {
      title: 'IKEA',
      description: 'Energy monitoring and HVAC optimization across their retail portfolio.',
      size: '4.6 Million m²',
      details: '70 stores including 4 shopping malls',
      image: '/images/renders/esgentics_render_R02_seasia_solution_web_1024x1024_v1.png',
      category: 'retail'
    },
    {
      title: 'DB Schenker',
      description: 'PV management, IEQ and energy monitoring, digitalized operation and management.',
      size: '54,000 m²',
      image: '/images/renders/esgentics_render_R03_eu_ecoplant_web_1024x1024_v1.png',
      category: 'logistics'
    },
    {
      title: 'Ariston',
      description: 'Smart Factory Intelligence with Real-Time Production Line Analytics.',
      size: '20,000 m²',
      image: '/images/renders/esgentics_render_R04_me_datanexus_web_1024x1024_v1.png',
      category: 'manufacturing'
    },
    {
      title: 'Saint-Gobain R&D Center',
      description: 'IAQ and energy monitoring, retrofit simulation, HVAC optimization.',
      size: '15,000 m²',
      image: '/images/renders/esgentics_render_R01_hero_web_1024x1024_v1.png',
      category: 'industrial'
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
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-deep-blue text-white py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            {translations?.caseStudies?.hero?.title || 'Client Success Stories'}
          </h1>
          <p className="text-xl opacity-90 max-w-3xl">
            {translations?.caseStudies?.hero?.subtitle || 'Discover how our AI-driven solutions have transformed projects across different sectors.'}
          </p>
        </div>
      </section>

      {/* Trusted By Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Trusted By Industry Leaders</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-7 gap-6">
            <div className="bg-gray-100 p-6 rounded-lg text-center">
              <h3 className="font-bold mb-2">Commercial</h3>
              <p className="text-sm text-gray-600">Brookfield Properties, REinvent Ventures, CCH Asset</p>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg text-center">
              <h3 className="font-bold mb-2">Retail</h3>
              <p className="text-sm text-gray-600">IKEA</p>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg text-center">
              <h3 className="font-bold mb-2">Manufacturing</h3>
              <p className="text-sm text-gray-600">Harman, Ariston, Gerflor</p>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg text-center">
              <h3 className="font-bold mb-2">Logistics</h3>
              <p className="text-sm text-gray-600">DB Schenker, CEVA Logistics</p>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg text-center">
              <h3 className="font-bold mb-2">Infrastructure</h3>
              <p className="text-sm text-gray-600">SNCF</p>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg text-center">
              <h3 className="font-bold mb-2">Hospitality</h3>
              <p className="text-sm text-gray-600">The Standard High Line</p>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg text-center">
              <h3 className="font-bold mb-2">Industrial</h3>
              <p className="text-sm text-gray-600">Saint-Gobain, Arkema</p>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Featured Client Success Stories</h2>
          
          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category.value}
                onClick={() => setSelectedCategory(category.value)}
                className={`px-6 py-3 rounded-full text-sm font-medium transition-all ${selectedCategory === category.value ? 'bg-primary-red text-white' : 'bg-gray-100 text-gray-800 hover:bg-gray-200'}`}
              >
                {category.label}
              </button>
            ))}
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {filterCaseStudies().map((study, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="h-48 overflow-hidden">
                  <img 
                    src={study.image} 
                    alt={study.title} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-bold text-gray-900">{study.title}</h3>
                    <span className="bg-primary-red text-white text-sm px-3 py-1 rounded-full">
                      {study.size}
                    </span>
                  </div>
                  {study.details && (
                    <p className="text-sm text-gray-500 mb-4">{study.details}</p>
                  )}
                  <p className="text-gray-700 mb-4">{study.description}</p>
                  <button className="text-primary-red font-medium hover:underline">
                    View Case Study
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gray-100 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">
            {translations?.caseStudies?.cta?.title || 'Ready to transform your project?'}
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            {translations?.caseStudies?.cta?.body || 'Our team of experts is ready to help you implement intelligent construction solutions tailored to your specific needs.'}
          </p>
          <a 
            href="/contact" 
            className="bg-primary-red hover:bg-red-700 text-white px-6 py-3 rounded-md font-medium transition-colors"
          >
            {translations?.caseStudies?.cta?.cta || 'Get in Touch'}
          </a>
        </div>
      </section>
    </div>
  );
}