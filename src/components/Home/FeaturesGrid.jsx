import React from 'react';

const FeaturesGrid = () => {
  const features = [
    {
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=900&q=80",
      title: "Custom Development",
      description: "Tailor-made digital solutions built from scratch."
    },
    {
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=900&q=80",
      title: "SaaS Prebuilt",
      description: "Ready-to-launch applications at low cost.",
      badge: "SaaS Prebuilt @ ₹50,000"
    }
  ];

  return (
    <div className="sec">
      <div className="section-label">What We Offer</div>
      <div className="section-title">
        Streamline Business with our<br /><span className="muted">Flexible Options</span>
      </div>
      <div className="features-grid">
        {features.map((feat, idx) => (
          <div className="feat-card" key={idx}>
            <div className="feat-card-img" style={{ backgroundImage: `url("${feat.image}")` }}></div>
            <div className="feat-card-overlay"></div>
            {feat.badge && <div className="price-badge">{feat.badge}</div>}
            <h3>{feat.title}</h3>
            <p>{feat.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturesGrid;