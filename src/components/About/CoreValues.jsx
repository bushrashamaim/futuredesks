import React from 'react';

const CoreValues = () => {
  const values = [
    { icon: "💎", title: "Quality First", desc: "We never compromise on quality. Every line of code reflects our commitment to excellence." },
    { icon: "🤝", title: "Client Success", desc: "Your success is our success. We go the extra mile to ensure your goals are achieved." },
    { icon: "⚡", title: "Innovation", desc: "We embrace the latest technologies to deliver future-ready solutions." },
    { icon: "🔓", title: "Transparency", desc: "Open communication, honest pricing, and complete project visibility." }
  ];

  return (
    <div className="sec" style={{ background: 'var(--gray-50)' }}>
      <div className="section-label">What We Believe</div>
      <div className="section-title">Our Core <span className="muted">Values</span></div>
      <div className="values-grid">
        {values.map((v, idx) => (
          <div className="value-card" key={idx}>
            <div className="value-icon">{v.icon}</div>
            <h4>{v.title}</h4>
            <p>{v.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CoreValues;