import React from 'react';

const ClientsSection = () => {
  const clients = ["LAL SWEETS", "KIRTILALS", "TRADESCRIBE", "URBANNEST", "FITFUEL", "PETPALS"];

  return (
    <div className="sec" style={{ background: 'var(--gray-50)' }}>
      <div className="section-label">Trusted By</div>
      <div className="section-title">Our Happy <span className="muted">Clients</span></div>
      <div className="clients-grid">
        {clients.map((c, idx) => (
          <div className="client-logo" key={idx}><span>{c}</span></div>
        ))}
      </div>
    </div>
  );
};

export default ClientsSection;