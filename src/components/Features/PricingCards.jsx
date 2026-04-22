import React from 'react';

const PricingCards = ({ showPage }) => {
  const plans = [
    { name: "Basic Website", price: "₹30,000", features: ["5 Pages Website", "Responsive Design", "SEO Basic", "1 Month Support"], popular: false },
    { name: "E-commerce", price: "₹75,000", features: ["Unlimited Products", "Payment Gateway", "Admin Panel", "3 Months Support"], popular: true },
    { name: "Mobile App", price: "₹1,25,000", features: ["iOS & Android", "User Authentication", "Push Notifications", "6 Months Support"], popular: false }
  ];

  return (
    <div className="sec">
      <div className="section-label">Pricing</div>
      <div className="section-title">Simple <span className="muted">Pricing</span></div>
      <div className="stats-grid" style={{ gridTemplateColumns: 'repeat(3, 1fr)' }}>
        {plans.map((p, idx) => (
          <div className={`pricing-card ${p.popular ? 'featured' : ''}`} key={idx}>
            {p.popular && <div className="pricing-badge">Popular</div>}
            <h3>{p.name}</h3>
            <div className="pricing-price">{p.price}<span>/project</span></div>
            <ul className="pricing-features">
              {p.features.map((f, i) => <li key={i}>✓ {f}</li>)}
            </ul>
            <button className="btn-outline" onClick={() => showPage('contact')}>Get Quote</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PricingCards;