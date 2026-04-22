import React from 'react';

const ButtonOutline = ({ text, onClick, className = '' }) => {
  return (
    <button className={`btn-outline ${className}`} onClick={onClick}>
      {text}
    </button>
  );
};

export default ButtonOutline;
