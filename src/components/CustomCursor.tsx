'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });

      // Détecte si la souris survole un lien, un bouton ou un élément cliquable
      const target = e.target as HTMLElement;
      const isInteractive = 
        target.tagName === 'A' || 
        target.tagName === 'BUTTON' || 
        target.closest('a') !== null || 
        target.closest('button') !== null ||
        target.classList.contains('cursor-pointer');

      setIsHovered(!!isInteractive);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <motion.div
      className="fixed top-0 left-0 pointer-events-none z-[9999] hidden lg:flex items-center justify-center"
      animate={{
        x: mousePosition.x - 8,
        y: mousePosition.y - 8,
        rotate: isHovered ? 45 : 0,
      }}
      transition={{ 
        type: 'tween', 
        duration: 0, 
        rotate: { type: 'spring', stiffness: 300, damping: 20 } 
      }}
    >
      <div className="w-4 h-4 bg-black transform rotate-45 shadow-sm" />
    </motion.div>
  );
}