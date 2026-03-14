import React from 'react';
import './BookingCard.css';

const BookingCard = ({ doctor, onClose, onSubmit }) => {
  // Get patient name from your backend storage
  const user = JSON.parse(localStorage.getItem('user') || '{"name": "Patient"}');

  if (!doctor) return null;

  return (
    <div className="booking-overlay">
      <div className="booking-card animate-pop">
        {/* Close Button */}
        <button type="button" className="close-x" onClick={onClose}>&times;</button>

        {/* Doctor Header */}
        <div className="doc-header">
          <div className="doc-icon">✚</div>
          <div className="doc-title">
            <h3>{doctor.name}</h3>
            <p>{doctor.qual}</p>
            <span>Exp: {doctor.exp}</span>
          </div>
        </div>

        {/* Booking Form */}
        <form className="booking-form" onSubmit={onSubmit}>
          <div className="input-box">
            <label>Patient Name</label>
            <input type="text" value={user.name} readOnly className="locked-input" />
          </div>

          <div className="input-row">
            <div className="input-box">
              <label>Age</label>
              <input type="number" placeholder="Years" required />
            </div>
            <div className="input-box">
              <label>Blood Group</label>
              <select required>
                <option value="">--</option>
                <option>A+</option><option>B+</option><option>O+</option><option>AB+</option>
                <option>A-</option><option>B-</option><option>O-</option><option>AB-</option>
              </select>
            </div>
          </div>

          <div className="input-box">
            <label>Appointment Date</label>
            <input type="date" required />
          </div>

          <div className="input-box">
            <label>Full Address</label>
            <input type="text" placeholder="Locality in Gorakhpur" required />
          </div>

          <div className="input-box">
            <label>Describe Problem / Disease</label>
            <textarea placeholder="Tell the doctor about your symptoms..." rows="3" required></textarea>
          </div>

          <button type="submit" className="confirm-booking-btn">
            Confirm Appointment
          </button>
        </form>
      </div>
    </div>
  );
};

export default BookingCard;