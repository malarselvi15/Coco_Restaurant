import React from "react";
import "../App.css";

const ContactSection = () => {
  return (
    <section className="contact-section">
      <div className="contact-container">

        <div className="contact-header">
          <h2>Visit COCO Family Restaurant</h2>
          <p>Experience taste, comfort & family dining</p>
        </div>

        <div className="contact-grid">

          {/* LEFT SIDE */}
          <div className="contact-left">

            <div className="contact-box">
              <h3>📍 Location</h3>
              <p>
                COCO FAMILY RESTAURANT <br />
                Santhosh Nagar Road, 200/2 <br />
                Thoothukudi - Tirunelveli Hwy <br />
                Pudukottai, Tamil Nadu 628103
              </p>

              <a
                href="https://www.google.com/maps/search/?api=1&query=COCO+FAMILY+RESTAURANT+Thoothukudi"
                target="_blank"
                rel="noopener noreferrer"
                className="direction-btn"
              >
                Get Directions
              </a>
            </div>

            <div className="contact-small-box">
              <h4>📞 Call Us</h4>
              <p>
  <a href="tel:+919876543210" className="call-link">
    +91 98765 43210
  </a>
</p>
            </div>

            <div className="contact-small-box">
              <h4>🕒 Open Hours</h4>
              <p>24 Hours</p>
            </div>

          </div>

          {/* RIGHT SIDE MAP */}
          <div className="contact-map-wrapper">
            <iframe
              title="COCO FAMILY RESTAURANT"
              src="https://www.google.com/maps?q=COCO+FAMILY+RESTAURANT+Thoothukudi+Tamil+Nadu&output=embed"
              loading="lazy"
            ></iframe>
          </div>

        </div>

      </div>
    </section>
  );
};

export default ContactSection;
