import React from 'react';

const PortfolioHero = () => {
  return (
    <div className="hero" style={{ minHeight: '40vh' }}>
      <div className="hero-bg-img"></div>
      <div className="hero-overlay"></div>
      <div className="hero-content">
        <div className="hero-badge">✦ <span>Our Work</span></div>
        <h1>Recent <span className="accent">Projects</span></h1>
        <p>See what we've built for our clients.</p>
      </div>
    </div>
  );
};

export default PortfolioHero;