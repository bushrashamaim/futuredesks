import React from 'react';

const StatsCounter = () => {
  const stats = [
    { number: "200+", label: "Projects Delivered" },
    { number: "130K+", label: "Audience Reach" },
    { number: "100+", label: "Happy Clients" },
    { number: "4+", label: "Years of Excellence" }
  ];

  return (
    <div className="sec stats-counter">
      <div className="section-label" style={{ color: '#a78bfa' }}>Our Impact</div>
      <div className="section-title" style={{ color: '#fff' }}>By the <span className="muted">Numbers</span></div>
      <div className="stats-grid">
        {stats.map((s, idx) => (
          <div className="stat-item" key={idx}>
            <div className="stat-number">{s.number}</div>
            <div className="stat-label">{s.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StatsCounter;