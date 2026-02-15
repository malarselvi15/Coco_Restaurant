import React, { useEffect, useRef, useState } from "react";
import "../App.css";

const About = () => {

  const sectionRef = useRef(null);

  // ✅ NEW: to track animation ran or not
  const animationRan = useRef(false);

  const [visible, setVisible] = useState(false);

  const [years, setYears] = useState(0);
  const [customers, setCustomers] = useState(0);
  const [dishes, setDishes] = useState(0);


  useEffect(() => {

    const observer = new IntersectionObserver(
      ([entry]) => {

        if (entry.isIntersecting && !animationRan.current) {

          setVisible(true);

          // ✅ mark animation as completed
          animationRan.current = true;

          animateNumber(setYears, 10, 1500);
          animateNumber(setCustomers, 50, 2000);
          animateNumber(setDishes, 100, 2500);

        }

      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {

      observer.observe(sectionRef.current);

    }

    return () => observer.disconnect();

  }, []);



  const animateNumber = (setter, target, duration) => {

    let start = 0;

    const increment = target / (duration / 16);

    const timer = setInterval(() => {

      start += increment;

      if (start >= target) {

        setter(target);

        clearInterval(timer);

      } else {

        setter(Math.floor(start));

      }

    }, 16);

  };



  return (

    <section
      ref={sectionRef}
      className={`about-section ${visible ? "show" : ""}`}
      id="about"
    >

      <div className="about-left">

        <h1>
          OUR <br />
          STORY
        </h1>

        <span className="year">
          Since 2015
        </span>

      </div>


      <div className="about-right">

        <h2>
          Crafting Delicious Memories
        </h2>


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

            <h3>{years}+</h3>

            <span>
              Years of Experience
            </span>

          </div>



          <div className="highlight-box">

            <h3>{customers}K+</h3>

            <span>
              Happy Customers
            </span>

          </div>



          <div className="highlight-box">

            <h3>{dishes}+</h3>

            <span>
              Special Dishes
            </span>

          </div>


        </div>

      </div>

    </section>

  );

};

export default About;
