import React from 'react';

const AboutHero = () => {
  return (
    <div className="hero" style={{ minHeight: '50vh' }}>
      <div className="hero-bg-img"></div>
      <div className="hero-overlay"></div>
      <div className="hero-content">
        <div className="hero-badge">✦ <span>Know Us Better</span></div>
        <h1>About <span className="accent">FutureDesks</span></h1>
        <p>We are on a mission to transform businesses through innovative digital solutions.</p>
      </div>
    </div>
  );
};

export default AboutHero;