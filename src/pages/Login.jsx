import { useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { authUser } from '../services/auth'
import { LOGIN } from '../services/constant'
import FormHeader from '../components/FormHeader'
import ButtonText from '../components/ButtonText'
import FormInput from '../components/FormInput'
import FormButton from '../components/FormButton'

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
      <form className='form' autoComplete='on' onSubmit={handleSubmit}>
        <FormHeader
          title={'Welcome Back'}
          subtitle={`We're so excited to see you again!`}
        />
        <div className='mt-1'>
          <h5 className='form-text error'>{error}</h5>
          <FormInput type={'email'} id={emailRef} />
          <FormInput type={'password'} id={passwordRef} />
        </div>
        <ButtonText text={'Forgot your password?'} />
        <FormButton text={'Login'} />
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
