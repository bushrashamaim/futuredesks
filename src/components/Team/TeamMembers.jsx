import React, { useRef } from 'react';

const TeamMembers = () => {
  const trackRef = useRef(null);

  const members = [
    { name: "Tushar Rawat", role: "Founder & CEO", img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=160&h=160&fit=crop" },
    { name: "Aastha Negi", role: "Co-founder", img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=160&h=160&fit=crop" },
    { name: "Aditya Agarwal", role: "COO", img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=160&h=160&fit=crop" },
    { name: "Utkarsh Rajoriya", role: "Full Stack", img: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=160&h=160&fit=crop" },
    { name: "Yatendra Sharma", role: "Flutter", img: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=160&h=160&fit=crop" },
    { name: "Mansingh", role: "Full Stack", img: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=160&h=160&fit=crop" },
    { name: "Deepak Kumar", role: "Flutter", img: "https://images.unsplash.com/photo-1488161628813-04466f872be2?w=160&h=160&fit=crop" },
    { name: "Manish Das", role: "CTO", img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=160&h=160&fit=crop" },
    { name: "Harsh Gupta", role: "Tech Lead", img: "https://images.unsplash.com/photo-1463453091185-61582044d556?w=160&h=160&fit=crop" }
  ];

  const scroll = (dir) => {
    if (trackRef.current) trackRef.current.scrollLeft += dir * 220;
  };

  return (
    <div className="sec team-section">
      <div className="section-label" style={{ color: '#a78bfa' }}>Our Team</div>
      <div className="section-title" style={{ color: '#fff' }}>Team Behind Wonders</div>
      <div className="team-wrapper">
        <div className="team-scroll-btn" onClick={() => scroll(-1)}>
          <svg viewBox="0 0 24 24" fill="none"><path d="M15 18l-6-6 6-6" stroke="white" strokeWidth="2" /></svg>
        </div>
        <div className="team-track-wrap" ref={trackRef}>
          <div className="team-track">
            {members.map((m, idx) => (
              <div className="team-card" key={idx}>
                <div className="team-avatar"><img src={m.img} alt={m.name} /></div>
                <h4>{m.name}</h4>
                <p>{m.role}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="team-scroll-btn" onClick={() => scroll(1)}>
          <svg viewBox="0 0 24 24" fill="none"><path d="M9 18l6-6-6-6" stroke="white" strokeWidth="2" /></svg>
        </div>
      </div>
    </div>
  );
};

export default TeamMembers;