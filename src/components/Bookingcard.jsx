import React, { useState } from 'react';
import './BookingCard.css';
import { bookApointment } from '../api/auth';

const BookingCard = ({ doctor, onClose, onSubmit }) => {
  // Get patient name from your backend storage
  const user = JSON.parse(localStorage.getItem('user') || '{}');

  const[apointData, setapointData] = useState({
    age: '',
    doctor: doctor.name,
    address: '',
    bgroup: '',
    problem: '',
  });

  const handleChange = (e) =>
  {
    setapointData({...apointData, [e.target.name]: e.target.value});
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    // 1. Get the secret ID from storage
    const userId = localStorage.getItem('userId') || user.userId || user._id;

    if (!userId) {
      alert('Please login first');
      return;
    }

    // 2. Prepare the final package
    const finalPayload = {
      userId: userId, // This links the appointment to the user
      ...apointData,
    };

    try {
      const res = await bookApointment(finalPayload);
      alert("Success: " + res.message);
      onClose(); // Close the card
    } catch (err) {
      alert("Error: " + (err.response?.data?.message || err.message));
    }
  };

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
        <form className="booking-form" onSubmit={handleSubmit}>
          <div className="input-box">
            <label>Patient Name</label>
            <input type="text" value={user.name} readOnly className="locked-input" />
          </div>

          <div className="input-row">
            <div className="input-box">
              <label>Age</label>
              <input type="number" name="age" onChange={handleChange} placeholder="Years" required />
            </div>
            <div className="input-box">
              <label>Blood Group</label>
              <select required name="bgroup" onChange={handleChange}>
                <option value="">--</option>
                <option>A+</option><option>B+</option><option>O+</option><option>AB+</option>
                <option>A-</option><option>B-</option><option>O-</option><option>AB-</option>
              </select>
            </div>
          </div>

          <div className="input-box">
            <label>Appointment Date</label>
            <input type="date" name="date" onChange={handleChange} required />
          </div>

          <div className="input-box">
            <label>Full Address</label>
            <input type="text" name="address" onChange={handleChange} placeholder="Locality in Gorakhpur" required />
          </div>

          <div className="input-box">
            <label>Describe Problem / Disease</label>
            <textarea placeholder="Tell the doctor about your symptoms..." name='problem' onChange={handleChange} rows="3" required></textarea>
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