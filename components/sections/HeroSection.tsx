'use client';

import React from 'react';
import { motion } from 'framer-motion';

export interface HeroSectionProps {
  title: string;
  subtitle?: string;
  backgroundImage?: string;
  overlay?: boolean;
  align?: 'left' | 'center' | 'right';
  className?: string;
}

export default function HeroSection({
  title,
  subtitle,
  backgroundImage,
  overlay = true,
  align = 'left',
  className = '',
}: HeroSectionProps) {
  const alignClasses = {
    left: 'text-left',
    center: 'text-center mx-auto',
    right: 'text-right ml-auto',
  };

  return (
    <section className={`bg-aden-dark-blue text-white py-20 md:py-32 ${className}`}>
      {backgroundImage && (
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${backgroundImage})` }}
        />
      )}
      {overlay && backgroundImage && (
        <div className="absolute inset-0 bg-black bg-opacity-50" />
      )}
      <div className="container-content relative z-10">
        <motion.h1 
          className={`text-4xl md:text-5xl lg:text-6xl font-title font-bold mb-6 ${alignClasses[align]}`}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {title}
        </motion.h1>
        {subtitle && (
          <motion.p 
            className={`text-xl text-gray-200 font-body ${align === 'center' ? 'max-w-3xl mx-auto' : 'max-w-3xl'}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {subtitle}
          </motion.p>
        )}
      </div>
    </section>
  );
}
