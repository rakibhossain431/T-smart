import React from 'react'
import CartImg1 from '../../../images/product/sm-img/1.jpg'
import CartImg2 from '../../../images/product/sm-img/2.jpg'

const ShopCart = ({setShoppingCart}) => {

  return (
      <>
          <div className="shopping__cart shopping__cart__on">
                <div className="shopping__cart__inner">
                    <div className="offsetmenu__close__btn">
                        <a href="#">
                            <i className="zmdi zmdi-close"onClick={()=>setShoppingCart(false)}/>
                        </a>
                    </div>
                    <div className="shp__cart__wrap">
                        <div className="shp__single__product">
                            <div className="shp__pro__thumb">
                                <a href="#">
                                    <img src={CartImg1} alt="product images"/>
                                </a>
                            </div>
                            <div className="shp__pro__details">
                                <h2><a href="product-details.html">BO&Play Wireless Speaker</a></h2>
                                <span className="quantity">QTY: 1</span>
                                <span className="shp__price">$105.00</span>
                            </div>
                            <div className="remove__btn">
                                <a href="#" title="Remove this item"><i className="zmdi zmdi-close"></i></a>
                            </div>
                        </div>
                        <div className="shp__single__product">
                            <div className="shp__pro__thumb">
                                <a href="#">
                                    <img src={CartImg2} alt="product images"/>
                                </a>
                            </div>
                            <div className="shp__pro__details">
                                <h2><a href="product-details.html">Brone Candle</a></h2>
                                <span className="quantity">QTY: 1</span>
                                <span className="shp__price">$25.00</span>
                            </div>
                            <div className="remove__btn">
                                <a href="#" title="Remove this item"><i className="zmdi zmdi-close"></i></a>
                            </div>
                        </div>
                    </div>
                    <ul className="shoping__total">
                        <li className="subtotal">Subtotal:</li>
                        <li className="total__price">$130.00</li>
                    </ul>
                    <ul className="shopping__btn">
                        <li><a href="cart.html">View Cart</a></li>
                        <li className="shp__checkout"><a href="checkout.html">Checkout</a></li>
                    </ul>
                </div>
            </div>


      
      </>
  )
}

export default ShopCart