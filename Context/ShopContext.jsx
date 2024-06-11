import React, { createContext, useState } from "react";
import all_product from '../Components/assets/all_product'

export const ShopContext = createContext(null);

const getDefaultCart = ()=>{
    let cart = {};
    for(let i=0;i<all_product.length+1;i++){
        cart[i] = 0;
    }
    return cart;
}


const ShopContextProvider = (props)=>{
    const [cartItem,setcartItem] = useState(getDefaultCart)
    
    const addToCart = (itemId)=>{
        setcartItem((prev) =>({...prev,[itemId]:prev[itemId]+1}))
        
    }
    const removeFromCart = (itemId)=>{
        setcartItem((prev) =>({...prev,[itemId]:prev[itemId]-1}))
    }
    const getTotalCartAmount = () =>{
        let total = 0;
        for(const i in cartItem){
            if(cartItem[i] > 0){
                let itemInfo = all_product.find((product) =>(product.id === Number(i)))
                total += itemInfo.new_price * cartItem[i];
            }
        }
        return total;
    }
    const contextValue = {all_product,cartItem,addToCart,removeFromCart, getTotalCartAmount}
    console.log(getTotalCartAmount());

    return <ShopContext.Provider value={contextValue}>
        {props.children}
    </ShopContext.Provider>
}

export default ShopContextProvider;