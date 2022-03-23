import React from 'react'
import Footer from '../../../Componet/Footer'
import Header from '../../../Componet/Header'
import Bradcaump from '../../../Componet/partials/BradCaump'
import Product from './Product'
import ProductTab from './ProductTab'

const ProduntDetails = () => {
  return (
    <>
        <Header />
        <Bradcaump title="Product Details"/>
        <Product/>
        <ProductTab/>
        <Footer />
      
    </>
  )
}

export default ProduntDetails