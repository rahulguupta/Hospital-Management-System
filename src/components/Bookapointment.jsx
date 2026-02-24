import React, {useState} from 'react';
import './Bookapointment.css';

const Bookapointment = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your booking logic here
    console.log("Appointment Booked!");
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="appointment-card" onClick={(e) => e.stopPropagation()}>
        <button className="close-btn" onClick={onClose}>&times;</button>
        
        <h2>Book Appointment</h2>
        <p>Fill in the details below to schedule your visit.</p>

        <form className="appointment-form" onSubmit={handleSubmit}>
          {/* Patient Name */}
          <div className="input-group">
            <label>Patient Full Name</label>
            <input type="text" placeholder="Name" required />
          </div>

          <div className="form-row">
            {/* Age */}
            <div className="input-group small">
              <label>Age</label>
              <input type="number" placeholder="25" min="0" required />
            </div>
            {/* Phone Number */}
            <div className="input-group large">
              <label>Phone Number</label>
              <input type="tel" placeholder="+91" required />
            </div>
          </div>

          {/* Email */}
          <div className="input-group">
            <label>Email Address</label>
            <input type="email" placeholder="example@gmail.com" required />
          </div>

          {/* Address */}
          <div className="input-group">
            <label>Home Address</label>
            <input type="text" placeholder="Permanent Address" required />
          </div>

          {/* Date of Appointment */}
          <div className="input-group">
            <label>Preferred Date</label>
            <input type="date" required />
          </div>

          <button type="submit" className="main-btn appointment-submit">
            Confirm Booking
          </button>
        </form>

        <p className="support-text">
          Need help? <span className="link-text">Contact Support</span>
        </p>
      </div>
    </div>
  );
};

export default Bookapointment;