import React from 'react';
import { useNavigate } from 'react-router-dom';

const Userdash = () => {
  const navigate = useNavigate();
  const storedData = localStorage.getItem('user');

 
  const user = (storedData && storedData !== "undefined") ? JSON.parse(storedData) : null;

  const handleLogout = () => {
    localStorage.clear();
    navigate('/');
  };

  if (!user) {
    return (
      <div style={{ padding: '50px', textAlign: 'center' }}>
        <h2>Session Expired ya aap Login nahi hain!</h2>
        <p>Kripya wapas jayein aur Login karein.</p>
        <button onClick={() => window.location.href = "/"}>Go to Home</button>
      </div>
    );
  }

  
  return (
    <div className="dashboard">
      <h1>Welcome, {user.name}!</h1>
      <p>Email: {user.email}</p>
      {/* Baaki ka code yahan... */}
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Userdash;