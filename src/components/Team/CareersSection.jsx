import React from 'react';

const CareersSection = () => {
  const jobs = [
    { icon: "💻", title: "Frontend Developer", desc: "React/Angular experts - Full Time" },
    { icon: "📱", title: "Flutter Developer", desc: "Mobile app development - Full Time" },
    { icon: "🎨", title: "UI/UX Designer", desc: "Creative designers needed - Full Time" }
  ];

  return (
    <div className="sec" style={{ background: 'var(--gray-50)' }}>
      <div className="section-label">Careers</div>
      <div className="section-title">Join Our <span className="muted">Team</span></div>
      <div className="support-grid">
        {jobs.map((j, idx) => (
          <div className="support-card" key={idx}>
            <div className="support-icon">{j.icon}</div>
            <h4>{j.title}</h4>
            <p>{j.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CareersSection;