// NavBar.js
import React from 'react';
import './App.css'; // Import CSS file for styling
import logo from"./assets/HL_transparent.png"; // Import image file
function NavBar()
{
  return (
    <div className="navbar">
      <div className="logo">
        <img src={logo} alt="Logo" />
      </div>
      <ul className="nav-links">
        <li><a href="/">About me</a></li>
        <li><a href="/">Education</a></li>
        <li><a href="/">Skills</a></li>
        <li><a href="/">Experience</a></li>
      </ul>
    </div>
  );
}

export default NavBar;
