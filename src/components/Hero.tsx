
import React from 'react';
import { motion } from 'framer-motion';
import { Button } from "@/components/ui/button";
import ParallaxBackground from './ParallaxBackground';

export default function Hero({
  onBookNowClick
}: {
  onBookNowClick: () => void;
}) {
  // Animation variants
  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.8,
        ease: [0.215, 0.61, 0.355, 1]
      }
    })
  };
  
  const buttonVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.8,
        duration: 0.6,
        ease: [0.215, 0.61, 0.355, 1]
      }
    },
    hover: {
      scale: 1.05,
      boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
      transition: {
        duration: 0.2,
        ease: "easeInOut"
      }
    }
  };

  return (
    <section id="home" className="min-h-screen overflow-hidden relative">
      <div className="grid grid-cols-1 lg:grid-cols-2 min-h-screen">
        {/* Left column - Text content */}
        <div className="flex flex-col justify-center px-6 md:px-12 lg:px-16 py-16 lg:py-0 order-2 lg:order-1 bg-navy relative z-10">
          <div className="max-w-xl relative z-10">
            <motion.span 
              className="uppercase tracking-widest text-sm font-medium text-gold"
              custom={0}
              variants={textVariants}
              initial="hidden"
              animate="visible"
            >
              Explore Menu
            </motion.span>
            
            <motion.h1 
              className="mt-8 font-serif text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight"
              custom={1}
              variants={textVariants}
              initial="hidden"
              animate="visible"
            >
              <span className="animated-text">Rebekha</span> Caterers
            </motion.h1>
            
            <motion.p 
              className="mt-6 text-lg text-blue-100"
              custom={2}
              variants={textVariants}
              initial="hidden"
              animate="visible"
            >
              Elevate your events with exquisite cuisine and impeccable service. 
              We create unforgettable culinary experiences for all your special occasions.
            </motion.p>
            
            <motion.div 
              className="mt-10 flex flex-col sm:flex-row gap-4"
              variants={buttonVariants}
              initial="hidden"
              animate="visible"
            >
              <motion.div whileHover="hover" variants={buttonVariants}>
                <Button 
                  onClick={onBookNowClick} 
                  className="bg-gold hover:bg-gold/90 text-navy font-medium px-8 py-6 text-lg animated-button"
                >
                  Book Your Event
                </Button>
              </motion.div>
              
              <motion.div whileHover="hover" variants={buttonVariants}>
                <Button 
                  variant="outline" 
                  className="border-2 border-gold text-gold hover:bg-gold/10 px-8 py-6 text-lg font-medium"
                  onClick={() => document.getElementById('menu')?.scrollIntoView({
                    behavior: 'smooth'
                  })}
                >
                  Explore Our Menu
                </Button>
              </motion.div>
            </motion.div>
          </div>
          
          {/* Background elements */}
          <motion.div 
            className="absolute -bottom-20 -left-20 w-64 h-64 rounded-full bg-gold/5 blur-3xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.6 }}
            transition={{ delay: 1, duration: 1 }}
          />
          
          <motion.div 
            className="absolute top-20 -right-32 w-64 h-64 rounded-full bg-blue-500/5 blur-3xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.4 }}
            transition={{ delay: 1.2, duration: 1 }}
          />
        </div>
        
        {/* Right column - Featured Image */}
        <div className="relative h-[60vh] lg:h-auto order-1 lg:order-2">
          <motion.div 
            className="absolute inset-0 z-0"
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: [0.25, 1, 0.5, 1] }}
          >
            <ParallaxBackground
              imageUrl="https://images.unsplash.com/photo-1555244162-803834f70033?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
              strength={100}
              overlayOpacity={0.4}
            />
          </motion.div>
          
          <motion.div 
            className="absolute bottom-8 right-8 bg-navy/80 backdrop-blur-md p-4 rounded-md"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.6 }}
          >
            <span className="block text-xs text-gold font-medium">01 / 04</span>
            <span className="block text-sm font-medium text-white mt-1">SIGNATURE CUISINE</span>
          </motion.div>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <motion.div 
        className="hidden lg:block absolute bottom-10 left-1/2 transform -translate-x-1/2 cursor-pointer"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.8 }}
        whileHover={{ y: 5 }}
        animate={{
          y: [0, 10, 0],
          transition: {
            duration: 1.5,
            repeat: Infinity,
            repeatType: "loop"
          }
        }}
      >
        <a href="#about" className="flex flex-col items-center text-gold hover:text-gold/80 transition-colors" aria-label="Scroll Down">
          <span className="text-sm mb-2">Scroll</span>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 5v14M5 12l7 7 7-7" />
          </svg>
        </a>
      </motion.div>
    </section>
  );
}
