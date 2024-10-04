// Button.jsx
import React from 'react';

const IconButton = ({ text, icon, onClick, variant = 'primary' }) => {
  const baseStyle = 'flex items-center justify-center px-4 py-2 rounded-md focus:outline-none';
  const variantStyles = {
    primary: 'bg-blue-500 text-white',
    secondary: 'bg-white border border-blue-500 text-blue-500',
  };

  return (
    <button 
      className={`${baseStyle} ${variantStyles[variant]}`} 
      onClick={onClick}
    >
      {icon && <span className="mr-2">{icon}</span>}
      {text}
    </button>
  );
};

export default IconButton;
