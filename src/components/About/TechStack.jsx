import React from 'react';

const TechStack = () => {
  const techs = [
    { icon: "⚛️", name: "React.js" },
    { icon: "🟢", name: "Node.js" },
    { icon: "🐍", name: "Python" },
    { icon: "📱", name: "Flutter" },
    { icon: "🗄️", name: "MongoDB" },
    { icon: "🐘", name: "PostgreSQL" }
  ];

  return (
    <div className="sec" style={{ background: 'var(--gray-50)' }}>
      <div className="section-label">Tech Excellence</div>
      <div className="section-title">Technologies We <span className="muted">Master</span></div>
      <div className="tech-grid">
        {techs.map((t, idx) => (
          <div className="tech-item" key={idx}>
            <div className="tech-icon">{t.icon}</div>
            <div className="tech-name">{t.name}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TechStack;