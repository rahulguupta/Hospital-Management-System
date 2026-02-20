import { useState } from 'react'
import { BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Home from './pages/Home'
import Department from './pages/Department'
 

import './App.css'
function App() {
  const [count, setCount] = useState(0)

  return (
       
        <Router>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/department' element={<Department/>}/>
          </Routes>
        </Router>
  )
}

export default App
