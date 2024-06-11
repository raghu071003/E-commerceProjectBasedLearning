import React, { useContext } from 'react'
import { ShopContext } from '../Context/ShopContext'
import { useParams } from 'react-router-dom'
import Breadcrum from '../Components/Breadcrums/Breadcrum'
import DescriptionBox from '../Components/DescriptionBox/DescriptionBox'
import ProductDisplay from '../Components/ProductDisplay/ProductDisplay'
import RelatedProducts from '../Components/RelatedProdcuts/RelatedProducts'

function Product() {
  const {all_product} = useContext(ShopContext)
  const {productId} = useParams();
  const product = all_product.find((e)=>
    e.id == Number(productId)
  )

  return (
    <div>
      <Breadcrum product={product}/>
      <ProductDisplay product={product}/>
      <DescriptionBox></DescriptionBox>
      <RelatedProducts/>
    </div>
  )
}

export default Product
