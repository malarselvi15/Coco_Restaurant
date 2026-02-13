import React from "react";
import { FaPhoneAlt } from "react-icons/fa";
import "../App.css";

const FloatingCallButton = () => {
  return (
    <a
      href="tel:+919361753526"   // 👉 Replace with your hotel number
      className="floating-call-btn"
    >
      <FaPhoneAlt />
    </a>
  );
};

export default FloatingCallButton;
