
import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

interface BackgroundGradientProps {
  className?: string;
}

export default function BackgroundGradient({ 
  className = '' 
}: BackgroundGradientProps) {
  const gradientRef = useRef<HTMLDivElement>(null);

  // Update gradient position based on mouse movement
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!gradientRef.current) return;
      
      const { clientX, clientY } = e;
      const x = clientX / window.innerWidth;
      const y = clientY / window.innerHeight;
      
      gradientRef.current.style.setProperty('--mouse-x', `${x * 100}%`);
      gradientRef.current.style.setProperty('--mouse-y', `${y * 100}%`);
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <motion.div
      ref={gradientRef}
      className={`absolute inset-0 -z-10 opacity-30 ${className}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 0.3 }}
      transition={{ duration: 1.5 }}
      style={{
        background: `radial-gradient(
          circle at var(--mouse-x, 50%) var(--mouse-y, 50%), 
          rgba(212, 175, 55, 0.15),
          rgba(29, 53, 87, 0) 40%
        )`
      }}
    />
  );
}
