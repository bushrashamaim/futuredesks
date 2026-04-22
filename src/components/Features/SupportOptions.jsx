import React from 'react';

const SupportOptions = () => {
  const supports = [
    { icon: "💬", title: "Free Consultation", desc: "Get expert advice on your project requirements" },
    { icon: "🔧", title: "Technical Support", desc: "Dedicated support team for all your queries" },
    { icon: "📚", title: "Documentation", desc: "Complete project documentation provided" }
  ];

  return (
    <div className="sec">
      <div className="section-label">Support Plans</div>
      <div className="section-title">We're Here to <span className="muted">Help</span></div>
      <div className="support-grid">
        {supports.map((s, idx) => (
          <div className="support-card" key={idx}>
            <div className="support-icon">{s.icon}</div>
            <h4>{s.title}</h4>
            <p>{s.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SupportOptions;