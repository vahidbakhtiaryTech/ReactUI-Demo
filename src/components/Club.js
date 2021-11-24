import React from "react";
import image1 from './../assert/img/collection/index.webp';
import image2 from './../assert/img/collection/index4.webp';
import image3 from './../assert/img/collection/index5.webp';

const Club = () => {
    return (

        <section id="club" class="values bg-dark">
            <div class="container" data-aos="fade-up">

                <header class="section-header text-center">
                    <h2>Meet Bullish Club Team</h2>
                    <p>Fully decentralized team of experts and enthusiasts</p>
                </header>

                <div class="row">
                    <div class="col-lg-4" data-aos="fade-up" data-aos-delay="200">
                        <div class="box">
                            <img src={image1} class="img-fluid" alt="" />
                            <h3>Aristo</h3>
                            <p>Marketing director</p>
                        </div>
                    </div>

                    <div class="col-lg-4 mt-4 mt-lg-0" data-aos="fade-up" data-aos-delay="400">
                        <div class="box">
                            <img src={image2} class="img-fluid" alt="" />
                            <h3>FFPrince</h3>
                            <p>Blockchain Expert</p>
                        </div>
                    </div>

                    <div class="col-lg-4 mt-4 mt-lg-0" data-aos="fade-up" data-aos-delay="600">
                        <div class="box">
                            <img src={image3} class="img-fluid" alt="" />
                            <h3>Nick910</h3>
                            <p>Fullstack Engineer</p>
                        </div>
                    </div>

                    <div class="col-lg-4 mt-4 mt-lg-0" data-aos="fade-up" data-aos-delay="600">
                        <div class="box">
                            <img src={image3} class="img-fluid" alt="" />
                            <h3>Nick910</h3>
                            <p>Fullstack Engineer</p>
                        </div>
                    </div>
                   

                    <div class="col-lg-4" data-aos="fade-up" data-aos-delay="200">
                        <div class="box">
                            <img src={image1} class="img-fluid" alt="" />
                            <h3>Aristo</h3>
                            <p>Marketing director</p>
                        </div>
                    </div>

                    <div class="col-lg-4 mt-4 mt-lg-0" data-aos="fade-up" data-aos-delay="400">
                        <div class="box">
                            <img src={image2} class="img-fluid" alt="" />
                            <h3>FFPrince</h3>
                            <p>Blockchain Expert</p>
                        </div>
                    </div>

                  
                </div>

            </div>

        </section>
    );
}

export default Club;

