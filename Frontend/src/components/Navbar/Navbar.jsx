//import React from 'react'
import './Navbar.css'
import assets from '../../assets/assets.js'

const Navbar = () => {
  return (
    <div className='navbar'>
      <img src={assets.font} alt="" className="text" />
      <ul className="navbar-menu">
        <li>Category</li>
        <li>Contact Us</li>
      </ul>
      <div className="navbar-right">
        <img src={assets.search_icon} alt="" />
        <div className='navbar-search-icon'></div>
        <button>Place Order</button>
      </div>
    </div>
  )
}

export default Navbar