import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const ActionButton = ({ text, icon, onClick, variant = 'primary', iconSize = 'lg' }) => {
  // Base styles for the button
  const baseStyle = 'flex items-center justify-center px-4 py-2 rounded-md focus:outline-none transition-all';

  // Define styles based on the variant
  const variantStyles = {
    primary: 'bg-blue-500 text-white hover:bg-blue-600',
    secondary: 'bg-white border border-blue-500 text-blue-500 hover:bg-blue-50',
  };

  // Combine the base style with the variant style
  const buttonStyle = `${baseStyle} ${variantStyles[variant] || variantStyles.primary}`; // Default to primary if variant is invalid

  return (
    <button 
      className={buttonStyle} 
      onClick={onClick}
    >
      {icon && <span className="mr-2"><FontAwesomeIcon icon={icon} size={iconSize} /></span>}
      {text}
    </button>
  );
};

export default ActionButton;
