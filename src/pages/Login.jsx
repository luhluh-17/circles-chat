import React from 'react'

function Login() {
  return (
    <main>
      <section>
        <header>
          <h3>Welcome Back</h3>
          <p>We're so excited to see you again!</p>
        </header>
        <form>
          <label>
            EMAIL
            <input type={'email'}></input>
          </label>
          <label>
            PASSWORD
            <input type={'email'}></input>
          </label>
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
