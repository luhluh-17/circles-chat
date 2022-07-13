import { useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import auth, { LOGIN } from '../services/auth'

function Login() {
  const emailRef = useRef(null)
  const passwordRef = useRef(null)

  const [error, setError] = useState(`We're so excited to see you again!`)

  const navigate = useNavigate()

  const handleSubmit = e => {
    e.preventDefault()

    const data = {
      email: emailRef.current.value,
      password: passwordRef.current.value,
    }

    auth
      .post(LOGIN, data)
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

        localStorage.setItem('access-token', accessToken)
        localStorage.setItem('client', client)
        localStorage.setItem('expiry', expiry)
        localStorage.setItem('uid', uid)
        localStorage.setItem('id', id)

        navigate('/home')
      })
      .catch(error => {
        const { errors } = error.response.data
        setError(errors[0])
      })
  }

  const handleClick = () => navigate('/register')

  return (
    <main>
      <section>
        <form onSubmit={handleSubmit}>
          <header>
            <h3>Welcome Back</h3>
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
