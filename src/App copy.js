import './App.css';
import './assert/vendor/bootstrap-icons/bootstrap-icons.css'
import { Accordion } from 'react-bootstrap';
import Header from './components/Header';
import nftImage from './assert/img/nft.png'
import CountUp from 'react-countup';
import { useEffect } from 'react';
import "aos/dist/aos.css";
import AOS from 'aos';

function App() {


  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <div className="App">




      <Header />





      <main id="main">




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















        <section   class="about">
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



















        <div class="divider bg-dark ">

        <div class="justify-content-center childClass firstchild">
            <h3>What we have achieved so far</h3>
            <p>Iusto et labore modi qui sapiente xpedita tempora et aut non ipsum consequatur illo.</p>
          </div>

 
          <div class="text-center title">
            <h3>What we have achieved so far</h3>
            <p>Iusto et labore modi qui sapiente xpedita tempora et aut non ipsum consequatur illo.</p>
          </div>

          <div class="row counters position-relative">

            <div class="col-lg-3 col-6 text-center">
              <span data-purecounter-start="0" data-purecounter-end="232" data-purecounter-duration="1" class="purecounter"></span>
              <p>Clients</p>
            </div>

            <div class="col-lg-3 col-6 text-center">
              <span data-purecounter-start="0" data-purecounter-end="521" data-purecounter-duration="1" class="purecounter"></span>
              <p>Projects</p>
            </div>

            <div class="col-lg-3 col-6 text-center">
              <span data-purecounter-start="0" data-purecounter-end="1463" data-purecounter-duration="1" class="purecounter"></span>
              <p>Hours Of Support</p>
            </div>

            <div class="col-lg-3 col-6 text-center">
              <span data-purecounter-start="0" data-purecounter-end="15" data-purecounter-duration="1" class="purecounter"></span>
              <p>Hard Workers</p>
            </div>

          </div>

        </div>




















        <section id="about" class="about">
          <div class="container">

            <div class="row">
              <div class="col-xl-5 col-lg-6 d-flex justify-content-center video-box align-items-stretch position-relative">
                <img src={nftImage} class="img-fluid" alt="" />
              </div>

              <div class="col-xl-7 col-lg-6 icon-boxes d-flex flex-column align-items-stretch justify-content-center py-5 px-lg-5">
                <h3>Enim quis est voluptatibus aliquid consequatur fugiat</h3>
                <p>Esse voluptas cumque vel exercitationem. Reiciendis est hic accusamus. Non ipsam et sed minima temporibus laudantium. Soluta voluptate sed facere corporis dolores excepturi. Libero laboriosam sint et id nulla tenetur. Suscipit aut voluptate.</p>

                <div class="icon-box">
                  <div class="icon">  <i class="bi bi-emoji-smile"></i></div>
                  <h4 class="title"><a href="">Lorem Ipsum</a></h4>
                  <p class="description">Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident</p>
                </div>

                <div class="icon-box">
                  <div class="icon">  <i class="bi bi-emoji-smile"></i></div>
                  <h4 class="title"><a href="">Nemo Enim</a></h4>
                  <p class="description">At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque</p>
                </div>

                <div class="icon-box">
                  <div class="icon">  <i class="bi bi-emoji-smile"></i></div>
                  <h4 class="title"><a href="">Dine Pad</a></h4>
                  <p class="description">Explicabo est voluptatum asperiores consequatur magnam. Et veritatis odit. Sunt aut deserunt minus aut eligendi omnis</p>
                </div>

              </div>
            </div>

          </div>
        </section>
























        <section id="values" class="values">
          <div class="container" data-aos="fade-up">

            <header class="section-header">
              <h2>Our Values</h2>
              <p>Odit est perspiciatis laborum et dicta</p>
            </header>

            <div class="row">

              <div class="col-lg-4" data-aos="fade-up" data-aos-delay="200">
                <div class="box">
                  <img src="assets/img/values-1.png" class="img-fluid" alt="" />
                  <h3>Ad cupiditate sed est odio</h3>
                  <p>Eum ad dolor et. Autem aut fugiat debitis voluptatem consequuntur sit. Et veritatis id.</p>
                </div>
              </div>

              <div class="col-lg-4 mt-4 mt-lg-0" data-aos="fade-up" data-aos-delay="400">
                <div class="box">
                  <img src="assets/img/values-2.png" class="img-fluid" alt="" />
                  <h3>Voluptatem voluptatum alias</h3>
                  <p>Repudiandae amet nihil natus in distinctio suscipit id. Doloremque ducimus ea sit non.</p>
                </div>
              </div>

              <div class="col-lg-4 mt-4 mt-lg-0" data-aos="fade-up" data-aos-delay="600">
                <div class="box">
                  <img src="assets/img/values-3.png" class="img-fluid" alt="" />
                  <h3>Fugit cupiditate alias nobis.</h3>
                  <p>Quam rem vitae est autem molestias explicabo debitis sint. Vero aliquid quidem commodi.</p>
                </div>
              </div>

            </div>

          </div>

        </section>








        <div class="discord bg-dark ">

          <div class="text-center title">
            <h3>What we have achieved so far</h3>
            <p>Iusto et labore modi qui sapiente xpedita tempora et aut non ipsum consequatur illo.</p>
          </div>

          <div class="row counters position-relative">

            <div class="col-lg-3 col-6 text-center">
              <span data-purecounter-start="0" data-purecounter-end="232" data-purecounter-duration="1" class="purecounter"></span>
              <p>Clients</p>
            </div>

            <div class="col-lg-3 col-6 text-center">
              <span data-purecounter-start="0" data-purecounter-end="521" data-purecounter-duration="1" class="purecounter"></span>
              <p>Projects</p>
            </div>

            <div class="col-lg-3 col-6 text-center">
              <span data-purecounter-start="0" data-purecounter-end="1463" data-purecounter-duration="1" class="purecounter"></span>
              <p>Hours Of Support</p>
            </div>

            <div class="col-lg-3 col-6 text-center">
              <span data-purecounter-start="0" data-purecounter-end="15" data-purecounter-duration="1" class="purecounter"></span>
              <p>Hard Workers</p>
            </div>

          </div>

        </div>













































        <section id="services" class="services">

          <div class="container" data-aos="fade-up">

            <header class="section-header  text-center">
              <h3><strong>Features</strong></h3>
              <p>Bullish Llama is a unique creature.</p>
            </header>

            <div class="row gy-4">

              <div class="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="200">
                <div class="service-box blue">
                  <i class="bi bi-emoji-smile"></i>
                  <h3>Nesciunt Mete</h3>
                  <p>Provident nihil minus qui consequatur non omnis maiores. Eos accusantium minus dolores iure perferendis tempore et consequatur.</p>
                  <a href="#" class="read-more"><span>Read More</span> <i class="bi bi-arrow-right"></i></a>
                </div>
              </div>

              <div class="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="300">
                <div class="service-box orange">
                  <i class="bi bi-journal-richtext" style={{ color: "#ee6c20" }}></i>
                  <h3>Eosle Commodi</h3>
                  <p>Ut autem aut autem non a. Sint sint sit facilis nam iusto sint. Libero corrupti neque eum hic non ut nesciunt dolorem.</p>
                  <a href="#" class="read-more"><span>Read More</span> <i class="bi bi-arrow-right"></i></a>
                </div>
              </div>

              <div class="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="400">
                <div class="service-box green">
                  <i class="bi bi-headset" style={{ color: "#15be56" }}></i>
                  <h3>Ledo Markt</h3>
                  <p>Ut excepturi voluptatem nisi sed. Quidem fuga consequatur. Minus ea aut. Vel qui id voluptas adipisci eos earum corrupti.</p>
                  <a href="#" class="read-more"><span>Read More</span> <i class="bi bi-arrow-right"></i></a>
                </div>
              </div>

              <div class="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="500">
                <div class="service-box red">
                  <i class="bi bi-headset" style={{ color: "#bb0852" }}></i>
                  <h3>Asperiores Commodi</h3>
                  <p>Non et temporibus minus omnis sed dolor esse consequatur. Cupiditate sed error ea fuga sit provident adipisci neque.</p>
                  <a href="#" class="read-more"><span>Read More</span> <i class="bi bi-arrow-right"></i></a>
                </div>
              </div>

              <div class="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="600">
                <div class="service-box purple">
                  <i class="bi bi-headset" style={{ color: "#bb0852" }}></i>
                  <h3>Velit Doloremque.</h3>
                  <p>Cumque et suscipit saepe. Est maiores autem enim facilis ut aut ipsam corporis aut. Sed animi at autem alias eius labore.</p>
                  <a href="#" class="read-more"><span>Read More</span> <i class="bi bi-arrow-right"></i></a>
                </div>
              </div>

              <div class="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="700">
                <div class="service-box pink">
                  <i class="bi bi-headset" style={{ color: "#bb0852" }}></i>
                  <h3>Dolori Architecto</h3>
                  <p>Hic molestias ea quibusdam eos. Fugiat enim doloremque aut neque non et debitis iure. Corrupti recusandae ducimus enim.</p>
                  <a href="#" class="read-more"><span>Read More</span> <i class="bi bi-arrow-right"></i></a>
                </div>
              </div>

            </div>

          </div>

        </section>



















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

      </main>







    </div>
  );
}

export default App;
