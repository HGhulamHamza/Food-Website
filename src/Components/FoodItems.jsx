import React from 'react';
import './ExploreFoods.css'; 

const ExploreFoods = () => {
  return (
    <div className="explore-foods">
      <h2>Explore Foods</h2>
      <div className="food-cards">
        <div className="food-card">
          <img src="src/assets/pizza.jpg" alt="Pizza" className="food-image" />
          <p className="food-name">Pizza</p>
        </div>
        <div className="food-card">
          <img src="src/assets/burger.jpg" alt="Burger" className="food-image" />
          <p className="food-name">Burger</p>
        </div>
        <div className="food-card">
          <img src="src/assets/momos.jpg" alt="Momo" className="food-image" />
          <p className="food-name">Momo</p>
        </div>
      </div>
    </div>
  );
}

export default ExploreFoods;

