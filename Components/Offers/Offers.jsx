import React from 'react'
import './Offers.css'
import exclusive_img from '../assets/exclusive_image.png'

function Offers() {
  return (
    <div className='offers'> 
      <div className="offers-left">
        <h1>Exclusive</h1>
        <h1>Offers for You</h1>
        <p>ONLY ON BEST SELLERS PRODUCT</p>
        <button>Check Now</button>
      </div>
      <div className="offers-right">
        <img src={exclusive_img} alt="" />
        </div>   
    </div>
  )
}

export default Offers
