import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import BradCaumpBg from '../../../images/bg/rakib.jpg'
const Bradcaump = ({title , pageName , bgImage}) => {
    const {pathname} = useLocation()
    console.log(pathname)
  return (
    <div className="ht__bradcaump__area" style={{
        background: 'rgba(0, 0, 0, 0)' ,
        backgroundImage: `url(${bgImage ? bgImage : BradCaumpBg})`, 
        backgroundRepeat: 'no-repeat',
        backgroundProsition:  'center center',
        backgroundSize: 'cover' }}>
            <div className="ht__bradcaump__wrap">
                <div className="container">
                    <div className="row">
                        <div className="col-xs-12">
                            <div className="bradcaump__inner text-center">
                                <h2 className="bradcaump-title"> {title} </h2>
                                <nav className="bradcaump-inner">
                                    <Link className="breadcrumb-item" to= "/">Home</Link>
                                  
                                  <span className="brd-separetor">/</span>
                                  <span className="breadcrumb-item active">
                                       {pageName ? pageName : pathname.replace('/' , " ")} 
                                 </span>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default Bradcaump