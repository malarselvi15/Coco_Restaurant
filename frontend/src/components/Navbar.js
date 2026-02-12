import React, { useEffect, useState } from "react";
import "../App.css";

// Import both logos
import logoWhite from "../assets/logo-white.png";   // white logo
import logoColor from "../assets/logo-color.png";   // original color logo

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 80) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className={scrolled ? "navbar scrolled" : "navbar"}>
      <div className="logo-container">
        
        {/* Logo Image */}
        <img 
          src={scrolled ? logoColor : logoWhite}
          alt="Coco Logo" 
          className="logo-img"
        />

        {/* Existing Text Logo (UNCHANGED) */}
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
        <li>Home</li>
         <li>About Us</li>
        <li>Menu</li>
        <li>Gallery</li>
        <li>Contact</li>
      </ul>
    </nav>
  );
};

export default Navbar;
