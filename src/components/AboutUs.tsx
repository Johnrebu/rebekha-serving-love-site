import React from 'react';
import { Button } from "@/components/ui/button";
export default function AboutUs() {
  return <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-burgundy font-medium">Our Story</span>
          <h2 className="section-title">About Rebekha Caterers</h2>
          <p className="section-subtitle mx-auto">
            Discover our journey of passion, excellence, and culinary artistry.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="relative">
              <img src="https://images.unsplash.com/photo-1555244162-803834f70033?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" alt="Chef preparing food" className="rounded-lg shadow-lg w-full h-[500px] object-cover" />
              <div className="absolute -bottom-8 -right-8 bg-burgundy text-white p-6 rounded-lg shadow-lg hidden md:block">
                <p className="font-serif text-3xl">25+</p>
                <p className="text-sm">Years of Excellence</p>
              </div>
            </div>
          </div>
          
          <div className="lg:pl-8">
            <h3 className="text-2xl font-serif font-semibold mb-4 text-burgundy">Our Passion for Food</h3>
            <p className="text-gray-700 mb-6">Founded in 1998, Rebekha Caterers began as a small family venture with a big vision: to create exceptional catering experiences that blend traditional flavors with modern culinary techniques.</p>
            <p className="text-gray-700 mb-6">Our journey started in a modest kitchen in West Tambaram, where our founder, Christopher Durairaj & Nancy Navaneetham, began crafting his signature dishes using recipes passed down through generations. His commitment to quality and authentic flavors quickly gained recognition, and what started as catering for small family gatherings soon expanded to large-scale events.</p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="flex items-start">
                <div className="bg-olive/10 rounded-full p-3 mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-olive"><path d="M12 6c0-3.31-2.69-6-6-6S0 2.69 0 6c0 2.97 2.16 5.43 5 5.91v10.09a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1V11.91c2.84-.48 5-2.94 5-5.91z" /><path d="M12 6h4.5l5.5 2v4" /><path d="M16 12v4" /><path d="M20 16a2 2 0 0 0 0-4" /></svg>
                </div>
                <div>
                  <h4 className="font-serif font-semibold text-lg mb-1">Quality Ingredients</h4>
                  <p className="text-gray-600">We source only the freshest and highest quality ingredients.</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-olive/10 rounded-full p-3 mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-olive"><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></svg>
                </div>
                <div>
                  <h4 className="font-serif font-semibold text-lg mb-1">On-Time Delivery</h4>
                  <p className="text-gray-600">Punctuality is our promise for every event.</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-olive/10 rounded-full p-3 mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-olive"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" /></svg>
                </div>
                <div>
                  <h4 className="font-serif font-semibold text-lg mb-1">Made with Love</h4>
                  <p className="text-gray-600">Every dish is prepared with passion and care.</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-olive/10 rounded-full p-3 mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-olive"><path d="M4 11a9 9 0 0 1 9 9" /><path d="M4 4a16 16 0 0 1 16 16" /><circle cx="5" cy="19" r="1" /></svg>
                </div>
                <div>
                  <h4 className="font-serif font-semibold text-lg mb-1">Custom Menus</h4>
                  <p className="text-gray-600">Tailored menus to suit your preferences.</p>
                </div>
              </div>
            </div>
            
            <Button className="btn-primary" onClick={() => document.getElementById('contact')?.scrollIntoView({
            behavior: 'smooth'
          })}>
              Contact Us
            </Button>
          </div>
        </div>
      </div>
    </section>;
}