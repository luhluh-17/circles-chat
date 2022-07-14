import { useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { authUser } from '../services/auth'
import { REGISTER } from '../services/constant'

function Register() {
  const emailRef = useRef(null)
  const passwordRef = useRef(null)
  const confirmRef = useRef(null)

  const [error, setError] = useState('')

  const navigate = useNavigate()

  const handleClick = () => navigate('/login')

  const handleSubmit = e => {
    e.preventDefault()

    const data = {
      email: emailRef.current.value,
      password: passwordRef.current.value,
      password_confirmation: confirmRef.current.value,
    }
    const onSuccess = () => navigate('/home')
    const onError = errors => setError(` - ${errors.email[0]}`)

    authUser(REGISTER, data, onSuccess, onError)
  }

  return (
    <main>
      <h1>Create an account</h1>
      <form onSubmit={handleSubmit}>
        <label className='form-label'>
          Email <span>{error}</span>
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
        <label className='form-label'>
          Confirm Password
          <input
            className='form-input'
            type='password'
            autoComplete='on'
            ref={confirmRef}
          />
        </label>
        <button type='submit'>Continue</button>
      </form>
      <button onClick={handleClick}>Already have an account?</button>
      <h6>
        By registering, you agree to the <span>Terms of Service</span> and{' '}
        <span>Privacy policy</span>
      </h6>
    </main>
  )
}

export default Register
