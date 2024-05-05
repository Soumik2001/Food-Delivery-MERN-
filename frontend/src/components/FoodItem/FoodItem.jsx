import React, { useState } from "react";
import "./FoodItem.css";
import { assets } from "../../assets/assets";

const FoodItem = ({ id, name, price, description, image }) => {

    const [itemCount, setItemCount] =useState(0);
  return (
    <div className="food-item">
      <div className="food-item-image-container">
        <img className="food-item-image" src={image} alt="" />
        {!itemCount
        ?<img className="add" onClick={()=>setItemCount(prev=>prev+1)} src={assets.add_icon_white}/>
        :<div className="food-item-counter"></div>}
      </div>
      <div className="food-item-info">
        <div className="food-item-name-rating flex justify-between items-center mb-[10px]">
          <p className="font-medium text-xl">{name}</p>
          <img src={assets.rating_starts} className="w-[70px]" alt="" />
        </div>
        <p className="food-item-desc text-[#676767] text-[15px]">{description}</p>
        <p className="food-item-price text-[tomato] font-bold m-[10px, 0px]">₹ {price}</p>
      </div>
    </div>
  );
};

export default FoodItem;
