
import React from 'react';
import { Button } from "@/components/ui/button";

interface SideNavigationProps {
  onBookNowClick: () => void;
}

const SideNavigation = ({ onBookNowClick }: SideNavigationProps) => {
  return (
    <div className="hidden lg:flex flex-col w-64 bg-white border-r border-gray-200 min-h-screen sticky top-0">
      <div className="p-6">
        <a href="#home" aria-label="Home">
          <div className="w-12 h-12 flex items-center justify-center bg-burgundy text-white font-serif text-xl">
            R
          </div>
        </a>
      </div>
      
      <nav className="flex-1 px-6 py-8">
        <ul className="space-y-10">
          <li className="border-l-2 border-burgundy pl-4">
            <a href="#about" className="text-burgundy font-medium uppercase tracking-wider text-sm">
              About
            </a>
          </li>
          <li className="border-l-2 border-transparent hover:border-burgundy pl-4 transition-colors">
            <a href="#menu" className="text-gray-600 hover:text-burgundy font-medium uppercase tracking-wider text-sm">
              Cuisine
            </a>
          </li>
          <li className="border-l-2 border-transparent hover:border-burgundy pl-4 transition-colors">
            <a href="#services" className="text-gray-600 hover:text-burgundy font-medium uppercase tracking-wider text-sm">
              Services
            </a>
          </li>
          <li className="border-l-2 border-transparent hover:border-burgundy pl-4 transition-colors">
            <a href="#gallery" className="text-gray-600 hover:text-burgundy font-medium uppercase tracking-wider text-sm">
              Gallery
            </a>
          </li>
          <li className="border-l-2 border-transparent hover:border-burgundy pl-4 transition-colors">
            <a href="#contact" className="text-gray-600 hover:text-burgundy font-medium uppercase tracking-wider text-sm">
              Contact
            </a>
          </li>
        </ul>
      </nav>
      
      <div className="p-6">
        <Button 
          onClick={onBookNowClick} 
          className="bg-white text-burgundy border-2 border-burgundy hover:bg-burgundy hover:text-white w-full uppercase tracking-wider font-medium text-sm"
        >
          Book
        </Button>
      </div>
    </div>
  );
};

export default SideNavigation;
