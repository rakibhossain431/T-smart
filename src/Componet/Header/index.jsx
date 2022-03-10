import React from 'react'
import logo from "../../images/logo/logo.png"
import Menus from './Menus'
import MenusExtra from './MenusExtra'

const Header = () => {
  return (
    <div>
        <header id="header" className="htc-header header--3 bg__white">
            {/* <!-- Start Mainmenu Area --> */}
            <div id="sticky-header-with-topbar" className="mainmenu__area sticky__header">
                <div className="container">
                    <div className="row">
                        <div className="col-md-2 col-lg-2 col-sm-3 col-xs-3">
                            <div className="logo">
                                <a href="index.html">
                                    <img src={logo} alt="logo" />
                                </a>
                            </div>
                        </div>
                        {/* <!-- Start MAinmenu Ares --> */}
                        <div className="col-md-8 col-lg-8 col-sm-6 col-xs-6">
                            <Menus />
                                                    
                        </div>
                        {/* <!-- End MAinmenu Ares --> */}
                        <MenusExtra/>
                    </div>
                    <div className="mobile-menu-area"></div>
                </div>
            </div>
            {/* <!-- End Mainmenu Area --> */}
        </header>
    </div>
  )
}

export default Header