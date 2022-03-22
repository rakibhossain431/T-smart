import React from 'react'
import Footer from '../../Componet/Footer'
import Header from '../../Componet/Header'
import Bradcaump from '../../Componet/partials/BradCaump'

import ShopCard from './ShopCard'


const Shop = () => {
  return (
    <div>
      <Header/>
      <Bradcaump title="Shop Page"/>
      <ShopCard />
      <Footer />
    </div>
  )
}

export default Shop