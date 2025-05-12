
import React from 'react';
import { Button } from "@/components/ui/button";

export default function Hero({
  onBookNowClick
}: {
  onBookNowClick: () => void;
}) {
  return (
    <section id="home" className="min-h-screen overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-2 min-h-screen">
        {/* Left column - Text content */}
        <div className="flex flex-col justify-center px-6 md:px-12 lg:px-16 py-16 lg:py-0 order-2 lg:order-1 bg-softcream">
          <div className="max-w-xl">
            <span className="uppercase tracking-widest text-sm font-medium text-olive">Explore Menu</span>
            <h1 className="mt-8 font-serif text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight">
              Rebekha Caterers
            </h1>
            <p className="mt-6 text-lg text-gray-700">
              Elevate your events with exquisite cuisine and impeccable service. 
              We create unforgettable culinary experiences for all your special occasions.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <Button onClick={onBookNowClick} className="bg-burgundy hover:bg-burgundy/90 text-white font-medium px-8 py-6 text-lg">
                Book Your Event
              </Button>
              <Button variant="outline" className="border-2 border-burgundy text-burgundy hover:bg-burgundy/10 px-8 py-6 text-lg font-medium" onClick={() => document.getElementById('menu')?.scrollIntoView({
              behavior: 'smooth'
            })}>
                Explore Our Menu
              </Button>
            </div>
          </div>
        </div>
        
        {/* Right column - Featured Image */}
        <div className="relative h-[60vh] lg:h-auto order-1 lg:order-2">
          <div className="absolute inset-0 z-0">
            <img 
              src="https://images.unsplash.com/photo-1555244162-803834f70033?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
              alt="Catering table" 
              className="w-full h-full object-cover" 
            />
          </div>
          
          <div className="absolute bottom-8 right-8 bg-white/80 backdrop-blur-sm p-4 rounded-md">
            <span className="block text-xs text-gray-600 font-medium">01 / 04</span>
            <span className="block text-sm font-medium text-gray-900 mt-1">SIGNATURE CUISINE</span>
          </div>
        </div>
      </div>

      {/* Scroll Down Indicator - only shown on desktop */}
      <div className="hidden lg:block absolute bottom-10 left-1/2 transform -translate-x-1/2 cursor-pointer animate-bounce">
        <a href="#about" className="flex flex-col items-center text-gray-500 hover:text-burgundy transition-colors" aria-label="Scroll Down">
          <span className="text-sm mb-2">Scroll</span>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 5v14M5 12l7 7 7-7" />
          </svg>
        </a>
      </div>
    </section>
  );
}
