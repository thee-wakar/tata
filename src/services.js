import React from "react";
import Navbar from "./navbar";
import Footer from "./footer";

function Services() {
    return(
        <div>
             <Navbar />
                <div className="ser-cont">
                    <h1 className="serv-title">.</h1>
                </div>
                <h1  className="service-title">OUR SERVICES</h1>
                <div className="row services-one">
                    <div className="col-md-2 ser-one">
                        <img className="web-d" src="./webde.jpg" />
                    </div>
                    <div className="col-md-5 ser-two">
                        <h1 className="Web-title">WEB DEVELOPMENT</h1>
                        <p className="web-info">Let our team of experienced web developers handle the technical aspects of your website so you can focus on running your business.</p>
                        <a className="web-button" href="./webservice">Know more</a>
                    </div>
                </div>
                <div className="row services-one">
                    <div className="col-md-2 ser-one">
                        <img className="web-d" src="./appd.jpg" />
                    </div>
                    <div className="col-md-5 ser-two">
                        <h1 className="Web-title">APP DEVELOPMENT</h1>
                        <p className="web-info">Unleash the potential of mobile apps to engage your audience, enhance brand awareness, and drive business growth.</p>
                        <a className="web-button" href="./appmore">Know more..</a>
                    </div>
                </div>
                <div className="row services-one">
                    <div className="col-md-2 ser-one">
                        <img className="web-d" src="./cyb.jpg" />
                    </div>
                    <div className="col-md-5 ser-two">
                        <h1 className="Web-title">CYBER SECURITY</h1>
                        <p className="web-info">Safeguard your valuable data and protect your reputation with our comprehensive cybersecurity services.</p>
                        <a className="web-button" href="./cyberservice">Know more</a>
                    </div>
                </div>
                <div className="row services-one">
                    <div className="col-md-2 ser-one">
                        <img className="web-d" src="./datas.jpg" />
                    </div>
                    <div className="col-md-5 ser-two">
                        <h1 className="Web-title">DATA SCIENCE</h1>
                        <p className="web-info">Unlock the hidden potential of your data with our team of experienced data scientists. Let our data experts transform your data into actionable insights that drive business success.</p>
                        <a className="web-button" href="./dataservices">Know more</a>
                    </div>
                </div>
                <div className="row services-one">
                    <div className="col-md-2 ser-one">
                        <img className="web-d" src="./cloud.jpg" />
                    </div>
                    <div className="col-md-5 ser-two">
                        <h1 className="Web-title">CLOUD COMPUTING</h1>
                        <p className="web-info">Unlock the transformative power of cloud computing and propel your business forward with our comprehensive cloud solutions.</p>
                        <a className="web-button" href="./cloudservice">Know more</a>
                    </div>
                </div>
                <div className="row services-one">
                    <div className="col-md-2 ser-one">
                        <img className="web-d" src="./thrd.jpg" />
                    </div>
                    <div className="col-md-5 ser-two">
                        <h1 className="Web-title">3D DESIGN</h1>
                        <p className="web-info">We are committed to providing our clients with the best possible user experience, and we will stop at nothing to achieve it.</p>
                        <a className="web-button" href="./threedservice">Know more</a>
                    </div>
                </div>
                <div className="row services-one">
                    <div className="col-md-2 ser-one">
                        <img className="web-d" src="./ui.jpg" />
                    </div>
                    <div className="col-md-5 ser-two">
                        <h1 className="Web-title">UI/UX DESIGN</h1>
                        <p className="web-info">Partner with us and let our 3D designers create the visuals that will capture your audience and leave a lasting impression.</p>
                        <a className="web-button" href="./uiuxservice">Know more</a>
                    </div>
                </div>
                <hr/>
            <Footer />
        </div>
    )
}

export default Services