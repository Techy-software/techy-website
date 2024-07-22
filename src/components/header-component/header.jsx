import React from 'react';
import './header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="header-container">
        <img src="path-to-logo-image" alt="Logo" className="logo"/>
        <button className="switch-button">Switch to Arabic</button>
      </div>
    </header>
  );
};

export default Header;