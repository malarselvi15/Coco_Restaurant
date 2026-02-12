import React from "react";
import "../App.css";
import featureBg from "../assets/feature-bg.jpeg"; // Replace with your image

const FeatureSection = () => {
  return (
    <section
      className="feature-section"
      style={{ backgroundImage: `url(${featureBg})` }}
    >
      <div className="feature-overlay"></div>
      <div className="feature-content">
        <h2 className="fade-in delay-1">Authentic Flavors, Every Day</h2>
        <p className="fade-in delay-2">
          From our kitchen to your heart, enjoy meals crafted with love and passion.
        </p>
        <button className="btn primary-btn fade-in delay-3">
          Explore Menu
        </button>
      </div>
    </section>
  );
};

export default FeatureSection;
