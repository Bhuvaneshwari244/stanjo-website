import React from "react";
import "./Header.css";

export default function Welcome() {
  return (
    <div className="Welcome-body">
      <div className="left-body">
        <div className="left-body-heading">
          Welcome to Stanjo - Lighting the Way Forward
        </div>
        <div className="left-body-content">
          At Stanjo, we believe lighting is more than just illumination its
          about enhancing spaces, creating ambiance, and delivering unmatched
          efficiency. Our mission is to provide high-quality, energy-efficient
          LED lighting solutions that blend inovation, durability, and style to
          brighten homes, offices, and outdoor spaces.
        </div>
        <button className="left-body-button">Explore Collections</button>
      </div>
      <div className="right-body">
        <div className="right-body-content">
          <div>
            Brighter.
            <br />
            Smarter. <br />
            Built to Last
          </div>
        </div>
      </div>
    </div>
  );
}
