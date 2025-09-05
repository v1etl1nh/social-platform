
import './App.css'
import { Routes, Route } from 'react-router-dom'
import Register from './Pages/Register'
import ContextProvider from './Context/Context.tsx'
import LoginPage from './Pages/Login.tsx'
function App() {
  return (
    <ContextProvider>

      <Routes>
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<LoginPage />} />
      </Routes>

    </ContextProvider>
  )
}

export default App
