
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

type NavLinkProps = {
  href: string;
  children: React.ReactNode;
  onClick?: () => void;
};

const NavLink = ({ href, children, onClick }: NavLinkProps) => {
  return (
    <motion.a 
      href={href} 
      onClick={onClick}
      className="text-white hover:text-gold transition-colors duration-300 font-medium uppercase tracking-wider text-sm animated-underline"
      whileHover={{ scale: 1.05 }}
      transition={{ type: "spring", stiffness: 400, damping: 10 }}
    >
      {children}
    </motion.a>
  );
};

export default function Header({ onBookNowClick }: { onBookNowClick: () => void }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  // Animation variants
  const headerVariants = {
    hidden: { y: -100, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  const mobileMenuVariants = {
    hidden: { 
      opacity: 0,
      height: 0,
      transition: {
        duration: 0.2,
        ease: "easeInOut"
      }
    },
    visible: { 
      opacity: 1,
      height: "auto",
      transition: {
        duration: 0.3,
        ease: "easeInOut",
        staggerChildren: 0.07,
        delayChildren: 0.1
      }
    }
  };

  const menuItemVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.2
      }
    }
  };

  return (
    <motion.header 
      className={`lg:hidden fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-navy/90 backdrop-blur-lg shadow-lg py-2' : 'bg-transparent py-4'}`}
      variants={headerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <div className="flex items-center">
          <motion.a 
            href="#home" 
            className="flex items-center"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <div className="w-10 h-10 flex items-center justify-center bg-gold text-navy font-serif text-lg">
              R
            </div>
          </motion.a>
        </div>

        {/* Mobile Menu Button */}
        <div className="lg:hidden">
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={toggleMenu}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            className="text-white hover:text-gold"
          >
            <motion.div
              initial={false}
              animate={{ rotate: isMenuOpen ? 90 : 0 }}
              transition={{ duration: 0.2 }}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </motion.div>
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            className="lg:hidden bg-navy/95 backdrop-blur-md absolute top-16 left-0 right-0 shadow-lg"
            variants={mobileMenuVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
          >
            <div className="container mx-auto px-4 py-6 flex flex-col space-y-4">
              <motion.div variants={menuItemVariants}>
                <NavLink href="#home" onClick={closeMenu}>Home</NavLink>
              </motion.div>
              <motion.div variants={menuItemVariants}>
                <NavLink href="#about" onClick={closeMenu}>About</NavLink>
              </motion.div>
              <motion.div variants={menuItemVariants}>
                <NavLink href="#menu" onClick={closeMenu}>Cuisine</NavLink>
              </motion.div>
              <motion.div variants={menuItemVariants}>
                <NavLink href="#services" onClick={closeMenu}>Services</NavLink>
              </motion.div>
              <motion.div variants={menuItemVariants}>
                <NavLink href="#gallery" onClick={closeMenu}>Gallery</NavLink>
              </motion.div>
              <motion.div variants={menuItemVariants}>
                <NavLink href="#contact" onClick={closeMenu}>Contact</NavLink>
              </motion.div>
              <motion.div variants={menuItemVariants}>
                <Button 
                  onClick={() => {
                    onBookNowClick();
                    closeMenu();
                  }} 
                  className="bg-gold hover:bg-gold/90 text-navy w-full animated-button"
                >
                  Book Now
                </Button>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
