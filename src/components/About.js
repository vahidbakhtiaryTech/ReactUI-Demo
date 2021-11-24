import dividerImage from './../assert/img/divider.webp'

const About = () => {
    return (

        <div id="about">

            <section class="about">
                <div class="container" data-aos="fade-up">
                    <div class="row gx-0">
                        <div class="col-lg-12 d-flex flex-column justify-content-center" data-aos="fade-up" data-aos-delay="200">
                            <div class="content">
                                <h2>Bullish Club is a community of humans who believe in a crypto future.</h2>
                                <div className="row">
                                    <div class="col-lg-6 col-md-6" data-aos="fade-up">
                                        <p className="text-justify">Passion for NFTs connected our international team from the US and Europe with the remarkable creator FlumenFox4. Bullish club is starting with a collection of 10,000 Bullish Llamas NFTs—unique digital collectibles living on the Ethereum blockchain.</p>
                                    </div>
                                    <div class="col-lg-6 col-md-6" data-aos="fade-up">
                                        <p className="text-justify">As a Bullish Llama owner, you gain access to a Bullish Club app which will allow you to collect and herd your Llamas in one place. Future areas and perks can be unlocked by the community through roadmap activation together with charity donations.</p>
                                    </div>
                                </div>
                                <div class="text-center text-lg-start">
                                    <a href="#" class="btn-read-more d-inline-flex align-items-center justify-content-center align-self-center">
                                        <span>Read More</span>
                                        <i class="bi bi-arrow-right"></i>
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div class="col-lg-6 d-flex align-items-center" data-aos="zoom-out" data-aos-delay="200">
                            <img src="assets/img/about.jpg" class="img-fluid" alt="" />
                        </div>

                    </div>
                </div>

            </section>



            <div class="discord bg-dark d-flex justify-content-center">
                <div class="col-lg-4 col-6 mt-5">
                    <div class="content mt-5">
                        <h3>Partnership with SPC</h3>
                        <p>
                            We are happy to announce collaboration with amazing Space Punks Club.
                        </p>
                        <div class="text-center text-lg-start">
                            <a href="#" class="btn-read-more d-inline-flex align-items-center justify-content-center align-self-center">
                                <span>Learn More</span>
                                <i class="bi bi-arrow-right"></i>
                            </a>
                        </div>
                    </div>
                </div>

                <div class="col-lg-4 col-6">
                    <img src={dividerImage} class="img-fluid" alt="" />
                </div>

            </div>
        </div>
    );
}

export default About;