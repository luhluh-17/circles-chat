import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import FormHeader from '../../components/FormHeader'
import ButtonText from '../../components/ButtonText'
import FormButton from '../../components/FormButton'
import ControlledInput from '../../components/ControlledInput'
import {
  validateConfirm,
  validateEmail,
  validatePassword,
} from '../../utils/validators'

function RegisterForm({ onSubmit, errorMessage }) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirm, setConfirm] = useState('')
  const [emailError, setEmailError] = useState('')

  const navigate = useNavigate()
  const handleClick = () => navigate('/login')

  useEffect(() => {
    setEmailError(errorMessage)
    alert(errorMessage)
  }, [errorMessage])

  return (
    <form
      className='form'
      autoComplete='off'
      onSubmit={e => onSubmit(e, email, password, confirm)}
    >
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
          validate={() => validateEmail(email)}
          error={'is not valid'}
        />
        <ControlledInput
          type={'password'}
          autoComplete={'new-password'}
          value={password}
          onValueChange={setPassword}
          validate={() => validatePassword(password)}
          error={'is too short (minimum is 6 characters)'}
        />
        <ControlledInput
          label={'Confirm Password'}
          type={'password'}
          autoComplete={'new-password'}
          value={confirm}
          onValueChange={setConfirm}
          validate={() => validateConfirm(password, confirm)}
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
  )
}

export default RegisterForm
