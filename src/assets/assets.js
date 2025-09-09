// src/assets/assets.js
import logo from "./react.svg";
import generatedImage from "./generated-image.png"; 
import search from "./search.png"; 
import basket from "./basket.png";   
import rating from "./rating.png";  
import cross_icon from "./cross_icon.png"

import leafygreen from "./leafygreen.png"; 
import fruits from "./fruits.png"; 
import vegetables from "./vegetables.png"; 


import cauliflower from "./cauliflower.png";
import bananas from "./bananas.png";
import carrots from "./carrots.png"; 
import garlic from "./Garlic.png";
import grapes from "./grapes.png";
import onions from "./onions.png";
import spinach from"./spinach.png";
import strawberries from "./strawberries.png" 
import add from "./add.png"; 
import addgreen from "./addgreen.png" 
import removered from "./removered.png"

import facebook_icon from "./facebook_icon.png" ;
import twitter_icon from "./twitter_icon.png"; 
import linkedin_icon from "./linkedin_icon.png";  
import app_store from "./app_store.png";  
import play_store from "./play_store.png";  



export const assets = {
  logo,
  generatedImage, 
  search, 
  basket,  
  rating, 
  add,  
  cross_icon ,
  addgreen, 
  removered,  
  facebook_icon, 
  twitter_icon, 
  linkedin_icon, 
  app_store, 
  play_store, 

  leafygreen,
  fruits, 
  vegetables,

  cauliflower,
  spinach,
  garlic,
  grapes, 
  strawberries,
  bananas, 
  onions,
  carrots,
}; 
export const menu_list=[
  {
    menu_name: "Leafy greens", 
    menu_img: leafygreen
  }, 
  {
    menu_name: "Vegetables", 
    menu_img: vegetables
  }, 
  {
    menu_name: "Fruits",
    menu_img: fruits
  } 
  
] 
export const food_list=[ 
  { 
    _id:"1",
    name: "Cauliflower",
    image: cauliflower,
    price: "40/kg",
    description: "Fresh farm-grown cauliflower, rich in fiber and essential vitamins.",
    category: "Vegetables"
  }, 
   { 
    _id:"2",
    name: "Spinach",
    image: spinach,
    price: "40/kg",
    description: "Fresh farm-grown cauliflower, rich in fiber and essential vitamins.",
    category: "Leafy greens"
  }, 
   { 
    _id:"3",
    name: "Garlic",
    image: garlic,
    price: "40/kg",
    description: "Fresh farm-grown cauliflower, rich in fiber and essential vitamins.",
    category: "Vegetables"
  },
   { 
    _id:"4",
    name: "Grapes",
    image: grapes,
    price: "40/kg",
    description: "Fresh farm-grown cauliflower, rich in fiber and essential vitamins.",
    category: "Fruits"
  },
   { 
    _id:"5",
    name: "Strawberries",
    image: strawberries,
    price: "40/kg",
    description: "Fresh farm-grown cauliflower, rich in fiber and essential vitamins.",
    category: "Fruits"
  },
   { 
    _id:"6",
    name: "Bananas",
    image: bananas,
    price: "40/kg",
    description: "Fresh farm-grown cauliflower, rich in fiber and essential vitamins.",
    category: "Fruits" 
   },
   { 
    _id:"7",
    name: "Onions",
    image: onions,
    price: "40/kg",
    description: "Fresh farm-grown cauliflower, rich in fiber and essential vitamins.",
    category: "Vegetables"
  },
   { 
    _id:"8",
    name: "Carrots",
    image: carrots,
    price: "40/kg",
    description: "Fresh farm-grown cauliflower, rich in fiber and essential vitamins.",
    category: "Vegetables"
  }

]

