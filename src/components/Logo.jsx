import React from 'react'
import image from '../assets/images/logo-min.png'

function Logo() {
  return (
    <div className='logo'>
      <img className='brand-img' src={image} alt='Logo' />
      <h2>Circles</h2>
    </div>
  )
}

export default Logo
