import React, { useEffect, useRef } from "react";
import "../App.css";
import restaurantVideo from "../assets/restaurant.mp4";

const Home = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.5;
    }
  }, []);

  // ✅ Scroll to Menu
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
    <div className="home-container">

      {/* Background Video */}
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        className="background-video"
      >
        <source src={restaurantVideo} type="video/mp4" />
      </video>

      {/* Dark Overlay */}
      <div className="overlay"></div>

      {/* Hero Content */}
      <div className="home-content">
        <h1 className="line line-1">
          Welcome to <span>Coco</span>
        </h1>

        <h2 className="line line-2">
          Family Restaurant
        </h2>

        <p className="line line-3">
          Experience authentic flavors, cozy ambience,
          and unforgettable dining moments.
        </p>

        <button
          className="btn primary-btn line line-4"
          onClick={scrollToMenu}
        >
          View Menu
        </button>
      </div>
    </div>
  );
};

export default Home;
