import React from 'react';

const ContactInfo = () => {
  const contacts = [
    { icon: "📧", title: "Email Us", details: ["partnerships@futuredesks.in", "support@futuredesks.in"] },
    { icon: "📞", title: "Call Us", details: ["+91 85956 69310", "+91 98765 43210"] },
    { icon: "📍", title: "Visit Us", details: ["Noida, Uttar Pradesh", "India - 201301"] }
  ];

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