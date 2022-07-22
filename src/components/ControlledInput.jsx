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

  let errorMessage = ''
  let style = 'form-label'
  if (value.length >= 1 && !result) {
    errorMessage = error
    style = 'form-label error'
  }

  return (
    <label className={style}>
      {`${newLabel} ${errorMessage}`}
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
