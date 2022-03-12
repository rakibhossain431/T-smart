import React from 'react'
import { Link } from 'react-router-dom'
import menusData from "../../../Temp/Menus.json"

const Menus = () => {
  return (
    <div>
        <nav className="mainmenu__nav hidden-xs hidden-sm">
                                <ul className="main__menu">
                                    {menusData.menus.length > 0 && menusData.menus.map(menu =>(
                                        <li key={menu.id} className={menu.class}>
                                            <Link to={menu.link}>{menu.text}</Link>
                                                <ul className="dropdown">
                                                    {menu.dropdown.length > 0 && menu.dropdown.map(dropdownitem =>(
                                                        <li key={dropdownitem.id} className={dropdownitem.class}>
                                                            <Link to={dropdownitem.link}>{dropdownitem.text}</Link>
                                                        </li>
                                                    ))}
                                                   

                                                </ul>
                                        </li>
                                    ))}
                                    {/* <li className="drop"><a href="portfolio-card-box-2.html">portfolio</a>
                                        <ul className="dropdown">
                                            <li><a href="single-portfolio.html">Single portfolio</a></li>
                                        </ul>
                                    </li>
                                    <li className="drop"><a href="blog.html">Blog</a>
                                        <ul className="dropdown">
                                            <li><a href="blog.html">blog 3 column</a></li>
                                            <li><a href="blog-details.html">Blog details</a></li>
                                        </ul>
                                    </li>
                                    <li className="drop"><a href="shop.html">Shop</a>
                                        <ul className="dropdown mega_dropdown">
                                            
                                            <li><a className="mega__title" href="shop.html">shop layout</a>
                                                <ul className="mega__item">
                                                    <li><a href="shop.html">default shop</a></li>
                                                </ul>
                                            </li>
                                           
                                            <li><a className="mega__title" href="shop.html">product details layout</a>
                                                <ul className="mega__item">
                                                    <li><a href="product-details.html">tab style 1</a></li>
                                                </ul>
                                            </li>
                                           
                                            <li>
                                                <ul className="mega__item">
                                                    <li>
                                                        <div className="mega-item-img">
                                                            <a href="shop.html">
                                                                <img src="images/feature-img/3.png" alt=""/>
                                                            </a>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </li>
                                            
                                        </ul>
                                    </li>
                                    <li className="drop"><a href="#">pages</a>
                                        <ul className="dropdown">
                                            
                                            <li><a href="about.html">about</a></li>
                                            <li><a href="#">testimonials <span><i className="zmdi zmdi-chevron-right"></i></span></a>
                                                <ul className="lavel-dropdown">
                                                    <li><a href="customer-review.html">customer review</a></li>
                                                </ul>
                                            </li>
                                            <li><a href="shop.html">shop</a></li>
                                            <li><a href="shop-sidebar.html">shop sidebar</a></li>
                                            <li><a href="product-details.html">product details</a></li>
                                            <li><a href="cart.html">cart</a></li>
                                            <li><a href="wishlist.html">wishlist</a></li>
                                            <li><a href="checkout.html">checkout</a></li>
                                            <li><a href="team.html">team</a></li>
                                            <li><a href="login-register.html">login & register</a></li>
                                        </ul>
                                    </li>
                                    <li><a href="contact.html">contact</a></li> */}
                                </ul>
                            </nav>
    </div>
  )
}

export default Menus