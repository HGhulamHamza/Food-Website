import React from 'react';
import './HeroPage.css';
import HeroImage from '../assets/hero.jpg';

const HeroPage = () => {
  const heroStyle = {
    backgroundImage: `url(${HeroImage})`,
  };

  return (
    <div className="hero" style={heroStyle}>
      <div className="hero-content">
        <input type="text" placeholder="Search for Food" className="hero-search" />
        <button className="hero-button">Search</button>
      </div>
    </div>
  );
}

export default HeroPage;
