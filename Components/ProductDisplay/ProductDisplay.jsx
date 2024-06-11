import React, { useContext } from 'react'
import star_icon from '../assets/star_icon.png'
import './ProductDisplay.css'
import star_dull_icon from '../assets/star_dull_icon.png'
import { ShopContext } from '../../Context/ShopContext';


function ProductDisplay(props) {
    const {product} = props;
    const {addToCart} = useContext(ShopContext)

  return (
    <div className='product-display'>
      <div className="productdisplay-left">
        <div className="product-img-list">
            <img src={product.image} alt="" />
            <img src={product.image} alt="" />
            <img src={product.image} alt="" />
            <img src={product.image} alt="" />

        </div>
        <div className="productdisplay-img">
            <img className='product-display-main-img' src={product.image} alt="" />
        </div>
      </div>
      <div className="productdisplay-right">
        <h1>{product.name}</h1>
        <div className="product-display-right-stars">
            <img src={star_icon} alt="" />
            <img src={star_icon} alt="" />
            <img src={star_icon} alt="" />
            <img src= {star_icon}alt="" />
            <img src={star_dull_icon} alt="" />
            (265)
        </div>
        <div className="product-display-right-prices">
            <div className="productdisplay-right-price-old">
                ${product.old_price}
            </div>
            <div className="productdisplay-right-price-new">
                ${product.new_price}
            </div>
        </div>
        <div className="productdisplay-right-description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora cum nesciunt quod sed fugit dolorem illum aspernatur consectetur in! Fugit non doloremque earum adipisci, quos est asperiores vero ducimus beatae. 
        </div>
        <div className="productdisplay-right-size">
            <h1>Select Size</h1>
            <div className="productdisplay-right-sizes">
                <div>S</div>
                <div>M</div>
                <div>L</div>
                <div>XL</div>
                <div>XXL</div>
            </div>
        </div>
        <button onClick={()=>{addToCart(product.id)}}>Add to Cart</button>
        <p className='productdisplay-right-category'> <span>Category:</span> Women,T-shirt, Crop Top </p>
        <p className='productdisplay-right-category'> <span>Tags:</span> Modern,Latest </p>
      </div>
      <br />
    </div>
    
  )
}

export default ProductDisplay
