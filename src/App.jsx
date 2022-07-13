import { Route, Routes } from 'react-router-dom'
import Landing from './pages/Landing'
import Login from './pages/Login'

function App() {
  return (
    <Routes path='/'>
      <Route index element={<Landing />} />
      <Route path='login' element={<Login />} />
    </Routes>
  )
}

export default App
