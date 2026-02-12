import React from "react";
import "../App.css";
import foodBg from "../assets/food-bg.webp"; // Background image
import avatar1 from "../assets/avatar1.jpg";
import avatar2 from "../assets/avatar2.jpg";
import avatar3 from "../assets/avatar3.jpg";

const Testimonials = () => {
  const reviews = [
    {
      name: "Sarah Johnson",
      avatar: avatar1,
      text: "Absolutely loved the food! Cozy ambience and friendly staff. Highly recommend Coco!",
      rating: 5,
    },
    {
      name: "Michael Lee",
      avatar: avatar2,
      text: "A delightful experience! The dishes are flavorful and presentation is top-notch.",
      rating: 5,
    },
    {
      name: "Emma Watson",
      avatar: avatar3,
      text: "Perfect place for family dinners. Great service and delicious meals.",
      rating: 5,
    },
  ];

  return (
    <section
      className="testimonials-section"
      style={{ backgroundImage: `url(${foodBg})` }}
    >
      <div className="testimonials-dark-overlay"></div>

      <div className="testimonials-container">
        <h2 className="testimonials-title">Our Happy Customers</h2>

        <div className="testimonials-cards">
          {reviews.map((review, index) => (
            <div key={index} className="testimonial-card">
              <div className="stars">
                {Array(review.rating)
                  .fill()
                  .map((_, i) => (
                    <span key={i} className="star">★</span>
                  ))}
              </div>

              <p className="testimonial-text">"{review.text}"</p>
              <h3 className="testimonial-name">{review.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
