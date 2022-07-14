import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { authUser } from '../services/auth'
import { REGISTER } from '../services/constant'
import RegisterForm from '../parts/Register/RegisterForm'

function Register() {
  const [error, setError] = useState('')
  const navigate = useNavigate()

  const handleSubmit = (e, email, password, confirm) => {
    e.preventDefault()

    const data = {
      email,
      password,
      password_confirmation: confirm,
    }
    const onSuccess = () => navigate('/home')
    const onError = errors => setError(errors.email[0])
    authUser(REGISTER, data, onSuccess, onError)
  }

  return (
    <main className='main-container'>
      <RegisterForm onSubmit={handleSubmit} errorMessage={error} />
    </main>
  )
}

export default Register
