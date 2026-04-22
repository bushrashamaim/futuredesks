import React from 'react';

const TopStrip = () => {
  return (
    <div className="top-strip">
      <div className="container">
        <div className="top-strip-content">
          <div className="contact-info">
            <span>📧 hello@futuredesks.com</span>
            <span>📞 +1 (555) 123-4567</span>
          </div>
          <div className="business-hours">
            <span>🕒 Mon-Fri: 9AM-6PM | Sat: 10AM-4PM</span>
          </div>
          <div className="social-links">
            <a href="#" aria-label="Facebook">📘</a>
            <a href="#" aria-label="Twitter">🐦</a>
            <a href="#" aria-label="LinkedIn">💼</a>
            <a href="#" aria-label="Instagram">📷</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopStrip;
