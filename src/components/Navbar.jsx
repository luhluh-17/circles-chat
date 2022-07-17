import React from 'react'
import Searchbar from './Searchbar'

function Navbar() {
  return (
    <nav className='navbar'>
      <Searchbar />
      <ul className='navbar-items'>
        <li>
          <span class='material-symbols-outlined icon'>home</span>
        </li>
        <li className='navbar-item'>
          <span class='material-symbols-outlined icon'>mail</span>
        </li>
        <li className='navbar-item'>
          <span class='dot'>R</span>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
