import React from "react";
import './App.css';

function Navbar() {
    return(
        <div className="nav-bar">
            <nav>
                <input type="checkbox" id="check"/>
                <label for="check" class="checkbtn">
                    <i class="fas fa-bars"></i>
                </label>
                
                <img className="dawn-logo" src="./dw.png" />
                <ul>
                    <li><a class="active" href="./home">Home</a></li>
                    <li><a href="./services">Services</a></li>
                    <li><a href="./careers">Careers</a></li>
                    <li><a href="./about">About Us</a></li>
                    <li><a href="./contact">Contact Us</a></li>
                </ul>
            </nav>
        </div>
    );
}

export default Navbar