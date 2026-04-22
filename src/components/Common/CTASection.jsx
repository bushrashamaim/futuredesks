import React from 'react';

const CTASection = ({ onContact }) => {
  return (
    <div className="sec cta-section" style={{ marginBottom: 0 }}>
      <div className="section-label" style={{ color: 'rgba(255, 255, 255, 0.8)' }}>Ready to Grow?</div>
      <div className="section-title">Let's Build Your<br /><span className="muted">Digital Future</span></div>
      <button className="cta-btn" onClick={onContact}>Start a Project →</button>
    </div>
  );
};

export default CTASection;