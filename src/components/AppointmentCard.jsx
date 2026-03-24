import React, { useState, useEffect } from 'react';
import { getMyAppointments } from '../api/auth'; // Jo function humne banaya tha
import './AppointmentCard.css'; // Styling ke liye

const AppointmentCard = () => {
    const [appointments, setAppointments] = useState([]);
    const [loading, setLoading] = useState(true);

    // API call karke data lane ka function
    const loadData = async () => {
        try {
            const user = JSON.parse(localStorage.getItem('user') || '{}');
            const userId = user.userId || localStorage.getItem('userId');

            if (userId) {
                const res = await getMyAppointments(userId);
                if (res.success) {
                    setAppointments(res.appointments);
                }
            }
        } catch (err) {
            console.error("Fetch error:", err);
        } finally {
            setLoading(false);
        }
    };

    // Page load hote hi data mangwao
    useEffect(() => {
        loadData();
    }, []);

    if (loading) return <div className="loader">Loading your visits...</div>;

    return (
        <div className="appointment-manager-card animate-in">
            <div className="card-header">
                <h3>My Appointment Records</h3>
                <button className="refresh-btn" onClick={loadData}>↻ Refresh</button>
            </div>

            <div className="appointment-grid">
                {appointments.length > 0 ? (
                    appointments.map((app, index) => (
                        <div key={index} className="mini-app-card">
                            <div className="card-side-border"></div>
                            <div className="card-info">
                                <h4>{app.doctor}</h4>
                                <p className="app-date">📅 {app.date}</p>
                                <p className="app-problem"><strong>Issue:</strong> {app.problem}</p>
                                <div className="app-footer">
                                    <span>Age: {app.age}</span>
                                    <span className="status-tag">Confirmed</span>
                                </div>
                            </div>
                        </div>
                    ))
                ) : (
                    <div className="empty-state">
                        <p>No appointments found. Book one to see it here!</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default AppointmentCard;