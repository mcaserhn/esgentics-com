'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Button from '../ui/Button';

export interface CTASectionProps {
  title: string;
  body?: string;
  ctaText?: string;
  ctaLink?: string;
  variant?: 'dark' | 'light';
  className?: string;
}

export default function CTASection({
  title,
  body,
  ctaText = 'Get in Touch',
  ctaLink = '/contact',
  variant = 'dark',
  className = '',
}: CTASectionProps) {
  const variantClasses = {
    dark: 'bg-aden-dark-blue text-white',
    light: 'bg-white text-aden-dark-blue',
  };

  const bodyColor = variant === 'dark' ? 'text-gray-200' : 'text-aden-dark-gray';

  return (
    <section className={`py-20 ${variantClasses[variant]} ${className}`}>
      <div className="container-content text-center">
        <motion.h2 
          className="text-3xl md:text-4xl font-title font-bold mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {title}
        </motion.h2>
        {body && (
          <motion.p 
            className={`text-lg mb-10 max-w-3xl mx-auto font-body ${bodyColor}`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {body}
          </motion.p>
        )}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <Link href={ctaLink} passHref>
            <Button variant="primary">
              {ctaText}
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
