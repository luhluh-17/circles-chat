import React, { useEffect } from 'react'

function ControlledInput({
  label,
  type,
  autoComplete,
  value,
  onValueChange,
  validate,
}) {
  const newLabel = label === '' ? type : label

  useEffect(() => {
    validate()
  }, [validate, value])

  return (
    <label className='form-label'>
      {newLabel}
      <input
        className='form-input'
        type={type}
        autoComplete={autoComplete}
        value={value}
        onChange={e => onValueChange(e.target.value)}
      />
    </label>
  )
}

ControlledInput.defaultProps = {
  label: '',
  type: 'text',
  autoComplete: 'on',
}

export default ControlledInput
