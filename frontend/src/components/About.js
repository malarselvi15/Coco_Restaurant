import React, { useEffect, useRef, useState } from "react";
import "../App.css";

const About = () => {
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className={`about-section ${visible ? "show" : ""}`}
    >
      {/* Left Side */}
      <div className="about-left">
        <h1>
          OUR <br />
          STORY
        </h1>
        <span className="year">Since 2015</span>
      </div>

      {/* Right Side */}
      <div className="about-right">
        <h2>Crafting Delicious Memories</h2>

        <p>
          Coco Family Restaurant was founded in 2015 with a simple dream —
          to bring families together through delicious food and warm hospitality.
        </p>

        <p>
          What started as a small family kitchen has grown into a place
          where flavors meet comfort and every meal becomes a memory.
        </p>

        <div className="about-highlights">
          <div className="highlight-box">
            <h3>10+</h3>
            <span>Years of Experience</span>
          </div>

          <div className="highlight-box">
            <h3>50K+</h3>
            <span>Happy Customers</span>
          </div>

          <div className="highlight-box">
            <h3>100+</h3>
            <span>Special Dishes</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
