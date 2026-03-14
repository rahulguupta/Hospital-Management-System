import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Userdash.css';
import BookingCard from '../components/Bookingcard';

const Userdash = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('overview');
  const [showAp, setshowAp] = useState(false);
  const [selectedDoctor, setselectedDoctor] = useState(null);

  const HandleOpenBooking = (doc) =>
  {
    setselectedDoctor(doc);
    setshowAp(true);
  };

  const user = JSON.parse(localStorage.getItem('user') || 'null');

  if (!user) return <div className="loading">Redirecting...</div>;

  return (
    <>
    {showAp && <BookingCard doctor={selectedDoctor} onClose={() => setshowAp(false)} />}
    <div className="hms-container">
      {/* --- NAVIGATION --- */}
      <nav className="desktop-nav">
        <div className="nav-logo">✚ MD <span>HOSPITAL</span></div>
        <div className="nav-links">
          <button className={activeTab === 'overview' ? 'active' : ''} onClick={() => setActiveTab('overview')}>Overview</button>
          <button className={activeTab === 'reports' ? 'active' : ''} onClick={() => setActiveTab('reports')}>Reports</button>
          <button className={activeTab === 'booking' ? 'active' : ''} onClick={() => setActiveTab('booking')}>Book Apointment</button>
        </div>
        <button className="logout-link" onClick={() => {localStorage.clear(); navigate('/');}}>Logout</button>
      </nav>

      <div className="main-card">
        {/* --- 1. OVERVIEW TAB --- */}
        {activeTab === 'overview' && (
          <div className="tab-content animate-in">
            <h1>Welcome, {user.name}</h1>
            <div className="status-grid">
              <div className="stat-item"><span>Status:</span> <p>Active Patient</p></div>
              <div className="stat-item"><span>Next Visit:</span> <p>None Scheduled</p></div>
            </div>
          </div>
        )}

        {/* --- 2. REPORTS TAB --- */}
        {activeTab === 'reports' && (
          <div className="tab-content animate-in">
            <h2>Medical Reports</h2>
            <div className="report-list">
              <div className="report-row">
                <p>Blood Test - CBC</p>
                <button className="view-btn">Download PDF</button>
              </div>
              <div className="report-row">
                <p>CT-scan Report</p>
                <span className="pending">Processing...</span>
              </div>
              <div className="report-row">
                <p>X-Ray Report</p>
                <span className="pending">Processing...</span>
              </div>
              <div className="report-row">
                <p>Blood-sugar RBS</p>
                <span className="pending">Processing...</span>
              </div>
            </div>
          </div>
        )}

        {/* --- 3. BOOKING TAB --- */}
        {activeTab === 'booking' && (
          <div className="tab-content animate-in">
            <h2>Available Specialists</h2>
            <div className="doctor-grid">
              <div className="doc-card">
                <h4>Dr. Amit Kumar</h4>
                <p>Cardiology</p>
                <button className="book-small-btn" onClick={() => HandleOpenBooking({name: 'Dr Amit Kumar', qual: 'MBBS',exp:'3 yrs'})}>Available Today</button>
              </div>
              <div className="doc-card">
                <h4>Dr. Priya Singh</h4>
                <p>Neurology</p>
                <button className="book-small-btn" onClick={() => HandleOpenBooking({name: 'Dr Priya Singh', qual: 'DM/DNB Neurology', exp: '4 yrs'})}>Book Slot</button>
              </div>
              <div className="doc-card">
                <h4>Dr. Adarsh Singh</h4>
                <p>Psycology</p>
                <button className="book-small-btn" onClick={() => HandleOpenBooking({name: 'Dr Adarsh Singh', qual: 'MD Psycologist', exp: '2 yrs'})}>Book Slot</button>
              </div>
              <div className="doc-card">
                <h4>Dr. Madhusudan das</h4>
                <p>Neurology</p>
                <button className="book-small-btn">Available Today</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
    </>
  );
};

export default Userdash;