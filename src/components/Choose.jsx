import React from "react";
import "./Header.css";
import comp1 from "../images/comp1.svg";
import comp2 from "../images/comp2.svg";
import comp3 from "../images/comp3.svg";
import comp4 from "../images/comp4.svg";
import comp5 from "../images/comp5.svg";

export default function Choose() {
  return (
    <div className="choose-section">
      <div className="why-choose">
        <div className="why-choose-heading">Why Choose Stanjo?</div>
        <div>Premium Quality. Stunning performance. Unmatched Value</div>
      </div>
      <div className="components-section">
        <div className="high-quality">
          <img src={comp1} alt="" />
          <p className="choose-heading">High-quality LED technology</p>
          <p>
            Discover advanced LED lighting that delivers exceptional brightness
            and durability
          </p>
        </div>
        <div className="energy-efficient">
          <img src={comp2} alt="" />
          <p className="choose-heading">Energy-efficient savings</p>
          <p>
            Reduce your power bills without compromising on brightness or
            performance
          </p>
        </div>
        <div className="elegant-design">
          <img src={comp3} alt="" />
          <p className="choose-heading">Elegant and modern designs</p>
          <p>
            Enhance your space with sleek, stylish lighting solutions that
            elevate any room
          </p>
        </div>
        <div className="trusted">
          <img src={comp4} alt="" />
          <p className="choose-heading">Trusted by thousands</p>
          <p>
            Join thousands of satisfied customers who trust our reliable and
            long-lasting LED lights
          </p>
        </div>
      </div>
      <div className="components-section">
        <div className="Longest">
          <img src={comp1} alt="" />
          <p className="choose-heading">Longest Warranty</p>
          <p>
            Enjoy peace of mind with our industry-leading warranty, ensuring
            your lights last for years to come
          </p>
        </div>
        <div className="Low-cost">
          <img src={comp2} alt="" />
          <p className="choose-heading">Low Cost of Ownership</p>
          <p>
            Save on energy bills and maintenance costs with our affordable,
            durable LED lighting solutions
          </p>
        </div>
        <div className="bright">
          <img src={comp5} alt="" />
          <p className="choose-heading">Bright For Longer</p>
          <p>
            Experience consistent, high-quality brightness with LED lights
            designed to last longer and shine brighter
          </p>
        </div>
      </div>
    </div>
  );
}
