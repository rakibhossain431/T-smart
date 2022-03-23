import React from 'react'
import ProductImg from '../../../images/product/4.png' 
import ProductImg2 from '../../../images/product/3.png'
const Table = () => {
  return (
    <div className="cart-main-area ptb--120 bg__white">
        <div className="container">
            <div className="row">
                <div className="col-md-12 col-sm-12 col-xs-12">
                    <form action="#">               
                        <div className="table-content table-responsive">
                            <table>
                                <thead>
                                    <tr>
                                        <th className="product-thumbnail">Image</th>
                                        <th className="product-name">Product</th>
                                        <th className="product-price">Price</th>
                                        <th className="product-quantity">Quantity</th>
                                        <th className="product-subtotal">Total</th>
                                        <th className="product-remove">Remove</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td className="product-thumbnail"><a href="#"><img src={ProductImg} alt="product img" /></a></td>
                                        <td className="product-name"><a href="#">Vestibulum suscipit</a></td>
                                        <td className="product-price"><span className="amount">£165.00</span></td>
                                        <td className="product-quantity"><input type="number" value="1" /></td>
                                        <td className="product-subtotal">£165.00</td>
                                        <td className="product-remove"><a href="#">X</a></td>
                                    </tr>
                                    <tr>
                                        <td className="product-thumbnail"><a href="#"><img src={ProductImg2} alt="product img" /></a></td>
                                        <td className="product-name"><a href="#">Vestibulum dictum magna</a></td>
                                        <td className="product-price"><span className="amount">£50.00</span></td>
                                        <td className="product-quantity"><input type="number" value="1" /></td>
                                        <td className="product-subtotal">£50.00</td>
                                        <td className="product-remove"><a href="#">X</a></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div className="row">
                            <div className="col-md-8 col-sm-7 col-xs-12">
                                <div className="buttons-cart">
                                    <input type="submit" value="Update Cart" />
                                    <a href="#">Continue Shopping</a>
                                </div>
                                <div className="coupon">
                                    <h3>Coupon</h3>
                                    <p>Enter your coupon code if you have one.</p>
                                    <input type="text" placeholder="Coupon code" />
                                    <input type="submit" value="Apply Coupon" />
                                </div>
                            </div>
                            <div className="col-md-4 col-sm-5 col-xs-12">
                                <div className="cart_totals">
                                    <h2>Cart Totals</h2>
                                    <table>
                                        <tbody>
                                            <tr className="cart-subtotal">
                                                <th>Subtotal</th>
                                                <td><span className="amount">£215.00</span></td>
                                            </tr>
                                            <tr className="shipping">
                                                <th>Shipping</th>
                                                <td>
                                                    <ul id="shipping_method">
                                                        <li>
                                                            <input type="radio" /> 
                                                            <label>
                                                                Flat Rate: <span className="amount">£7.00</span>
                                                            </label>
                                                        </li>
                                                        <li>
                                                            <input type="radio" /> 
                                                            <label>
                                                                Free Shipping
                                                            </label>
                                                        </li>
                                                        <li></li>
                                                    </ul>
                                                    <p><a className="shipping-calculator-button" href="#">Calculate Shipping</a></p>
                                                </td>
                                            </tr>
                                            <tr className="order-total">
                                                <th>Total</th>
                                                <td>
                                                    <strong><span className="amount">£215.00</span></strong>
                                                </td>
                                            </tr>                                           
                                        </tbody>
                                    </table>
                                    <div className="wc-proceed-to-checkout">
                                        <a href="checkout.html">Proceed to Checkout</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form> 
                </div>
            </div>
        </div>
    </div>
  )
}

export default Table