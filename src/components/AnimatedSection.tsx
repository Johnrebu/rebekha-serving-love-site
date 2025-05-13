
import React, { ReactNode } from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  animation?: 'fadeUp' | 'slideLeft' | 'slideRight' | 'scale' | 'reveal';
  once?: boolean;
}

export default function AnimatedSection({
  children,
  className = '',
  delay = 0,
  animation = 'fadeUp',
  once = true,
}: AnimatedSectionProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once, amount: 0.2 });
  
  const getVariants = () => {
    switch(animation) {
      case 'fadeUp':
        return {
          hidden: { opacity: 0, y: 30 },
          visible: { opacity: 1, y: 0 }
        };
      case 'slideLeft':
        return {
          hidden: { opacity: 0, x: -50 },
          visible: { opacity: 1, x: 0 }
        };
      case 'slideRight':
        return {
          hidden: { opacity: 0, x: 50 },
          visible: { opacity: 1, x: 0 }
        };
      case 'scale':
        return {
          hidden: { opacity: 0, scale: 0.8 },
          visible: { opacity: 1, scale: 1 }
        };
      case 'reveal':
        return {
          hidden: { opacity: 0, clipPath: "polygon(0 0, 100% 0, 100% 0, 0 0)" },
          visible: { opacity: 1, clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)" }
        };
      default:
        return {
          hidden: { opacity: 0 },
          visible: { opacity: 1 }
        };
    }
  };

  return (
    <motion.div
      ref={ref}
      className={className}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      variants={getVariants()}
      transition={{ 
        duration: 0.6, 
        ease: "easeOut",
        delay: delay
      }}
    >
      {children}
    </motion.div>
  );
}
