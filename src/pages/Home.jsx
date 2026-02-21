 import React, {useState} from 'react';
 import { Link } from 'react-router-dom';
 import mddc from '../assets/mddc.jpeg'
import './Home.css';

const Home = () => {
  const [showSignIn, setShowSignIn] = useState(false);
  return (
    <>
    {showSignIn && (
        <div className="modal-overlay" onClick={() => setShowSignIn(false)}>
          <div className="signin-card" onClick={(e) => e.stopPropagation()}>
            <button className="close-btn" onClick={() => setShowSignIn(false)}>&times;</button>
            
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
      )}
    <div className={`hms-container ${showSignIn ? 'content-blur' : ''}`}>
      {/* TOP NAVIGATION */}
      <nav className="desktop-nav">
        <div className="nav-logo">
          <span className="plus-icon">✚</span>MD<span> HOSPITAL</span>
        </div>
        <div className="nav-links">
          <Link className='Home' to="/">Home</Link>
          <Link to="/department">Departments</Link>
          <Link to="/doctors">Doctors</Link>
          <Link to="/about">About us</Link>
          
        </div>
        <div className="nav-auth">
          <button className="btn-text" onClick={() => setShowSignIn(true)}>Sign In</button>
          <button className="btn-filled">Get Started</button>
        </div>
      </nav>

      {/* HERO SECTION - SPLIT DESIGN */}
      <section className="hero-pc">
        <div className="hero-text">
          <span className="badge">24/7 Virtual Care Available</span>
          <h1>Revolutionizing <span>Healthcare</span> Management</h1>
          <p>
            Experience a seamless connection between patients, doctors, and hospital 
            administration. Secure, fast, and reliable medical solutions.
          </p>
          <div className="hero-actions">
            <button className="main-btn">Book Appointment</button>
            <button className="outline-btn">Watch Demo</button>
          </div>
        </div>
        <div className="hero-visual">
          <div className="blob-bg"></div>
          {/* Replace this emoji with a real medical <img> later */}
          <img src={mddc} alt="mddc image" className="doctor-graphic" ></img>
        </div>
      </section>

      {/* FEATURE GRID */}
      <section className="features-pc">
        <div className="feature-card">
          <div className="f-icon">📅</div>
          <h3>Smart Scheduling</h3>
          <p>Automated booking system to reduce wait times.</p>
        </div>
        <div className="feature-card">
          <div className="f-icon">🛡️</div>
          <h3>Secure Records</h3>
          <p>Your medical data is encrypted and protected.</p>
        </div>
        <div className="feature-card">
          <div className="f-icon">🔬</div>
          <h3>Live Tracking</h3>
          <p>Track lab results and pharmacy orders in real-time.</p>
        </div>
      </section>
    </div>
    </>
  );
};

export default Home;