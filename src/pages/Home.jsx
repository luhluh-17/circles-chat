import React from 'react'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'

function Home() {
  return (
    <main className='content-container'>
      <Sidebar />

      <section className='content'>
        <Navbar />
        <h3>Contents</h3>
      </section>
    </main>
  )
}

export default Home
