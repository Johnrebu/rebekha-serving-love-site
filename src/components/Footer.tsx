import React from 'react';
import { Phone, MapPin, Mail } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-serif font-bold mb-6">Rebekha Caterers</h3>
            <p className="italic mb-4">"Serving Love"</p>
            <p className="text-gray-300 mb-6">
              We believe in creating unforgettable moments through exceptional food and service.
            </p>
            <div className="flex items-center space-x-4">
              <a href="#" className="text-white hover:text-burgundy">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-facebook"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
              </a>
              <a href="#" className="text-white hover:text-burgundy">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-instagram"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
              </a>
              <a href="#" className="text-white hover:text-burgundy">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-twitter"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-serif font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <a href="#home" className="text-gray-300 hover:text-white transition-colors">Home</a>
              </li>
              <li>
                <a href="#about" className="text-gray-300 hover:text-white transition-colors">About Us</a>
              </li>
              <li>
                <a href="#menu" className="text-gray-300 hover:text-white transition-colors">Our Menu</a>
              </li>
              <li>
                <a href="#services" className="text-gray-300 hover:text-white transition-colors">Events & Services</a>
              </li>
              <li>
                <a href="#testimonials" className="text-gray-300 hover:text-white transition-colors">Testimonials</a>
              </li>
              <li>
                <a href="#gallery" className="text-gray-300 hover:text-white transition-colors">Gallery</a>
              </li>
              <li>
                <a href="#contact" className="text-gray-300 hover:text-white transition-colors">Contact Us</a>
              </li>
            </ul>
          </div>
          
          {/* Contact Info - Updated email and phone */}
          <div>
            <h3 className="text-xl font-serif font-semibold mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="mr-3 h-6 w-6 text-burgundy" />
                <span className="text-gray-300">No.19, Perumal Kovil Street, Irumbuliyur, West Tambaram, Chennai-45</span>
              </li>
              <li className="flex items-center">
                <Phone className="mr-3 h-6 w-6 text-burgundy" />
                <a href="tel:+919445435102" className="text-gray-300 hover:text-white transition-colors">
                  +91 9445435102
                </a>
              </li>
              <li className="flex items-center">
                <Mail className="mr-3 h-6 w-6 text-burgundy" />
                <a href="mailto:christonancy70@gmail.com" className="text-gray-300 hover:text-white transition-colors">
                  christonancy70@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <hr className="border-gray-700 my-10" />
        
        <div className="text-center text-gray-400">
          <p>© {currentYear} Rebekha Caterers. All Rights Reserved.</p>
          <p className="mt-2 text-sm">
            <a href="#" className="hover:text-white">Privacy Policy</a> | <a href="#" className="hover:text-white">Terms of Service</a>
          </p>
        </div>
      </div>
    </footer>
  );
}
