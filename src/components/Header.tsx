
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
      className="text-gray-800 hover:text-burgundy transition-colors duration-300 font-medium"
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
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'}`}>
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <div className="flex items-center">
          <a href="#home" className="flex items-center">
            <h1 className="text-xl md:text-2xl font-bold text-burgundy">Rebekha Caterers</h1>
          </a>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <NavLink href="#home">Home</NavLink>
          <NavLink href="#about">About Us</NavLink>
          <NavLink href="#menu">Our Menu</NavLink>
          <NavLink href="#services">Events & Services</NavLink>
          <NavLink href="#testimonials">Testimonials</NavLink>
          <NavLink href="#gallery">Gallery</NavLink>
          <NavLink href="#contact">Contact</NavLink>
          <Button 
            onClick={onBookNowClick} 
            className="bg-burgundy hover:bg-burgundy/90 text-white rounded-md"
          >
            Book Now
          </Button>
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={toggleMenu}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white absolute top-16 left-0 right-0 shadow-md animate-fade-in">
          <div className="container mx-auto px-4 py-6 flex flex-col space-y-4">
            <NavLink href="#home" onClick={closeMenu}>Home</NavLink>
            <NavLink href="#about" onClick={closeMenu}>About Us</NavLink>
            <NavLink href="#menu" onClick={closeMenu}>Our Menu</NavLink>
            <NavLink href="#services" onClick={closeMenu}>Events & Services</NavLink>
            <NavLink href="#testimonials" onClick={closeMenu}>Testimonials</NavLink>
            <NavLink href="#gallery" onClick={closeMenu}>Gallery</NavLink>
            <NavLink href="#contact" onClick={closeMenu}>Contact</NavLink>
            <Button 
              onClick={() => {
                onBookNowClick();
                closeMenu();
              }} 
              className="bg-burgundy hover:bg-burgundy/90 text-white w-full"
            >
              Book Now
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
