import React from 'react'
import InputField from '../components/InputField'

function Login() {
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
          <p>
            Need an account? <span>Register</span>
          </p>
        </form>
      </section>
    </main>
  )
}

export default Login
