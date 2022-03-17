import React from 'react'
import Logo from '../../../images/logo/logo.png'
import SidebarImg1 from '../../../images/sidebar-img/1.jpg'
import SidebarImg2 from '../../../images/sidebar-img/2.jpg'
import SidebarImg3 from '../../../images/sidebar-img/3.jpg'
import SidebarImg4 from '../../../images/sidebar-img/4.jpg'
import SidebarImg5 from '../../../images/sidebar-img/5.jpg'
import SidebarImg6 from '../../../images/sidebar-img/6.jpg'
import SidebarImg7 from '../../../images/sidebar-img/7.jpg'
import SidebarImg8 from '../../../images/sidebar-img/8.jpg'
const OffsetMenu = ({OffsetMenu}) => {
  return (
      <>
     
        <div className="offsetmenu offsetmenu__on">
                <div className="offsetmenu__inner">
                    <div className="offsetmenu__close__btn">
                        <a href="#">
                            <i className="zmdi zmdi-close" onClick={() =>OffsetMenu(false)}/>
                        </a>
                    </div>
                    <div className="off__contact">
                        <div className="logo">
                            <a href="index.html">
                                <img src={Logo} alt="logo"/>
                            </a>
                        </div>
                        <p>Lorem ipsum dolor sit amet consectetu adipisicing elit sed do eiusmod tempor incididunt ut labore.</p>
                    </div>
                    <ul className="sidebar__thumd">
                        <li><a href="#"><img src={SidebarImg1} alt="sidebar images"/></a></li>
                        <li><a href="#"><img src={SidebarImg2} alt="sidebar images"/></a></li>
                        <li><a href="#"><img src={SidebarImg3} alt="sidebar images"/></a></li>
                        <li><a href="#"><img src={SidebarImg4} alt="sidebar images"/></a></li>
                        <li><a href="#"><img src={SidebarImg5} alt="sidebar images"/></a></li>
                        <li><a href="#"><img src={SidebarImg6}alt="sidebar images"/></a></li>
                        <li><a href="#"><img src={SidebarImg7} alt="sidebar images"/></a></li>
                        <li><a href="#"><img src={SidebarImg8} alt="sidebar images"/></a></li>
                    </ul>
                    <div className="offset__widget">
                        <div className="offset__single">
                            <h4 className="offset__title">Language</h4>
                            <ul>
                                <li><a href="#"> Engish </a></li>
                                <li><a href="#"> French </a></li>
                                <li><a href="#"> German </a></li>
                            </ul>
                        </div>
                        <div className="offset__single">
                            <h4 className="offset__title">Currencies</h4>
                            <ul>
                                <li><a href="#"> USD : Dollar </a></li>
                                <li><a href="#"> EUR : Euro </a></li>
                                <li><a href="#"> POU : Pound </a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="offset__sosial__share">
                        <h4 className="offset__title">Follow Us On Social</h4>
                        <ul className="off__soaial__link">
                            <li><a className="bg--twitter" href="#"  title="Twitter"><i className="zmdi zmdi-twitter"></i></a></li>
                            
                            <li><a className="bg--instagram" href="#" title="Instagram"><i className="zmdi zmdi-instagram"></i></a></li>

                            <li><a className="bg--facebook" href="#" title="Facebook"><i className="zmdi zmdi-facebook"></i></a></li>

                            <li><a className="bg--googleplus" href="#" title="Google Plus"><i className="zmdi zmdi-google-plus"></i></a></li>

                            <li><a className="bg--google" href="#" title="Google"><i className="zmdi zmdi-google"></i></a></li>
                        </ul>
                    </div>
                </div>
            </div>
      
     
      </>
  )
}

export default OffsetMenu