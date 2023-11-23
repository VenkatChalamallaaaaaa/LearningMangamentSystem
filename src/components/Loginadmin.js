import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './LoginAdmin.css'; // Import your CSS file

const Loginadmin = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const navigate = useNavigate();

  const handleLogin = () => {
    const validUsernames = ['admin1', 'admin2', 'admin3', 'admin4'];
    const validPassword = 'test123';

    if (validUsernames.includes(username) && password === validPassword) {
      // Redirect to a different page on successful login
      navigate('/contact/list');
    } else {
      setError('Invalid username or password');
    }
  };

  const handleExit = () => {
    // Redirect to a specific page when the "Exit" button is clicked
    navigate('/');
  };

  return (
    <div className="login-container" style={{marginTop:"150px"}}>
      <h2 className="login-title">Admin Login</h2>
      <div className="input-container">
        <label htmlFor="username" className="label">
          Username:
        </label>
        <input
          type="text"
          id="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="input"
        />
      </div>
      <div className="input-container">
        <label htmlFor="password" className="label">
          Password:
        </label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="input"
        />
      </div>
      <button onClick={handleLogin} className="login-button">
        Login
      </button>


      <button onClick={handleExit} className="login-button back1">
          Back
        </button>
      {error && <p className="error-message">{error}</p>}
    </div>
  );
};

export default Loginadmin;
