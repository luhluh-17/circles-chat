import { useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { authUser } from '../services/auth'
import { LOGIN } from '../services/constant'

function Login() {
  const emailRef = useRef(null)
  const passwordRef = useRef(null)

  const [error, setError] = useState('')

  const navigate = useNavigate()

  const handleSubmit = e => {
    e.preventDefault()

    const data = {
      email: emailRef.current.value,
      password: passwordRef.current.value,
    }
    const onSuccess = () => navigate('/home')
    const onError = errors => setError(errors[0])

    authUser(LOGIN, data, onSuccess, onError)
  }

  const handleClick = () => navigate('/register')

  return (
    <main>
      <section>
        <form onSubmit={handleSubmit}>
          <header>
            <h3>Welcome Back</h3>
            <h4>We're so excited to see you again!</h4>
            <p>{error}</p>
          </header>
          <label className='form-label'>
            Email
            <input className='form-input' type='email' ref={emailRef} />
          </label>
          <label className='form-label'>
            Password
            <input
              className='form-input'
              type='password'
              autoComplete='on'
              ref={passwordRef}
            />
          </label>
          <p>Forgot your password?</p>
          <button>Login</button>
          <p>Need an account?</p>
          <button onClick={handleClick}>Register</button>
        </form>
      </section>
    </main>
  )
}

export default Login
