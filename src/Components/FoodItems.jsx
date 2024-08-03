import React from 'react';
import './FoodItems.css';

const FoodItems = () => {
  return (
    <div className="custom-food-menu">
      <h2>Food Menu</h2>
      <div className="custom-food-grid">
        <div className="custom-food-card">
          <img src="src/assets/s1.jpg" alt="Food Title" />
          <div className="custom-food-info">
            <h3>Food Title</h3>
            <p className="custom-price">$2.3</p>
            <p className="custom-description">Made with Italian Sauce, Chicken, and organic vegetables.</p>
            <button className="custom-order-btn">Order Now</button>
          </div>
        </div>
        <div className="custom-food-card">
          <img src="src/assets/s2.jpg" alt="Smoky Burger" />
          <div className="custom-food-info">
            <h3>Smoky Burger</h3>
            <p className="custom-price">$2.3</p>
            <p className="custom-description">Made with Italian Sauce, Chicken, and organic vegetables.</p>
            <button className="custom-order-btn">Order Now</button>
          </div>
        </div>
        <div className="custom-food-card">
          <img src="src/assets/s3.jpg" alt="Nice Burger" />
          <div className="custom-food-info">
            <h3>Nice Burger</h3>
            <p className="custom-price">$2.3</p>
            <p className="custom-description">Made with Italian Sauce, Chicken, and organic vegetables.</p>
            <button className="custom-order-btn">Order Now</button>
          </div>
        </div>
        <div className="custom-food-card">
          <img src="src/assets/s1.jpg" alt="Food Title" />
          <div className="custom-food-info">
            <h3>Food Title</h3>
            <p className="custom-price">$2.3</p>
            <p className="custom-description">Made with Italian Sauce, Chicken, and organic vegetables.</p>
            <button className="custom-order-btn">Order Now</button>
          </div>
        </div>
        <div className="custom-food-card">
          <img src="src/assets/s2.jpg" alt="Food Title" />
          <div className="custom-food-info">
            <h3>Food Title</h3>
            <p className="custom-price">$2.3</p>
            <p className="custom-description">Made with Italian Sauce, Chicken, and organic vegetables.</p>
            <button className="custom-order-btn">Order Now</button>
          </div>
        </div>
        <div className="custom-food-card">
          <img src="src/assets/s5.jpg" alt="Chicken Steam Momo" />
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
