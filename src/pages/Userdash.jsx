import React from 'react';

const Userdash = () => {
  // 1. Pehle sirf string nikaalein
  const storedData = localStorage.getItem('user');

  // 2. Check karein ki data "undefined" ya "null" toh nahi hai
  // Agar data sahi hai tabhi parse karein, warna null rakhein
  const user = (storedData && storedData !== "undefined") ? JSON.parse(storedData) : null;

  // 3. Agar user nahi mila, toh crash hone ki jagah error message dikhao
  if (!user) {
    return (
      <div style={{ padding: '50px', textAlign: 'center' }}>
        <h2>Session Expired ya aap Login nahi hain!</h2>
        <p>Kripya wapas jayein aur Login karein.</p>
        <button onClick={() => window.location.href = "/"}>Go to Home</button>
      </div>
    );
  }

  // 4. Agar user mil gaya, toh normal UI dikhao
  return (
    <div className="dashboard">
      <h1>Welcome, {user.name}!</h1>
      <p>Email: {user.email}</p>
      {/* Baaki ka code yahan... */}
    </div>
  );
};

export default Userdash;