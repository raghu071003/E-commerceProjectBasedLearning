import { useState } from 'react'
import './App.css'
import Navbar from './Components/Navbar/Navbar'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Shop from './Pages/Shop'
import Cart from './Pages/Cart'
import ShopCategory from './Pages/ShopCategory'
import Product from './Pages/Product'
import LoginSignup from './Pages/LoginSignup'
import Footer from './Components/Footer/Footer'
import men_banner from './Components/assets/banner_mens.png'
import women_banner from './Components/assets/banner_women.png'
import kids_banner from './Components/assets/banner_kids.png'

function App() {


  return (
    <>
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Shop/>}/>
      <Route path ='/men' element={<ShopCategory banner={men_banner} category = "men"/>}/>
      <Route path ='/women' element={<ShopCategory banner={women_banner} category = "women"/>}/>
      <Route path ='/kids' element={<ShopCategory banner={kids_banner} category = "kid"/>}/>
      <Route path ='/product' element={<Product/>}>
        <Route path=':productId' element={<Product/>}></Route>
      </Route>
      <Route path='/cart' element={<Cart/>}></Route>
      <Route path='/login' element={<LoginSignup/>}></Route>
    </Routes>
    <Footer/>
    </BrowserRouter>
    
    </>
  )
}

export default App
