
import React from 'react';
import { Button } from "@/components/ui/button";
export default function Hero({
  onBookNowClick
}: {
  onBookNowClick: () => void;
}) {
  return <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img src="https://images.unsplash.com/photo-1555244162-803834f70033?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" alt="Catering table" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/60"></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10 mt-16">
        <div className="max-w-3xl mx-auto text-center">
          <span className="bg-burgundy/90 text-white px-4 py-1 rounded-full text-sm font-medium">Amazing Grace</span>
          <h1 className="mt-6 font-serif text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
            Rebekha Caterers
          </h1>
          <p className="mt-4 font-serif text-2xl md:text-3xl font-medium text-white italic">Delightfully Different, Surprisingly Delicious</p>
          <p className="mt-8 text-lg text-white/90">
            Elevate your events with exquisite cuisine and impeccable service. 
            We create unforgettable culinary experiences for all your special occasions.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <Button onClick={onBookNowClick} className="bg-burgundy hover:bg-burgundy/90 text-white font-medium px-8 py-6 text-lg">
              Book Your Event
            </Button>
            <Button variant="outline" className="border-2 border-white bg-white/20 text-white hover:bg-white/30 px-8 py-6 text-lg font-medium" onClick={() => document.getElementById('menu')?.scrollIntoView({
            behavior: 'smooth'
          })}>
              Explore Our Menu
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 cursor-pointer animate-bounce">
        <a href="#about" className="flex flex-col items-center text-white/80 hover:text-white transition-colors" aria-label="Scroll Down">
          <span className="text-sm mb-2">Scroll</span>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 5v14M5 12l7 7 7-7" />
          </svg>
        </a>
      </div>
    </section>;
}
