import React from "react";
import "./ExploreMenu.css";
import { menu_list } from "../../assets/assets";
const ExploreMenu = ({category,setCategory}) => {
  return (
    <div className="explore_menu flex flex-col gap-[20px]" id="explore-Menu">
      <h1 className="font-bold text-3xl">Explore our menu</h1>
      <p className="explore-menu-text max-w-[80%]">
        Indulge in a culinary journey with our menu explorer! Discover
        tantalizing flavors, from savory classics to exotic delights, all at
        your fingertips. With every click, embark on a gastronomic adventure
        that delights your senses and satisfies your cravings. Your next
        culinary masterpiece awaits, only a menu away.
      </p>
      <div className="explore-menu-list flex justify-between items-center gap-[30px] text-center m-[20px,0px] overflow-x-scroll">
        {menu_list.map((item, index) => {
          return (
            <div onClick={()=>{setCategory(prev=>prev===item.menu_name?"All":item.menu_name)}} key={index} className="explore-item-list-item">
              <img className={ category===item.menu_name?"active":""} src={item.menu_image} alt="" />
              <p>{item.menu_name}</p>
            </div>
          );
        })}
      </div>
      <hr className="m-[10px, 0px] h-[2px] bg-[#e2e2e2] border-none"/>
    </div>
  );
};

export default ExploreMenu;
