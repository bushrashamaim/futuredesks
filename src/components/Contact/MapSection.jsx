import React from 'react';

const MapSection = () => {
  return (
    <div className="map-placeholder">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d224181.35563583467!2d77.2677109666938!3d28.63285857689371!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd5b347eb62d%3A0x37205b2d6c0c7e0!2sNoida%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
        width="100%"
        height="100%"
        style={{ border: 0, borderRadius: 'var(--radius)' }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="FutureDesks Location"
      ></iframe>
    </div>
  );
};

export default MapSection;