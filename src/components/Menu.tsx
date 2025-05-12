
import React, { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { Card, CardContent } from "@/components/ui/card";
import { ChefHat, Pizza } from "lucide-react";

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

// Expanded menu data with more items - now with 100 items total
const menuItems: MenuItem[] = [
  // Existing items (12 items)
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
    image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
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
    image: "https://images.unsplash.com/photo-1613844237701-8f3664fc2eff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fA%3D%3D&auto=format&fit=crop&w=1964&q=80",
    isVeg: false,
  },
  
  // New Vegetarian items (adding 44 more)
  {
    id: "13",
    name: "Pav Bhaji",
    category: "Main Course",
    description: "Mashed vegetable curry served with buttered bread rolls.",
    price: "₹160",
    image: "https://images.unsplash.com/photo-1606491956689-2ea866880c84?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1976&q=80",
    isVeg: true,
  },
  {
    id: "14",
    name: "Chana Masala",
    category: "Main Course",
    description: "Spiced chickpeas cooked in a tomato and onion gravy.",
    price: "₹170",
    image: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2036&q=80",
    isVeg: true,
  },
  {
    id: "15",
    name: "Aloo Gobi",
    category: "Main Course",
    description: "Potato and cauliflower dish cooked with Indian spices.",
    price: "₹160",
    image: "https://images.unsplash.com/photo-1613292443284-8d10ef9ade34?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
    isVeg: true,
  },
  {
    id: "16",
    name: "Vegetable Korma",
    category: "Main Course",
    description: "Mixed vegetables in a mild, creamy coconut-based sauce.",
    price: "₹190",
    image: "https://images.unsplash.com/photo-1631452180775-6964aa5d3d36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
    isVeg: true,
  },
  {
    id: "17",
    name: "Baingan Bharta",
    category: "Main Course",
    description: "Smoky eggplant mash cooked with onions, tomatoes and spices.",
    price: "₹180",
    image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    isVeg: true,
  },
  {
    id: "18",
    name: "Rajma Masala",
    category: "Main Course",
    description: "Kidney beans in a thick, spiced gravy popular in North India.",
    price: "₹170",
    image: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1971&q=80",
    isVeg: true,
  },
  {
    id: "19",
    name: "Veg Kadai",
    category: "Main Course",
    description: "Mixed vegetables in a spicy tomato and bell pepper gravy.",
    price: "₹190",
    image: "https://images.unsplash.com/photo-1505253716362-afaea1d3d1af?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
    isVeg: true,
  },
  {
    id: "20",
    name: "Saag Paneer",
    category: "Main Course",
    description: "Cottage cheese cubes in a pureed spinach gravy.",
    price: "₹210",
    image: "https://images.unsplash.com/photo-1596797038530-2c107aa4a186?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1975&q=80",
    isVeg: true,
  },
  {
    id: "21",
    name: "Paneer Tikka",
    category: "Starters",
    description: "Marinated cottage cheese cubes grilled in a tandoor.",
    price: "₹220",
    image: "https://images.unsplash.com/photo-1598449426314-8b02525e8733?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    isVeg: true,
  },
  {
    id: "22",
    name: "Gobi Manchurian",
    category: "Starters",
    description: "Crispy fried cauliflower tossed in a sweet and spicy sauce.",
    price: "₹180",
    image: "https://images.unsplash.com/photo-1604329760661-e71dc83f8f26?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    isVeg: true,
  },
  {
    id: "23",
    name: "Veg Spring Rolls",
    category: "Starters",
    description: "Crispy rolls filled with vegetables and served with dipping sauce.",
    price: "₹160",
    image: "https://images.unsplash.com/photo-1543339308-43e59d6b73a6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    isVeg: true,
  },
  {
    id: "24",
    name: "Veg Manchow Soup",
    category: "Soups",
    description: "Spicy and tangy soup with vegetables and crispy noodles.",
    price: "₹120",
    image: "https://images.unsplash.com/photo-1547592180-85f173990554?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
    isVeg: true,
  },
  {
    id: "25",
    name: "Tomato Soup",
    category: "Soups",
    description: "Classic tomato soup garnished with cream and herbs.",
    price: "₹100",
    image: "https://images.unsplash.com/photo-1603105037880-880cd4edfb0d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
    isVeg: true,
  },
  {
    id: "26",
    name: "Veg Fried Rice",
    category: "Rice",
    description: "Stir-fried rice with mixed vegetables and soy sauce.",
    price: "₹160",
    image: "https://images.unsplash.com/photo-1512058564366-18510be2db19?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1972&q=80",
    isVeg: true,
  },
  {
    id: "27",
    name: "Jeera Rice",
    category: "Rice",
    description: "Basmati rice tempered with cumin seeds and herbs.",
    price: "₹130",
    image: "https://images.unsplash.com/photo-1516714435131-44d6b64dc6a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2080&q=80",
    isVeg: true,
  },
  {
    id: "28",
    name: "Plain Naan",
    category: "Breads",
    description: "Soft leavened bread baked in tandoor.",
    price: "₹40",
    image: "https://images.unsplash.com/photo-1633377464980-1f195b4d2ccf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1972&q=80",
    isVeg: true,
  },
  {
    id: "29",
    name: "Butter Naan",
    category: "Breads",
    description: "Soft leavened bread baked in tandoor and brushed with butter.",
    price: "₹50",
    image: "https://images.unsplash.com/photo-1596797038530-2c107aa4a186?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1975&q=80",
    isVeg: true,
  },
  {
    id: "30",
    name: "Garlic Naan",
    category: "Breads",
    description: "Soft leavened bread baked in tandoor with garlic flavor.",
    price: "₹60",
    image: "https://images.unsplash.com/photo-1610725664285-7c57e6eeac3f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
    isVeg: true,
  },
  {
    id: "31",
    name: "Veg Hakka Noodles",
    category: "Chinese",
    description: "Stir-fried noodles with vegetables in Chinese style.",
    price: "₹170",
    image: "https://images.unsplash.com/photo-1634864572865-1cf8ff39da05?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
    isVeg: true,
  },
  {
    id: "32",
    name: "Veg Manchurian",
    category: "Chinese",
    description: "Vegetable balls in a spicy, sweet and sour sauce.",
    price: "₹190",
    image: "https://images.unsplash.com/photo-1593179241557-dc55b1629f7f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
    isVeg: true,
  },
  {
    id: "33",
    name: "Veg Momos",
    category: "Starters",
    description: "Steamed dumplings filled with vegetables, served with spicy sauce.",
    price: "₹140",
    image: "https://images.unsplash.com/photo-1563245159-f793f19d8c37?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
    isVeg: true,
  },
  {
    id: "34",
    name: "Veg Pulao",
    category: "Rice",
    description: "Fragrant rice cooked with mixed vegetables and mild spices.",
    price: "₹170",
    image: "https://images.unsplash.com/photo-1574484284002-952d92456975?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
    isVeg: true,
  },
  {
    id: "35",
    name: "Veg Kathi Roll",
    category: "Wraps",
    description: "Paratha wrapped with spiced vegetables and chutneys.",
    price: "₹150",
    image: "https://images.unsplash.com/photo-1533630654593-b211770a9152?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
    isVeg: true,
  },
  {
    id: "36",
    name: "Veg Grilled Sandwich",
    category: "Sandwiches",
    description: "Grilled sandwich with vegetables, cheese and chutneys.",
    price: "₹130",
    image: "https://images.unsplash.com/photo-1619860860774-1e2e14e33268?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
    isVeg: true,
  },
  {
    id: "37",
    name: "Veg Cutlet",
    category: "Starters",
    description: "Crispy fried mixed vegetable patties served with chutney.",
    price: "₹120",
    image: "https://images.unsplash.com/photo-1603103774832-a73bfc93baf3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
    isVeg: true,
  },
  {
    id: "38",
    name: "Vegetable Samosa",
    category: "Starters",
    description: "Crispy pastry filled with spiced potatoes and peas.",
    price: "₹40",
    image: "https://images.unsplash.com/photo-1601050690117-94f5f6fa8bd7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    isVeg: true,
  },
  {
    id: "39",
    name: "Masala Dosa",
    category: "South Indian",
    description: "Crispy rice crepe filled with spiced potatoes.",
    price: "₹160",
    image: "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
    isVeg: true,
  },
  {
    id: "40",
    name: "Idli Sambar",
    category: "South Indian",
    description: "Steamed rice cakes served with lentil soup and coconut chutney.",
    price: "₹120",
    image: "https://images.unsplash.com/photo-1610192244261-3f33de3f72e1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
    isVeg: true,
  },
  {
    id: "41",
    name: "Medu Vada",
    category: "South Indian",
    description: "Crispy lentil donuts served with sambar and coconut chutney.",
    price: "₹130",
    image: "https://images.unsplash.com/photo-1630383249896-479ebe6167cc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
    isVeg: true,
  },
  {
    id: "42",
    name: "Upma",
    category: "South Indian",
    description: "Savory semolina porridge with vegetables and spices.",
    price: "₹100",
    image: "https://images.unsplash.com/photo-1622040806062-dd138f8e9d8f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
    isVeg: true,
  },
  {
    id: "43",
    name: "Coconut Rice",
    category: "Rice",
    description: "Rice cooked with grated coconut and tempered with spices.",
    price: "₹150",
    image: "https://images.unsplash.com/photo-1658742474421-6f9a7e701001?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
    isVeg: true,
  },
  {
    id: "44",
    name: "Lemon Rice",
    category: "Rice",
    description: "Rice flavored with lemon juice, nuts and tempered spices.",
    price: "₹140",
    image: "https://images.unsplash.com/photo-1596797038530-2c107aa4a186?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1975&q=80",
    isVeg: true,
  },
  {
    id: "45",
    name: "Roti",
    category: "Breads",
    description: "Whole wheat flatbread cooked on tawa.",
    price: "₹30",
    image: "https://images.unsplash.com/photo-1619860860774-1e2e14e33268?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
    isVeg: true,
  },
  {
    id: "46",
    name: "Paratha",
    category: "Breads",
    description: "Layered whole wheat flatbread with ghee.",
    price: "₹50",
    image: "https://images.unsplash.com/photo-1589301761966-2c6225cf3775?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
    isVeg: true,
  },
  {
    id: "47",
    name: "Kulcha",
    category: "Breads",
    description: "Leavened bread typically stuffed with fillings.",
    price: "₹60",
    image: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1971&q=80",
    isVeg: true,
  },
  {
    id: "48",
    name: "Sweet Lassi",
    category: "Beverages",
    description: "Sweet yogurt drink with cardamom and nuts.",
    price: "₹90",
    image: "https://images.unsplash.com/photo-1620843437920-ead942b3456d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
    isVeg: true,
  },
  {
    id: "49",
    name: "Mango Shake",
    category: "Beverages",
    description: "Refreshing mango milkshake with ice cream.",
    price: "₹110",
    image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2081&q=80",
    isVeg: true,
  },
  {
    id: "50",
    name: "Masala Chai",
    category: "Beverages",
    description: "Spiced tea with milk and sweetener.",
    price: "₹40",
    image: "https://images.unsplash.com/photo-1571934811356-5cc061b6821f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
    isVeg: true,
  },
  {
    id: "51",
    name: "Mutton Rogan Josh",
    category: "Main Course",
    description: "Aromatic lamb curry with spices and yogurt.",
    price: "₹290",
    image: "https://images.unsplash.com/photo-1598292977405-b3f7f320b573?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
    isVeg: false,
  },
  {
    id: "52",
    name: "Kadai Paneer",
    category: "Main Course",
    description: "Cottage cheese in spicy tomato and bell pepper gravy.",
    price: "₹220",
    image: "https://images.unsplash.com/photo-1505253758473-96b7015fcd40?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2042&q=80",
    isVeg: true,
  },
  {
    id: "53",
    name: "Chana Masala",
    category: "Main Course",
    description: "Spicy chickpea curry with tangy flavors.",
    price: "₹170",
    image: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2036&q=80",
    isVeg: true,
  },
  {
    id: "54",
    name: "Chicken Korma",
    category: "Main Course",
    description: "Chicken in rich, creamy sauce with nuts and spices.",
    price: "₹250",
    image: "https://images.unsplash.com/photo-1505253716362-afaea1d3d1af?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
    isVeg: false,
  },
  {
    id: "55",
    name: "Malai Kofta",
    category: "Main Course",
    description: "Fried potato and cheese dumplings in creamy sauce.",
    price: "₹210",
    image: "https://images.unsplash.com/photo-1617692855027-33b14f061079?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    isVeg: true,
  },
  {
    id: "56",
    name: "Aloo Gobi",
    category: "Main Course",
    description: "Potato and cauliflower curry with Indian spices.",
    price: "₹160",
    image: "https://images.unsplash.com/photo-1613292443284-8d10ef9ade34?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
    isVeg: true,
  },
  {
    id: "57",
    name: "Fish Curry",
    category: "Main Course",
    description: "Fresh fish simmered in a tangy coconut-based curry.",
    price: "₹280",
    image: "https://images.unsplash.com/photo-1626500264797-26eda07ba72d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    isVeg: false,
  },
  {
    id: "58",
    name: "Vegetable Jalfrezi",
    category: "Main Course",
    description: "Stir-fried vegetables in a spicy tomato-based sauce.",
    price: "₹190",
    image: "https://images.unsplash.com/photo-1547496502-affa22d38842?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2077&q=80",
    isVeg: true,
  },
  {
    id: "59",
    name: "Shahi Paneer",
    category: "Main Course",
    description: "Cottage cheese cubes in creamy tomato and cashew sauce.",
    price: "₹230",
    image: "https://images.unsplash.com/photo-1631452180775-6964aa5d3d36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
    isVeg: true,
  },
  {
    id: "60",
    name: "Chicken Do Pyaza",
    category: "Main Course",
    description: "Chicken cooked with layers of onions and spices.",
    price: "₹240",
    image: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    isVeg: false,
  },
  {
    id: "61",
    name: "Rajma Masala",
    category: "Main Course",
    description: "Red kidney beans in a thick, spiced gravy.",
    price: "₹170",
    image: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1971&q=80",
    isVeg: true,
  },
  {
    id: "62",
    name: "Prawn Masala",
    category: "Main Course",
    description: "Succulent prawns in a spicy tomato-based gravy.",
    price: "₹310",
    image: "https://images.unsplash.com/photo-1625991746849-e54b19b0f01f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1973&q=80",
    isVeg: false,
  },
  {
    id: "63",
    name: "Baingan Bharta",
    category: "Main Course",
    description: "Smoky roasted eggplant mashed with spices.",
    price: "₹180",
    image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    isVeg: true,
  },
  {
    id: "64",
    name: "Garlic Naan",
    category: "Breads",
    description: "Leavened bread with garlic and butter.",
    price: "₹60",
    image: "https://images.unsplash.com/photo-1610725664285-7c57e6eeac3f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
    isVeg: true,
  },
  {
    id: "65",
    name: "Kashmiri Pulao",
    category: "Rice",
    description: "Fragrant rice with dried fruits and nuts.",
    price: "₹180",
    image: "https://images.unsplash.com/photo-1589301761966-2c6225cf3775?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
    isVeg: true,
  },
  {
    id: "66",
    name: "Lamb Seekh Kebab",
    category: "Starters",
    description: "Minced lamb skewers with herbs and spices.",
    price: "₹280",
    image: "https://images.unsplash.com/photo-1600688640154-9619e002df30?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1932&q=80",
    isVeg: false,
  },
  {
    id: "67",
    name: "Vegetable Samosa",
    category: "Starters",
    description: "Crispy pastry filled with spiced potatoes and peas.",
    price: "₹40",
    image: "https://images.unsplash.com/photo-1601050690117-94f5f6fa8bd7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    isVeg: true,
  },
  {
    id: "68",
    name: "Chicken 65",
    category: "Starters",
    description: "Spicy, deep-fried chicken bites.",
    price: "₹220",
    image: "https://images.unsplash.com/photo-1606491956689-2ea866880c84?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1976&q=80",
    isVeg: false,
  },
  {
    id: "69",
    name: "Dal Tadka",
    category: "Main Course",
    description: "Yellow lentils tempered with spices.",
    price: "₹150",
    image: "https://images.unsplash.com/photo-1501199643997-e3ed5cc84589?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1975&q=80",
    isVeg: true,
  },
  {
    id: "70",
    name: "Egg Curry",
    category: "Main Course",
    description: "Boiled eggs in spicy onion and tomato gravy.",
    price: "₹180",
    image: "https://images.unsplash.com/photo-1606578349024-8e913af7d249?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
    isVeg: false,
  },
  {
    id: "71",
    name: "Matar Paneer",
    category: "Main Course",
    description: "Cottage cheese and peas in a tomato-based gravy.",
    price: "₹200",
    image: "https://images.unsplash.com/photo-1589301761966-2c6225cf3775?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
    isVeg: true,
  },
  {
    id: "72",
    name: "Hyderabadi Biryani",
    category: "Rice",
    description: "Aromatic rice layered with spiced meat.",
    price: "₹270",
    image: "https://images.unsplash.com/photo-1633945499351-9c77145141ad?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    isVeg: false,
  },
  {
    id: "73",
    name: "Tandoori Mushroom",
    category: "Starters",
    description: "Marinated mushrooms grilled in tandoor.",
    price: "₹190",
    image: "https://images.unsplash.com/photo-1617692855027-33b14f061079?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    isVeg: true,
  },
  {
    id: "74",
    name: "Masala Dosa",
    category: "South Indian",
    description: "Crispy rice crepe filled with spiced potatoes.",
    price: "₹160",
    image: "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
    isVeg: true,
  },
  {
    id: "75",
    name: "Mysore Bonda",
    category: "South Indian",
    description: "Deep-fried fluffy lentil dumplings.",
    price: "₹90",
    image: "https://images.unsplash.com/photo-1630383249896-479ebe6167cc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
    isVeg: true,
  },
  {
    id: "76",
    name: "Idli Sambar",
    category: "South Indian",
    description: "Steamed rice cakes with lentil soup and chutneys.",
    price: "₹120",
    image: "https://images.unsplash.com/photo-1610192244261-3f33de3f72e1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
    isVeg: true,
  },
  {
    id: "77",
    name: "Uttapam",
    category: "South Indian",
    description: "Thick rice pancake topped with vegetables.",
    price: "₹140",
    image: "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
    isVeg: true,
  },
  {
    id: "78",
    name: "Vada Pav",
    category: "Street Food",
    description: "Spicy potato fritter in a bread bun with chutneys.",
    price: "₹50",
    image: "https://images.unsplash.com/photo-1606491956689-2ea866880c84?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1976&q=80",
    isVeg: true,
  },
  {
    id: "79",
    name: "Pani Puri",
    category: "Street Food",
    description: "Hollow crispy balls filled with spicy water and fillings.",
    price: "₹60",
    image: "https://images.unsplash.com/photo-1604727356636-5a6d257711a3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80",
    isVeg: true,
  },
  {
    id: "80",
    name: "Bhel Puri",
    category: "Street Food",
    description: "Crispy puffed rice mixed with vegetables and chutneys.",
    price: "₹70",
    image: "https://images.unsplash.com/photo-1523942839364-e91a7ccf7908?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
    isVeg: true,
  },
  {
    id: "81",
    name: "Chicken Lollipop",
    category: "Starters",
    description: "Spiced chicken winglets shaped like lollipops.",
    price: "₹240",
    image: "https://images.unsplash.com/photo-1596797038530-2c107aa4a186?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1975&q=80",
    isVeg: false,
  },
  {
    id: "82",
    name: "Rasmalai",
    category: "Desserts",
    description: "Soft cottage cheese patties in sweetened, thickened milk.",
    price: "₹100",
    image: "https://images.unsplash.com/photo-1602351447937-745cb720612f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fA%3D%3D&auto=format&fit=crop&w=1976&q=80",
    isVeg: true,
  },
  {
    id: "83",
    name: "Gulab Jamun",
    category: "Desserts",
    description: "Deep-fried milk solid balls soaked in sugar syrup.",
    price: "₹90",
    image: "https://images.unsplash.com/photo-1564591111131-48a75bf431cd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
    isVeg: true,
  },
  {
    id: "84",
    name: "Jalebi",
    category: "Desserts",
    description: "Crispy, pretzel-shaped sweets soaked in sugar syrup.",
    price: "₹80",
    image: "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
    isVeg: true,
  },
  {
    id: "85",
    name: "Kulfi",
    category: "Desserts",
    description: "Traditional Indian ice cream with nuts and cardamom.",
    price: "₹110",
    image: "https://images.unsplash.com/photo-1551024709-8f23befc6f87?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fA%3D%3D&auto=format&fit=crop&w=1957&q=80",
    isVeg: true,
  },
  {
    id: "86",
    name: "Kheer",
    category: "Desserts",
    description: "Rice pudding flavored with cardamom and nuts.",
    price: "₹130",
    image: "https://images.unsplash.com/photo-1551024709-8f23befc6f87?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fA%3D%3D&auto=format&fit=crop&w=1957&q=80",
    isVeg: true,
  },
  {
    id: "87",
    name: "Raita",
    category: "Accompaniments",
    description: "Yogurt mixed with vegetables and spices.",
    price: "₹70",
    image: "https://images.unsplash.com/photo-1624374984106-78323a336346?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1480&q=80",
    isVeg: true,
  },
  {
    id: "88",
    name: "Green Salad",
    category: "Accompaniments",
    description: "Fresh mixed vegetables with lemon dressing.",
    price: "₹80",
    image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    isVeg: true,
  },
  {
    id: "89",
    name: "Papad",
    category: "Accompaniments",
    description: "Crispy lentil wafer, fried or roasted.",
    price: "₹30",
    image: "https://images.unsplash.com/photo-1589301756913-ebb3e7a58fd4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
    isVeg: true,
  },
  {
    id: "90",
    name: "Pickle Platter",
    category: "Accompaniments",
    description: "Assorted Indian pickles.",
    price: "₹60",
    image: "https://images.unsplash.com/photo-1658743550413-9963f4226681?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
    isVeg: true,
  },
  {
    id: "91",
    name: "Mango Lassi",
    category: "Beverages",
    description: "Yogurt-based drink with mango pulp.",
    price: "₹100",
    image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2081&q=80",
    isVeg: true,
  },
  {
    id: "92",
    name: "Samosa Chaat",
    category: "Street Food",
    description: "Crushed samosas topped with yogurt and chutneys.",
    price: "₹90",
    image: "https://images.unsplash.com/photo-1606491956689-2ea866880c84?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1976&q=80",
    isVeg: true,
  },
  {
    id: "93",
    name: "Aloo Tikki",
    category: "Street Food",
    description: "Spiced potato patties served with chutneys.",
    price: "₹70",
    image: "https://images.unsplash.com/photo-1589301761966-2c6225cf3775?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
    isVeg: true,
  },
  {
    id: "94",
    name: "Kachori",
    category: "Street Food",
    description: "Deep-fried pastry filled with spiced lentils.",
    price: "₹50",
    image: "https://images.unsplash.com/photo-1601050690117-94f5f6fa8bd7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    isVeg: true,
  },
  {
    id: "95",
    name: "Tandoori Fish Tikka",
    category: "Starters",
    description: "Marinated fish pieces cooked in tandoor.",
    price: "₹290",
    image: "https://images.unsplash.com/photo-1626500264797-26eda07ba72d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    isVeg: false,
  },
  {
    id: "96",
    name: "Butter Roti",
    category: "Breads",
    description: "Whole wheat flatbread brushed with butter.",
    price: "₹40",
    image: "https://images.unsplash.com/photo-1619860860774-1e2e14e33268?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
    isVeg: true,
  },
  {
    id: "97",
    name: "Pudina Paratha",
    category: "Breads",
    description: "Mint-flavored layered flatbread.",
    price: "₹60",
    image: "https://images.unsplash.com/photo-1589301761966-2c6225cf3775?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
    isVeg: true,
  },
  {
    id: "98",
    name: "Chicken Kolhapuri",
    category: "Main Course",
    description: "Spicy chicken curry in Kolhapuri style.",
    price: "₹260",
    image: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    isVeg: false,
  },
  {
    id: "99",
    name: "Paneer Tikka Masala",
    category: "Main Course",
    description: "Grilled cottage cheese in a creamy tomato sauce.",
    price: "₹240",
    image: "https://images.unsplash.com/photo-1567188040759-fb8a883dc6d6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2017&q=80",
    isVeg: true,
  },
  {
    id: "100",
    name: "Special Thali",
    category: "Combos",
    description: "Complete meal with roti, rice, dal, sabzi, and dessert.",
    price: "₹350",
    image: "https://images.unsplash.com/photo-1589301756913-ebb3e7a58fd4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
    isVeg: true,
  },
];

