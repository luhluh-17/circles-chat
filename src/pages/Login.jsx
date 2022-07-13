import React from 'react'
import { useNavigate } from 'react-router-dom'
import InputField from '../components/InputField'

function Login() {
  const navigate = useNavigate()

  const handleClick = () => navigate('/register')

  return (
    <main>
      <section>
        <header>
          <h3>Welcome Back</h3>
          <p>We're so excited to see you again!</p>
        </header>
        <form>
          <InputField label={'email'} />
          <InputField label={'password'} type={'password'} />
          <p>Forgot your password?</p>
          <button type='submit'>Login</button>
          <p>Need an account?</p>
          <button onClick={handleClick}>Register</button>
        </form>
      </section>
    </main>
  )
}

export default Login
