import axios from 'axios'
import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { apiGET, getHeaders } from '../services/api'
import { BASE_URL, USERS } from '../services/constant'
import { savedUsersToLocal } from '../utils/helper'
import Icon from './Icon'
import Logo from './Logo'
import ProfileIcon from './ProfileIcon'
import Searchbar from './Searchbar'

function Navbar({ onFilter }) {
  const API = axios.create({
    baseURL: BASE_URL,
    headers: getHeaders(),
  })

  const navigate = useNavigate()

  const handleSuccess = response => {
    const users = response.data
    const userList = []
    users.forEach(user => {
      userList.push({ id: user.id, name: user.email })
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
    apiGET(API, USERS, handleSuccess, handleError)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <nav className='navbar'>
      <Logo />
      <Searchbar onFilter={onFilter} />
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
