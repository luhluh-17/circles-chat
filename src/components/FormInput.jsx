import React from 'react'

function FormInput({ label, type, autoComplete, id }) {
  const newLabel = label === '' ? type : label

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

FormInput.defaultProps = {
  label: '',
  type: 'text',
  autoComplete: 'on',
  id: null,
}

export default FormInput