// Function to get unique categories from menu items
const getCategories = () => {
  const categories = menuItems.map((item) => item.category);
  return ["All", ...Array.from(new Set(categories))];
};

const Menu = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const { toast } = useToast();
  const [currentPage, setCurrentPage] = useState(1);
  const [vegFilter, setVegFilter] = useState("all"); // "all", "veg", or "nonveg"
  const itemsPerPage = 8;
  
  // Filter items based on search term, category, and veg/non-veg filter
  const filteredItems = menuItems.filter((item) => {
    const matchesSearch = item.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         item.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "All" || item.category === selectedCategory;
    const matchesVeg = vegFilter === "all" || 
                      (vegFilter === "veg" && item.isVeg) || 
                      (vegFilter === "nonveg" && !item.isVeg);
    return matchesSearch && matchesCategory && matchesVeg;
  });
  
  // Calculate pagination
  const totalPages = Math.ceil(filteredItems.length / itemsPerPage);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredItems.slice(indexOfFirstItem, indexOfLastItem);

  const addToCart = (item: MenuItem) => {
    toast({
      title: "Added to cart",
      description: `${item.name} has been added to your cart`,
    });
  };

  return (
    <section id="menu" className="py-16 px-4 bg-neutral-50">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif mb-4 text-gray-800">Our Menu</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Explore our extensive menu offering authentic Indian cuisine prepared with the finest ingredients and traditional recipes.
          </p>
        </div>
        
        {/* Search and filters */}
        <div className="mb-8 flex flex-col md:flex-row gap-4 justify-between items-center">
          <div className="relative w-full md:w-1/3">
            <input
              type="text"
              placeholder="Search menu..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-burgundy"
            />
          </div>
          
          <div className="flex space-x-4 items-center">
            <button
              onClick={() => setVegFilter("all")}
              className={`px-3 py-1 rounded-full text-sm ${
                vegFilter === "all" ? "bg-gray-800 text-white" : "bg-gray-200 text-gray-800"
              }`}
            >
              All
            </button>
            <button
              onClick={() => setVegFilter("veg")}
              className={`px-3 py-1 rounded-full text-sm flex items-center gap-1 ${
                vegFilter === "veg" ? "bg-green-600 text-white" : "bg-gray-200 text-gray-800"
              }`}
            >
              <span className="w-2 h-2 bg-green-600 rounded-full border border-white"></span>
              Veg Only
            </button>
            <button
              onClick={() => setVegFilter("nonveg")}
              className={`px-3 py-1 rounded-full text-sm flex items-center gap-1 ${
                vegFilter === "nonveg" ? "bg-red-600 text-white" : "bg-gray-200 text-gray-800"
              }`}
            >
              <span className="w-2 h-2 bg-red-600 rounded-full border border-white"></span>
              Non-veg
            </button>
          </div>
        </div>

        {/* Category tabs */}
        <Tabs defaultValue="All" className="mb-8">
          <TabsList className="w-full overflow-x-auto flex flex-nowrap pb-2 justify-start mb-4">
            {getCategories().map((category) => (
              <TabsTrigger 
                key={category} 
                value={category}
                onClick={() => setSelectedCategory(category)}
                className="whitespace-nowrap"
              >
                {category}
              </TabsTrigger>
            ))}
          </TabsList>
          
          {getCategories().map((category) => (
            <TabsContent key={category} value={category} className="mt-0">
              {/* Menu items grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {currentItems.map((item) => (
                  <Card key={item.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                    <div className="relative h-48 overflow-hidden">
                      <img 
                        src={item.image} 
                        alt={item.name} 
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute top-2 right-2">
                        <span 
                          className={`w-4 h-4 block rounded-full ${item.isVeg ? 'bg-green-600' : 'bg-red-600'}`}
                          title={item.isVeg ? 'Vegetarian' : 'Non-vegetarian'}
                        ></span>
                      </div>
                    </div>
                    <CardContent className="p-4">
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="font-medium text-gray-800">{item.name}</h3>
                        <p className="font-semibold text-burgundy">{item.price}</p>
                      </div>
                      <p className="text-sm text-gray-600 mb-4">{item.description}</p>
                      <div className="flex justify-between items-center">
                        <span className="text-xs px-2 py-1 bg-gray-100 rounded-full text-gray-600">{item.category}</span>
                        <Button 
                          onClick={() => addToCart(item)} 
                          size="sm" 
                          className="bg-burgundy hover:bg-burgundy/90 text-white flex gap-1 items-center"
                        >
                          <Pizza className="h-4 w-4" />
                          Add
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
              
              {/* No results message */}
              {currentItems.length === 0 && (
                <div className="text-center py-8">
                  <ChefHat className="w-12 h-12 text-gray-300 mx-auto mb-4" />
                  <h3 className="text-gray-500 text-lg mb-2">No menu items found</h3>
                  <p className="text-gray-400">Try changing your search or filters</p>
                </div>
              )}
            </TabsContent>
          ))}
        </Tabs>
        
        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex justify-center mt-8 gap-2">
            <Button 
              onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
              variant="outline"
              className="h-8 w-8 p-0"
            >
              &lt;
            </Button>
            
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <Button
                key={page}
                onClick={() => setCurrentPage(page)}
                variant={currentPage === page ? "default" : "outline"}
                className={`h-8 w-8 p-0 ${currentPage === page ? 'bg-burgundy hover:bg-burgundy/90' : ''}`}
              >
                {page}
              </Button>
            ))}
            
            <Button
              onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
              disabled={currentPage === totalPages}
              variant="outline"
              className="h-8 w-8 p-0"
            >
              &gt;
            </Button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Menu;
