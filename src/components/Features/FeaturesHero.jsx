import React from 'react';

const FeaturesHero = () => {
  return (
    <div className="hero" style={{ minHeight: '40vh' }}>
      <div className="hero-bg-img"></div>
      <div className="hero-overlay"></div>
      <div className="hero-content">
        <div className="hero-badge">✦ <span>What We Offer</span></div>
        <h1>Our <span className="accent">Services</span></h1>
        <p>Comprehensive digital solutions tailored to your business needs.</p>
      </div>
    </div>
  );
};

export default FeaturesHero;