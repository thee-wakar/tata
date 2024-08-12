import React from "react";
import Navbar from "./navbar";
import Footer from "./footer";

function Cyberservice() {
    return(
        <div>
            <Navbar />
            <div className="carrer-cont">
                <h1 className="web-ser-title">Cyber Security</h1>
                
                <p className="web-ser-inf">let's build the future of the security, together.</p>
                <a className="read" href="#">Read more</a>
            </div>
            <p className="welcome">Immerse yourself in a realm where innovation and technology intertwine, and your dreams materialize into tangible creations. <a className="wel" href="#">Connect  &rarr;</a></p>
            <hr/>
            <div className="web-ser-cont">
                <h1 className="main-t">Capabilities:</h1>
                <br/>
                <p className="front-title">1. Unwavering Expertise in Cybersecurity:  <a className="sec-info">Dawnverse company's team of cybersecurity professionals possesses a deep understanding of the evolving cyber threat landscape and the latest security technologies. We ensures that you receive comprehensive and proactive protection against cyberattacks.</a> </p>
                <br/>
                <p className="front-title">2. Client-Centric Approach and Tailored Solutions:  <a className="sec-info">Dawnverse company prioritizes understanding each client's unique cybersecurity needs and risk profile. We collaborate closely with you to craft customized security solutions that align with their specific business objectives and risk tolerance.</a> </p>
                <br/>
                <p className="front-title">3. Risk Assessment and Vulnerability Management:  <a className="sec-info">Dawnverse company conducts thorough risk assessments to identify and prioritize potential cybersecurity vulnerabilities within our client's systems. This approach enables us to implement effective mitigation strategies and prevent breaches before they occur.</a> </p>
                <br/>
                <p className="front-title">4. Incident Response and Threat Hunting:  <a className="sec-info">Dawnverse Your company possesses a robust incident response plan to effectively handle cyberattacks and minimize damage. We also proactively hunt for threats within our client's networks, identifying and neutralizing potential intrusions before they cause harm.</a> </p>
                <br/>
                <p className="front-title">5. Employee Security Awareness Training:  <a className="sec-info">Dawnverse company provides comprehensive cybersecurity awareness training to educate your clients' employees on identifying and preventing cyberattacks. This training empowers employees to become the first line of defense against cyber threats.</a> </p>
                <br/>
                <br/>
                <h1 className="join">Together, we can shape a brighter tomorrow:</h1>
                <br/>
                <p className="conn">Connect with our Dawnverse TECHNOLOGIES and unlock the limitless potential of web application development. We'll guide you from concept to launch, redefining your online presence and transforming your vision into a digital masterpiece.</p>
                <br/>
                <p className="connn">Embrace the digital dawn—let's build the future of the web, together.</p>
                <br/>
                <a className="go-back" href="./services">Go Back &larr;</a>
            </div>
            <Footer />
        </div>
    )
}

export default Cyberservice