import React from 'react'
import Hero from '../Components/Hero/Hero'
import Popular from '../Components/Popular/Popular'
import Offers from '../Components/Offers/Offers'
import NewsLetter from '../Components/NewLetter/NewsLetter'
import NewCollections from '../Components/NewCollections/NewCollections'


function Shop() {
  return (
    <div>
      <Hero/>
      <Popular/>
      <Offers/>
      <NewCollections/>
      <NewsLetter/>

    </div>
  )
}

export default Shop