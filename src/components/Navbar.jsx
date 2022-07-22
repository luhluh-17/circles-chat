import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { apiGET } from '../services/api'
import { USERS } from '../services/constant'
import { savedUsersToLocal } from '../utils/helper'
import Icon from './Icon'
import Logo from './Logo'
import ProfileIcon from './ProfileIcon'
import Searchbar from './Searchbar'

function Navbar() {
  const navigate = useNavigate()

  const handleSuccess = response => {
    const users = response.data
    const userList = []
    users.forEach(user => {
      userList.push({ id: user.id, email: user.email })
    })

    savedUsersToLocal(userList)
  }

  const handleError = error => {
    console.log(error)
  }

  const navigateToChannel = () => {
    navigate('/channels')
  }

  const navigateToMessages = () => {
    navigate('/messages')
  }

  const handleLogout = () => {
    navigate('/')
    localStorage.clear()
  }

  useEffect(() => {
    apiGET(USERS, handleSuccess, handleError)
  }, [])

  return (
    <nav className='navbar'>
      <Logo />
      <Searchbar />
      <ul className='navbar-items'>
        <li onClick={navigateToChannel}>
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
