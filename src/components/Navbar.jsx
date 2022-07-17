import React from 'react'
import { getInitials } from '../utils/helper'
import Searchbar from './Searchbar'

function Navbar() {
  return (
    <nav className='navbar'>
      <Searchbar />
      <ul className='navbar-items'>
        <li>
          <span className='material-symbols-outlined icon'>home</span>
        </li>
        <li>
          <span className='material-symbols-outlined icon'>mail</span>
        </li>
        <li>
          <span className='dot'>{getInitials()}</span>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
