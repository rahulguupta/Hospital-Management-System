import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Department from './pages/Department'
import Doctor from './pages/Doctor'
import About from './About'
import Userdash from './pages/Userdash'
import ProtectedRoute from './context/ProtectedRoute'


import './App.css'
function App() {
  const isAuthenticated = localStorage.getItem('user');
  return (

    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/department' element={<Department />} />
        <Route path='/doctor' element={<Doctor />} />
        <Route path='/about' element={<About />} />
        <Route path='/dashboard' element={
          <ProtectedRoute>
          <Userdash />
          </ProtectedRoute>
          } />
      </Routes>
    </Router>
  )
}

export default App
