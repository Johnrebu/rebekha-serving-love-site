
import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

interface ParallaxBackgroundProps {
  imageUrl: string;
  strength?: number;
  className?: string;
  overlayOpacity?: number;
}

export default function ParallaxBackground({
  imageUrl,
  strength = 200,
  className = '',
  overlayOpacity = 0.3
}: ParallaxBackgroundProps) {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, strength]);
  
  return (
    <div className={`absolute inset-0 w-full h-full overflow-hidden -z-10 ${className}`}>
      <motion.div 
        className="absolute inset-0 w-full h-full"
        style={{
          backgroundImage: `url(${imageUrl})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          y
        }}
      />
      <div 
        className="absolute inset-0 w-full h-full" 
        style={{ 
          backgroundColor: `rgba(0, 0, 0, ${overlayOpacity})`,
        }} 
      />
    </div>
  );
}
