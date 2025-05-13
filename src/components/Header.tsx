
import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

type NavLinkProps = {
  href: string;
  children: React.ReactNode;
  onClick?: () => void;
};

const NavLink = ({ href, children, onClick }: NavLinkProps) => {
  return (
    <a 
      href={href} 
      onClick={onClick}
      className="text-gold hover:text-white transition-colors duration-300 font-medium uppercase tracking-wider text-sm"
    >
      {children}
    </a>
  );
};

export default function Header({ onBookNowClick }: { onBookNowClick: () => void }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className={`lg:hidden fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-navy/95 backdrop-blur-sm shadow-md py-2' : 'bg-transparent py-4'}`}>
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <div className="flex items-center">
          <a href="#home" className="flex items-center">
            <div className="w-10 h-10 flex items-center justify-center bg-gold text-navy font-serif text-lg">
              R
            </div>
          </a>
        </div>

        {/* Mobile Menu Button */}
        <div className="lg:hidden">
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={toggleMenu}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            className="text-gold hover:text-white"
          >
            {isMenuOpen ? <X /> : <Menu />}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-navy/95 backdrop-blur-sm absolute top-16 left-0 right-0 shadow-md animate-fade-in">
          <div className="container mx-auto px-4 py-6 flex flex-col space-y-4">
            <NavLink href="#home" onClick={closeMenu}>Home</NavLink>
            <NavLink href="#about" onClick={closeMenu}>About</NavLink>
            <NavLink href="#services" onClick={closeMenu}>Services</NavLink>
            <NavLink href="#menu" onClick={closeMenu}>Cuisine</NavLink>
            <NavLink href="#gallery" onClick={closeMenu}>Gallery</NavLink>
            <NavLink href="#contact" onClick={closeMenu}>Contact</NavLink>
            <Button 
              onClick={() => {
                onBookNowClick();
                closeMenu();
              }} 
              className="border border-gold bg-transparent hover:bg-gold text-gold hover:text-navy uppercase tracking-wider"
            >
              Book Now
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
