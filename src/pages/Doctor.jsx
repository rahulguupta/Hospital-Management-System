import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Doctor.css'; 
import Signinpage from '../components/Signinpage';

const Doctor = () => {
  const [ShowSignin, setShowSignin] = useState(false);
  
  // This state will hold your doctors. 
  // When you add one via the admin panel/API, this list grows.
  const [doctorsList, setDoctorsList] = useState([
    { id: 1, name: 'Dr. Sarah Johnson', specialty: 'Cardiology', image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=300', experience: '12 years' },
    { id: 2, name: 'Dr. Michael Chen', specialty: 'Neurology', image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80&w=300', experience: '8 years' },
    { id: 3, name: 'Dr. Elena Rodriguez', specialty: 'Orthopedics', image: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&q=80&w=300', experience: '15 years' },
    { id: 4, name: 'Dr. James Wilson', specialty: 'Radiology', image: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&q=80&w=300', experience: '10 years' },
  ]);

  return (
    <>
      <Signinpage isOpen={ShowSignin} onClose={() => setShowSignin(false)} />
      <div className={`hms-container ${ShowSignin ? 'content-blur' : ''}`}>
        
        {/* TOP NAVIGATION (Identical to Home) */}
        <nav className="desktop-nav">
          <div className="nav-logo">
            <span className="plus-icon">✚</span>MD<span> HOSPITAL</span>
          </div>
          <div className="nav-links">
            <Link to="/">Home</Link>
            <Link to="/department">Departments</Link>
            <Link to="/doctor" className="active-link-doc">Doctors</Link>
            <Link to="/about">About us</Link>
          </div>
          <div className="nav-auth">
            <button className="btn-text" onClick={() => setShowSignin(true)}>Sign In</button>
            <button className="btn-filled">Get Started</button>
          </div>
        </nav>

        {/* DOCTOR HEADER */}
        <header className="doctor-header">
          <span className="badge">Expert Medical Team</span>
          <h1>Meet Our <span>Specialists</span></h1>
          <p>Our team of certified experts is dedicated to providing you with the best medical care possible.</p>
        </header>

        {/* DOCTORS GRID - Dynamic mapping */}
        <section className="doctor-grid">
          {doctorsList.map((doc) => (
            <div key={doc.id} className="doctor-card">
              <div className="doctor-image-box">
                <img src={doc.image} alt={doc.name} />
              </div>
              <div className="doctor-info">
                <span className="specialty-tag">{doc.specialty}</span>
                <h3>{doc.name}</h3>
                <p>{doc.experience} Experience</p>
                <button className="book-btn-small">Book Appointment</button>
              </div>
            </div>
          ))}
        </section>

        {/* CALL TO ACTION (Matching Home design) */}
        <section className="doctor-cta">
          <div className="cta-content">
            <h2>Want to join our team?</h2>
            <p>We are always looking for talented specialists to join our family.</p>
            <button className="main-btn">Apply for Position</button>
          </div>
        </section>
      </div>
    </>
  );
};

export default Doctor;