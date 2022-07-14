import { useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { authUser } from '../services/auth'
import { REGISTER } from '../services/constant'
import FormHeader from '../components/FormHeader'
import ButtonText from '../components/ButtonText'
import FormButton from '../components/FormButton'
import FormInput from '../components/FormInput'

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
          <FormInput type={'email'} autoComplete={'off'} id={emailRef} />
          <FormInput
            type={'password'}
            autoComplete={'new-password'}
            id={passwordRef}
          />
          <FormInput
            label={'Confirm Password'}
            type={'password'}
            autoComplete={'new-password'}
            id={confirmRef}
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
