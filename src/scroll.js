import React from "react";

function Scroll () {
    return(
        <div>
            <div className="cont-one-slider">
                <div id="carouselExampleCaptions" className="carousel slide">
                    <div className="carousel-indicators indic-th">
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    </div>
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img src="./slideone.png" className="d-block slide-img-one" alt="..." />
                            <div className="carousel-caption d-none d-md-block">
                                <h1 className="slide-title-one">.</h1>                                                
                            </div>
                        </div>
                        <div className="carousel-item">
                            <img src="./slsix.png" className="d-block slide-img-two" alt="..."/>
                            <div className="carousel-caption d-none d-md-block">
                                <p className="sec-slide-info-one">We innovate technology</p>
                                <p className="sec-slide-info-t">One step to the</p>
                                <p className="sec-slide-info-th">Right destination...</p>
                                
                            </div>
                        </div>
                        <div className="carousel-item">
                            <img src="./slidefour.png" className="d-block slide-img-thr" alt="..."/>
                            <div className="carousel-caption d-none d-md-block">
                                <h1 className="sliinfthr">DAWNVERSE TECH</h1>
                                <h1 className="sliinfth">And SERVICES</h1>
                                <p className="third-line-slide">We formula the best IT solutions</p>
                            </div>
                        </div>
                    </div>
                    
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </div>

            <div className="cont-middle">
                <div className="row">
                    <div className="col-md-5">
                        <h1 className="cont-mid-title">Expert Consultants</h1>
                        <p className="cont-mid-info">A commitment to excellence in everything we do, resulting in high-quality solutions that exceed our clients' expectations.</p>
                        <a className="mid-link" href="#">Know more &rarr;</a>
                    </div>
                    <div className="col-md-4">
                        <img className="cont-mid-img" src="./meet.png" />
                    </div>
                </div>
            </div>

            <div className="cont-two-cards">
                <h1 className="cont-two-title">Our Services</h1>
                <div className="row">
                    <div className="col-md-2 card-one">
                        <h1 className="cyb-title">Cyber Security</h1>
                        <hr/>
                        <p className="cyb-info">We're here to help you stay one step ahead of the latest cyber threats.</p>
                        <button className="but-learn-one">Know more...</button>
                    </div>
                    <div className="col-md-2 card-two">
                        <h1 className="cyb-title">Data Science</h1>
                        <hr/>
                        <p className="cyb-info">Our data scientists have the expertise and experience to help you achieve your business goals.</p>
                        <button className="but-learn-two">Know more...</button>
                    </div>
                    <div className="col-md-2 card-thr">
                        <h1 className="cyb-title">Cloud Computing</h1>
                        <hr/>
                        <p className="cyb-info">Our professionals can help you choose the right cloud platform for your needs and help your applications and data to the cloud.</p>
                        <button className="but-learn-thr">Know more...</button>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-2 card-four">
                        <h1 className="cyb-title">Web Development</h1>
                        <hr/>
                        <p className="cyb-info">Our web development team is passionate about collaborating to create high-performing web apps.</p>
                        <button className="but-learn-four">Know more...</button>
                    </div>
                    <div className="col-md-2 card-five">
                        <h1 className="cyb-title">UI/UX Design</h1>
                        <hr/>
                        <p className="cyb-info">We leave no stone unturned in our pursuit of a visually appealing and intuitive user interface.</p>
                        <button className="but-learn-five">Know more...</button>
                    </div>
                    <div className="col-md-2 card-six">
                        <h1 className="cyb-title">3D Designing</h1>
                        <hr/>
                        <p className="cyb-info">Our 3D designers can create anything you can imagine, from product mockups to architectural renderings.</p>
                        <button className="but-learn-six">Know more...</button>
                    </div>
                </div>
                <div className="cont-thr">
                <div className="row">
                    <div className="col-md-2 cont-thr-one">
                        <img className="who-we" src="./whowe.jpg" />
                    </div>
                    <div className="col-md-2 cont-thr-two">
                        <h1 className="who-title">WHO WE ARE</h1>
                        <p className="who-line">Advancing human potential through innovation and collective learning.</p>
                        <br/>
                        <p className="who-pa">Dawnverse is an IT services, consulting and business solutions organization that has been entering into every industry.</p>
                        <a className="get" href="./about.js">Get to know us &rarr;</a>
                    </div>
                </div>
            </div>
        </div>
        </div>
    )
}

export default Scroll