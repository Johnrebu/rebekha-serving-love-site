
import React from 'react';
import { Button } from "@/components/ui/button";

// Event type definition
type EventType = {
  id: string;
  title: string;
  description: string;
  image: string;
  features: string[];
};

// Event data
const eventServices: EventType[] = [
  {
    id: "1",
    title: "Weddings",
    description: "Craft a memorable culinary experience for your special day with our customizable wedding catering packages.",
    image: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    features: [
      "Customized menu planning",
      "Elegant presentation",
      "Professional service staff",
      "Complete setup and cleanup"
    ]
  },
  {
    id: "2",
    title: "Corporate Events",
    description: "Impress clients and reward employees with professional catering services for meetings, conferences, and office parties.",
    image: "https://images.unsplash.com/photo-1511578314322-379afb476865?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80",
    features: [
      "Breakfast and lunch options",
      "Executive dining experiences",
      "Team building cooking events",
      "Drop-off catering available"
    ]
  },
  {
    id: "3",
    title: "Private Celebrations",
    description: "From birthdays to anniversaries, make your personal milestone celebrations unforgettable with our gourmet catering.",
    image: "https://images.unsplash.com/photo-1470753323753-3f8091bb0232?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    features: [
      "Theme-based menu options",
      "Special dietary accommodations",
      "Dessert stations and cake service",
      "Bartending services"
    ]
  },
  {
    id: "4",
    title: "Cultural Events",
    description: "Celebrate your culture and traditions with authentic cuisine prepared by our experienced culinary team.",
    image: "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    features: [
      "Traditional recipe preparation",
      "Authentic ingredients sourcing",
      "Cultural presentation styles",
      "Festival-specific menus"
    ]
  }
];

export default function EventsServices({ onBookNowClick }: { onBookNowClick: () => void }) {
  return (
    <section id="services" className="section-padding bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-burgundy font-medium">What We Offer</span>
          <h2 className="section-title">Events & Services</h2>
          <p className="section-subtitle mx-auto">
            From intimate gatherings to grand celebrations, we cater to all types of events with our exceptional culinary services.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-16">
          {eventServices.map((event) => (
            <div 
              key={event.id}
              className="bg-softcream rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all group"
            >
              <div className="relative h-64">
                <img 
                  src={event.image} 
                  alt={event.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-6">
                  <h3 className="text-white font-serif font-bold text-2xl">{event.title}</h3>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-700 mb-4">{event.description}</p>
                <ul className="space-y-2 mb-6">
                  {event.features.map((feature, index) => (
                    <li key={index} className="flex items-center text-gray-700">
                      <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        width="16" 
                        height="16" 
                        viewBox="0 0 24 24" 
                        fill="none" 
                        stroke="currentColor" 
                        strokeWidth="2" 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        className="text-burgundy mr-2"
                      >
                        <path d="M20 6 9 17l-5-5"/>
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button 
                  className="w-full btn-outline"
                  onClick={onBookNowClick}
                >
                  Book This Service
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Services */}
        <div className="bg-burgundy/10 rounded-2xl p-8 md:p-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="font-serif text-2xl md:text-3xl font-bold text-burgundy mb-4">Our Additional Services</h3>
              <p className="text-gray-700 mb-6">
                Beyond our standard catering packages, we offer a range of complementary services to elevate your event experience:
              </p>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="bg-burgundy rounded-full p-1 mr-3 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white"><path d="M20 6 9 17l-5-5"/></svg>
                  </div>
                  <div>
                    <h4 className="font-medium text-lg">Live Cooking Stations</h4>
                    <p className="text-gray-600">Interactive food preparation right in front of your guests.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-burgundy rounded-full p-1 mr-3 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white"><path d="M20 6 9 17l-5-5"/></svg>
                  </div>
                  <div>
                    <h4 className="font-medium text-lg">Beverage Services</h4>
                    <p className="text-gray-600">Professional bartending and custom drink menus.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-burgundy rounded-full p-1 mr-3 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white"><path d="M20 6 9 17l-5-5"/></svg>
                  </div>
                  <div>
                    <h4 className="font-medium text-lg">Event Styling</h4>
                    <p className="text-gray-600">Table setup, decor, and food presentation styling.</p>
                  </div>
                </li>
              </ul>
              <Button 
                className="mt-8 btn-primary"
                onClick={onBookNowClick}
              >
                Get Custom Quote
              </Button>
            </div>
            <div className="hidden md:block">
              <img 
                src="https://images.unsplash.com/photo-1625937286074-9ca519f7f6e4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
                alt="Additional services" 
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
