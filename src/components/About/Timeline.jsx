import React from 'react';

const Timeline = () => {
  const events = [
    { year: "2020", title: "The Beginning", desc: "FutureDesks founded with a vision to help businesses go digital. Started with a team of 3 passionate developers." },
    { year: "2021", title: "First 50 Clients", desc: "Reached 50+ happy clients and delivered 100+ successful projects across various industries." },
    { year: "2022", title: "Team Expansion", desc: "Grew our team to 15+ experts including developers, designers, and project managers." },
    { year: "2023", title: "SaaS Launch", desc: "Launched our pre-built SaaS products making technology affordable for startups." },
    { year: "2024", title: "130K+ Audience", desc: "Reached over 130,000+ audience through our digital solutions and content." },
    { year: "2025", title: "Global Expansion", desc: "Expanding our services globally with enterprise-grade solutions." }
  ];

  return (
    <div className="sec">
      <div className="section-label">Our Journey</div>
      <div className="section-title">The FutureDesks <span className="muted">Timeline</span></div>
      <div className="timeline">
        {events.map((e, idx) => (
          <div className="timeline-item" key={idx}>
            <div className="timeline-dot"></div>
            <div className="timeline-year">{e.year}</div>
            <div className="timeline-title">{e.title}</div>
            <div className="timeline-desc">{e.desc}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Timeline;