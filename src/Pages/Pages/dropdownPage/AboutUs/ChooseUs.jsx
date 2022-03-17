import React from 'react'

const ChooseUs = () => {
  return (
    <section className="htc__choose__us__ares bg__white">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-6 col-lg-6 col-sm-12 col-xs-12">
                        <div className="video__wrap bg--3" data--black__overlay="5">
                            <div className="video__inner">
                                <a className="video__trigger video-popup" href="https://www.youtube.com/watch?v=cDDWvj_q-o8">
                                    <i className="zmdi zmdi-play"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-6 col-sm-12 col-xs-12">
                        <div className="htc__choose__wrap bg__cat--4">
                            <h2 className="choose__title">Why Choose Us?</h2>
                            <div className="choose__container">
                                <div className="single__chooose">
                                    <div className="choose__us">
                                        <div className="choose__icon">
                                            <span className="ti-heart"></span>
                                        </div>
                                        <div className="choose__details">
                                            <h4>Free Gift Box</h4>
                                            <p>Lorem ipsum dolor sit amet consect adipisic elit sed do. </p>
                                        </div>
                                    </div>
                                    <div className="choose__us">
                                        <div className="choose__icon">
                                            <span className="ti-truck"></span>
                                        </div>
                                        <div className="choose__details">
                                            <h4>Free Delivery</h4>
                                            <p>Lorem ipsum dolor sit amet consect adipisic elit sed do. </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="single__chooose">
                                    <div className="choose__us">
                                        <div className="choose__icon">
                                            <span className="ti-reload"></span>
                                        </div>
                                        <div className="choose__details">
                                            <h4>Money Back</h4>
                                            <p>Lorem ipsum dolor sit amet consect adipisic elit sed do. </p>
                                        </div>
                                    </div>
                                    <div className="choose__us">
                                        <div className="choose__icon">
                                            <span className="ti-time"></span>
                                        </div>
                                        <div className="choose__details">
                                            <h4>Support 24/7</h4>
                                            <p>Lorem ipsum dolor sit amet consect adipisic elit sed do. </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
  )
}

export default ChooseUs