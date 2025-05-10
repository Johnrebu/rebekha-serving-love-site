
import React, { useState } from 'react';
import { Dialog, DialogContent } from "@/components/ui/dialog";

// Gallery image type
type GalleryImage = {
  id: string;
  src: string;
  alt: string;
  category: string;
};

// Sample gallery data
const galleryImages: GalleryImage[] = [
  {
    id: "1",
    src: "https://images.unsplash.com/photo-1555244162-803834f70033?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    alt: "Chef preparing food",
    category: "Preparation"
  },
  {
    id: "2",
    src: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    alt: "Elegant restaurant setup",
    category: "Events"
  },
  {
    id: "3",
    src: "https://images.unsplash.com/photo-1559304822-9eb2813c9844?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
    alt: "Catering desserts",
    category: "Desserts"
  },
  {
    id: "4",
    src: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1971&q=80",
    alt: "Indian dish",
    category: "Cuisine"
  },
  {
    id: "5",
    src: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80",
    alt: "Wedding dining setup",
    category: "Events"
  },
  {
    id: "6",
    src: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    alt: "Wedding catering",
    category: "Events"
  },
  {
    id: "7",
    src: "https://images.unsplash.com/photo-1530062845289-9109b2c9c868?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80",
    alt: "Plate setting",
    category: "Preparation"
  },
  {
    id: "8",
    src: "https://images.unsplash.com/photo-1482275548304-a58859dc31b7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    alt: "Corporate catering event",
    category: "Events"
  }
];

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);
  const [filter, setFilter] = useState("all");

  const filteredImages = filter === "all" 
    ? galleryImages 
    : galleryImages.filter(img => img.category === filter);

  return (
    <section id="gallery" className="section-padding bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-burgundy font-medium">Visual Experience</span>
          <h2 className="section-title">Our Gallery</h2>
          <p className="section-subtitle mx-auto">
            Take a visual journey through our culinary creations and catering events.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          <button
            onClick={() => setFilter("all")}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              filter === "all"
                ? "bg-burgundy text-white"
                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            }`}
          >
            All
          </button>
          <button
            onClick={() => setFilter("Events")}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              filter === "Events"
                ? "bg-burgundy text-white"
                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            }`}
          >
            Events
          </button>
          <button
            onClick={() => setFilter("Cuisine")}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              filter === "Cuisine"
                ? "bg-burgundy text-white"
                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            }`}
          >
            Cuisine
          </button>
          <button
            onClick={() => setFilter("Preparation")}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              filter === "Preparation"
                ? "bg-burgundy text-white"
                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            }`}
          >
            Preparation
          </button>
          <button
            onClick={() => setFilter("Desserts")}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              filter === "Desserts"
                ? "bg-burgundy text-white"
                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            }`}
          >
            Desserts
          </button>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {filteredImages.map((image) => (
            <div 
              key={image.id} 
              className="relative overflow-hidden rounded-lg cursor-pointer group"
              onClick={() => setSelectedImage(image)}
            >
              <img 
                src={image.src} 
                alt={image.alt}
                className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                <div className="p-4 w-full">
                  <span className="text-white font-medium">{image.alt}</span>
                  <p className="text-white/70 text-sm">{image.category}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Image Viewer Dialog */}
        <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
          <DialogContent className="max-w-4xl p-0 bg-transparent border-none">
            {selectedImage && (
              <img 
                src={selectedImage.src} 
                alt={selectedImage.alt} 
                className="w-full h-auto rounded-lg"
              />
            )}
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
}
