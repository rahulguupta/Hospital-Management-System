import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './About.css';
import Signinpage from './components/Signinpage';
import Signup from './components/Signup';

const About = () => {
  const [ShowSignin, setShowSignin] = useState(false);
  const[showSignUP, setshowSignUp] = useState(false);

  const stats = [
    { id: 1, label: 'Expert Doctors', value: '150+' },
    { id: 2, label: 'Happy Patients', value: '50k+' },
    { id: 3, label: 'Years Experience', value: '25+' },
    { id: 4, label: 'Modern Labs', value: '10+' },
  ];

  return (
    <>
      <Signinpage isOpen={ShowSignin} onClose={() => setShowSignin(false) } onSwitchSignup={() => {setShowSignin(false); setshowSignUp(true);}} />
        <Signup isOpen={showSignUP} onClose={() => setshowSignUp(false)} onSwitchSignin={() => {setshowSignUp(false); setShowSignin(true);}}/>
      <div className={`hms-container ${ShowSignin ? 'content-blur' : ''}`}>
        
        {/* NAVIGATION (Standard across your app) */}
        <nav className="desktop-nav">
          <div className="nav-logo">
            <span className="plus-icon">✚</span>MD<span> HOSPITAL</span>
          </div>
          <div className="nav-links">
            <Link to="/">Home</Link>
            <Link to="/department">Departments</Link>
            <Link to="/doctor">Doctors</Link>
            <Link to="/about" className="active-link-about">About us</Link>
          </div>
          <div className="nav-auth">
            <button className="btn-text" onClick={() => setShowSignin(true)}>Sign In</button>
            <button className="btn-filled" onClick={() => setshowSignUp(true)}>Get Started</button>
          </div>
        </nav>

        {/* ABOUT HERO */}
        <header className="about-header">
          <span className="badge">Who We Are</span>
          <h1>Your Health Is Our <span>Top Priority</span></h1>
          <p>MD Hospital has been at the forefront of medical excellence for over two decades, combining compassionate care with world-class technology.</p>
        </header>

        {/* STATISTICS SECTION */}
        <section className="stats-grid">
          {stats.map((stat) => (
            <div key={stat.id} className="stat-card">
              <h2>{stat.value}</h2>
              <p>{stat.label}</p>
            </div>
          ))}
        </section>

        {/* MISSION & VISION SECTION */}
        <section className="mission-vision">
          <div className="mv-card">
            <div className="mv-icon">🎯</div>
            <h3>Our Mission</h3>
            <p>To provide accessible, high-quality healthcare through digital innovation and expert medical practitioners, ensuring every patient feels valued and cared for.</p>
          </div>
          <div className="mv-card">
            <div className="mv-icon">👁️</div>
            <h3>Our Vision</h3>
            <p>To become a global leader in integrated healthcare management, where technology and humanity meet to create a healthier world for everyone.</p>
          </div>
        </section>

        {/* WHY CHOOSE US - PROFESSIONAL FEATURES */}
        <section className="why-us">
          <div className="why-text">
            <span className="badge">Why Choose Us</span>
            <h2>Setting New Standards in <span>Medical Excellence</span></h2>
            <div className="why-item">
              <h4>✓ Advanced Technology</h4>
              <p>Equipped with the latest robotic surgery and diagnostic imaging tools.</p>
            </div>
            <div className="why-item">
              <h4>✓ 24/7 Emergency Support</h4>
              <p>Our trauma center and emergency response team are always on standby.</p>
            </div>
            <div className="why-item">
              <h4>✓ Global Healthcare Standards</h4>
              <p>Accredited by international health boards for safety and hygiene.</p>
            </div>
          </div>
          <div className="why-visual">
             {/* Use a professional hospital building image here */}
             <div className="image-placeholder">MD Hospital Campus</div>
          </div>
        </section>

      </div>
    </>
  );
};

export default About;