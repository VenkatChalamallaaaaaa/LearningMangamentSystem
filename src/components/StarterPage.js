// WelcomePage.js
import React from 'react';
import { Link } from 'react-router-dom';
import './WelcomePage.css'; // Import your CSS file

const StarterPage = () => {
  return (
    <div className="welcome-container  background1"> 
      <h1 className="welcome-heading"  style={{fontWeight:"bold"}}>Welcome to CoED</h1>
      <div className="options-container">
        <Link to="/adminlogin" className="login-option admin-login">
          Admin Login
        </Link>
        <Link to="/login" className="login-option learner-login">
          Learner Login
        </Link>
      </div>
    </div>
  );
};

export default StarterPage;
