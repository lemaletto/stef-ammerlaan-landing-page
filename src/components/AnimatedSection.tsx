'use client';

import { motion } from 'framer-motion';
import React from 'react';
import { appVariant } from '@/variants/app.variant';

export default function AnimatedSection({
  children,
  className,
}: {
  children: React.ReactNode;
  className: string;
}) {
  return (
    <motion.section
      className={className}
      initial="initial"
      animate="animate"
      exit="exit"
      variants={appVariant}
    >
      {children}
    </motion.section>
  );
}
