import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'

function Home() {
  return (
    <main className='content-container'>
      <Sidebar />
      <section className='content'>
        <Navbar />
        <Outlet />
      </section>
    </main>
  )
}

export default Home
