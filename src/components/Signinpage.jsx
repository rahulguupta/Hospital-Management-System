 import React,{useEffect, useState} from 'react';
 import { loginUser } from '../api/auth';
 import { useNavigate } from 'react-router-dom';
 import './Signinpage.css';

const Signinpage = ({ isOpen, onClose, onSwitchSignup }) => {
  const navigate = useNavigate();
  useEffect(() => 
  {
    const user = localStorage.getItem('user');
    if(user)
    {
      navigate('/dashboard', {replace: true})
    }

  },[navigate])
  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');

  if (!isOpen) return null;
  
  const handleSubmit = async (e) => {
  e.preventDefault();
  try {
    const result = await loginUser({ email, password });

    // Extract the ID from the nested user object
    const idToSave = result.user?.userId || result.user?._id;

    if (result && result.user && idToSave) {
      localStorage.setItem('userId', idToSave); // MUST ADD THIS LINE
      localStorage.setItem('user', JSON.stringify(result.user));
      
      alert("Login successful! Welcome " + result.user.name);
      navigate('/dashboard');
      onClose();
    } else {
      alert("Login failed: Server response incomplete.");
    }
  } catch (err) {
    alert("Error: " + (err.response?.data?.message || err.message));
  }
};


  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="signin-card" onClick={(e) => e.stopPropagation()}>
        <button className="close-btn" onClick={onClose}>&times;</button>
        
        <h2>Welcome Back</h2>
        <p>Please enter your details to sign in.</p>

        <form className="signin-form" onSubmit={handleSubmit}>
          <div className="input-group">
            <label>Email Address</label>
            <input type="email" placeholder="name@hospital.com" required value={email} onChange={(e) => setEmail(e.target.value)} />
          </div>
          <div className="input-group">
            <label>Password</label>
            <input type="password" placeholder="••••••••" required value={password} onChange={(e) => setPassword(e.target.value)} />
          </div>
          
          <div className="form-options">
            <label><input type="checkbox" /> Remember me</label>
            <a href="#forgot">Forgot Password?</a>
          </div>

          <button type="submit" className="main-btn signin-submit">Sign In</button>
        </form>

        <p className="signup-link">
          Don't have an account? <span className="link-text" onClick={() => {onClose(); onSwitchSignup();}}>Create one</span>
        </p>
      </div>
    </div>
  );
};

export default Signinpage;