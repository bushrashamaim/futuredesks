import React from 'react';

const ContactHero = () => {
  return (
    <div className="hero" style={{ minHeight: '40vh' }}>
      <div className="hero-bg-img"></div>
      <div className="hero-overlay"></div>
      <div className="hero-content">
        <div className="hero-badge">✦ <span>Get In Touch</span></div>
        <h1>Let's <span className="accent">Connect</span></h1>
        <p>We'd love to hear from you. Start your journey with us today.</p>
      </div>
    </div>
  );
};

export default ContactHero;