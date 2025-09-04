
import './App.css'
import { Routes, Route } from 'react-router-dom'
import Register from './Pages/Register'
import ContextProvider from './Context/Context.tsx'
function App() {
  return (
    <ContextProvider>

      <Routes>
        <Route path='/register' element={<Register />} />
      </Routes>

    </ContextProvider>
  )
}

export default App
