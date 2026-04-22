import React from 'react';

const SectionLabel = ({ text, className = '' }) => {
  return (
    <span className={`section-label ${className}`}>
      {text}
    </span>
  );
};

export default SectionLabel;
