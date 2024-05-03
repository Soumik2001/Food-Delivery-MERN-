import React from 'react'
import  "./Navbar.css";
import { assets } from '../../assets/assets';

const Navbar = () => {
  return (
    <div className='navbar' >
      <img src={assets.logo3} className='w-48 h-20 bg-black' alt="" />
      <ul className="navbar-menu">
        <li>Home</li>
        <li>Menu</li>
        <li>Mobile-app</li>
        <li>Contact us</li>
      </ul>

      <div className="navbar-right">
        <img src={assets.search_icon} alt="" />
        <div className="navbar-search-icon">
            <img src={assets.basket_icon} alt="" />
        </div>
      </div>
    </div>
  )
}

export default Navbar
