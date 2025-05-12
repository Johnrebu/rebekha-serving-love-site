import React, { useState } from 'react';
import { Dialog, DialogContent } from "@/components/ui/dialog";

// Gallery image type
type GalleryImage = {
  id: string;
  src: string;
  alt: string;
  category: string;
};

// Enhanced gallery data with more food images
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
  },
  // Additional vegetarian food images
  {
    id: "9",
    src: "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
    alt: "Vegetable curry",
    category: "Cuisine"
  },
  {
    id: "10",
    src: "https://images.unsplash.com/photo-1596797038530-2c107aa4a186?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1975&q=80",
    alt: "Vegan platter",
    category: "Cuisine"
  },
  {
    id: "11",
    src: "https://images.unsplash.com/photo-1574484284002-952d92456975?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
    alt: "Vegetable pulao",
    category: "Cuisine"
  },
  // Additional non-vegetarian food images
  {
    id: "12",
    src: "https://images.unsplash.com/photo-1589647363585-f4a7d3877b10?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
    alt: "Grilled chicken",
    category: "Cuisine"
  },
  {
    id: "13",
    src: "https://images.unsplash.com/photo-1603360946369-dc9bb6258143?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1935&q=80",
    alt: "Tandoori chicken",
    category: "Cuisine"
  },
  {
    id: "14",
    src: "https://images.unsplash.com/photo-1512058564366-18510be2db19?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1972&q=80",
    alt: "Seafood platter",
    category: "Cuisine"
  },
  // Additional dessert images
  {
    id: "15",
    src: "https://images.unsplash.com/photo-1551024709-8f23befc6f87?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1957&q=80",
    alt: "Assorted Indian sweets",
    category: "Desserts"
  },
  {
    id: "16",
    src: "https://images.unsplash.com/photo-1533089860892-a7c6f0a88666?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1980&q=80",
    alt: "Chocolate cake",
    category: "Desserts"
  },
  // Additional Vegetarian dishes
  {
    id: "17",
    src: "https://images.unsplash.com/photo-1623428187969-5da2dcea5ebf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    alt: "Vegetarian Buddha Bowl",
    category: "Vegetarian"
  },
  {
    id: "18",
    src: "https://images.unsplash.com/photo-1543339308-43e59d6b73a6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    alt: "Vegetable Salad",
    category: "Vegetarian"
  },
  {
    id: "19",
    src: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    alt: "Vegetarian Platter",
    category: "Vegetarian"
  },
  {
    id: "20",
    src: "https://images.unsplash.com/photo-1598449426314-8b02525e8733?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    alt: "Paneer Tikka",
    category: "Vegetarian"
  },
  {
    id: "21",
    src: "https://images.unsplash.com/photo-1561626423-a51b45aef0a1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    alt: "Dal Makhani",
    category: "Vegetarian"
  },
  {
    id: "22",
    src: "https://images.unsplash.com/photo-1613844237802-3cfed8764e4c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    alt: "Vegetable Biryani",
    category: "Vegetarian"
  },
  {
    id: "23",
    src: "https://images.unsplash.com/photo-1542224566-6e85f2e6772f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    alt: "Vegan Pasta",
    category: "Vegetarian"
  },
  {
    id: "24",
    src: "https://images.unsplash.com/photo-1564834744159-ff0ea41ba4b9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    alt: "Vegetable Curry",
    category: "Vegetarian"
  },
  {
    id: "25",
    src: "https://images.unsplash.com/photo-1510431198580-7727c9fa1e3a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    alt: "Vegan Sushi Rolls",
    category: "Vegetarian"
  },
  {
    id: "26",
    src: "https://images.unsplash.com/photo-1623428187969-5da2dcea5ebf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    alt: "Stuffed Bell Peppers",
    category: "Vegetarian"
  },
  {
    id: "27",
    src: "https://images.unsplash.com/photo-1604329760661-e71dc83f8f26?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    alt: "Vegetable Stir Fry",
    category: "Vegetarian"
  },
  {
    id: "28",
    src: "https://images.unsplash.com/photo-1623855244183-52fd8d3ce2f7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    alt: "Mushroom Risotto",
    category: "Vegetarian"
  },
  {
    id: "29",
    src: "https://images.unsplash.com/photo-1626200419199-391ae4a28ef6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    alt: "Vegan Tacos",
    category: "Vegetarian"
  },
  {
    id: "30",
    src: "https://images.unsplash.com/photo-1511690656952-34342bb7c2f2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fA%3D%3D&auto=format&fit=crop&w=2064&q=80",
    alt: "Vegetable Skewers",
    category: "Vegetarian"
  },
  {
    id: "31",
    src: "https://images.unsplash.com/photo-1606756790138-261d2b21cd75?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80",
    alt: "Eggplant Parmigiana",
    category: "Vegetarian"
  },
  
  // Additional Non-vegetarian dishes
  {
    id: "32",
    src: "https://images.unsplash.com/photo-1432139555190-58524dae6a55?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2076&q=80",
    alt: "Grilled Steak",
    category: "Non-vegetarian"
  },
  {
    id: "33",
    src: "https://images.unsplash.com/photo-1598514983318-2f64f8f4796c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    alt: "Chicken Curry",
    category: "Non-vegetarian"
  },
  {
    id: "34",
    src: "https://images.unsplash.com/photo-1626082895597-512255c3df58?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    alt: "Butter Chicken",
    category: "Non-vegetarian"
  },
  {
    id: "35",
    src: "https://images.unsplash.com/photo-1606471191009-63994c53433b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    alt: "Roast Turkey",
    category: "Non-vegetarian"
  },
  {
    id: "36",
    src: "https://images.unsplash.com/photo-1544025162-d76694265947?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80",
    alt: "BBQ Ribs",
    category: "Non-vegetarian"
  },
  {
    id: "37",
    src: "https://images.unsplash.com/photo-1565192259022-0427b058f372?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80",
    alt: "Hamburger",
    category: "Non-vegetarian"
  },
  {
    id: "38",
    src: "https://images.unsplash.com/photo-1614398751058-eb2e0bf63e53?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
    alt: "Tandoori Chicken Platter",
    category: "Non-vegetarian"
  },
  {
    id: "39",
    src: "https://images.unsplash.com/photo-1595777216528-071e0127ccbf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
    alt: "Seafood Pasta",
    category: "Non-vegetarian"
  },
  {
    id: "40",
    src: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    alt: "Salmon Fillet",
    category: "Non-vegetarian"
  },
  {
    id: "41",
    src: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    alt: "Grilled Shrimp",
    category: "Non-vegetarian"
  },
  {
    id: "42",
    src: "https://images.unsplash.com/photo-1595475038784-bbe439ff41e6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
    alt: "Fish Curry",
    category: "Non-vegetarian"
  },
  {
    id: "43",
    src: "https://images.unsplash.com/photo-1625937520353-011a091d8a33?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    alt: "Chicken Wings",
    category: "Non-vegetarian"
  },
  {
    id: "44",
    src: "https://images.unsplash.com/photo-1573225342350-16731dd9bf83?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    alt: "Pork Roast",
    category: "Non-vegetarian"
  },
  {
    id: "45",
    src: "https://images.unsplash.com/photo-1602538596792-a1a7331a5a66?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
    alt: "Chicken Biryani",
    category: "Non-vegetarian"
  },
  {
    id: "46",
    src: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2076&q=80",
    alt: "Lamb Kebabs",
    category: "Non-vegetarian"
  },
  
  // Additional Desserts
  {
    id: "47",
    src: "https://images.unsplash.com/photo-1602351447937-745cb720612f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fA%3D%3D&auto=format&fit=crop&w=1976&q=80",
    alt: "Rasmalai",
    category: "Desserts"
  },
  {
    id: "48",
    src: "https://images.unsplash.com/photo-1551024506-0bccd828d307?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fA%3D%3D&auto=format&fit=crop&w=1964&q=80",
    alt: "Indian Sweet Platter",
    category: "Desserts"
  },
  {
    id: "49",
    src: "https://images.unsplash.com/photo-1564591111131-48a75bf431cd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
    alt: "Gulab Jamun",
    category: "Desserts"
  },
  {
    id: "50",
    src: "https://images.unsplash.com/photo-1551024709-8f23befc6f87?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fA%3D%3D&auto=format&fit=crop&w=1957&q=80",
    alt: "Assorted Indian Sweets",
    category: "Desserts"
  },
  {
    id: "51",
    src: "https://images.unsplash.com/photo-1587314168485-3236d6710814?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fA%3D%3D&auto=format&fit=crop&w=1978&q=80",
    alt: "Strawberry Cheesecake",
    category: "Desserts"
  },
  {
    id: "52",
    src: "https://images.unsplash.com/photo-1586195831800-24f14c992cea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
    alt: "Mini Tart Selection",
    category: "Desserts"
  },
  {
    id: "53",
    src: "https://images.unsplash.com/photo-1550617931-e17a7b70dce2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    alt: "Chocolate Mousse",
    category: "Desserts"
  },
  {
    id: "54",
    src: "https://images.unsplash.com/photo-1551106652-a5bcf4b29ab6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fA%3D%3D&auto=format&fit=crop&w=2076&q=80",
    alt: "Macarons",
    category: "Desserts"
  },
  {
    id: "55",
    src: "https://images.unsplash.com/photo-1551024601-45c5f6a55613?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fA%3D%3D&auto=format&fit=crop&w=1950&q=80",
    alt: "Kulfi",
    category: "Desserts"
  },
  {
    id: "56",
    src: "https://images.unsplash.com/photo-1610726390560-39e9a6fa07ed?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
    alt: "Chocolate Truffles",
    category: "Desserts"
  },
  
  // Additional Preparation images
  {
    id: "57",
    src: "https://images.unsplash.com/photo-160056
