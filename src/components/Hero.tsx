
import React from 'react';
import { Button } from "@/components/ui/button";

export default function Hero({
  onBookNowClick
}: {
  onBookNowClick: () => void;
}) {
  return (
    <section id="home" className="min-h-screen overflow-hidden bg-navy">
      <div className="grid grid-cols-1 lg:grid-cols-2 min-h-screen">
        {/* Left column - Featured Image */}
        <div className="relative h-[60vh] lg:h-auto order-1">
          <div className="absolute inset-0 z-0">
            <img 
              src="https://images.unsplash.com/photo-1555244162-803834f70033?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
              alt="Catering table" 
              className="w-full h-full object-cover opacity-80" 
            />
            <div className="absolute inset-0 bg-navy/30"></div>
          </div>
        </div>
        
        {/* Right column - Text content */}
        <div className="flex flex-col justify-center px-6 md:px-12 lg:px-16 py-16 lg:py-0 order-2 bg-navy z-10">
          <div className="max-w-xl">
            <div className="flex flex-col items-center mb-8">
              <h4 className="text-gold uppercase tracking-widest text-sm font-medium mb-3">Prenota il tuo evento</h4>
              <div className="w-20 h-0.5 bg-gold"></div>
            </div>
            <h1 className="mt-8 font-serif text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight text-center">
              CONVIVIO
            </h1>
            <p className="mt-6 text-lg text-gray-300 text-center">
              Elevate your events with exquisite cuisine and impeccable service. 
              We create unforgettable culinary experiences for all your special occasions.
            </p>
            <div className="mt-10 flex justify-center">
              <Button onClick={onBookNowClick} className="border-2 border-gold bg-transparent hover:bg-gold text-gold hover:text-navy font-medium px-8 py-6 uppercase tracking-widest">
                Richiesta Preventivo
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <div className="hidden lg:block absolute bottom-10 left-1/2 transform -translate-x-1/2 cursor-pointer animate-bounce">
        <a href="#about" className="flex flex-col items-center text-gold hover:text-white transition-colors" aria-label="Scroll Down">
          <span className="text-sm mb-2">Scroll</span>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 5v14M5 12l7 7 7-7" />
          </svg>
        </a>
      </div>
    </section>
  );
}
