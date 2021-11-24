import React from "react";
import nftImage from './../assert/img/nft.png'

const Collection = () => {
    return (

        <div id="collection">

            <section id="about" class="about">
                <div class="container">

                    <div class="section-title">
                        <h2>Bullish Llama Nft</h2>
                        <p className="text-center">Collection of 10,000 Handcrafted Artworks</p>
                    </div>

                    <div class="row">
                        <div class="col-xl-5 col-lg-6 d-flex justify-content-center video-box align-items-stretch position-relative">
                            <img src={nftImage} class="img-fluid" alt="" />
                        </div>

                        <div class="col-xl-7 col-lg-6 icon-boxes d-flex flex-column align-items-stretch justify-content-center py-5 px-lg-5">


                            <div class=" mb-5">
                                <div class="icon">   </div>
                                <h4 class="title"><a href="">Each Bullish Llama is unique and programmatically generated from over 160 handcrafted traits, including body, weapon, clothing, and more hand-drawn by the alumni FlumenFox4.</a></h4>
                                <ul>
                                    <li>10,000 rare Bullish Llama NFT’s</li>
                                    <li>Fair Launch & Distribution: all Llamas cost 0.07 ETH</li>
                                    <li>Control and own a unique avatar NFT (ERC-721)</li>
                                    <li>Gain additional benefits through roadmap activations</li>
                                </ul>
                            </div>

                            <div class="d-flex justify-content-center text-lg-start mt-5">
                                <a href="#" class="btn-read-more d-inline-flex align-items-center justify-content-center align-self-center">
                                    <span>Learn More</span>
                                    <i class="bi bi-arrow-right"></i>
                                </a>
                            </div>

                        </div>
                    </div>

                </div>
            </section>


            <section id="services" class="services">

                <div class="container" data-aos="fade-up">

                    <div class="section-title">
                        <h3><strong>Features</strong></h3>
                        <p>Bullish Llama is a unique creature.</p>
                    </div>


                    <div class="row gy-4">

                        <div class="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="200">
                            <div class="service-box blue">
                                <i class="bi bi-emoji-smile"></i>
                                <h3>Rarity</h3>
                                <p>Each Bullish Llama is algorithmically generated, which guarantees its uniqueness.</p>
                                <a href="#" class="read-more"><span>Read More</span> <i class="bi bi-arrow-right"></i></a>
                            </div>
                        </div>

                        <div class="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="300">
                            <div class="service-box orange">
                                <i class="bi bi-journal-richtext" style={{ color: "#ee6c20" }}></i>
                                <h3>Mobile App Access</h3>
                                <p>Bullish Llama holders will gain access to the NFT experience app for all Bullish Club members.</p>
                                <a href="#" class="read-more"><span>Read More</span> <i class="bi bi-arrow-right"></i></a>
                            </div>
                        </div>

                        <div class="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="400">
                            <div class="service-box green">
                                <i class="bi bi-headset" style={{ color: "#15be56" }}></i>
                                <h3>Full Rights</h3>
                                <p>As a Bullish Llama owner, you have all rights and licenses for a unique avatar NFT (ERC-721).</p>
                                <a href="#" class="read-more"><span>Read More</span> <i class="bi bi-arrow-right"></i></a>
                            </div>
                        </div>

                        <div class="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="500">
                            <div class="service-box red">
                                <i class="bi bi-headset" style={{ color: "#bb0852" }}></i>
                                <h3>Handcraftedi</h3>
                                <p>All attributes were hand-drawn by the visionary FlumenFox4 with pixel-perfect precision.</p>
                                <a href="#" class="read-more"><span>Read More</span> <i class="bi bi-arrow-right"></i></a>
                            </div>
                        </div>

                        <div class="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="600">
                            <div class="service-box purple">
                                <i class="bi bi-headset" style={{ color: "#bb0852" }}></i>
                                <h3>Roadmap</h3>
                                <p>All the Bullish Club members will gain additional benefits through roadmap activations.</p>
                                <a href="#" class="read-more"><span>Read More</span> <i class="bi bi-arrow-right"></i></a>
                            </div>
                        </div>

                        <div class="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="700">
                            <div class="service-box pink">
                                <i class="bi bi-headset" style={{ color: "#bb0852" }}></i>
                                <h3>Avatar skills</h3>
                                <p>Each Bullish Llama has special skills based on attributes it has. Bullish Club game is coming soon.</p>
                                <a href="#" class="read-more"><span>Read More</span> <i class="bi bi-arrow-right"></i></a>
                            </div>
                        </div>

                    </div>

                </div>

            </section>

        </div>
    );
}

export default Collection;