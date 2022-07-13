import React from 'react'
import { useNavigate } from 'react-router-dom'

function Landing() {
  const navigate = useNavigate()

  const handleLogin = () => navigate('/login')
  const handleRegister = () => navigate('/register')

  return (
    <main>
      <h1>Landing Page</h1>
      <button onClick={handleLogin}>Login</button>
      <button onClick={handleRegister}>Register</button>
    </main>
  )
}

export default Landing
