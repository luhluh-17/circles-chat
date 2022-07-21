import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'

function Home() {
  return (
    <section className='home-container'>
      <Navbar />
      {/* <Sidebar />
      <section className='app-content'>
        <Navbar />
        <Outlet />
      </section> */}
    </section>
  )
}

export default Home
