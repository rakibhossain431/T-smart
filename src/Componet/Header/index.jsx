import React, { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import logo from "../../images/logo/logo.png"
import Menus from '../Menus'
import MenusExtra from './MenusExtra'

import OffsetMenu from './OffsetMenus/OffsetMenu'
import SearchArea from './OffsetMenus/Search'
import ShopCart from './OffsetMenus/ShopCart'

const Header = () => {
    const [toggleSearchArea , setToggleSearchArea] = useState(false)
    const [shoppingCart , setShoppingCart] = useState(false)
    const [offsetMenuBar , setOffsetMenuBar] = useState(false)
    console.log(toggleSearchArea);

    useEffect(() =>{
       document.querySelector('body').classList.add("search__box__show__hide")
    },[])
    useEffect(() =>{
       document.querySelector('body').classList.add("shopping__cart__on")
    },[])
    useEffect(() =>{
       document.querySelector('body').classList.add("offsetmenu__on")
    },[])
      
  return (
    <>
    <header id="header" className="htc-header header--3 bg__white">
        {/* <!-- Start Mainmenu Area --> */}
        <div id="sticky-header-with-topbar" className="mainmenu__area sticky__header">
            <div className="container">
                <div className="row">
                    <div className="col-md-2 col-lg-2 col-sm-3 col-xs-3">
                        <div className="logo">
                            <Link to="/">
                                <img src={logo} alt="logo" />
                            </Link>
                        </div>
                    </div>
                    {/* <!-- Start MAinmenu Ares --> */}
                    <div className="col-md-8 col-lg-8 col-sm-6 col-xs-6">
                        <Menus />
                                                
                    </div>
                    {/* <!-- End MAinmenu Ares --> */}
                    <MenusExtra 
                        setToggleSearchArea= {setToggleSearchArea}
                        setShoppingCart={setShoppingCart}
                        setOffsetMenuBar={setOffsetMenuBar}
                    />
                </div>
                <div className="mobile-menu-area"></div>
            </div>
        </div>
        {/* <!-- End Mainmenu Area --> */}
    </header>
    <div className='body--overlay'></div>
    {toggleSearchArea && (
            <SearchArea  setToggleSearchArea={setToggleSearchArea}/>

        )}
    {shoppingCart && (
            <ShopCart  setShoppingCart={setShoppingCart}/>

        )}
    {offsetMenuBar && (
            <OffsetMenu  setOffsetMenuBar={setOffsetMenuBar}/>

        )}
        
    </>
  )
}

export default Header