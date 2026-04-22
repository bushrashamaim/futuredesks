import React from 'react';

const BenefitsSection = () => {
  const benefits = [
    { icon: "🏠", title: "Remote Friendly", desc: "Work from anywhere" },
    { icon: "📈", title: "Growth Opportunities", desc: "Learn and grow with us" },
    { icon: "🎉", title: "Great Culture", desc: "Fun and supportive environment" },
    { icon: "💰", title: "Competitive Pay", desc: "Best in industry salary" }
  ];

  return (
    <div className="sec">
      <div className="section-label">Benefits</div>
      <div className="section-title">Why Work With <span className="muted">Us</span></div>
      <div className="values-grid">
        {benefits.map((b, idx) => (
          <div className="value-card" key={idx}>
            <div className="value-icon">{b.icon}</div>
            <h4>{b.title}</h4>
            <p>{b.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BenefitsSection;