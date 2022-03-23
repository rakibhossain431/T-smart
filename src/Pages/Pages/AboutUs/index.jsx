import React from 'react'
import Footer from '../../../Componet/Footer'
import Header from '../../../Componet/Header'
import Bradcaump from '../../../Componet/partials/BradCaump'
import BrandLogo from './BrandLogo'
import ChooseUs from './ChooseUs'
import Staff from './Staff'
import Story from './Story'
import Testimonial from './Testimonial'

const AboutUs = () => {
  return (
    <div>
       <Header />
       <Bradcaump />
       <Story />
       <ChooseUs />
       <Staff />
       <Testimonial />
       <BrandLogo />
       <Footer />
    </div>
  )
}

export default AboutUs