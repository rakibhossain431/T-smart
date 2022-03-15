import React from 'react'
import Icon from './Icon'

const Register = ({showRegister}) => {
  return (
    <div id="register" role="tabpanel" className={`single__tabs__panel tab-pane fade ${showRegister ? "active in": ""}`}>
        <form className="login" method="post">
            <input type="text" placeholder="Name*"/>
            <input type="email" placeholder="Email*"/>
            <input type="password" placeholder="Password*"/>
        </form>
        <div className="tabs__checkbox">
            <input type="checkbox"/>
            <span> Remember me</span>
        </div>
        <div className="htc__login__btn">
            <a href="#">register</a>
        </div>
        <div className="htc__social__connect">
            <h2>Or Login With</h2>
            <ul className="htc__soaial__list">
                <Icon />
            </ul>
        </div>
    </div>
  )
}

export default Register