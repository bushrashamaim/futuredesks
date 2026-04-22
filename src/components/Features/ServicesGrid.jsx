import React from 'react';

const ServicesGrid = () => {
  const services = [
    { image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=900&q=80", title: "Custom Development", description: "Tailor-made digital solutions built from scratch." },
    { image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=900&q=80", title: "SaaS Prebuilt", description: "Ready-to-launch applications at low cost.", badge: "SaaS Prebuilt @ ₹50,000" }
  ];

  return (
    <div className="sec">
      <div className="section-label">Core Services</div>
      <div className="section-title">What We <span className="muted">Deliver</span></div>
      <div className="features-grid">
        {services.map((s, idx) => (
          <div className="feat-card" key={idx}>
            <div className="feat-card-img" style={{ backgroundImage: `url("${s.image}")` }}></div>
            <div className="feat-card-overlay"></div>
            {s.badge && <div className="price-badge">{s.badge}</div>}
            <h3>{s.title}</h3>
            <p>{s.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServicesGrid;