import React from "react";
import "./Header.css";
import logo from "../images/stanjo-logo.svg";
import location from "../images/location.svg";
import phone from "../images/phone.svg";
import mail from "../images/mail.svg";
import instagram from "../images/instagram.svg";
import linkedin from "../images/linkedin.svg";
import twitter from "../images/twitter.svg";
import facebook from "../images/facebookicon.svg";

export default function Footer() {
  return (
    <div className="Footer-section">
      <div className="Left-footer">
        <img src={logo} alt="" width="100px"/>
        <h4>Lighting Your World with Innovation and Efficiency</h4>
        <div>
          <div className="footer-images">
            <img src={location} alt="" />
            Hyderabad, INDIA
          </div>
          <div className="footer-images">
            <img src={phone} alt="" />
            +91 6305858219
          </div>
          <div className="footer-images">
            <img src={mail} alt="" />
            info@stanjo.in
          </div>
        </div>
        <div className="social-icons">
          <img src={facebook} alt="" />
          <img src={instagram} alt="" />
          <img src={linkedin} alt="" />
          <img src={twitter} alt="" />
        </div>
        <div className="Right-footer">
            <div className="PRODUCTS">
              <h4>Products</h4>
              <div>Panel Lights</div>
              <div>Flood Lights</div>
              <div>Street Lights</div>
              <div>Downlights</div>
              <div>LED Indoor Lights</div>
              <div>Led Outdoor Lights</div>
              <div>Tubelights & Bulbs</div>
            </div>
            <div className="OTHERS">
              <h4>Others</h4>
              <div>About</div>
              <div>Products Gallery</div>
              <div>Calculators</div>
              <div>Contact Us</div>
              <div>Privacy Policy</div>
              <div>Terms & conditions</div>
            </div>
        </div>
      </div>
    </div>
  );
}
