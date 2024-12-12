// src/components/Login.js
import React, { useState } from 'react';


const Login = () => {
  // State to store the form values
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Basic validation
    if (email === '' || password === '') {
      setError('Both fields are required!');
      return;
    }
    
    // You can add further validation here (e.g., email format, password strength, etc.)
    setError('');
    console.log('Login Submitted', { email, password });

    // You can also call your authentication logic here
  };

  return (
    <div className="container">
      <h2 className="textcenter">Login</h2>
      <form onSubmit={handleSubmit} className="login-form">
        <div className="row">
            <div className="col-md-6">
            <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            required
          />
            </div>
            <div className="col-md-6">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
            required
          />
        </div>
        </div>
       
        {error && <p className="error-message">{error}</p>}
        <button type="submit" className="login-button">Login</button>
      </form>
    </div>
  );
};

export default Login;
