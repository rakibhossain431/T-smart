import React from 'react'
import image1 from '../../../images/team/1.jpg'
import image2 from '../../../images/team/2.jpg'
import image3 from '../../../images/team/4.jpg'
const Staff = () => {
  return (
    <section class="htc__team__area bg__white ptb--120">
    <div class="container">
        <div class="row">
            <div class="col-md-12">
                <div class="section__title section__title--2 text-center">
                    <h2 class="title__line">Our Staff</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do eiusmod tempor incididunt ut labo.</p>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="team__wrap clearfix mt--60">
                {/* <!-- Start Single Team --> */}
                <div class="col-md-4 col-lg-4 col-sm-6 col-xs-12">
                    <div class="team foo">
                        <div class="team__thumb">
                            <a href="#">
                                <img src={image1} alt="team images"/>
                            </a>
                        </div>
                        <div class="team__bg__color"></div>
                        <div class="team__hover__info">
                            <div class="team__hover__action">
                                <h2><a href="#">Robiul siddikee</a></h2>
                                <ul class="social__icon">
                                    <li><a href="#"><i class="zmdi zmdi-twitter"></i></a></li>
                                    <li><a href="#"><i class="zmdi zmdi-instagram"></i></a></li>
                                    <li><a href="#"><i class="zmdi zmdi-facebook"></i></a></li>
                                    <li><a href="#"><i class="zmdi zmdi-google-plus"></i></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- End Single Team -->
                <!-- Start Single Team --> */}
                <div class="col-md-4 col-lg-4 col-sm-6 col-xs-12 xmt-30">
                    <div class="team foo">
                        <div class="team__thumb">
                            <a href="#">
                                <img src={image2} alt="team images"/>
                            </a>
                        </div>
                        <div class="team__bg__color"></div>
                        <div class="team__hover__info">
                            <div class="team__hover__action">
                                <h2><a href="#">Robiul siddikee</a></h2>
                                <ul class="social__icon">
                                    <li><a href="#"><i class="zmdi zmdi-twitter"></i></a></li>
                                    <li><a href="#"><i class="zmdi zmdi-instagram"></i></a></li>
                                    <li><a href="#"><i class="zmdi zmdi-facebook"></i></a></li>
                                    <li><a href="#"><i class="zmdi zmdi-google-plus"></i></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- End Single Team -->
                <!-- Start Single Team --> */}
                <div class="col-md-4 col-lg-4 hidden-sm col-xs-12 xmt-30">
                    <div class="team foo">
                        <div class="team__thumb">
                            <a href="#">
                                <img src={image3} alt="team images"/>
                            </a>
                        </div>
                        <div class="team__bg__color"></div>
                        <div class="team__hover__info">
                            <div class="team__hover__action">
                                <h2><a href="#">Robiul siddikee</a></h2>
                                <ul class="social__icon">
                                    <li><a href="#"><i class="zmdi zmdi-twitter"></i></a></li>
                                    <li><a href="#"><i class="zmdi zmdi-instagram"></i></a></li>
                                    <li><a href="#"><i class="zmdi zmdi-facebook"></i></a></li>
                                    <li><a href="#"><i class="zmdi zmdi-google-plus"></i></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- End Single Team --> */}
            </div>
        </div>
    </div>
</section>
  )
}

export default Staff