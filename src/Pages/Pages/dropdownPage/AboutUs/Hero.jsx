import React from 'react'
import Header from '../../../../Componet/Header'
import bgImg from "../../../../images/bg/rakib.jpg"
// import BrandLogo from './BrandLogo'
import ChooseUs from './ChooseUs'
import Customar from './Customar'
import Staff from './Staff'

const AboutUs
 = () => {
  return (
    <div>
        <Header />
        <div className="ht__bradcaump__area" style={{background: 'rgba(0, 0, 0, 0)',
           backgroundImage: `url(${bgImg})`,
           backgroundRepeat: 'no-repeat',
           backgroundPosition:'center center',  
           backgrounSize:'cover' }}>
            <div className="ht__bradcaump__wrap">
                <div className="container">
                    <div className="row">
                        <div className="col-xs-12">
                            <div className="bradcaump__inner text-center">
                                <h2 className="bradcaump-title">About Us</h2>
                                <nav className="bradcaump-inner">
                                  <a className="breadcrumb-item" href="index.html">Home</a>
                                  <span className="brd-separetor">/</span>
                                  <span className="breadcrumb-item active">About Us</span>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

            {/* About us stor stard */}
        <section className="htc__store__area ptb--120 bg__white">
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <div className="section__title section__title--2 text-center">
                        <h2 className="title__line">Welcome To Tmart Store</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore gna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat.</p>
                    </div>
                    <div className="store__btn">
                        <a href="#">contact us</a>
                    </div>
                </div>
            </div>
        </div>
        </section>
      {/* About us stor stard */}
        <ChooseUs />
        <Staff />
        <Customar />
        {/* <BrandLogo /> */}
        
    </div>

  )
}

export default AboutUs
