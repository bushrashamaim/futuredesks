import React from 'react';

const SectionTitle = ({ title, subtitle, className = '' }) => {
  return (
    <div className={`section-title ${className}`}>
      {subtitle && <h3 className="section-subtitle">{subtitle}</h3>}
      <h2 className="section-main-title">{title}</h2>
    </div>
  );
};

export default SectionTitle;
