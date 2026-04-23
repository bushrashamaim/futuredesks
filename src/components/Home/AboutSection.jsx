import React from 'react';

const AboutSection = () => {
  return (
    <div className="sec" style={{ background: 'var(--gray-50)' }}>
      <div className="section-label">About Us</div>
      <div className="section-title">
        Who We Are<br /><span className="muted">Our Story</span>
      </div>
      <div className="about-content">
        <p>
          Aindexc is a leading digital solutions provider specializing in
          website development, mobile apps, and SaaS products. Founded in 2025,
          we've helped over 200+ businesses transform their ideas into powerful
          digital experiences.
        </p>
        <p>
          Our mission is to make technology accessible and affordable for
          businesses of all sizes. We believe in delivering high-quality
          solutions that drive real business growth.
        </p>
        <p>
          With a team of experienced developers, designers, and strategists,
          we're committed to your success from concept to launch and beyond.
        </p>
      </div>
    </div>
  );
};

export default AboutSection;