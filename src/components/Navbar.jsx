import React from 'react'
import { useNavigate } from 'react-router-dom'
import Icon from './Icon'
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
          <Icon icon='diversity_3' />
        </li>
        <li onClick={navigateToMessages}>
          <Icon icon='mail' />
        </li>
        <li>
          <Icon icon='notifications' />
        </li>
        <li onClick={handleLogout}>
          <ProfileIcon name={localStorage.getItem('uid')} />
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
