import React from "react";
import "../App.css";
import food1 from "../assets/food1.jpeg";
import food2 from "../assets/food2.jpg";
import food3 from "../assets/food3.jpg";
import food4 from "../assets/food4.jpg";

const Favorites = () => {
  const foods = [
    { img: food1, name: "South Indian" },
    { img: food2, name: "Chinese" },
    { img: food3, name: "Desserts" },
    { img: food4, name: "Tandoori" },
  ];

  return (
    <section className="favorites-section">
      <h2 className="section-title">Our Favorites</h2>
      <p className="section-subtitle">
        Handpicked dishes that our customers love the most
      </p>

      <div className="favorites-grid">
        {foods.map((food, index) => (
          <div key={index} className="food-card">
            <img src={food.img} alt={food.name} />
            <div className="food-info">
              <h3>{food.name}</h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Favorites;
