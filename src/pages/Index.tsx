
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Header from '../components/Header';
import Hero from '../components/Hero';
import AboutUs from '../components/AboutUs';
import Menu from '../components/Menu';
import EventsServices from '../components/EventsServices';
import Testimonials from '../components/Testimonials';
import Gallery from '../components/Gallery';
import ContactForm from '../components/ContactForm';
import Footer from '../components/Footer';
import BookingModal from '../components/BookingModal';
import { Toaster } from "@/components/ui/toaster";
import SideNavigation from '../components/SideNavigation';
import BackgroundGradient from '../components/BackgroundGradient';

// Add global styles for consistent section padding
import '../styles/global.css';

const Index = () => {
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    // Set the document title
    document.title = "Rebekah Catering - Premium Food Services";
    
    // Scroll to top when page loads
    window.scrollTo(0, 0);
    
    // Add a small delay to ensure smooth initial animation
    const timer = setTimeout(() => {
      setLoaded(true);
    }, 100);
    
    return () => clearTimeout(timer);
  }, []);

  const handleOpenBookingModal = () => {
    setIsBookingModalOpen(true);
  };

  const handleCloseBookingModal = () => {
    setIsBookingModalOpen(false);
  };

  // Initial animation variants
  const containerVariant = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      }
    }
  };

  return (
    <div className="min-h-screen flex bg-navy text-white">
      <BackgroundGradient />
      
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="hidden lg:block"
      >
        <SideNavigation onBookNowClick={handleOpenBookingModal} />
      </motion.div>
      
      <motion.div 
        className="flex-1 overflow-x-hidden"
        variants={containerVariant}
        initial="hidden"
        animate={loaded ? "visible" : "hidden"}
      >
        <Header onBookNowClick={handleOpenBookingModal} />
        <Hero onBookNowClick={handleOpenBookingModal} />
        <AboutUs />
        <Menu />
        <EventsServices onBookNowClick={handleOpenBookingModal} />
        <Testimonials />
        <Gallery />
        <ContactForm />
        <Footer />
        <BookingModal 
          isOpen={isBookingModalOpen} 
          onClose={handleCloseBookingModal} 
        />
        <Toaster />
      </motion.div>
    </div>
  );
};

export default Index;
