import React from 'react';

const MapSection = () => {
  return (
    <div className="map-placeholder">
      <iframe
        src="https://www.google.com/maps?q=Al-Majeed+Paradise+Rafi+Qamar+Road+Bahawalpur&output=embed"
        width="100%"
        height="100%"
        style={{ border: 0, borderRadius: 'var(--radius)' }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Al-Majeed Paradise, Bahawalpur"
      ></iframe>
    </div>
  );
};

export default MapSection;