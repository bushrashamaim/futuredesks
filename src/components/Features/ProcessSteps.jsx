import React from 'react';

const ProcessSteps = () => {
  const steps = [
    { icon: "📋", title: "Discovery", desc: "Understanding your requirements" },
    { icon: "🎨", title: "Design", desc: "Creating wireframes & prototypes" },
    { icon: "💻", title: "Development", desc: "Building with latest technologies" },
    { icon: "🚀", title: "Launch", desc: "Deployment & ongoing support" }
  ];

  return (
    <div className="sec" style={{ background: 'var(--gray-50)' }}>
      <div className="section-label">How We Work</div>
      <div className="section-title">Our <span className="muted">Process</span></div>
      <div className="stats-grid" style={{ gridTemplateColumns: 'repeat(4, 1fr)' }}>
        {steps.map((s, idx) => (
          <div className="process-step" key={idx}>
            <div className="process-icon">{s.icon}</div>
            <h4>{s.title}</h4>
            <p>{s.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProcessSteps;