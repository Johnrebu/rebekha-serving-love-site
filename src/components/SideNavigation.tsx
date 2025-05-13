
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from "@/components/ui/button";

interface SideNavigationProps {
  onBookNowClick: () => void;
}

const SideNavigation = ({ onBookNowClick }: SideNavigationProps) => {
  const [activeSection, setActiveSection] = useState("about");
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  
  // Update active section based on scroll position
  React.useEffect(() => {
    const sections = ["about", "menu", "services", "gallery", "contact"];
    
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200; // Add offset to improve detection
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const elementTop = element.offsetTop;
          const elementBottom = elementTop + element.clientHeight;
          
          if (scrollPosition >= elementTop && scrollPosition < elementBottom) {
            setActiveSection(section);
            break;
          }
        }
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: {
        duration: 0.5,
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.5 }
    }
  };

  const logoVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: { 
      scale: 1, 
      opacity: 1,
      transition: {
        duration: 0.5,
        delay: 0.2
      }
    }
  };

  return (
    <motion.div 
      className="hidden lg:flex flex-col w-64 bg-darkNavy border-r border-white/10 min-h-screen sticky top-0"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.div 
        className="p-6"
        variants={logoVariants}
      >
        <a href="#home" aria-label="Home">
          <div className="w-12 h-12 flex items-center justify-center bg-gold text-navy font-serif text-xl">
            R
          </div>
        </a>
      </motion.div>
      
      <motion.nav 
        className="flex-1 px-6 py-8"
        variants={containerVariants}
      >
        <ul className="space-y-10">
          <motion.li 
            variants={itemVariants}
            className={`border-l-2 ${activeSection === "about" ? "border-gold" : "border-transparent hover:border-gold/50"} pl-4 transition-colors`}
            onMouseEnter={() => setHoveredItem("about")}
            onMouseLeave={() => setHoveredItem(null)}
          >
            <a 
              href="#about" 
              className={`${activeSection === "about" ? "text-gold" : "text-gray-400 hover:text-gold/80"} font-medium uppercase tracking-wider text-sm transition-colors`}
            >
              About
              {(hoveredItem === "about" || activeSection === "about") && (
                <motion.div 
                  layoutId="outline"
                  className="absolute -left-0.5 top-0 bottom-0 w-0.5 bg-gold"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.2 }}
                />
              )}
            </a>
          </motion.li>
          <motion.li 
            variants={itemVariants}
            className={`border-l-2 ${activeSection === "menu" ? "border-gold" : "border-transparent hover:border-gold/50"} pl-4 transition-colors`}
            onMouseEnter={() => setHoveredItem("menu")}
            onMouseLeave={() => setHoveredItem(null)}
          >
            <a 
              href="#menu" 
              className={`${activeSection === "menu" ? "text-gold" : "text-gray-400 hover:text-gold/80"} font-medium uppercase tracking-wider text-sm transition-colors`}
            >
              Cuisine
            </a>
          </motion.li>
          <motion.li 
            variants={itemVariants}
            className={`border-l-2 ${activeSection === "services" ? "border-gold" : "border-transparent hover:border-gold/50"} pl-4 transition-colors`}
            onMouseEnter={() => setHoveredItem("services")}
            onMouseLeave={() => setHoveredItem(null)}
          >
            <a 
              href="#services" 
              className={`${activeSection === "services" ? "text-gold" : "text-gray-400 hover:text-gold/80"} font-medium uppercase tracking-wider text-sm transition-colors`}
            >
              Services
            </a>
          </motion.li>
          <motion.li 
            variants={itemVariants}
            className={`border-l-2 ${activeSection === "gallery" ? "border-gold" : "border-transparent hover:border-gold/50"} pl-4 transition-colors group`}
            onMouseEnter={() => setHoveredItem("gallery")}
            onMouseLeave={() => setHoveredItem(null)}
          >
            <a 
              href="#gallery" 
              className={`${activeSection === "gallery" ? "text-gold" : "text-gray-400 hover:text-gold/80"} font-medium uppercase tracking-wider text-sm flex justify-between items-center`}
            >
              Gallery
              <motion.svg 
                xmlns="http://www.w3.org/2000/svg" 
                width="16" 
                height="16" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                className="opacity-0 group-hover:opacity-100 transition-opacity"
                animate={{ rotate: (hoveredItem === "gallery" || activeSection === "gallery") ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                <polyline points="6 9 12 15 18 9"></polyline>
              </motion.svg>
            </a>
            <motion.ul 
              className="mt-2 ml-2 space-y-2"
              initial={{ height: 0, opacity: 0 }}
              animate={{ 
                height: (hoveredItem === "gallery" || activeSection === "gallery") ? "auto" : 0,
                opacity: (hoveredItem === "gallery" || activeSection === "gallery") ? 1 : 0
              }}
              transition={{ duration: 0.3 }}
            >
              <motion.li variants={itemVariants}>
                <a href="#gallery" onClick={() => window.dispatchEvent(new CustomEvent('filter-gallery', {detail: 'Vegetarian'}))} className="text-gray-500 hover:text-gold text-xs uppercase block py-1">
                  - Vegetarian
                </a>
              </motion.li>
              <motion.li variants={itemVariants}>
                <a href="#gallery" onClick={() => window.dispatchEvent(new CustomEvent('filter-gallery', {detail: 'Non-vegetarian'}))} className="text-gray-500 hover:text-gold text-xs uppercase block py-1">
                  - Non-Vegetarian
                </a>
              </motion.li>
              <motion.li variants={itemVariants}>
                <a href="#gallery" onClick={() => window.dispatchEvent(new CustomEvent('filter-gallery', {detail: 'Desserts'}))} className="text-gray-500 hover:text-gold text-xs uppercase block py-1">
                  - Desserts
                </a>
              </motion.li>
            </motion.ul>
          </motion.li>
          <motion.li 
            variants={itemVariants}
            className={`border-l-2 ${activeSection === "contact" ? "border-gold" : "border-transparent hover:border-gold/50"} pl-4 transition-colors`}
            onMouseEnter={() => setHoveredItem("contact")}
            onMouseLeave={() => setHoveredItem(null)}
          >
            <a 
              href="#contact" 
              className={`${activeSection === "contact" ? "text-gold" : "text-gray-400 hover:text-gold/80"} font-medium uppercase tracking-wider text-sm transition-colors`}
            >
              Contact
            </a>
          </motion.li>
        </ul>
      </motion.nav>
      
      <motion.div 
        className="p-6"
        variants={itemVariants}
      >
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Button 
            onClick={onBookNowClick} 
            className="bg-gold text-navy border-2 border-gold hover:bg-transparent hover:text-gold w-full uppercase tracking-wider font-medium text-sm transition-all duration-300"
          >
            Book Now
          </Button>
        </motion.div>
      </motion.div>
      
      {/* Social links */}
      <div className="p-6 flex justify-center space-x-4">
        {["facebook", "instagram", "twitter"].map((social, index) => (
          <motion.a
            key={social}
            href="#"
            className="text-gray-400 hover:text-gold transition-colors"
            initial={{ opacity: 0, y: 10 }}
            animate={{ 
              opacity: 1, 
              y: 0,
              transition: { delay: 0.7 + (index * 0.1) }
            }}
            whileHover={{ scale: 1.2, rotate: 5 }}
          >
            <span className="sr-only">{social}</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor" stroke="none">
              {social === "facebook" && <path d="M18.6668 6.67334C18.0002 7.00001 17.3468 7.13268 16.6668 7.33334C15.9195 6.49001 14.8115 6.44334 13.7468 6.84201C12.6822 7.24068 11.9848 8.21534 12.0002 9.33334V10C9.83683 10.0553 7.91016 9.07001 6.66683 7.33334C6.66683 7.33334 3.87883 12.2887 9.3335 14.6667C8.0855 15.498 6.84083 16.0587 5.3335 16C7.53883 17.202 9.94216 17.6153 12.0228 17.0113C14.4095 16.318 16.3708 14.5293 17.1235 11.85C17.348 11.0351 17.4595 10.1932 17.4548 9.34801C17.4535 9.18201 18.4615 7.50001 18.6668 6.67268V6.67334Z" />}
              {social === "instagram" && <path d="M16.19 2H7.81C4.17 2 2 4.17 2 7.81V16.18C2 19.83 4.17 22 7.81 22H16.18C19.82 22 21.99 19.83 21.99 16.19V7.81C22 4.17 19.83 2 16.19 2ZM12 15.88C9.86 15.88 8.12 14.14 8.12 12C8.12 9.86 9.86 8.12 12 8.12C14.14 8.12 15.88 9.86 15.88 12C15.88 14.14 14.14 15.88 12 15.88ZM17.92 6.88C17.87 7 17.8 7.11 17.71 7.21C17.61 7.3 17.5 7.37 17.38 7.42C17.26 7.47 17.13 7.5 17 7.5C16.73 7.5 16.48 7.4 16.29 7.21C16.2 7.11 16.13 7 16.08 6.88C16.03 6.76 16 6.63 16 6.5C16 6.37 16.03 6.24 16.08 6.12C16.13 5.99 16.2 5.89 16.29 5.79C16.52 5.56 16.85 5.45 17.16 5.52C17.27 5.54 17.38 5.58 17.47 5.63C17.57 5.68 17.65 5.76 17.71 5.84C17.8 5.94 17.87 6.05 17.92 6.16C17.97 6.29 18 6.4 18 6.5C18 6.63 17.97 6.76 17.92 6.88Z"/>}
              {social === "twitter" && <path d="M19.633 7.997c.013.175.013.349.013.523 0 5.325-4.053 11.461-11.46 11.461-2.282 0-4.402-.661-6.186-1.809.324.037.636.05.973.05a8.07 8.07 0 0 0 5.001-1.721 4.036 4.036 0 0 1-3.767-2.793c.249.037.499.062.761.062.361 0 .724-.05 1.061-.137a4.027 4.027 0 0 1-3.23-3.953v-.05c.537.299 1.16.486 1.82.511a4.022 4.022 0 0 1-1.796-3.354c0-.748.199-1.434.548-2.032a11.457 11.457 0 0 0 8.306 4.215c-.062-.3-.1-.611-.1-.923a4.026 4.026 0 0 1 4.028-4.028c1.16 0 2.207.486 2.943 1.272a7.957 7.957 0 0 0 2.556-.973 4.02 4.02 0 0 1-1.771 2.22 8.073 8.073 0 0 0 2.319-.624 8.645 8.645 0 0 1-2.019 2.083z"/>}
            </svg>
          </motion.a>
        ))}
      </div>
    </motion.div>
  );
};

export default SideNavigation;
