
import React, { useState } from 'react';

type Testimonial = {
  id: string;
  name: string;
  role: string;
  image: string;
  quote: string;
  rating: number;
};

const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "Anjali Sharma",
    role: "Wedding Client",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
    quote: "Rebekha Caters made our wedding day absolutely perfect. The food was exceptional, the presentation was beautiful, and the service was impeccable. Our guests are still talking about how amazing everything was!",
    rating: 5
  },
  {
    id: "2",
    name: "Rahul Patel",
    role: "Corporate Event",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
    quote: "We've hired Rebekha Caters for multiple corporate events, and they never disappoint. Their attention to detail, professionalism, and ability to accommodate our diverse dietary requirements has made them our go-to caterer.",
    rating: 5
  },
  {
    id: "3",
    name: "Meera Reddy",
    role: "Birthday Party",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1976&q=80",
    quote: "The team at Rebekha Caters went above and beyond for my son's 18th birthday. They crafted a special menu that catered to both teenagers and adults. The live food stations were a hit!",
    rating: 4
  },
  {
    id: "4",
    name: "Arjun Mehta",
    role: "Family Gathering",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
    quote: "I was impressed by the way Rebekha and her team handled our family reunion. From planning to execution, everything was smooth. The food brought together three generations with varied tastes - truly a remarkable feat!",
    rating: 5
  },
];

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  return (
    <section id="testimonials" className="section-padding bg-burgundy/5">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-burgundy font-medium">Client Stories</span>
          <h2 className="section-title">Testimonials</h2>
          <p className="section-subtitle mx-auto">
            Here's what our valued clients have to say about their experience with Rebekha Caters.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative bg-white rounded-2xl shadow-xl p-8 md:p-12 mb-12">
            {/* Quote mark */}
            <div className="absolute top-6 left-6 text-6xl text-burgundy/10 font-serif">
              "
            </div>
            
            <div className="relative z-10">
              <div className="flex flex-col md:flex-row md:items-center gap-6 md:gap-10 mb-8">
                <div className="flex-shrink-0">
                  <img 
                    src={testimonials[activeIndex].image} 
                    alt={testimonials[activeIndex].name} 
                    className="w-20 h-20 rounded-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="font-serif font-bold text-xl text-burgundy">{testimonials[activeIndex].name}</h3>
                  <p className="text-gray-600">{testimonials[activeIndex].role}</p>
                  <div className="flex mt-2">
                    {[...Array(5)].map((_, i) => (
                      <svg 
                        key={i}
                        xmlns="http://www.w3.org/2000/svg" 
                        width="16" 
                        height="16" 
                        viewBox="0 0 24 24" 
                        fill={i < testimonials[activeIndex].rating ? "currentColor" : "none"} 
                        stroke="currentColor" 
                        strokeWidth="1.5" 
                        className={i < testimonials[activeIndex].rating ? "text-yellow-500" : "text-gray-300"}
                      >
                        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
                      </svg>
                    ))}
                  </div>
                </div>
              </div>
              
              <blockquote className="text-gray-700 text-lg italic mb-6">
                {testimonials[activeIndex].quote}
              </blockquote>
            </div>
          </div>
          
          <div className="flex justify-center gap-3">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === activeIndex ? "bg-burgundy scale-125" : "bg-burgundy/30"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
          
          <div className="flex justify-center mt-8 gap-4">
            <button
              onClick={handlePrev}
              className="p-2 rounded-full bg-white shadow-md hover:bg-burgundy/5 transition-colors"
              aria-label="Previous testimonial"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-burgundy">
                <path d="m15 18-6-6 6-6"/>
              </svg>
            </button>
            <button
              onClick={handleNext}
              className="p-2 rounded-full bg-white shadow-md hover:bg-burgundy/5 transition-colors"
              aria-label="Next testimonial"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-burgundy">
                <path d="m9 18 6-6-6-6"/>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
