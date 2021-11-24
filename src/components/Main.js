
import React from "react";
import CountUp from 'react-countup';

import banner from '../assert/img/index.webp'

const Main = () => {
    return (

        <>


            <div id="home">

                <section id="hero" class="d-flex align-items-center">
                    <div class="container">
                        <div class="row">
                            <div class="col-lg-4 pt-4 pt-lg-0 order-2 order-lg-1 d-flex flex-column justify-content-center">
                                <span >We Are</span>
                                <span>Bulish.</span>
                                <span>Are You?</span>
                                <h4>NFT Collection & Mobile app</h4>
                                <div><a href="#about" class="btn btn-primary btn-lg ">Get Lima Now</a></div>
                            </div>
                            <div class="col-lg-8 order-1 order-lg-2 hero-img ">
                                <img src={banner} className="img-responsive" alt="" />
                            </div>
                        </div>
                    </div>

                </section>


                {/* counter */}
                <section id="counts" class="counts">
                    <div class="container"  >

                        <div class="row gy-4">
                            <div class="col-lg-3 col-md-6">
                                <div class="count-box">
                                    <i class="bi bi-emoji-smile"></i>
                                    <div>
                                        <CountUp
                                            start={0}
                                            end={90000}
                                            duration={2}
                                            separator=","
                                        />

                                        <p>Community Member</p>
                                    </div>
                                </div>
                            </div>

                            <div class="col-lg-3 col-md-6">
                                <div class="count-box">
                                    <i class="bi bi-journal-richtext" style={{ color: "#ee6c20" }}></i>
                                    <div>
                                        <CountUp
                                            start={0}
                                            end={6000}
                                            duration={2}
                                            separator=","
                                        />
                                        <p>Followers on twitter</p>
                                    </div>
                                </div>
                            </div>

                            <div class="col-lg-3 col-md-6">
                                <div class="count-box">
                                    <i class="bi bi-headset" style={{ color: "#15be56" }} ></i>
                                    <div>
                                        <CountUp
                                            start={0}
                                            end={1100}
                                            duration={2}
                                            separator=","
                                        />
                                        <p>Llama Owners</p>
                                    </div>
                                </div>
                            </div>

                            <div class="col-lg-3 col-md-6">
                                <div class="count-box">
                                    <i class="bi bi-people" style={{ color: "#bb0852" }} ></i>
                                    <div>
                                        <CountUp
                                            start={0}
                                            end={9000}
                                            duration={2}
                                            separator=","
                                        />
                                        <p>Community Member</p>
                                    </div>
                                </div>
                            </div>

                        </div>

                    </div>
                </section>


               


            </div>








        </>

    );
}

export default Main;