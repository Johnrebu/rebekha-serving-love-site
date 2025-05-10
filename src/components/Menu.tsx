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
    // Create a hidden link element that simulates downloading a PDF
    const link = document.createElement('a');
    
    // In a real implementation, this would be a server URL to a generated PDF file
    // For demo purposes, we're creating a data URL
    link.href = 'data:application/pdf;base64,JVBERi0xLjMKJcTl8uXrCjMgMCBvYmoKPDwgL0ZpbHRlciAvRmxhdGVEZWNvZGUgL0xlbmd0aCAxNDcgPj4Kc3RyZWFtCnicXY7RCsIwDEX3+YoMtgr2D7aCH+BDnQMfYHQdgts0XQv+vdlaajiEe09yAkQIsF1uH7m4cTzho3iWgPPojhG2YCMqJQcbYX9SpKxWL0/MyjP8mVYzdjl5HcrNZoVigkbZgHJQGBFKj1ChPPwt1CfYpRgSLhGfPuerNaNuCnoaG60jXlZuUmY4bXhb5xAllRoqlBpq0A30KWUCZU4KZW5kc3RyZWFtCmVuZG9iagoxIDAgb2JqCjw8IC9UeXBlIC9QYWdlIC9QYXJlbnQgMiAwIFIgL1Jlc291cmNlcyA0IDAgUiAvQ29udGVudHMgMyAwIFIgPj4KZW5kb2JqCjQgMCBvYmoKPDwgL1Byb2NTZXQgWyAvUERGIC9UZXh0IF0gL0NvbG9yU3BhY2UgPDwgL0NzMSA1IDAgUiA+PiAvRm9udCA8PCAvVFQxIDYgMCBSID4+ID4+CmVuZG9iago3IDAgb2JqCjw8IC9OMSAvRGV2aWNlR3JheSA+PgplbmRvYmoKOCAwIG9iago8PCAvTGVuZ3RoIDI0NiA+PgpzdHJlYW0KL0NJREluaXQgL1Byb2NTZXQgZmluZHJlc291cmNlIGJlZ2luIDEyIGRpY3QgYmVnaW4gYmVnaW5jbWFwIC9DSURTeXN0ZW1JbmZvIDw8IC9SZWdpc3RyeSAoQWRvYmUpIC9PcmRlcmluZyAoVUNTKSAvU3VwcGxlbWVudCAwID4+IGRlZiAvQ01hcE5hbWUgL0Fkb2JlLUlkZW50aXR5LVVDUyBkZWYgL0NNYXBUeXBlIDIgZGVmIDEgYmVnaW5jb2Rlc3BhY2VyYW5nZSA8MDAwMD4gPEZGRkY+IGVuZGNvZGVzcGFjZXJhbmdlIDEgYmVnaW5iZnJhbmdlIDxFMDAzPjwwMDVDPiA8RTBBMz4gZW5kYmZyYW5nZSBlbmRjbWFwIENNYXBOYW1lIGN1cnJlbnRkaWN0IC9DTWFwIGRlZmluZXJlc291cmNlIHBvcCBlbmQgZW5kCmVuZHN0cmVhbQplbmRvYmoKMTAgMCBvYmoKPDwgL1R5cGUgL0ZvbnREZXNjcmlwdG9yIC9Gb250TmFtZSAvS1BYRlFEK0hlbHZldGljYSAvRmxhZ3MgMzIgL0ZvbnRCQm94IFstOTUxIC00ODEgMTQ0NSAxMTIyXSAvSXRhbGljQW5nbGUgMCAvQXNjZW50IDc3MCAvRGVzY2VudCAtMjMwIC9DYXBIZWlnaHQgNzE3IC9TdGVtViA5OCAvTGVhZGluZyAzMyAvWEhlaWdodCAyMjAgL1N0ZW1IIDg1IC9BdmdXaWR0aCAQ0QgL01heFdpZHRoIDExMTMgL0ZvbnRGaWxlMiAyMyAwIFIgPj4KZW5kb2JqCjExIDAgb2JqCjw8IC9UeXBlIC9Gb250IC9TdWJ0eXBlIC9DSURGb250VHlwZTIgL0Jhc2VGb250IC9UVDEgL0ZvbnREZXNjcmlwdG9yIDEwIDAgUiAvV1sgMCAgNzE4XSAzIFs5MThdIF0gL0NJRHN5c3RlbUluZm8gOCAwIFIgL0ZJRC9JUEF1dGggPj4KZW5kb2JqCjYgMCBvYmoKPDwgL1R5cGUgL0ZvbnQgL1N1YnR5cGUgL1R5cGUwIC9CYXNlRm9udCAvVFQxIC9FbmNvZGluZyAvSWRlbnRpdHktSCAvRGVzY2VuZGFudEZvbnRzIFsxMSAwIFJdIC9Ub1VuaWNvZGUgOCAwIFIgPj4KZW5kb2JqCjUgMCBvYmoKWyAvSUNDQmFzZWQgNyAwIFIgXQplbmRvYmoKMiAwIG9iago8PCAvVHlwZSAvUGFnZXMgL01lZGlhQm94IFswIDAgNjEyIDc5Ml0gL0NvdW50IDEgL0tpZHMgWyAxIDAgUiBdID4+CmVuZG9iagoxMiAwIG9iago8PCAvVHlwZSAvQ2F0YWxvZyAvUGFnZXMgMiAwIFIgPj4KZW5kb2JqCjEzIDAgb2JqCigoUmViZWtoYSBDYXRlcnMgTWVudSAtIFdlIHNlcnZlIGEgdmFyaWV0eSBvZiBkZWxpY2lvdXMgY3Vpc2luZSB0byBtYWtlIHlvdXIgZXZlbnRzIHNwZWNpYWwuKSkKZW5kb2JqCjE0IDAgb2JqCihgRHVtbXkgUERGIGZvciBGb29kIE1lbnVzKQplbmRvYmoKMTUgMCBvYmoKKERlbW9uc3RyYXRpb24pCmVuZG9iagoxNiAwIG9iagooaHR0cHM6Ly93d3cucmViZWtoYWNhdGVycy5jb20pCmVuZG9iagoxNyAwIG9iagooUmViZWtoYSBDYXRlcnMgTWVudSkKZW5kb2JqCjE4IDAgb2JqCihBZG9iZSBJbGx1c3RyYXRvciBDUzYgKE1hY2ludG9zaCkpCmVuZG9iagoxOSAwIG9iagooRDoyMDIyMTEwOTEyNDM1OSswMicwMCcpCmVuZG9iagoyMCAwIG9iagooKQplbmRvYmoKMjEgMCBvYmoKWyAoKSBdCmVuZG9iagoyMiAwIG9iago8PCAvUHJvZHVjZXIgMjMgMCBSIC9DcmVhdG9yIDI0IDAgUiAvQ3JlYXRpb25EYXRlIDI1IDAgUiAvTW9kRGF0ZSAyNSAwIFIgL1RpdGxlIDI2IDAgUiAvQXV0aG9yIDI3IDAgUiAvU3ViamVjdCAyOCAwIFIgL0tleXdvcmRzIDI5IDAgUiA+PgplbmRvYmoKeHJlZgowIDMwCjAwMDAwMDAwMDAgNjU1MzUgZiAKMDAwMDAwMDI1MiAwMDAwMCBuIAowMDAwMDAxNTM5IDAwMDAwIG4gCjAwMDAwMDAwMTUgMDAwMDAgbiAKMDAwMDAwMDMzOSAwMDAwMCBuIAowMDAwMDAxNTEzIDAwMDAwIG4gCjAwMDAwMDEzOTggMDAwMDAgbiAKMDAwMDAwMDQzOCAwMDAwMCBuIAowMDAwMDAwNDc5IDAwMDAwIG4gCjAwMDAwMDAwMDAgMDAwMDAgbiAKMDAwMDAwMDc3NCAwMDAwMCBuIAowMDAwMDAxMDgyIDAwMDAwIG4gCjAwMDAwMDE2MjIgMDAwMDAgbiAKMDAwMDAwMTY3MiAwMDAwMCBuIAowMDAwMDAxNzg1IDAwMDAwIG4gCjAwMDAwMDE4MjYgMDAwMDAgbiAKMDAwMDAwMTg1OSAwMDAwMCBuIAowMDAwMDAxOTA3IDAwMDAwIG4gCjAwMDAwMDE5NDMgMDAwMDAgbiAKMDAwMDAwMTk4NiAwMDAwMCBuIAowMDAwMDAyMDI2IDAwMDAwIG4gCjAwMDAwMDIwNDYgMDAwMDAgbiAKMDAwMDAwMjA3NCAwMDAwMCBuIAowMDAwMDAwMDAwIDAwMDAwIG4gCjAwMDAwMDAwMDAgMDAwMDAgbiAKMDAwMDAwMDAwMCAwMDAwMCBuIAowMDAwMDAwMDAwIDAwMDAwIG4gCjAwMDAwMDAwMDAgMDAwMDAgbiAKMDAwMDAwMDAwMCAwMDAwMCBuIAowMDAwMDAwMDAwIDAwMDAwIG4gCnRyYWlsZXIKPDwgL1NpemUgMzAgL1Jvb3QgMTIgMCBSIC9JbmZvIDIyIDAgUiAvSUQgWyA8ZjBlMjE2ZmViMjQ2NjI3MTc5MDE0ZGQ5N2FlNzYzYjU+IDxmMGUyMTZmZWIyNDY2MjcxNzkwMTRkZDk3YWU3NjNiNT4gXSA+PgpzdGFydHhyZWYKMjIxMQolJUVPRgo='; 
    
    link.download = 'rebekha-caters-menu.pdf';
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
