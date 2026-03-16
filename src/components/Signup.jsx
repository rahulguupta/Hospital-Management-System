import React, { useState, useEffect } from 'react';
import './Signup.css';
import { registerUser } from '../api/auth';
import { useNavigate } from 'react-router-dom';

const Signup = ({ isOpen, onClose, onSwitchSignin }) => {
  const navigate = useNavigate();

  useEffect(() => {
    const user = localStorage.getItem('user');
    if (user) {
      navigate('/dashboard', { replace: true });
    }
  }, [navigate]);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    password: '',
    confirmpass: ''
  });

  if (!isOpen) return null;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
  e.preventDefault();
  if (formData.password !== formData.confirmpass) return alert("Password not matched");

  try {
    const res = await registerUser(formData);
    
    // Check for userId or _id (whichever your backend sends)
    const idToSave = res.user?.userId || res.user?._id;

    if (res && res.user && idToSave) {
      localStorage.setItem('userId', idToSave); // Use the variable we just found
      localStorage.setItem('user', JSON.stringify(res.user));
      
      alert("Registration Successful for " + res.user.name);
      navigate('/dashboard');
      onClose();
    } else {
      alert("Registration failed: Missing user ID in response.");
    }
  } catch (err) {
    alert("Error: " + (err.response?.data?.message || err.message));
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
              <input type="text" name="name" placeholder="Name" required onChange={handleChange} />
            </div>

            <div className="input-group">
              <label>Email Address</label>
              <input type="email" name="email" placeholder="example@gmail.com" required onChange={handleChange} />
            </div>

            <div className="input-group">
              <label>Phone Number</label>
              <input type="tel" name="phone" placeholder="+91" required onChange={handleChange} />
            </div>

            <div className="input-group">
              <label>Password</label>
              <input type="password" name="password" placeholder="password" required onChange={handleChange} />
            </div>

            <div className="input-group">
              <label>Confirm Password</label>
              <input type="password" name="confirmpass" placeholder="Confirm-password" required onChange={handleChange} />
            </div>

            <button type="submit" className="main-btn signin-submit">Create Account</button>
          </form>

          <p className="signup-link">
            Already have an account? <span className="link-text" onClick={() => { onClose(); onSwitchSignin(); }}>Sign In</span>
          </p>
        </div>
      </div>
    </>
  );
};

export default Signup;