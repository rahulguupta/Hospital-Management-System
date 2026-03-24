import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import './Department.css';
import Signinpage from '../components/Signinpage';
import Signup from '../components/Signup';
import AdminLog from '../components/AdminLog';

const Departments = () => {
  const [ShowSignin, setShowSignin] = useState(false);
  const[showSignUP, setshowSignUp] = useState(false);
  const[showAdmin, setshowAdmin] = useState(false);
  const deptList = [
    { id: 1, name: 'Cardiology', icon: '❤️', desc: 'Heart care and cardiovascular surgery.' },
    { id: 2, name: 'Neurology', icon: '🧠', desc: 'Expertise in brain and nervous system health.' },
    { id: 4, name: 'Orthopedics', icon: '🦴', desc: 'Focusing on bone, joint, and muscle health.' },
    { id: 6, name: 'Radiology', icon: '🩻', desc: 'Precision imaging and diagnostic services.' },
  ];

  return (
    <>
    <Signinpage isOpen={ShowSignin} onClose={() => setShowSignin(false) } onSwitchSignup={() => {setShowSignin(false); setshowSignUp(true);}} />
      <Signup isOpen={showSignUP} onClose={() => setshowSignUp(false)} onSwitchSignin={() => {setshowSignUp(false); setShowSignin(true);}}/>
      <AdminLog isOpen={showAdmin} onClose={() => setshowAdmin(false)}/>
    <div className={`hms-container ${ShowSignin || showAdmin || showSignUP ? 'content-blur' : ''}`}>
      
      {/* TOP NAVIGATION (Consistent with Home) */}
      <nav className="desktop-nav">
        <div className="nav-logo">
          <span className="plus-icon">✚</span>MD<span> HOSPITAL</span>
        </div>
        <div className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/departments" className="active-link">Departments</Link>
          <Link to="/doctor">Doctors</Link>
          <Link to="/about">About us</Link>
        </div>
        <div className="nav-auth">
          <button className="btn-text" onClick={()=> setShowSignin(true)}>Sign In</button>
          <button className="btn-filled" onClick={() => setshowSignUp(true)}>Get Started</button>
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
          <button className="main-btn2" onClick={() => setshowAdmin(true)}>Admin</button>
        </div>
      </section>
    </div>
    </>
  );
};

export default Departments;