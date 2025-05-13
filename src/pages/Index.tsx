
import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import AboutUs from '../components/AboutUs';
import Menu from '../components/Menu';
import Services from '../components/Services';
import Testimonials from '../components/Testimonials';
import Gallery from '../components/Gallery';
import ContactForm from '../components/ContactForm';
import Footer from '../components/Footer';
import BookingModal from '../components/BookingModal';
import { Toaster } from "@/components/ui/toaster";
import SideNavigation from '../components/SideNavigation';

// Add global styles for consistent section padding
import '../styles/global.css';

const Index = () => {
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);

  useEffect(() => {
    // Set the document title
    document.title = "Rebekah Catering - Premium Food Services";
    
    // Scroll to top when page loads
    window.scrollTo(0, 0);
  }, []);

  const handleOpenBookingModal = () => {
    setIsBookingModalOpen(true);
  };

  const handleCloseBookingModal = () => {
    setIsBookingModalOpen(false);
  };

  return (
    <div className="min-h-screen flex bg-navy">
      <SideNavigation onBookNowClick={handleOpenBookingModal} />
      <div className="flex-1 overflow-x-hidden">
        <Header onBookNowClick={handleOpenBookingModal} />
        <Hero onBookNowClick={handleOpenBookingModal} />
        <AboutUs />
        <Services onBookNowClick={handleOpenBookingModal} />
        <Menu />
        <Testimonials />
        <Gallery />
        <ContactForm />
        <Footer />
        <BookingModal 
          isOpen={isBookingModalOpen} 
          onClose={handleCloseBookingModal} 
        />
        <Toaster />
      </div>
    </div>
  );
};

export default Index;
