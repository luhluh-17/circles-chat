import { Route, Routes } from 'react-router-dom'
import Landing from './pages/Landing'
import Login from './pages/Login'
import Register from './pages/Register'

function App() {
  return (
    <Routes path='/'>
      <Route index element={<Landing />} />
      <Route path='login' element={<Login />} />
      <Route path='register' element={<Register />} />
      <Route path='home' element={<Login />} />
    </Routes>
  )
}

export default App
