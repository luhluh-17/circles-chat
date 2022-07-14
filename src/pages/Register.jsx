import { useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import FormHeader from '../components/FormHeader'
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
    const onError = errors => setError(errors.email[0])

    authUser(REGISTER, data, onSuccess, onError)
  }

  return (
    <main className='main-container'>
      <form className='form' autoComplete='off' onSubmit={handleSubmit}>
        <FormHeader
          title={'Create an Account'}
          subtitle={`We're excited to see you in the community!`}
        />
        <div className='mt-1'>
          <label className='form-label'>
            Email <span>{error}</span>
            <input
              className='form-input'
              type='email'
              autoComplete='false'
              ref={emailRef}
            />
          </label>
          <label className='form-label'>
            Password
            <input
              className='form-input'
              type='password'
              autoComplete='new-password'
              ref={passwordRef}
            />
          </label>
          <label className='form-label'>
            Confirm Password
            <input
              className='form-input'
              type='password'
              autoComplete='new-password'
              ref={confirmRef}
            />
          </label>
        </div>
        <button className='btn-form mt-1' type='submit'>
          Continue
        </button>
        <h5 className='btn-text' onClick={handleClick}>
          Already have an account?
        </h5>
        <h6 className='form-text mt-1'>
          By registering, you agree to the{' '}
          <span className='btn-text'>Terms of Service</span> and{' '}
          <span className='btn-text'>Privacy Policy</span>
        </h6>
      </form>
    </main>
  )
}

export default Register
