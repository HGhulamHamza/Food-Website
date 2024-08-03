import React from 'react';
import './HeroPage.css';

const HeroPage = () => {
  return (
    <div className="hero">
      <div className="hero-content">
        <input type="text" placeholder="Search for Food" className="hero-search" />
        <button className="hero-button">Search</button>
      </div>
    </div>
  );
}

export default HeroPage;
