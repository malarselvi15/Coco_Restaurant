import React from "react";
import "../App.css";
import bgImage from "../assets/feature-bg.jpeg"; // Replace with your image

const TransparentSection = () => {
  return (
    <section
      className="transparent-section"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="overlay"></div>

      <div className="transparent-content">
        <h2>Delicious Moments Await</h2>
        <p>
          Enjoy a cozy ambiance and meals made with love. Every visit feels special.
        </p>
        <button className="btn primary-btn">Explore Menu</button>
      </div>
    </section>
  );
};

export default TransparentSection;
