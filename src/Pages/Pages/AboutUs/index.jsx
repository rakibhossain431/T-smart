import React from 'react'
import Footer from '../../../Componet/Footer'
import Header from '../../../Componet/Header'
import Bradcaump from '../../../Componet/partials/BradCaump'
import ChooseUs from './ChooseUs'
import Staff from './Staff'
import Testimonial from './Testimonial'

const AboutUs = () => {
  return (
    <div>
       <Header />
       <Bradcaump />
       <ChooseUs />
       <Staff />
       <Testimonial />
       <Footer />
    </div>
  )
}

export default AboutUs