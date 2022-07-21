import React from 'react'
import image from '../assets/images/logo-min.png'

function Logo() {
  return (
    <div className='logo'>
      <img className='brand-img' src={image} alt='Logo' />
      <h1>Circles</h1>
    </div>
  )
}

export default Logo
