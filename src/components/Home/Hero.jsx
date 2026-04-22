import React from 'react';

const Hero = ({ showPage }) => {
  return (
    <div className="hero">
      <div className="hero-bg-img"></div>
      <div className="hero-overlay"></div>
      <div className="hero-content">
        <div className="hero-badge">✦ <span>Trusted by 1.3L+ Audience</span></div>
        <h1>
          Streamline Business<br />with our
          <span className="accent"> Flexible</span><br />Options
        </h1>
        <p>
          We design & develop websites and mobile apps that turn your vision
          into digital reality. 200+ projects delivered.
        </p>
        <div className="hero-btns">
          <button className="btn-primary" onClick={() => showPage('portfolio')}>Explore →</button>
          <button className="btn-ghost" onClick={() => showPage('contact')}>Contact Us</button>
        </div>
        <div className="hero-stat">
          <div><div className="num">200+</div><div className="label">Projects</div></div>
          <div><div className="num">130K+</div><div className="label">Audience</div></div>
          <div><div className="num">100+</div><div className="label">Clients</div></div>
        </div>
      </div>
      <div className="hero-side-img">
        <img src="https://images.unsplash.com/photo-1551434678-e076c223a692?w=900&q=80" alt="Team" />
      </div>
    </div>
  );
};

export default Hero;