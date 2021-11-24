import React from "react";
import { Accordion } from 'react-bootstrap';

const Faq = () => {
    return (

        <section id="faq" class="faq">
            <div class="container" data-aos="fade-up">

                <header class="text-center">
                    <h2>F.A.Q</h2>
                    <p>Frequently Asked Questions</p>
                </header>

                <div class="row justify-content-center">
                    <div class="col-lg-8 ">


                        <Accordion defaultActiveKey="0">

                            <Accordion.Item eventKey="0">
                                <Accordion.Header>What is the Bullish Llama Club?</Accordion.Header>
                                <Accordion.Body>
                                    Bullish Llama Club is a community of humans who believes in a crypto future. BLC is starting with a collection of 10,000 Bullish Llamas NFTs—unique digital collectibles living on the Ethereum blockchain.
                                </Accordion.Body>
                            </Accordion.Item>

                            <Accordion.Item eventKey="1">
                                <Accordion.Header>Are your NFTs original?</Accordion.Header>
                                <Accordion.Body>
                                    Every Llama was crafted by FlumenFox4 specifically for the Bullish Llama Club - 100% original and authentic.
                                </Accordion.Body>
                            </Accordion.Item>


                            <Accordion.Item eventKey="2">
                                <Accordion.Header>What is the Bullish Llama Club?</Accordion.Header>
                                <Accordion.Body>
                                    Bullish Llama Club is a community of humans who believes in a crypto future. BLC is starting with a collection of 10,000 Bullish Llamas NFTs—unique digital collectibles living on the Ethereum blockchain.
                                </Accordion.Body>
                            </Accordion.Item>

                            <Accordion.Item eventKey="3">
                                <Accordion.Header>Are your NFTs original?</Accordion.Header>
                                <Accordion.Body>
                                    Every Llama was crafted by FlumenFox4 specifically for the Bullish Llama Club - 100% original and authentic.
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                    </div>



                </div>

            </div>

        </section>

    );
}

export default Faq;

