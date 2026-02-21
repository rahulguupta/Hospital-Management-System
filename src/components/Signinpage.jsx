 import React from 'react';
 import './Signinpage.css';

const Signinpage = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="signin-card" onClick={(e) => e.stopPropagation()}>
        <button className="close-btn" onClick={onClose}>&times;</button>
        
        <h2>Welcome Back</h2>
        <p>Please enter your details to sign in.</p>

        <form className="signin-form">
          <div className="input-group">
            <label>Email Address</label>
            <input type="email" placeholder="name@hospital.com" required />
          </div>
          <div className="input-group">
            <label>Password</label>
            <input type="password" placeholder="••••••••" required />
          </div>
          
          <div className="form-options">
            <label><input type="checkbox" /> Remember me</label>
            <a href="#forgot">Forgot Password?</a>
          </div>

          <button type="submit" className="main-btn signin-submit">Sign In</button>
        </form>

        <p className="signup-link">
          Don't have an account? <span className="link-text">Create one</span>
        </p>
      </div>
    </div>
  );
};

export default Signinpage;