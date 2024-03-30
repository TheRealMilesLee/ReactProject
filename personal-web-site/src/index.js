import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './output.css';
import './NavBar.css';
import NavBar from './NavBar';
import GreetingPage from './Greeting';
import reportWebVitals from './reportWebVitals';
import Education from './Education';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <NavBar />
    <GreetingPage />
    <Education />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
