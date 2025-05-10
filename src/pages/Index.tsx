
import React, { useState } from 'react';
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

const Index = () => {
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);

  const handleOpenBookingModal = () => {
    setIsBookingModalOpen(true);
  };

  const handleCloseBookingModal = () => {
    setIsBookingModalOpen(false);
  };

  return (
    <div className="min-h-screen">
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
    </div>
  );
};

export default Index;
