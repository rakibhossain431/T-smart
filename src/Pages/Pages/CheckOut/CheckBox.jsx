import React from 'react'

const CheckBox = () => {
  return (
    <div className="checkout-form">
            <h2 className="section-title-3">Billing details</h2>
            <div className="checkout-form-inner">
                <div className="single-checkout-box">
                    <input type="text" placeholder="First Name*"/>
                    <input type="text" placeholder="Last Name*"/>
                </div>
                <div className="single-checkout-box">
                    <input type="email" placeholder="Emil*"/>
                    <input type="text" placeholder="Phone*"/>
                </div>
                <div className="single-checkout-box">
                    <textarea name="message" placeholder="Message*"></textarea>
                </div>
                <div className="single-checkout-box select-option mt--40">
                    <select>
                        <option>Country*</option>
                        <option>Bangladesh</option>
                        <option>Bangladesh</option>
                        <option>Bangladesh</option>
                        <option>Bangladesh</option>
                    </select>
                    <input type="text" placeholder="Company Name*"/>
                </div>
                <div className="single-checkout-box">
                    <input type="email" placeholder="State*"/>
                    <input type="text" placeholder="Zip Code*"/>
                </div>
                <div className="single-checkout-box checkbox">
                    <input id="remind-me" type="checkbox"/>
                    <label for="remind-me"><span></span>Create a Account ?</label>
                </div>
            </div>
        </div>
  )
}

export default CheckBox