import React from 'react'
import image from '../assets/images/the-list-is-empty.png'

function EmptyContent() {
  return (
    <div className='sidebar-no-items'>
      <img src={image} alt='no content' />
      <p>Oops! Nothing to show here</p>
      <p>Start creating channels to get started</p>
    </div>
  )
}

export default EmptyContent
