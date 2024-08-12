import React from "react";
import Navbar from "./navbar";
import Footer from "./footer";

function About () {
    return(
        <div>
            <Navbar />
            <div className="about-cont">
                .
            </div>
            <p className="building-abt">Experience the transformative power of software with our innovative solutions. <a className="build-link-abt" href="#">Learn more &rarr; </a></p>
            <hr/>
            <div className="about-info">
                <div className="row">
                    <div className="col-md-3 side-bar-one">
                        <div className="side-cont-one">
                        <img className="side-img" src="./sidem.jpeg" />
                        <p className="side-title">CORPORATE RESPONSIBILITY</p>
                        <p className="side-info">Our impact</p>
                        <p className="side-infom">Helping to power economic growth by breaking down barriers and creating opportunities in communities across the globe.</p>
                        </div>
                    </div>
                    <div className="col-md-8 side-two">
                        <p className="about-para">Elevating our clients' systems isn't just about business advancements; it's about driving positive change in the world. Our commitment to streamlining our clients' systems goes beyond business efficiency; it's about shaping a better future for all.</p>
                        <p className="about-para">Dawnverse also Empowering individuals and organizations with cutting-edge technical skills through comprehensive and accessible training programs to the people who wants transform their knowledge zero to hero.</p>
                    </div>
                </div>
                <br/>
                <br/>
                <br/>
                <br/>
                <hr/>
                <div className="row">
                    <div className="col-md-5">
                        <div className="what-we">
                        <p className="what">What does Dawnverse do ?</p>
                        <p className="we">We bring together all the necessary technology and services to help our clients solve their business problems.</p>
                        <p className="we">transformative</p>
                        <img className="do-img" src="./do.jpeg" />
                        </div>
                    </div>
                    <div className="col-md-5 accor">
                        <div className="accord">
                        <p className="freq">Frequently asked questions</p>
                        <div class="accordion accordion-flush" id="accordionFlushExample">
                            <div class="accordion-item">
                                <h2 class="accordion-header">
                                <button class="accordion-button collapsed ques-acc" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                                    What does Dawnverse do today ?
                                </button>
                                </h2>
                                <div id="flush-collapseOne" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                                <div class="accordion-body ques-acc">Dawnverse integrates technology and expertise, providing infrastructure, software (including market-leading Red Hat) and consulting services for clients as they pursue the digital transformation of the world’s mission-critical businesses.</div>
                                </div>
                            </div>
                            <div class="accordion-item">
                                <h2 class="accordion-header">
                                <button class="accordion-button collapsed ques-acc" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                                    Does Dawnverse have goals fro sustainability ?
                                </button>
                                </h2>
                                <div id="flush-collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                                <div class="accordion-body ques-acc">We furthered our tradition of leadership in sustainability, announcing a goal of net-zero greenhouse gas emissions by 2030 across all the countries in which we operate. Our data-driven sustainability solutions are helping clients turn ambition into action.</div>
                                </div>
                            </div>
                            <div class="accordion-item">
                                <h2 class="accordion-header">
                                <button class="accordion-button collapsed ques-acc" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                                    What is the future of Dawnverse ?
                                </button>
                                </h2>
                                <div id="flush-collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                                <div class="accordion-body ques-acc">Dawnverse is always on the hunt for what’s next. Learn more about the group of more than 3,000 scientists and researchers around the globe who deeply believe in the power of the scientific method to invent at Dawnverse Research. For example, we are leading the charge in quantum computing.</div>
                                </div>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
                <br/>
                <br/>
                <div className="cont-three">
                    <p className="title-about-three">"What can we do for you?</p>
                    <p className="para-about-three">Provide high-quality projects to clients that meet their specific needs. Help businesses grow and succeed by providing them with expert consulting services. Enhance data management and security for businesses. Empower students with knowledge and skills in emerging technologies. We are a catalyst for innovation and growth. We are committed to empowering businesses and individuals with technology. We are dedicated to making a positive impact on the world.</p>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default About