import React from "react";
import "./Header.css";
import led from '../images/led.png';

export default function LED() {
  return (
    <div className="LED-section">
      <div className="LED-heading">Choose the Perfect Light for Your Space</div>
      <div>Explore Our Best-Selling LED Solutions</div>
      <div className="LED-panel">
        <div className="left-LED">
          <img src={led} alt="" width={180} height={180}/>
        </div>
        <div className="right-LED">
          <div className="LED-right-Heading">LED Panel Lights</div>
          <div>Sleek, stylish, and perfect for modern interiors</div>
        </div>
      </div>
    </div>
  );
}
