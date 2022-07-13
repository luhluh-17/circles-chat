import React from 'react'

function InputField({ label, placeholder, type }) {
  return (
    <label className='form-label'>
      {label}
      <input
        className='form-input'
        type={type}
        placeholder={placeholder}
      ></input>
    </label>
  )
}

InputField.defaultProps = {
  placeholder: '',
  type: 'text',
}

export default InputField
