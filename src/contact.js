import React from "react";
import Navbar from "./navbar";
import Footer from "./footer";

function Contact () {
    return(
        <div>
            <Navbar />
            <div className="cont-cont">
                <h1 className="contact-vis">Contact Dawnverse</h1>
                <h1 className="des-contact">Reach Out to Our Support Team</h1>
                <p className="contact-info">Get answers to questions about products, sales,</p>
                <p className="contact-infoo">support and everything else Dawnverse</p>
            </div>
            <div className="form-container">
                <div className="row">
                    <div className="col-md-5 form-one">
                        <br/>
                        <h1 className="name">TELL US YOUR NAME:</h1>
                        <input className="first-name" type="text" id="fname" name="fname" placeholder="First name:" /> <br/>
                        <input className="last-name" type="text" id="lname" name="lname" placeholder="Last name:" />
                        <h1 className="name">ENTER YOUR EMAIL:</h1>
                        <input className="email-hol" type="email" id="email" placeholder="Eg: yyy@gmail.com" />
                        <h1 className="name">ENTER YOUR NUMBER:</h1>
                        <input className="phone" type="number" placeholder="Eg: 0000000000" />
                        <h1 className="name">MESSAGE:</h1>
                        <input className="msg" type="text" placeholder="Write us a message..." />
                        <br/>
                        <button className="button-contone">Send</button>
                    </div>
                    <div className="col-md-5 form-image">
                        <h1 className="adr"><img className="loc" src="./loc.png" /> Address:</h1>
                        <p className="address">Dawnverse tech, Kondapur, Near Alwyn colony Miyapur.</p>
                        <p className="address">Hyderabad, Telangana, India</p>
                        <h1 className="pho">  <img className="call" src="./call.png" />Let's Talk:</h1>
                        <p className="address">Hyderabad, Telangana, India</p>
                        <h1 className="em">  <img className="mail" src="./mail.png" />General Support:</h1>
                        <p className="address">Dawnversetech@gmail.com</p>
                    </div>
                </div>
            </div>
            <br/>
            <br/>
            <hr/>
            <Footer />
        </div>
    )
}

export default Contact