import React from 'react'
import { useNavigate } from 'react-router-dom'
import { getInitials } from '../utils/helper'
import Searchbar from './Searchbar'

function Navbar() {
  const navigate = useNavigate()

  const navigateToHome = () => {
    navigate('/home')
  }

  const navigateToMessages = () => {
    navigate('/messages')
    localStorage.clear()
  }

  const handleLogout = () => {
    navigate('/')
    localStorage.clear()
  }

  return (
    <nav className='navbar'>
      <Searchbar />
      <ul className='navbar-items'>
        <li onClick={navigateToHome}>
          <span className='material-symbols-outlined icon'>home</span>
        </li>
        <li onClick={navigateToMessages}>
          <span className='material-symbols-outlined icon'>mail</span>
        </li>
        <li onClick={handleLogout}>
          <span className='dot'>{getInitials()}</span>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
