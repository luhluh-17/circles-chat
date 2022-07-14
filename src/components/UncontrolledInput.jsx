import React from 'react'
import { capitalText } from '../utils/helper'

function UncontrolledInput({ label, type, autoComplete, id }) {
  const newLabel = label === '' ? capitalText(type) : label

  return (
    <label className='form-label'>
      {newLabel}
      <input
        className='form-input'
        type={type}
        autoComplete={autoComplete}
        ref={id}
      />
    </label>
  )
}

UncontrolledInput.defaultProps = {
  label: '',
  type: 'text',
  autoComplete: 'on',
}

export default UncontrolledInput
