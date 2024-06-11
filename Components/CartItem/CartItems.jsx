import React, { useContext } from 'react'
import './CartItem.css'
import { ShopContext } from '../../Context/ShopContext'
import remove_icon from '../assets/cart_cross_icon.png'

function CartItems() {
    const { all_product, cartItem, removeFromCart ,getTotalCartAmount} = useContext(ShopContext)
    console.log(cartItem)
    return (
        <div className='cartitems'>
            <div className="cartitems-format-main">
                <p>Products</p>
                <p>Title</p>
                <p>Price</p>
                <p>Quantity</p>
                <p>Total</p>
                <p>Remove</p>
            </div>
            <hr />
            {all_product.map((e) => {
                if (cartItem[e.id] > 0) {
                    return(
                        <>
                        <div key={e.id}>
                        <div className="cartitems-format cartitems-format-main">
                            <img src={e.image} className='cart-icon-product-icon' alt="" />
                            <p>{e.name}</p>
                            <p>${e.new_price}</p>
                            <button className='cartitems-quantity'>{cartItem[e.id]}</button>
                            <p>${e.new_price*cartItem[e.id]}</p>
                            <img className='cart-remove' onClick={()=> { removeFromCart(e.id)}} src={remove_icon} alt="" />
                        </div>
                    </div>
                        
                        </>
                        
                    )
                    
                }
                return null;
            })}

            <div className='cartitems-down'>
                <div className="cartitems-total">
                    <h1>Total Cart Value</h1>
                    <div>
                        <div className="cartitems-total-items">
                            <p>Subtotal</p>
                            <p>${getTotalCartAmount()}</p>
                        </div>
                        <hr />
                        <div className="cartitems-total-items">
                            <p>Shipping Fee</p>
                            <p>Free</p>
                        </div>
                        <hr />
                        <div className='cartitems-total-items'>
                            <h3>Total </h3>
                            <h3>${getTotalCartAmount()}</h3>
                        </div>
                    </div>
                    <button>Proceed to Pay!</button>
                    <div className="cartitems-promo">
                        <p>Have a promo code?</p>
                        <div className="cartitems-promobox">
                            <input type="text" placeholder='Promo Code'/>
                        </div>
                        <button>Submit</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CartItems
