import React from "react";
import "../App.css";

import meals from "../assets/menu/meals.jpg";
import salads from "../assets/menu/salads.jpg";
import soup from "../assets/menu/soup.webp";
import tandoory from "../assets/menu/tandoory.jpg";
import biriyani from "../assets/menu/biriyani.jpg";
import seafoods from "../assets/menu/sea_food.webp";
import ealiparata from "../assets/menu/elai parota.webp";
import desserts from "../assets/menu/desart.jpg";

const menuItems = [
  { name: "Meals", image: meals },
  { name: "Salads", image: salads },
  { name: "Soup", image: soup },
  { name: "Tandoori", image: tandoory },
  { name: "Briyani", image: biriyani },
  { name: "Sea Foods", image: seafoods },
  { name: "Elai Parotta", image: ealiparata },
  { name: "Desserts", image: desserts },
];

const MenuSection = () => {
  return (
    <section className="menu-section">
      <div className="menu-container">

        <h2 className="menu-title">Our Special Menu</h2>
        <p className="menu-subtitle">
          Discover our delicious varieties
        </p>

        <div className="menu-grid">
          {menuItems.map((item, index) => (
            <div className="menu-card" key={index}>
              <img src={item.image} alt={item.name} />
              <div className="menu-overlay">
                <h3>{item.name}</h3>
              </div>
            </div>
          ))}
        </div>

        <div className="menu-btn-container">
          <a
            href="/menu.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="view-menu-btn"
          >
            View Full Menu (PDF)
          </a>
        </div>

      </div>
    </section>
  );
};

export default MenuSection;
