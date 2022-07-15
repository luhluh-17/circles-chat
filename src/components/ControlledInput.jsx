import React from 'react'
import { capitalText } from '../utils/helper'
function ControlledInput({
  label,
  type,
  autoComplete,
  value,
  onValueChange,
  validate,
}) {
  const newLabel = label === '' ? capitalText(type) : label
  const { result, error } = validate()

  let newError = ''
  let classStyle = 'form-label'
  if (value.length >= 1 && !result) {
    newError = error
    classStyle = 'form-label error'
  }

  return (
    <label className={classStyle}>
      {`${newLabel} ${newError}`}
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
