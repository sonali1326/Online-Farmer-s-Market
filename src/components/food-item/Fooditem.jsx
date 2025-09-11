import React, { useContext, useState } from "react";
import "./Fooditem.css"; 
import ratingImg from "../../assets/rating.png"; 
import add from "../../assets/add.png";
import { assets } from "../../assets/assets";
import { StoreContext } from "../../context/StoreContext";

const Fooditem = ({ id, name, price, description, image }) => { 
  
  const {cartItems, addtocart, removefromcart} =useContext(StoreContext);
    return (
    <div className="food-item">
      <div className="food-item-img-container">
        <img className="food-item-image" src={image} alt="" /> 
        {
          !cartItems[id]
              ?<img className="add"  onClick={()=>addtocart(id)} src={add} alt=""/> 
              
              :<div className ="food-item-counter">  
              <img onClick={()=>removefromcart(id)} src={assets.removered} alt=""/> 
              <p className="p-text">{cartItems[id]}</p> 
              <img onClick={()=>addtocart(id)} src={assets.addgreen} alt=""/>

              </div>
        }
      </div>
      <div className="food-item-info">  
        <div className="food-item-name-rating">  
            <p>{name}</p> 
            <img src={ratingImg} alt=""/>  

        </div> 
            <p className="food-item-descripiton">{description}</p> 
            <p className="food-item-price"> ₹{price}</p>

      </div>
    </div>
  );
};

export default Fooditem;
