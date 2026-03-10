'use client';

import React from 'react';
import { motion } from 'framer-motion';

export interface StaggerGridProps {
  children: React.ReactNode[];
  className?: string;
  delay?: number;
  staggerDelay?: number;
  duration?: number;
  direction?: 'up' | 'down' | 'none';
  threshold?: number;
  once?: boolean;
}

export default function StaggerGrid({
  children,
  className = '',
  delay = 0,
  staggerDelay = 0.1,
  duration = 0.6,
  direction = 'up',
  threshold = 0.1,
  once = true,
}: StaggerGridProps) {
  const directionOffsets = {
    up: { y: 20, x: 0 },
    down: { y: -20, x: 0 },
    none: { x: 0, y: 0 },
  };

  const offset = directionOffsets[direction];

  return (
    <>
      {children.map((child, index) => (
        <motion.div
          key={index}
          className={className}
          initial={{ opacity: 0, ...offset }}
          whileInView={{ opacity: 1, x: 0, y: 0 }}
          viewport={{ once, amount: threshold }}
          transition={{ duration, delay: delay + index * staggerDelay }}
        >
          {child}
        </motion.div>
      ))}
    </>
  );
}
