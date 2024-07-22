import React from 'react';
import './Sidebar.css'; // Import the CSS file for styling
import {ReactComponent as homeIcon} from '../../assets/icons/home_icon.svg';

const Sidebar = (props) => {
  return (
    <div className="sidebar">
      <h2>Sidebar</h2>
      <ul>
        <li><a href="#home"><homeIcon className="icon" {...props}/> Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </div>
  );
};

export default Sidebar;