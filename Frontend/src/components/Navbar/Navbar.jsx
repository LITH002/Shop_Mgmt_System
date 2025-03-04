//import React from 'react'
import './Navbar.css'
import assets from '../../assets/assets.js'
import { useState } from 'react'

const Navbar = () => {
  const [menu, setMenu] = useState("Category");
  return (
    <div className='navbar'>
      <img src={assets.font} alt="" className="text" />
      <ul className="navbar-menu">
        <li onClick={()=>setMenu("Category")} className={menu==="Category"?"active":""}>Category</li >
        <li onClick={()=>setMenu("Contact Us")} className={menu==="Contact Us"?"active":""}>Contact Us</li>
      </ul>
      <div className="navbar-right">
        <img src={assets.search_icon} alt="" />
        <div className='navbar-search-icon'>
          <img src={assets.cart} className='cart-icon' alt="" />
          <div className="dot"></div>
        </div>
        <button>Place Order</button>
      </div>
    </div>
  )
}

export default Navbar