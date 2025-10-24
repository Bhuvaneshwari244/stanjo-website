import React from "react";
import "./Header.css";

export default function Preview() {
  return (
    <div className="Preview-section">
      <div className="Preview-heading">
        Not Sure Which Light to Choose? Experience It First!
      </div>
      <div className="Preview-description">
        Still deciding? Our Virtual Lighting Preview lets you see how different
        lights fit your space before buying.
      </div>
      <div className="Preview-sizes">
        <div className="Preview-min">
          <div className="Preview-min-content">
            <div className="Preview-min-heading">Test warm vs. cool tones</div>
            <div>Find the perfect match for your ambiance</div>
          </div>
        </div>
        <div className="Preview-medium">
            <div className="Preview-medium-content">
                <div className="Preview-medium-heading">Adjust brightness levels</div>
                <div>See how different options affect your space</div>
            </div>
        </div>
        <div className="Preview-max">
            <div className="Preview-max-content">
                <div className="Preview-max-heading">Try it in different rooms</div>
                <div>Home, office, outdoor, and more</div>
            </div>
        </div>
      </div>
      <button className="Preview-button">Try Virtual Preview</button>
    </div>
  );
}
