import React from 'react'
import { Link } from 'react-router-dom'
import menusData from "../../Temp/Menus.json"

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
                                   
                                </ul>
                            </nav>
    </div>
  )
}

export default Menus