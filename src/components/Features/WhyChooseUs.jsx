import React from 'react';

const WhyChooseUs = () => {
  const reasons = [
    { icon: "⚡", title: "Fast Delivery", desc: "Pre-built websites in 7-14 days" },
    { icon: "💰", title: "Best Price", desc: "Quality solutions at affordable rates" },
    { icon: "🛡️", title: "Secure Code", desc: "Bank-level security standards" },
    { icon: "📞", title: "24/7 Support", desc: "Round the clock assistance" }
  ];

  return (
    <div className="sec" style={{ background: 'var(--gray-50)' }}>
      <div className="section-label">Why Choose Us</div>
      <div className="section-title">What Makes Us <span className="muted">Different</span></div>
      <div className="values-grid">
        {reasons.map((r, idx) => (
          <div className="value-card" key={idx}>
            <div className="value-icon">{r.icon}</div>
            <h4>{r.title}</h4>
            <p>{r.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhyChooseUs;