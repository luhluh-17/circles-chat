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
    <main className='main-container'>
      <form className='form' onSubmit={handleSubmit}>
        <header>
          <h2 className='title'>Welcome Back</h2>
          <h4 className='subtitle'>We're so excited to see you again!</h4>
        </header>
        <div className='mt-1'>
          <h5 className='form-text error'>{error}</h5>
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
        </div>
        <h5 className='btn-text'>Forgot your password?</h5>
        <button className='btn-form mt-1' type='submit'>
          Login
        </button>
        <h5 className='form-text'>
          Need an account?{' '}
          <span className='btn-text' onClick={handleClick}>
            Register
          </span>
        </h5>
      </form>
    </main>
  )
}

export default Login
