import React from 'react';

const Input = ({ 
  value, 
  onChange, 
  placeholder = '', 
  type = 'text', 
  name = '' 
}) => {
  return (
    <input
      className="input"
      type={type}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      name={name}
    />
  );
};

export default Input;