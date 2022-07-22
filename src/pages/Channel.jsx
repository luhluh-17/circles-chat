import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'

function Channel() {
  return (
    <section className='home-container'>
      <Navbar />
      <section className='home-content'>
        <Sidebar />
        <Outlet />
      </section>
    </section>
  )
}

export default Channel
