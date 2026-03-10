'use client';

import React from 'react';
import { motion } from 'framer-motion';

export interface SlideInProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  direction?: 'left' | 'right';
  distance?: number;
  threshold?: number;
  once?: boolean;
}

export default function SlideIn({
  children,
  className = '',
  delay = 0,
  duration = 0.6,
  direction = 'left',
  distance = 50,
  threshold = 0.1,
  once = true,
}: SlideInProps) {
  const directionOffset = direction === 'left' ? -distance : distance;

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, x: directionOffset }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once, amount: threshold }}
      transition={{ duration, delay }}
    >
      {children}
    </motion.div>
  );
}
