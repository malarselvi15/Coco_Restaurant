import React, { useEffect, useRef } from "react";
import "../App.css";
import restaurantVideo from "../assets/video2.mp4";

const Home = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.6;
    }
  }, []);

  const scrollToMenu = () => {
    const element = document.getElementById("menu");

    if (element) {
      const navbarHeight = 90;

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

      {/* Overlay */}
      <div className="overlay"></div>

      {/* Content */}
      <div className="home-content">

        <h1 className="line line-1 fade-up">
          Welcome to <span>Coco</span>
        </h1>

        <h2 className="line line-2 fade-up delay-1">
          Family Restaurant
        </h2>

        <p className="line line-3 fade-up delay-2">
          Experience authentic flavors, cozy ambience,
          and unforgettable dining moments.
        </p>

        <button
          className="btn primary-btn line line-4 fade-up delay-3"
          onClick={scrollToMenu}
        >
          View Menu
        </button>

      </div>
    </div>
  );
};

export default Home;