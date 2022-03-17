import React from 'react'
import { Link } from 'react-router-dom'

const MenusExtra = ({setToggleSearchArea, setShoppingCart, setOffsetMenuBar}) => {

    
  return (
   
        <div className="col-md-2 col-sm-4 col-xs-3">  
               <ul className="menu-extra">
                  <li className="search search__open hidden-xs">
                    <span className="ti-search" onClick={()=>setToggleSearchArea(true)}/>
                </li>

                  <li><Link to="/LoginRegister"><span className="ti-user" /></Link></li>

                  <li className="cart__menu">
                    <span className="ti-shopping-cart" onClick={()=>setShoppingCart(true)} />
                  </li>
                 <li className="toggle__menu hidden-xs hidden-sm">
                    <span className="ti-menu" onClick={() =>setOffsetMenuBar(true)} />
                  </li>
              </ul>                                                                                                         
         </div>
         
    
  )
}

export default MenusExtra