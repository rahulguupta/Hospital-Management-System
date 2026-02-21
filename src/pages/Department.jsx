import React from 'react';
import { Link } from 'react-router-dom';
import './Department.css';

const Departments = () => {
  const deptList = [
    { id: 1, name: 'Cardiology', icon: '❤️', desc: 'Heart care and cardiovascular surgery.' },
    { id: 2, name: 'Neurology', icon: '🧠', desc: 'Expertise in brain and nervous system health.' },
    { id: 4, name: 'Orthopedics', icon: '🦴', desc: 'Focusing on bone, joint, and muscle health.' },
    { id: 6, name: 'Radiology', icon: '🩻', desc: 'Precision imaging and diagnostic services.' },
  ];

  return (
    <div className="hms-container">
      {/* TOP NAVIGATION (Consistent with Home) */}
      <nav className="desktop-nav">
        <div className="nav-logo">
          <span className="plus-icon">✚</span>MD<span> HOSPITAL</span>
        </div>
        <div className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/departments" className="active-link">Departments</Link>
          <Link to="/doctors">Doctors</Link>
          <Link to="/about">About us</Link>
        </div>
        <div className="nav-auth">
          <button className="btn-text">Sign In</button>
          <button className="btn-filled">Get Started</button>
        </div>
      </nav>

      {/* HEADER SECTION */}
      <header className="dept-header">
        <span className="badge">Our Expertise</span>
        <h1>Specialized <span>Departments</span></h1>
        <p>Explore our world-class medical divisions equipped with state-of-the-art technology.</p>
      </header>

      {/* DEPARTMENTS GRID */}
      <section className="dept-grid">
        {deptList.map((dept) => (
          <div key={dept.id} className="dept-card">
            <div className="dept-icon-box">{dept.icon}</div>
            <h3>{dept.name}</h3>
            <p>{dept.desc}</p>
            <button className="dept-link-btn">View Details →</button>
          </div>
        ))}
      </section>

      {/* CALL TO ACTION */}
      <section className="dept-cta">
        <div className="cta-content">
          <h2>Need help choosing a department?</h2>
          <p>Consult with our medical advisors for a personalized recommendation.</p>
          <button className="main-btn">Contact Support</button>
        </div>
      </section>
    </div>
  );
};

export default Departments;