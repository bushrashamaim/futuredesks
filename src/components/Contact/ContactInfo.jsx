import React from 'react';

const ContactInfo = () => {
  const contacts = [
    { icon: "📧", title: "Email Us", details: ["zunairshahid@gmail.com"] },
    { icon: "📞", title: "Call Us", details: ["+44 7916 693244"] },
{ icon: "📍", title: "Visit Us", details: ["London, United Kingdom", "Bahawalpur, Pakistan"] }  ];

  return (
    <div className="sec" style={{ background: 'var(--gray-50)' }}>
      <div className="section-label">Contact Info</div>
      <div className="section-title">Reach Out <span className="muted">To Us</span></div>
      <div className="contact-info-grid">
        {contacts.map((c, idx) => (
          <div className="contact-info-card" key={idx}>
            <div className="icon">{c.icon}</div>
            <h4>{c.title}</h4>
            {c.details.map((d, i) => <p key={i}>{d}</p>)}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ContactInfo;