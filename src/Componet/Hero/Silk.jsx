import React from 'react'
import Slider from "react-slick";
import SiltImg from '../../../src/images/bg/rakib.jpg'
const Silk = () => {

    
    
    const settings = {
         dots: true,
         infinite: true,
         speed: 500,
         slidesToShow: 1,
         slidesToScroll: 1
       }
    
    return (
        
        
        <div>
        <h2> Single Item</h2>
        <Slider {...settings}>
          <div>
            <img src={SiltImg}/>
          </div>
          <div>
          <img src={SiltImg}/>
          </div>
          <div>
          <img src={SiltImg}/>
          </div>
          <div>
          <img src={SiltImg}/>
          </div>
          <div>
          <img src={SiltImg}/>
          </div>
          <div>
          <img src={SiltImg}/>
          </div>
        </Slider>
      </div>
 
  
    )}

export default Silk