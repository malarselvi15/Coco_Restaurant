import React from "react";
import { FaInstagram, FaFacebookF, FaWhatsapp } from "react-icons/fa";
import "../App.css";

const Footer = () => {
  return (
    <footer className="lux-footer">
      <div className="lux-footer-container">

        {/* COLUMN 1 - BRAND */}
        <div className="lux-footer-col brand-col">
          <h2 className="lux-logo">COCO</h2>
          <span className="lux-sub">Family Restaurant</span>
          <div className="lux-line"></div>

          <p>
            Experience authentic flavors, elegant ambiance,
            and unforgettable family dining moments in
            the heart of Tamil Nadu.
          </p>
        </div>

        {/* COLUMN 2 - ADDRESS */}
        <div className="lux-footer-col">
          <h3>Contact</h3>
          <div className="lux-line-small"></div>
          <p>Santhosh Nagar Road</p>
          <p>Pudukottai, Tamil Nadu 628103</p>
          <p>+91 98765 43210</p>
          <p>Open: 10 AM – 11 PM</p>
        </div>

        {/* COLUMN 3 - PAGES */}
        <div className="lux-footer-col">
          <h3>Our Pages</h3>
          <div className="lux-line-small"></div>
          <a href="#home">Home</a>
          <a href="#menu">Menu</a>
          <a href="#catering">Catering</a>
          <a href="#contact">Contact</a>
        </div>

        {/* COLUMN 4 - SOCIAL */}
        <div className="lux-footer-col">
          <h3>Follow Us</h3>
          <div className="lux-line-small"></div>

          <div className="lux-social">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <FaInstagram />
            </a>

            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
            >
              <FaFacebookF />
            </a>

            <a
              href="https://wa.me/919876543210"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
            >
              <FaWhatsapp />
            </a>
          </div>
        </div>

      </div>

      <div className="lux-footer-bottom">
        © 2026 COCO Family Restaurant — Crafted with Passion
      </div>
    </footer>
  );
};

export default Footer;
