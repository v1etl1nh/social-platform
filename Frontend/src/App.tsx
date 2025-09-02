
import './App.css'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import Register from './Pages/Register'
function App() {


  return (
    <BrowserRouter>
    <Routes>
      <Route path='/register' element={<Register label="Username" type="text" placeholder="Enter your username" />} />
    </Routes>
    </BrowserRouter>
  )
}

export default App
