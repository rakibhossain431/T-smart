import React, { useState } from 'react'
import Header from '../../Componet/Header';

import bgImg from '../../images/bg/rakib.jpg'
import Register from './Auth/Register';
import Login from './Auth/Login';
import Footer from '../../Componet/Footer';


const LoginRegister = () => {
    const [showLogin, setShowLogin] = useState(true)
    const [showRegister, setShowRegister] = useState(false)

    const heandleLogin= () => {
        setShowLogin(true)
        setShowRegister(false)
    }
    const heandleRegister = () => {
        setShowRegister(true)
        setShowLogin(false)

    }
  return (
    <div>
        <Header/>
        <div className="htc__login__register bg__white ptb--130" style={{background: `rgba(0, 0, 0, 0)`,
           backgroundImage: `url(${bgImg})`,
           backgroundRepeat: `no-repeat`,
           backgroundPosition:`center `,  
           backgrounSize:`cover` }}>
        
            <div className="container">
                <div className="row">
                    <div className="col-md-6 col-md-offset-3">
                        <ul className="login__register__menu" role="tablist">
                            <li role="presentation" className={`login ${showLogin && "active"}`}>
                                <a onClick={heandleLogin} 
                                  href="#login"
                                  role="tab" 
                                  data-toggle="tab">Login</a>
                            </li>
                            <li role="presentation" className={`register ${showRegister && "active"}`}>
                                <a onClick={heandleRegister}
                                 href="#register"
                                  role="tab" 
                                  data-toggle="tab">Register</a>
                            </li>
                        </ul>
                    </div>
                </div>
                {/* <!-- Start Login Register Content --> */}
                <div className="row">
                    <div className="col-md-6 col-md-offset-3">
                        <div className="htc__login__register__wrap">
                            {/* <!-- Start Single Content --> */}
                             <Login  showLogin={showLogin}/>
                            
                            {/* <!-- End Single Content -->
                            <!-- Start Single Content --> */}
                             <Register showRegister={showRegister}/>
                            
                            {/* <!-- End Single Content --> */}
                        </div>
                    </div>
                </div>
                {/* <!-- End Login Register Content --> */}
            </div>
        </div>
        <Footer/>
    </div>
  )
}

export default LoginRegister;