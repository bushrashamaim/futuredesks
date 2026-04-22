import React from 'react';

const TeamHero = () => {
  return (
    <div className="hero" style={{ minHeight: '40vh' }}>
      <div className="hero-bg-img"></div>
      <div className="hero-overlay"></div>
      <div className="hero-content">
        <div className="hero-badge">✦ <span>Meet Our Team</span></div>
        <h1>Experts Behind <span className="accent">Wonders</span></h1>
        <p>Passionate professionals dedicated to your success.</p>
      </div>
    </div>
  );
};

export default TeamHero;