import React from 'react'
import logo from '../../images/logo/logo.png'

import Thum2 from '../../images/icons/thum2.png'
import Thum3 from '../../images/icons/thum3.png'
import Thum4 from '../../images/icons/thum4.png'
import Thum5 from '../../images/icons/thum5.png'
import Thum6 from '../../images/icons/thum6.png'
import Thum7 from '../../images/icons/thum7.png'
import Thum8 from '../../images/icons/thum8.png'
import Thum9 from '../../images/icons/thum9.png'

import feature5 from '../../images/feature-img/5.jpg'
import feature2 from '../../images/feature-img/2.jpg'
import feature1 from '../../images/feature-img/1.jpg'

import Brand6 from '../../images/brand/6.png'
import Brand7 from "../../images/brand/7.png"
import Brand8 from "../../images/brand/8.png"
import Brand9 from "../../images/brand/9.png"

// import imageProduct1 from '../../images/product/sm-img/1.jpg'
// import imageProduct2 from '../../images/product/sm-img/2.jpg'

// import BgImg2 from '../../../src/images/bg/2.png'

function Hero() {
  return (
    <div>
      <section className="categories-slider-area bg__white">
            <div className="container">
                <div className="row">
                    {/* <!-- Start Left Feature --> */}
                    <div className="col-md-9 col-lg-9 col-sm-8 col-xs-12 float-left-style">
                        {/* <!-- Start Slider Area --> */}
                        <div className="slider__container slider--one">
                            <div className="slider__activation__wrap owl-carousel owl-theme">
                                {/* <!-- Start Single Slide --> */}
                                {/* <div className="slide slider__full--screen slider-height-inherit slider-text-right" style={{
                                        background: 'rgba(0, 0, 0, 0)' ,
                                        backgroundImage: `url(${BgImg2})`, 
                                        backgroundRepeat: 'no-repeat',
                                        backgroundProsition:  'center center',
                                        backgroundSize: 'cover' }}>
                                    <div className="container">
                                        <div className="row">
                                            <div className="col-md-10 col-lg-8 col-md-offset-2 col-lg-offset-4 col-sm-12 col-xs-12">
                                                <div className="slider__inner">
                                                    <h1>New Product <span className="text--theme">Collection</span></h1>
                                                    <div className="slider__btn">
                                                        <a className="htc__btn" href="cart.html">shop now</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div> */}
                                {/* <!-- End Single Slide -->
                                <!-- Start Single Slide --> */}
                                {/* <div className="slide slider__full--screen slider-height-inherit  slider-text-left" style="background: rgba(0, 0, 0, 0) url(images/slider/bg/2.png) no-repeat scroll center center / cover ;">
                                    <div className="container">
                                        <div className="row">
                                            <div className="col-md-8 col-lg-8 col-sm-12 col-xs-12">
                                                <div className="slider__inner">
                                                    <h1>New Product <span className="text--theme">Collection</span></h1>
                                                    <div className="slider__btn">
                                                        <a className="htc__btn" href="cart.html">shop now</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div> */}
                                {/* <!-- End Single Slide --> */}
                            </div>
                        </div>
                        {/* <!-- Start Slider Area --> */}
                    </div>
                    <div className="col-md-3 col-lg-3 col-sm-4 col-xs-12 float-right-style">
                        <div className="categories-menu mrg-xs">
                            <div className="category-heading">
                               <h3> Browse Categories</h3>
                            </div>
                            <div className="category-menu-list">
                                <ul>
                                    <li><a href="#"><img alt="" src={Thum2}/> Women’s Clothing <i className="zmdi zmdi-chevron-right"></i></a>
                                        <div className="category-menu-dropdown">
                                            <div className="category-part-1 category-common mb--30">
                                                <h4 className="categories-subtitle"> Jewelry & Watches</h4>
                                                <ul>
                                                    <li><a href="#"> Men’s Clothing</a></li>
                                                    <li><a href="#"> Computer & Office</a></li>
                                                    <li><a href="#"> Jewelry & Watches</a></li>
                                                    <li><a href="#"> Bags & Shoes</a></li>
                                                    <li><a href="#"> Phones & Accessories</a></li>
                                                </ul>
                                            </div>
                                            <div className="category-part-2 category-common mb--30">
                                                <h4 className="categories-subtitle"> Jewelry & Watches</h4>
                                                <ul>
                                                    <li><a href="#"> Men’s Clothing</a></li>
                                                    <li><a href="#"> Computer & Office</a></li>
                                                    <li><a href="#"> Jewelry & Watches</a></li>
                                                    <li><a href="#"> Bags & Shoes</a></li>
                                                    <li><a href="#"> Phones & Accessories</a></li>
                                                </ul>
                                            </div>
                                            <div className="category-part-3 category-common">
                                                <h4 className="categories-subtitle"> Jewelry & Watches</h4>
                                                <ul>
                                                    <li><a href="#"> Men’s Clothing</a></li>
                                                    <li><a href="#"> Computer & Office</a></li>
                                                    <li><a href="#"> Jewelry & Watches</a></li>
                                                    <li><a href="#"> Bags & Shoes</a></li>
                                                    <li><a href="#"> Phones & Accessories</a></li>
                                                </ul>
                                            </div>
                                            <div className="category-part-4 category-common">
                                                <h4 className="categories-subtitle"> Jewelry & Watches</h4>
                                                <ul>
                                                    <li><a href="#"> Men’s Clothing</a></li>
                                                    <li><a href="#"> Computer & Office</a></li>
                                                    <li><a href="#"> Jewelry & Watches</a></li>
                                                    <li><a href="#"> Bags & Shoes</a></li>
                                                    <li><a href="#"> Phones & Accessories</a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </li>
                                    <li><a href="#"><img alt="" src={Thum3}/> Man Fashion <i className="zmdi zmdi-chevron-right"></i></a>
                                        <div className="category-menu-dropdown">
                                            <div className="category-part-1 category-common2 mb--30">
                                                <h4 className="categories-subtitle"> Jewelry & Watches</h4>
                                                <ul>
                                                    <li><a href="#"> Men’s Clothing</a></li>
                                                    <li><a href="#"> Computer & Office</a></li>
                                                    <li><a href="#"> Jewelry & Watches</a></li>
                                                    <li><a href="#"> Bags & Shoes</a></li>
                                                    <li><a href="#"> Phones & Accessories</a></li>
                                                </ul>
                                            </div>
                                            <div className="category-part-2 category-common2 mb--30">
                                                <h4 className="categories-subtitle"> Jewelry & Watches</h4>
                                                <ul>
                                                    <li><a href="#"> Men’s Clothing</a></li>
                                                    <li><a href="#"> Computer & Office</a></li>
                                                    <li><a href="#"> Jewelry & Watches</a></li>
                                                    <li><a href="#"> Bags & Shoes</a></li>
                                                    <li><a href="#"> Phones & Accessories</a></li>
                                                </ul>
                                            </div>
                                            <div className="category-part-3 category-common2 mb--30">
                                                <h4 className="categories-subtitle">dress</h4>
                                                <ul>
                                                    <li><a href="#"> Men’s Clothing</a></li>
                                                    <li><a href="#"> Computer & Office</a></li>
                                                    <li><a href="#"> Jewelry & Watches</a></li>
                                                    <li><a href="#"> Bags & Shoes</a></li>
                                                    <li><a href="#"> Phones & Accessories</a></li>
                                                </ul>
                                            </div>
                                            <div className="mega-banner-img">
                                                <a href="single-product.html">
                                                    <img src={feature5} alt=""/>
                                                </a>
                                            </div>
                                        </div>
                                    </li>
                                    <li><a href="#"><img alt="" src={Thum4}/> Computer & Office <i className="zmdi zmdi-chevron-right"></i></a>
                                        <div className="category-menu-dropdown">
                                            <div className="category-menu-dropdown-top">
                                                <div className="category-part-1 category-common2 mb--30">
                                                    <h4 className="categories-subtitle"> Jewelry & Watches</h4>
                                                    <ul>
                                                        <li><a href="#"> Men’s Clothing</a></li>
                                                        <li><a href="#"> Computer & Office</a></li>
                                                        <li><a href="#"> Jewelry & Watches</a></li>
                                                        <li><a href="#"> Bags & Shoes</a></li>
                                                        <li><a href="#"> Phones & Accessories</a></li>
                                                    </ul>
                                                </div>
                                                <div className="category-part-2 category-common2 mb--30">
                                                    <h4 className="categories-subtitle"> Jewelry & Watches</h4>
                                                    <ul>
                                                        <li><a href="#"> Men’s Clothing</a></li>
                                                        <li><a href="#"> Computer & Office</a></li>
                                                        <li><a href="#"> Jewelry & Watches</a></li>
                                                        <li><a href="#"> Bags & Shoes</a></li>
                                                        <li><a href="#"> Phones & Accessories</a></li>
                                                    </ul>
                                                </div>
                                                <div className="category-part-3 category-common2 mb--30">
                                                    <h4 className="categories-subtitle">Jewelry & Watches</h4>
                                                    <ul>
                                                        <li><a href="#"> Men’s Clothing</a></li>
                                                        <li><a href="#"> Computer & Office</a></li>
                                                        <li><a href="#"> Jewelry & Watches</a></li>
                                                        <li><a href="#"> Bags & Shoes</a></li>
                                                        <li><a href="#"> Phones & Accessories</a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="category-menu-dropdown-bottom">
                                                <div className="single-category-brand">
                                                    <a href="#"><img src={Brand6} alt=""/></a>
                                                </div>
                                                <div className="single-category-brand">
                                                    <a href="#"><img src={Brand7} alt=""/></a>
                                                </div>
                                                <div className="single-category-brand">
                                                    <a href="#"><img src={Brand8} alt=""/></a>
                                                </div>
                                                <div className="single-category-brand">
                                                    <a href="#"><img src={Brand9} alt=""/></a>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li><a href="#"><img alt="" src={Thum5}/> Jewelry & Watches <i className="zmdi zmdi-chevron-right"></i></a>
                                        <div className="category-menu-dropdown">
                                            <div className="category-menu-dropdown-left">
                                                <div className="category-part-1 category-common mb--30">
                                                    <h4 className="categories-subtitle"> Jewelry & Watches</h4>
                                                    <ul>
                                                        <li><a href="#"> Men’s Clothing</a></li>
                                                        <li><a href="#"> Computer & Office</a></li>
                                                        <li><a href="#"> Jewelry & Watches</a></li>
                                                        <li><a href="#"> Bags & Shoes</a></li>
                                                        <li><a href="#"> Phones & Accessories</a></li>
                                                    </ul>
                                                </div>
                                                <div className="category-part-2 category-common mb--30">
                                                    <h4 className="categories-subtitle"> Jewelry & Watches</h4>
                                                    <ul>
                                                        <li><a href="#"> Men’s Clothing</a></li>
                                                        <li><a href="#"> Computer & Office</a></li>
                                                        <li><a href="#"> Jewelry & Watches</a></li>
                                                        <li><a href="#"> Bags & Shoes</a></li>
                                                        <li><a href="#"> Phones & Accessories</a></li>
                                                    </ul>
                                                </div>
                                                <div className="category-part-3 category-common">
                                                    <h4 className="categories-subtitle"> Jewelry & Watches</h4>
                                                    <ul>
                                                        <li><a href="#"> Men’s Clothing</a></li>
                                                        <li><a href="#"> Computer & Office</a></li>
                                                        <li><a href="#"> Jewelry & Watches</a></li>
                                                        <li><a href="#"> Bags & Shoes</a></li>
                                                        <li><a href="#"> Phones & Accessories</a></li>
                                                    </ul>
                                                </div>
                                                <div className="category-part-4 category-common">
                                                    <h4 className="categories-subtitle"> Jewelry & Watches</h4>
                                                    <ul>
                                                        <li><a href="#"> Men’s Clothing</a></li>
                                                        <li><a href="#"> Computer & Office</a></li>
                                                        <li><a href="#"> Jewelry & Watches</a></li>
                                                        <li><a href="#"> Bags & Shoes</a></li>
                                                        <li><a href="#"> Phones & Accessories</a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="category-menu-dropdown-right">
                                                <div className="menu-right-img">
                                                    <a href="#"><img src={feature2} alt=""/></a>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li><a href="#"><img alt="" src={Thum6}/> Men’s Clothing <i className="zmdi zmdi-chevron-right"></i></a>
                                        <div className="category-menu-dropdown">
                                            <div className="category-menu-dropdown-left">
                                                <div className="category-part-1 category-common">
                                                    <h4 className="categories-subtitle"> Jewelry & Watches</h4>
                                                    <ul>
                                                        <li><a href="#"> Men’s Clothing</a></li>
                                                        <li><a href="#"> Computer & Office</a></li>
                                                        <li><a href="#"> Jewelry & Watches</a></li>
                                                        <li><a href="#"> Bags & Shoes</a></li>
                                                        <li><a href="#"> Phones </a></li>
                                                        <li><a href="#"> Computer & Office</a></li>
                                                        <li><a href="#"> Phones & Accessories</a></li>
                                                    </ul>
                                                </div>
                                                <div className="category-part-2 category-common">
                                                    <h4 className="categories-subtitle"> Jewelry & Watches</h4>
                                                    <ul>
                                                        <li><a href="#"> Men’s Clothing</a></li>
                                                        <li><a href="#"> Computer & Office</a></li>
                                                        <li><a href="#"> Jewelry & Watches</a></li>
                                                        <li><a href="#"> Bags & Shoes</a></li>
                                                        <li><a href="#"> Phones </a></li>
                                                        <li><a href="#"> Computer & Office</a></li>
                                                        <li><a href="#"> Phones & Accessories</a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="category-menu-dropdown-right">
                                                <div className="menu-right-img">
                                                    <a href="#"><img src={feature1} alt=""/></a>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li><a href="#"><img alt="" src={Thum7}/> Bags & Shoes</a></li>
                                    <li><a href="#"><img alt="" src={Thum8}/> Toys & Kids & Baby</a></li>
                                    <li><a href="#"><img alt="" src={Thum9}/>  Automobiles </a></li>
                                    <li><a href="#"><img alt="" src={Thum5}/> Jewelry & Watches</a></li>
                                    <li><a href="#"><img alt="" src={Thum2}/> Consumer Electronics</a></li>
                                    <li><a href="#"><img alt="" src={Thum3}/> all Accessories</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    {/* <!-- End Left Feature --> */}
                </div>
            </div>
        </section>
    </div>
  )
}

export default Hero

