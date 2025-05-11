
import React, { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

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

// Expanded menu data with more items
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
  // Additional vegetarian items
  {
    id: "7",
    name: "Dal Makhani",
    category: "Main Course",
    description: "Creamy black lentils slow-cooked with butter and spices.",
    price: "₹180",
    image: "https://images.unsplash.com/photo-1626132647523-66d1b8f5a874?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    isVeg: true,
  },
  {
    id: "8",
    name: "Palak Paneer",
    category: "Main Course",
    description: "Cottage cheese cubes in a pureed spinach gravy with aromatic spices.",
    price: "₹210",
    image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    isVeg: true,
  },
  {
    id: "9",
    name: "Chole Bhature",
    category: "Main Course",
    description: "Spicy chickpea curry served with deep-fried bread.",
    price: "₹190",
    image: "https://images.unsplash.com/photo-1626777571937-68d5c9c8c8d7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1780&q=80",
    isVeg: true,
  },
  // Additional non-vegetarian items
  {
    id: "10",
    name: "Chicken Tikka Masala",
    category: "Main Course",
    description: "Grilled chicken pieces in a spiced curry sauce.",
    price: "₹260",
    image: "https://images.unsplash.com/photo-1588166524941-3bf61a9c41db?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1484&q=80",
    isVeg: false,
  },
  {
    id: "11",
    name: "Mutton Rogan Josh",
    category: "Main Course",
    description: "Slow-cooked lamb in an aromatic Kashmiri chili-based gravy.",
    price: "₹290",
    image: "https://images.unsplash.com/photo-1568376794508-ae52c6ab3929?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    isVeg: false,
  },
  {
    id: "12",
    name: "Prawn Curry",
    category: "Main Course",
    description: "Juicy prawns cooked in a flavorful coconut milk-based curry.",
    price: "₹300",
    image: "https://images.unsplash.com/photo-1613844237701-8f3664fc2eff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1964&q=80",
    isVeg: false,
  }
];

export default function Menu() {
  const { toast } = useToast();
  const [activeTab, setActiveTab] = useState("all");
  
  const filteredMenu = activeTab === "all" 
    ? menuItems 
    : activeTab === "veg" 
      ? menuItems.filter(item => item.isVeg) 
      : menuItems.filter(item => !item.isVeg);

  // Function to generate a simple PDF menu and trigger download
  const handleDownloadMenu = () => {
    // Create a simple text content for the PDF
    const menuContent = menuItems.map(item => 
      `${item.name} (${item.isVeg ? 'Veg' : 'Non-Veg'}) - ${item.price}\n${item.description}\n\n`
    ).join('');

    const menuText = `REBEKHA CATERERS MENU\n\n${menuContent}\n\nContact us: christonancy70@gmail.com | Phone: 9445435102`;
    
    // Convert text to blob
    const blob = new Blob([menuText], { type: 'text/plain' });
    
    // Create download link
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = 'rebekha-caterers-menu.txt';
    
    // Append to body, click and remove
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
    toast({
      title: "Menu Downloaded!",
      description: "Thank you for downloading our full menu. Enjoy exploring our delicious offerings!",
    });
  };

  return (
    <section id="menu" className="section-padding bg-cream py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-burgundy font-medium">Delicious Options</span>
          <h2 className="text-4xl font-serif font-bold mt-2 mb-4">Our Menu</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
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
          <Button 
            onClick={handleDownloadMenu}
            className="bg-burgundy hover:bg-burgundy/90 text-white font-medium px-6 py-2"
          >
            Download Full Menu
          </Button>
        </div>
      </div>
    </section>
  );
}
