import React, { useEffect, useState } from "react";
import "../App.css";

import logoWhite from "../assets/logo-white.png";
import logoColor from "../assets/logo-color.png";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);

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
    <nav className={scrolled ? "navbar scrolled" : "navbar"}>
      
      {/* ✅ Logo Click Added Here */}
      <div
        className="logo-container"
        onClick={() => scrollToSection("home")}
        style={{ cursor: "pointer" }}
      >
        <img
          src={scrolled ? logoColor : logoWhite}
          alt="Coco Logo"
          className="logo-img"
        />

        <div className="logo">
          <span className={scrolled ? "logo-dark" : "logo-light"}>
            {/* Coco */}
          </span>
          <p className={scrolled ? "tag-dark" : "tag-light"}>
            {/* Family Restaurant */}
          </p>
        </div>
      </div>

      <ul className="nav-links">
        <li onClick={() => scrollToSection("home")}>Home</li>
        <li onClick={() => scrollToSection("about")}>About Us</li>
        <li onClick={() => scrollToSection("menu")}>Menu</li>
        <li onClick={() => scrollToSection("enquiry")}>Enquiry</li>
        <li onClick={() => scrollToSection("contact")}>Contact</li>
      </ul>

    </nav>
  );
};

export default Navbar;
