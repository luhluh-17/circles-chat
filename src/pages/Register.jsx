import React from 'react'
import { useNavigate } from 'react-router-dom'

function Register() {
  const navigate = useNavigate()
  const handleClick = () => navigate('/login')
  return (
    <main>
      <h1>Register Page</h1>
      <button onClick={handleClick}>Already have an account?</button>
    </main>
  )
}

export default Register
