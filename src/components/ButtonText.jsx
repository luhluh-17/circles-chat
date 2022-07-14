import React from 'react'

function ButtonText({ text, onClick }) {
  return (
    <h5 className='btn-text' onClick={onClick}>
      {text}
    </h5>
  )
}

export default ButtonText
