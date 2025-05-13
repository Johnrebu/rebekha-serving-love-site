
import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

type ServiceProps = {
  onBookNowClick: () => void;
}

const Services = ({ onBookNowClick }: ServiceProps) => {
  const serviceCategories = [
    {
      title: "MATRIMONI",
      description: "Servizi di catering di alta qualità per il tuo giorno speciale",
      href: "#matrimoni"
    },
    {
      title: "PRIVATI",
      description: "Esperienze culinarie personalizzate per eventi privati",
      href: "#privati"
    },
    {
      title: "AZIENDALI",
      description: "Soluzioni professionali per eventi aziendali e corporate",
      href: "#aziendali"
    },
    {
      title: "EVENTI",
      description: "Catering per eventi speciali e celebrazioni",
      href: "#eventi"
    }
  ];

  return (
    <section id="services" className="py-24 px-4 bg-navy text-white">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-2xl font-serif text-gold mb-2">I NOSTRI SERVIZI</h2>
          <div className="w-24 h-0.5 bg-gold mx-auto"></div>
        </div>
        
        <div className="space-y-16">
          {serviceCategories.map((category, index) => (
            <div key={index} className="border-t border-gray-700 py-6">
              <a 
                href={category.href}
                className="flex justify-between items-center group"
              >
                <h3 className="text-4xl md:text-5xl font-serif text-gray-300 group-hover:text-gold transition-colors">
                  {category.title}
                </h3>
                <span className="text-gold opacity-0 group-hover:opacity-100 transition-opacity">
                  <ArrowRight size={24} />
                </span>
              </a>
              <p className="text-gray-400 mt-2 max-w-xl">{category.description}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <Button 
            onClick={onBookNowClick}
            className="border border-gold bg-transparent hover:bg-gold text-gold hover:text-navy px-10 py-6 uppercase tracking-wider text-sm font-medium"
          >
            RICHIESTA PREVENTIVO
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;
