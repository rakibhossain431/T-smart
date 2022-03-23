import React from 'react'
import Header from '../../../Componet/Header'
import Bradcaump from '../../../Componet/partials/BradCaump'
import CheckBox from './CheckBox'
import Payment from './Payment'
import PaymentSystem from './PaymentSystem'

const CheckOut = () => {
  return (
      <>
      <Header/>
      <Bradcaump title="Checkout"/>
    <section className="our-checkout-area ptb--120 bg__white">
            <div className="container">
                <div className="row">
                    <div className="col-md-8 col-lg-8">
                        <div className="ckeckout-left-sidebar">
                           
                            <CheckBox/>
                           
                            <Payment/>
                           
                            <PaymentSystem/>
                            {/* <!-- End Payment Way --> */}
                        </div>
                    </div>
                    <div className="col-md-4 col-lg-4">
                        <div className="checkout-right-sidebar">
                            <div className="our-important-note">
                                <h2 className="section-title-3">Note :</h2>
                                <p className="note-desc">Lorem ipsum dolor sit amet, consectetur adipisici elit, sed do eiusmod tempor incididunt ut laborekf et dolore magna aliqua.</p>
                                <ul className="important-note">
                                    <li><a href="#"><i className="zmdi zmdi-caret-right-circle"></i>Lorem ipsum dolor sit amet, consectetur nipabali</a></li>
                                    <li><a href="#"><i className="zmdi zmdi-caret-right-circle"></i>Lorem ipsum dolor sit amet</a></li>
                                    <li><a href="#"><i className="zmdi zmdi-caret-right-circle"></i>Lorem ipsum dolor sit amet, consectetur nipabali</a></li>
                                    <li><a href="#"><i className="zmdi zmdi-caret-right-circle"></i>Lorem ipsum dolor sit amet, consectetur nipabali</a></li>
                                    <li><a href="#"><i className="zmdi zmdi-caret-right-circle"></i>Lorem ipsum dolor sit amet</a></li>
                                </ul>
                            </div>
                            <div className="puick-contact-area mt--60">
                                <h2 className="section-title-3">Quick Contract</h2>
                                <a href="phone:+8801722889963">+012 345 678 102 </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
      
      </>
  )
}

export default CheckOut