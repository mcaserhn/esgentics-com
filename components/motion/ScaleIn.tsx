'use client';

import React from 'react';
import { motion } from 'framer-motion';

export interface ScaleInProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  scale?: number;
  threshold?: number;
  once?: boolean;
}

export default function ScaleIn({
  children,
  className = '',
  delay = 0,
  duration = 0.6,
  scale = 0.9,
  threshold = 0.1,
  once = true,
}: ScaleInProps) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, scale }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once, amount: threshold }}
      transition={{ duration, delay }}
    >
      {children}
    </motion.div>
  );
}
