import React from 'react'
import Footer from '../../../Componet/Footer'
import Header from '../../../Componet/Header'
import Bradcaump from '../../../Componet/partials/BradCaump'
import Table from './Table'

 
const Cart = () => {
  return (
      <>
        <Header />
        <Bradcaump title="Cart" />
        <Table />
        <Footer />
      </>
  )
}

export default Cart