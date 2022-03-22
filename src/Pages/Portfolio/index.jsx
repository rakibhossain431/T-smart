import React from 'react'
import Footer from '../../Componet/Footer'
import Header from '../../Componet/Header'
import Bradcaump from '../../Componet/partials/BradCaump'
import PortfolilCard from './PortfolilCard'
const Portfolio = () => {
  return (
    <div>
      <Header/>
      <Bradcaump title="Portfolio Card 2 Column" pageName="Portfolio Card 2 Column"/>
      <PortfolilCard />
      <Footer/>
    </div>
  )
}

export default Portfolio