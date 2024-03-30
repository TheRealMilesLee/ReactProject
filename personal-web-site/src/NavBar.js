// NavBar.js
import React from 'react';
import './NavBar.css'; // Import CSS file for styling
import './output.css';
import logo from "./assets/HL_transparent.png"; // Import image file


function NavBar()
{
  return (
    <div>
      <div className="navbar">
        <div className='logo'>
          <img className="self-center w-8 h-8 rounded-full mx-2" src={ logo } alt="Logo" />
        </div>
        <ul className="nav-links">
          <li><a href="/src/Greeting.js">About me</a></li>
          <li><a href="/">Education</a></li>
          <li><a href="/">Skills</a></li>
          <li><a href="/">Experience</a></li>
        </ul>
      </div>
    </div>
  );
}


export default NavBar;
