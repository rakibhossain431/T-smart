import React, { useState } from 'react'
import Icon from './Icon'

const Register = ({showRegister}) => {
    const [register , setRegister] = useState({
        userName:'',
        email:'',
        password:''
    })
    const heandleSubmit= (e) => {
        e.preventDefault();
        console.log("submit" , register)
    }
    
  return (
      
    <div id="register" role="tabpanel" className={`single__tabs__panel tab-pane fade ${showRegister ? "active in": ""}`}>
        <form className="login" method="post" onClick={heandleSubmit}>
            <input type="text" placeholder="Name*" onChange={(e) =>setRegister({register, userName: e.target.value})}/>
            <input type="email" placeholder="Email*" onChange={(e) =>setRegister({register, email: e.target.value})}/>
            <input type="password" placeholder="Password*" onChange={(e) =>setRegister({register, password: e.target.value})}/>

            <div className="tabs__checkbox">
                <input type="checkbox"/>
                <span> Remember me</span>
            </div>
            <div className="htc__login__btn">
                <a href="#">register</a>
            </div>
        </form>
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