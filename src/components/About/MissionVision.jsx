import React from 'react';

const MissionVision = () => {
  return (
    <div className="sec">
      <div className="section-label">Our Purpose</div>
      <div className="section-title">Mission &amp; <span className="muted">Vision</span></div>
      <div className="mission-vision-grid">
        <div className="mission-card">
          <div className="mission-icon">🎯</div>
          <h3>Our Mission</h3>
          <p>To empower businesses of all sizes with cutting-edge digital solutions that are accessible, affordable, and impactful. We strive to turn complex ideas into simple, elegant digital experiences.</p>
        </div>
        <div className="vision-card">
          <div className="vision-icon">🌟</div>
          <h3>Our Vision</h3>
          <p>To become India's most trusted digital transformation partner, recognized for innovation, quality, and client success. We envision a world where every business has a powerful digital presence.</p>
        </div>
      </div>
    </div>
  );
};

export default MissionVision;