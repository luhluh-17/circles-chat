import React from 'react'
import image from '../assets/images/the-list-is-empty.png'

function EmptyContent({ styleName, error }) {
  return (
    <div className={styleName}>
      <img src={image} alt='no content' />
      <p>Oops! Nothing to show here</p>
      <p>{error}</p>
    </div>
  )
}

export default EmptyContent
