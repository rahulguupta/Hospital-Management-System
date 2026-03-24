import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Loginadmin } from '../api/auth'; // Ensure this function is exported in api/auth.js
import './AdminLog.css';
import mddc from '../assets/mddc.jpeg';

const AdminLog = ({ isOpen, onClose }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  if (!isOpen) return null;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const loginData = { email, password };
      const response = await Loginadmin(loginData);

      if (response.success) {
        alert(`Welcome, Admin ${response.user.name}!`);

        // 2. Save admin info in LocalStorage
        localStorage.setItem('adminToken', response.token);
        localStorage.setItem('adminName', response.user.name);

        // 3. Redirect to Admin Dashboard
        navigate('/admindash');
        onClose();
      }
    } catch (error) {
      console.error("Login Error:", error);
      alert(error.response?.data?.message || "Invalid Admin Credentials!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login-overlay">
      <div className="login-card">
        <button className="close-btn" onClick={onClose}>
          &times;
        </button>

        <div className="login-header">
          <img src={mddc} alt="mddc image" className="doctor-gra" />
          <h2>Admin Portal</h2>
          <p>Secure Access Only</p>
        </div>

        <form className="login-form" onSubmit={handleSubmit}>
          <div className="input-group">
            <label>Admin Email</label>
            <input 
              type="email" 
              placeholder="Enter admin email" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required 
            />
          </div>

          <div className="input-group">
            <label>Password</label>
            <input 
              type="password" 
              placeholder="Enter password" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required 
            />
          </div>

          <button type="submit" className="login-btn" disabled={loading}>
            {loading ? "Verifying..." : "Login to Dashboard"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default AdminLog;