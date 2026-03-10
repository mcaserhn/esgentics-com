'use client';

import React from 'react';
import { motion } from 'framer-motion';

export interface ContentSectionProps {
  title?: string;
  subtitle?: string;
  children: React.ReactNode;
  variant?: 'white' | 'gray';
  maxWidth?: 'default' | 'prose' | 'full';
  className?: string;
}

export default function ContentSection({
  title,
  subtitle,
  children,
  variant = 'white',
  maxWidth = 'default',
  className = '',
}: ContentSectionProps) {
  const variantClasses = {
    white: 'bg-white',
    gray: 'bg-aden-light-gray',
  };

  const maxWidthClasses = {
    default: '',
    prose: 'max-w-3xl',
    full: 'max-w-full',
  };

  return (
    <section className={`py-20 ${variantClasses[variant]} ${className}`}>
      <div className="container-content">
        {title && (
          <motion.div 
            className="mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-title font-bold mb-6">{title}</h2>
            {subtitle && (
              <p className="text-lg text-aden-dark-gray font-body max-w-3xl mx-auto">
                {subtitle}
              </p>
            )}
          </motion.div>
        )}
        <motion.div 
          className={maxWidthClasses[maxWidth]}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {children}
        </motion.div>
      </div>
    </section>
  );
}
