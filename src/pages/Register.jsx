import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { authUser } from '../services/auth'
import { REGISTER } from '../services/constant'
import RegisterForm from '../parts/Register/RegisterForm'
import background from '../assets/images/bg-min.jpg'
import {
  validateEmail,
  validatePassword,
  validateConfirm,
} from '../utils/validators'

function Register() {
  const [error, setError] = useState('')
  const navigate = useNavigate()

  const handleSubmit = (e, email, password, confirm) => {
    e.preventDefault()

    const isEmailValid = validateEmail(email).result
    const isPassValid = validatePassword(password).result
    const isConfirmValid = validateConfirm(confirm, password).result

    if (isEmailValid && isPassValid && isConfirmValid) {
      const data = {
        email,
        password,
        password_confirmation: confirm,
      }
      const onSuccess = () => navigate('/channels')
      const onError = errors => setError(errors.email[0])
      authUser(REGISTER, data, onSuccess, onError)
    }
  }

  return (
    <main
      style={{ backgroundImage: `url(${background})` }}
      className='main-container'
    >
      <RegisterForm onSubmit={handleSubmit} errorMessage={error} />
    </main>
  )
}

export default Register
