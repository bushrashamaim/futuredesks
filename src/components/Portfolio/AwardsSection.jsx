import React from 'react';

const AwardsSection = () => {
  const awards = [
    { icon: "🏆", title: "Best Web Agency 2024", desc: "India's Top 10 Web Development Agency" },
    { icon: "⭐", title: "4.9 Rating", desc: "Google Reviews Excellence Award" },
    { icon: "🚀", title: "Fastest Growing", desc: "Startup of the Year 2024" },
    { icon: "💎", title: "Quality Excellence", desc: "ISO 9001 Certified" }
  ];

  return (
    <div className="sec">
      <div className="section-label">Recognition</div>
      <div className="section-title">Awards &amp; <span className="muted">Achievements</span></div>
      <div className="award-grid">
        {awards.map((a, idx) => (
          <div className="award-card" key={idx}>
            <div className="award-icon">{a.icon}</div>
            <h4>{a.title}</h4>
            <p>{a.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AwardsSection;