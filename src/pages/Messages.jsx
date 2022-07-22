import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'

function Messages() {
  return (
    <section className='app-container'>
      <Navbar />
      <section className='app-content'>
        <Sidebar />
        <Outlet />
      </section>
    </section>
  )
}

export default Messages
