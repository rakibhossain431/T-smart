import React from 'react'
import Icon from './Icon'

const Login = ({showLogin}) => {
  return (
    <div id="login" role="tabpanel" className={`single__tabs__panel tab-pane fade  ${showLogin ? "active in": ""}`}>
         <form className="login" method="post">
             <input type="text" placeholder="User Name*"/>
             <input type="password" placeholder="Password*"/>
           </form>
             <div className="tabs__checkbox">
                 <input type="checkbox"/>
                 <span> Remember me</span>
                 <span className="forget"><a href="#">Forget Pasword?</a></span>
               </div>
                <div className="htc__login__btn mt--30">
                    <a href="#">Login</a>
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

export default Login