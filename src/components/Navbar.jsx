import React from 'react'
import { useNavigate } from 'react-router-dom'
import Logo from './Logo'
import ProfileIcon from './ProfileIcon'
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
      <Logo />
      <Searchbar />
      <ul className='navbar-items'>
        <li onClick={navigateToHome}>
          <span className='material-symbols-outlined icon'>home</span>
        </li>
        <li onClick={navigateToMessages}>
          <span className='material-symbols-outlined icon'>mail</span>
        </li>
        <li>
          <span className='material-symbols-outlined icon'>notifications</span>
        </li>
        <li onClick={handleLogout}>
          <ProfileIcon name={localStorage.getItem('uid')} />
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
