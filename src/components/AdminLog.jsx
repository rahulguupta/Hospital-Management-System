import React, {useState, useEffect} from 'react';
import './AdminLog.css';

const AdminLog = ({ isOpen, onClose }) => {
if(!isOpen){return null;}

  return (
    <div className="login-overlay">
      <div className="login-card">
        <button className="close-btn" onClick={onClose} >
          &times;
        </button>

        <div className="login-header">
          <div className="logo-placeholder">HMS</div>
          <h2>Admin Portal</h2>
          <p>Secure Access Only</p>
        </div>

        <form className="login-form" onSubmit={(e) => e.preventDefault()}>
          <div className="input-group">
            <label>Admin Email</label>
            <input type="email" placeholder="admin@hospital.com" required />
          </div>

          <div className="input-group">
            <label>Password</label>
            <input type="password" placeholder="••••••••" required />
          </div>

          <button type="submit" className="login-btn">
            Login to Dashboard
          </button>
        </form>
      </div>
    </div>
  );
};

export default AdminLog;