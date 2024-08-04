import React from 'react';
import './ExploreFoods.css'; 
import Pizza from '../assets/pizza.jpg';
import Burger from '../assets/burger.jpg';
import Momos from '../assets/momos.jpg';
const ExploreFoods = () => {
  return (
    <div className="explore-foods">
      <h2>Explore Foods</h2>
      <div className="food-cards">
        <div className="food-card">
          <img src={Pizza} alt="Pizza" className="food-image" />
          <p className="food-name">Pizza</p>
        </div>
        <div className="food-card">
          <img src={Burger} alt="Burger" className="food-image" />
          <p className="food-name">Burger</p>
        </div>
        <div className="food-card">
          <img src={Momos} alt="Momo" className="food-image" />
          <p className="food-name">Momo</p>
        </div>
      </div>
    </div>
  );
}

export default ExploreFoods;
