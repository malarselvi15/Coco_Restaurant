import React from "react";
import "../App.css";
import bgImage from "../assets/feature-bg.jpeg";

const TransparentSection = () => {

  // ✅ Scroll to Menu Section
  const scrollToMenu = () => {
    const element = document.getElementById("menu");

    if (element) {
      const navbarHeight = 90; // adjust if needed
      const elementPosition =
        element.getBoundingClientRect().top +
        window.pageYOffset -
        navbarHeight;

      window.scrollTo({
        top: elementPosition,
        behavior: "smooth",
      });
    }
  };

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

        <button
          className="btn primary-btn"
          onClick={scrollToMenu}
        >
          Explore Menu
        </button>
      </div>
    </section>
  );
};

export default TransparentSection;
