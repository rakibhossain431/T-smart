import React from 'react'
import Footer from '../../Componet/Footer'
import Header from '../../Componet/Header'

import bgImg from '../../images/bg/rakib.jpg'

const Pages = () => {
  return (
    <div>
       <Header />
       <div className="ht__bradcaump__area" style={{background: `rgba(0, 0, 0, 0)`,
           backgroundImage: `url(${bgImg})`,
           backgroundRepeat: `no-repeat`,
           backgroundPosition:`center center`,  
           backgrounSize:`cover` }}>
            <div className="ht__bradcaump__wrap">
                <div className="container">
                    <div className="row">
                        <div className="col-xs-12">
                            <div className="bradcaump__inner text-center">
                                <h2 className="bradcaump-title">portfolio card 2 column</h2>
                                <nav className="bradcaump-inner">
                                  <a className="breadcrumb-item" href="index.html">Home</a>
                                  <span className="brd-separetor">/</span>
                                  <span className="breadcrumb-item active">portfolio card 2 column</span>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
       
      <Footer />
    </div>
  )
}

export default Pages