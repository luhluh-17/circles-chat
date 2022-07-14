import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { authUser } from '../services/auth'
import { REGISTER } from '../services/constant'
import FormHeader from '../components/FormHeader'
import ButtonText from '../components/ButtonText'
import FormButton from '../components/FormButton'
import ControlledInput from '../components/ControlledInput'

function Register() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirm, setConfirm] = useState('')
  const [error, setError] = useState('')

  const navigate = useNavigate()

  const handleClick = () => navigate('/login')

  const validateEmail = () => {
    if (email === '') return false
    return email.includes('@')
  }

  const validatePassword = () => {
    if (password === '') return false
    return !(password.length < 6)
  }

  const validateConfirm = () => {
    if (confirm === '') return false
    return confirm === password
  }

  const handleSubmit = e => {
    e.preventDefault()

    const data = {
      email,
      password,
      password_confirmation: confirm,
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
          <ControlledInput
            type={'email'}
            autoComplete={'off'}
            value={email}
            onValueChange={setEmail}
            validate={validateEmail}
            error={'is not valid'}
          />
          <ControlledInput
            type={'password'}
            autoComplete={'new-password'}
            value={password}
            onValueChange={setPassword}
            validate={validatePassword}
            error={'is too short (minimum is 6 characters)'}
          />
          <ControlledInput
            label={'Confirm Password'}
            type={'password'}
            autoComplete={'new-password'}
            value={confirm}
            onValueChange={setConfirm}
            validate={validateConfirm}
            error={`doesn't match Password`}
          />
        </div>
        <FormButton text={'Continue'} />
        <ButtonText text={'Already have an account?'} onClick={handleClick} />
        <h5 className='form-text mt-1'>
          By registering, you agree to the{' '}
          <span className='btn-text'>Terms of Service</span> and{' '}
          <span className='btn-text'>Privacy Policy</span>
        </h5>
      </form>
    </main>
  )
}

export default Register
