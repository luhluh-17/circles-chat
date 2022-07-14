import React from 'react'

function FormHeader({ title, subtitle }) {
  return (
    <header>
      <h2 className='title'>{title}</h2>
      <h4 className='subtitle'>{subtitle}</h4>
    </header>
  )
}

export default FormHeader
