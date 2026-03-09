'use client';

import React from 'react';
import { useLanguage } from '../components/LanguageProvider';

export default function CaseStudiesPage() {
  const { translations } = useLanguage();

  // 客户成功案例数据
  const caseStudies = [
    {
      title: 'IKEA',
      description: 'Energy monitoring and HVAC optimization across their retail portfolio.',
      size: '4.6 Million m²',
      details: '70 stores including 4 shopping malls',
      image: '/images/renders/esgentics_render_R02_seasia_solution_web_1024x1024_v1.png'
    },
    {
      title: 'DB Schenker',
      description: 'PV management, IEQ and energy monitoring, digitalized operation and management.',
      size: '54,000 m²',
      image: '/images/renders/esgentics_render_R03_eu_ecoplant_web_1024x1024_v1.png'
    },
    {
      title: 'The Standard High Line Hotel',
      description: 'Asset tracking, digitalized operation & maintenance, HVAC optimization.',
      size: '20,000 m²',
      image: '/images/renders/esgentics_render_R04_me_datanexus_web_1024x1024_v1.png'
    },
    {
      title: 'Saint-Gobain R&D Center',
      description: 'IAQ and energy monitoring, retrofit simulation, HVAC optimization.',
      size: '15,000 m²',
      image: '/images/renders/esgentics_render_R01_hero_web_1024x1024_v1.png'
    }
  ];

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

      {/* Case Studies Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {caseStudies.map((study, index) => (
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