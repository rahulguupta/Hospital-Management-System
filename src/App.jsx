import { useState } from 'react'
import { BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Home from './pages/Home'
import Department from './pages/Department'
import Doctor from './pages/Doctor'
import About from './About'
 

import './App.css'
function App() {

  return (
       
        <Router>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/department' element={<Department/>}/>
            <Route path='/doctor' element={<Doctor/>}/>
            <Route path='/about' element={<About/>}/>
          </Routes>
        </Router>
  )
}

export default App
