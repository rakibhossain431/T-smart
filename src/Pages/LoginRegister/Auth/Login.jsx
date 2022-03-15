import React, { useState } from 'react'
import Icon from './Icon'
import "./Login.style.css"

const Login = ({showLogin}) => {

  const [loginInfo, setloginInfo] = useState({
    userName:"",
    password:""
  })
  

  const hendleSubmit = (e) => {
    e.preventDefault();
    console.log("submit",loginInfo)
  }
  return (
    <div id="login" role="tabpanel" className={`single__tabs__panel tab-pane fade  ${showLogin ? "active in": ""}`}>
         <form className="login" method="post" onClick={hendleSubmit}>
             <input type="text" placeholder="User Name*" 
             value={loginInfo.userName}
              onChange={(e) => setloginInfo({...loginInfo , userName: e.target.value})}/>

             <input type="password" placeholder="Password*" 
             value={loginInfo.password} 
             onChange={(e) => setloginInfo({...loginInfo ,password: e.target.value})}/>

               <div className="tabs__checkbox">

                  <div>
                    <input type="checkbox"/>
                    <span> Remember me</span>
                  </div>

                   <span className="forget"><a href="#">Forget Pasword?</a></span>
               </div>

                <div className="htc__login__btn mt--30">
                    <button type='submit'>Login</button>
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

export default Login