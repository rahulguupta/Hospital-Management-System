import React, { useState } from 'react';
import './Signup.css';

const Signup = ({ isOpen, onClose, onSwitchSignin }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    password: ''
  });

  if (!isOpen) return null;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Yahan aap apna api call (registerUser) add kar sakte hain
      console.log("Registration Data:", formData);
      alert("Registration Successful for " + formData.name);
      onClose();
    } catch (err) {
      alert("Error: " + err.message);
    }
  };

  return (
   <>
    <div className="modal-overlay" onClick={onClose}>
      <div className="signin-card" onClick={(e) => e.stopPropagation()}>
        <button className="close-btn" onClick={onClose}>&times;</button>
        
        <h2>Join Us</h2>
        <p>Create your account to access our hospital services.</p>

        <form className="signin-form" onSubmit={handleSubmit}>
          <div className="input-group">
            <label>Full Name</label>
            <input type="text" name="name" placeholder="John Doe" required onChange={handleChange} />
          </div>

          <div className="input-group">
            <label>Email Address</label>
            <input type="email" name="email" placeholder="name@hospital.com" required onChange={handleChange} />
          </div>

          <div className="input-group">
            <label>Phone Number</label>
            <input type="tel" name="phone" placeholder="+91 00000 00000" required onChange={handleChange} />
          </div>

          <div className="input-group">
            <label>Password</label>
            <input type="password" name="password" placeholder="••••••••" required onChange={handleChange} />
          </div>

          <button type="submit" className="main-btn signin-submit">Create Account</button>
        </form>

        <p className="signup-link">
          Already have an account? <span className="link-text" onClick={() => {onClose(); onSwitchSignin();}}>Sign In</span>
        </p>
      </div>
    </div>
    </>
  );
};

export default Signup;