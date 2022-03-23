import React from 'react'

const Payment = () => {
  return (
    <div className="payment-form">
        <h2 className="section-title-3">payment details</h2>
        <p>Lorem ipsum dolor sit amet, consectetur kgjhyt</p>
        <div className="payment-form-inner">
            <div className="single-checkout-box">
                <input type="text" placeholder="Name on Card*"/>
                <input type="text" placeholder="Card Number*"/>
            </div>
            <div className="single-checkout-box select-option">
                <select>
                    <option>Date*</option>
                    <option>Date</option>
                    <option>Date</option>
                    <option>Date</option>
                    <option>Date</option>
                </select>
                <input type="text" placeholder="Security Code*"/>
            </div>
        </div>
    </div>
  )
}

export default Payment