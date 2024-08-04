import React from 'react';
import './FoodItems.css';
import s1 from '../assets/s1.jpg';
import s2 from '../assets/s2.jpg';
import s3 from '../assets/s3.jpg';
import s5 from '../assets/s5.jpg';
const FoodItems = () => {
  return (
    <div className="custom-food-menu">
      <h2>Food Menu</h2>
      <div className="custom-food-grid">
        <div className="custom-food-card">
          <img src={s1} alt="Food Title" />
          <div className="custom-food-info">
            <h3>Food Title</h3>
            <p className="custom-price">$2.3</p>
            <p className="custom-description">Made with Italian Sauce, Chicken, and organic vegetables.</p>
            <button className="custom-order-btn">Order Now</button>
          </div>
        </div>
        <div className="custom-food-card">
          <img src={s2} alt="Smoky Burger" />
          <div className="custom-food-info">
            <h3>Smoky Burger</h3>
            <p className="custom-price">$2.3</p>
            <p className="custom-description">Made with Italian Sauce, Chicken, and organic vegetables.</p>
            <button className="custom-order-btn">Order Now</button>
          </div>
        </div>
        <div className="custom-food-card">
          <img src={s3} alt="Nice Burger" />
          <div className="custom-food-info">
            <h3>Nice Burger</h3>
            <p className="custom-price">$2.3</p>
            <p className="custom-description">Made with Italian Sauce, Chicken, and organic vegetables.</p>
            <button className="custom-order-btn">Order Now</button>
          </div>
        </div>
        <div className="custom-food-card">
          <img src={s1}alt="Food Title" />
          <div className="custom-food-info">
            <h3>Food Title</h3>
            <p className="custom-price">$2.3</p>
            <p className="custom-description">Made with Italian Sauce, Chicken, and organic vegetables.</p>
            <button className="custom-order-btn">Order Now</button>
          </div>
        </div>
        <div className="custom-food-card">
          <img src={s2} alt="Food Title" />
          <div className="custom-food-info">
            <h3>Food Title</h3>
            <p className="custom-price">$2.3</p>
            <p className="custom-description">Made with Italian Sauce, Chicken, and organic vegetables.</p>
            <button className="custom-order-btn">Order Now</button>
          </div>
        </div>
        <div className="custom-food-card">
          <img src={s5} alt="Chicken Steam Momo" />
          <div className="custom-food-info">
            <h3>Chicken Steam Momo</h3>
            <p className="custom-price">$2.3</p>
            <p className="custom-description">Made with Italian Sauce, Chicken, and organic vegetables.</p>
            <button className="custom-order-btn">Order Now</button>
          </div>
        </div>
      </div>
      <a href="#" className="custom-see-all">See All Foods</a>
     
    </div>
    
  );
};

export default FoodItems;
