import { useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import api, { REGISTER } from '../services/api'

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

    api
      .post(REGISTER, data)
      .then(result => {
        const {
          data: { id },
        } = result.data

        const {
          'access-token': accessToken,
          client,
          expiry,
          uid,
        } = result.headers

        localStorage.setItem('acces-token', accessToken)
        localStorage.setItem('client', client)
        localStorage.setItem('expiry', expiry)
        localStorage.setItem('uid', uid)
        localStorage.setItem('id', id)

        navigate('/home')
      })
      .catch(error => {
        const { errors } = error.response.data
        setError(` - ${errors.email[0]}`)
      })
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
