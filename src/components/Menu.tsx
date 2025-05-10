
import React, { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";

// Menu item type
type MenuItem = {
  id: string;
  name: string;
  category: string;
  description: string;
  price: string;
  image: string;
  isVeg: boolean;
};

// Sample menu data
const menuItems: MenuItem[] = [
  {
    id: "1",
    name: "Paneer Butter Masala",
    category: "Main Course",
    description: "Cottage cheese cubes in a rich, creamy tomato gravy.",
    price: "₹220",
    image: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1971&q=80",
    isVeg: true,
  },
  {
    id: "2",
    name: "Vegetable Biryani",
    category: "Rice",
    description: "Aromatic rice cooked with fresh vegetables and authentic spices.",
    price: "₹180",
    image: "https://images.unsplash.com/photo-1589302168068-964664d93dc0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
    isVeg: true,
  },
  {
    id: "3",
    name: "Butter Chicken",
    category: "Main Course",
    description: "Tender chicken pieces in a velvety tomato and butter gravy.",
    price: "₹250",
    image: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    isVeg: false,
  },
  {
    id: "4",
    name: "Chicken Biryani",
    category: "Rice",
    description: "Fragrant rice layered with marinated chicken and aromatic spices.",
    price: "₹220",
    image: "https://images.unsplash.com/photo-1633945499351-9c77145141ad?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    isVeg: false,
  },
  {
    id: "5",
    name: "Malai Kofta",
    category: "Main Course",
    description: "Soft potato and paneer dumplings in a creamy tomato sauce.",
    price: "₹210",
    image: "https://images.unsplash.com/photo-1567188040759-fb8a883dc6d6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2017&q=80",
    isVeg: true,
  },
  {
    id: "6",
    name: "Fish Curry",
    category: "Main Course",
    description: "Fresh fish simmered in a tangy coconut-based curry.",
    price: "₹270",
    image: "https://images.unsplash.com/photo-1626500264797-26eda07ba72d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    isVeg: false,
  },
];

export default function Menu() {
  const [activeTab, setActiveTab] = useState("all");
  
  const filteredMenu = activeTab === "all" 
    ? menuItems 
    : activeTab === "veg" 
      ? menuItems.filter(item => item.isVeg) 
      : menuItems.filter(item => !item.isVeg);

  return (
    <section id="menu" className="section-padding bg-cream">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-burgundy font-medium">Delicious Options</span>
          <h2 className="section-title">Our Menu</h2>
          <p className="section-subtitle mx-auto">
            Explore our wide range of vegetarian and non-vegetarian delicacies, crafted with love and finest ingredients.
          </p>
        </div>

        <Tabs defaultValue="all" className="w-full max-w-3xl mx-auto mb-12">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger 
              value="all" 
              onClick={() => setActiveTab("all")}
              className="text-lg"
            >
              All
            </TabsTrigger>
            <TabsTrigger 
              value="veg" 
              onClick={() => setActiveTab("veg")}
              className="text-lg"
            >
              Vegetarian
            </TabsTrigger>
            <TabsTrigger 
              value="nonveg" 
              onClick={() => setActiveTab("nonveg")}
              className="text-lg"
            >
              Non-Vegetarian
            </TabsTrigger>
          </TabsList>
        </Tabs>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredMenu.map((item) => (
            <div key={item.id} className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="relative h-60">
                <img 
                  src={item.image} 
                  alt={item.name} 
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 right-4 bg-white rounded-full p-1">
                  {item.isVeg ? (
                    <div className="w-5 h-5 border border-green-600 flex items-center justify-center rounded-full">
                      <div className="w-3 h-3 bg-green-600 rounded-full"></div>
                    </div>
                  ) : (
                    <div className="w-5 h-5 border border-red-600 flex items-center justify-center rounded-full">
                      <div className="w-3 h-3 bg-red-600 rounded-full"></div>
                    </div>
                  )}
                </div>
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-serif font-bold text-xl">{item.name}</h3>
                  <span className="font-serif font-bold text-burgundy">{item.price}</span>
                </div>
                <p className="text-gray-600 text-sm mb-4">{item.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-xs font-medium px-2 py-1 bg-olive/10 text-olive rounded-full">
                    {item.category}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <p className="text-gray-600 mb-6">
            Explore our full menu options or request custom dishes for your special event.
          </p>
          <Button className="btn-primary">
            Download Full Menu
          </Button>
        </div>
      </div>
    </section>
  );
}
