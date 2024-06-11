import React, { useRef, useState } from 'react'
import './Navbar.css'
import logo from '../assets/logo.png'
import cart_icon from '../assets/cart_icon.png'
import { Link } from 'react-router-dom'


function Navbar() {
  const [menu,setMenu] = useState("shop")
  const menuref = useRef();

  const dropDown_toggle = (e)=>{
    menuref.current.classList.toggle('nav-menu-visible');
    e.target.classList.toggle('open');
  }
  return (
    <div className='navbar'>
      <div className='nav-logo'> 
        <img src={logo} alt="" />
        <p>SHOPPER</p>
      </div>
      <img className='nav-dropdown' src='https://cdn1.iconfinder.com/data/icons/arrows-vol-1-4/24/Dropdown2-512.png' alt="" onClick={dropDown_toggle} />
    <ul ref={menuref} className='nav-menu'>
      <li onClick={()=>{setMenu("shop")}}><Link to='/' style={{"textDecoration": "none","color":"#626262"}}>Shop</Link>{menu === "shop" ? <hr/> : ""}</li>
      <li onClick={()=>{setMenu("men")}}><Link to='/men' style={{"textDecoration": "none","color":"#626262"}}>Men</Link>{menu === "men" ? <hr/> : ""}</li>
      <li onClick={()=>{setMenu("women")}}><Link to='/women' style={{"textDecoration": "none","color":"#626262"}}>Women</Link>{menu === "women" ? <hr/> : ""}</li>
      <li onClick={()=>{setMenu("kids")}}><Link to='/kids' style={{"textDecoration": "none","color":"#626262"}}>Kids</Link>{menu === "kids" ? <hr/> : ""}</li>
    </ul>
    <div className="nav-login-cart">
      <Link to='/login'><button>Login</button></Link>
      <Link to='/cart'><img src={cart_icon} alt="" /></Link>
     
      <div className="nav-cart-count">0</div>
    </div>
    </div>
  )
}

export default Navbar
