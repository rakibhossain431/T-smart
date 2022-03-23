import React from 'react'

const PaymentSystem = () => {
  return (
    <div className="our-payment-sestem">
        <h2 className="section-title-3">We  Accept :</h2>
        <ul className="payment-menu">
            <li><a href="#"><img src="images/payment/1.jpg" alt="payment-img"/></a></li>
            <li><a href="#"><img src="images/payment/2.jpg" alt="payment-img"/></a></li>
            <li><a href="#"><img src="images/payment/3.jpg" alt="payment-img"/></a></li>
            <li><a href="#"><img src="images/payment/4.jpg" alt="payment-img"/></a></li>
            <li><a href="#"><img src="images/payment/5.jpg" alt="payment-img"/></a></li>
        </ul>
        <div className="checkout-btn">
            <a className="ts-btn btn-light btn-large hover-theme" href="#">CONFIRM & BUY NOW</a>
        </div>    
    </div>
  )
}

export default PaymentSystem