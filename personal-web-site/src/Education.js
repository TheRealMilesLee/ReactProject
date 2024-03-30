import React from 'react';
import './NavBar.css'; // Import CSS file for styling
import './output.css';
import Truman from "./assets/Truman.png";
import UCDavis from "./assets/UCDavisLogo.png";

export default function MediaCard()
{
  return (
    <div className="grid grid-cols-2 gap-4" style={ { backgroundColor: 'rgb(55, 55, 55)', color: 'white' } }>
      <div className='Truman flex items-center p-4'>
        <img src={ Truman } alt="Truman" style={ { width: 'auto', height: 'auto' } } />
        <div className="mr-4">
          <h1>Truman State University</h1>
          <h2>Bachelor of Science in Computer Science</h2>
          <h3>GPA: 3.64/4.0</h3>
          <h5>Dean's List: 6 semesters</h5>
          <h6>President's List: 2 semesters</h6>
        </div>
      </div>
      <div className='UCDavis flex items-center p-4'>

        <div>
          <h1>University of California, Davis</h1>
          <h2>Master of Computer Science</h2>
          <h3>GPA: 3.5/4.0</h3>
        </div>
        <img src={ UCDavis } alt="UCDavis" style={ { width: '200px', height: 'auto' } } />
      </div>
    </div>
  );
}
