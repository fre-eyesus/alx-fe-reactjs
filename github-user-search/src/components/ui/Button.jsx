import React from 'react';

const Button = ({ children, onClick, type = 'button', disabled = false }) => {
  return (
    <button 
      className={`button ${disabled ? 'disabled' : ''}`}
      type={type}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;