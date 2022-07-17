import React from 'react'
import Sidebar from '../components/Sidebar'

function Home() {
  return (
    <main className='content-container'>
      <Sidebar />
      <section className='content'>
        <h3>Contents</h3>
      </section>
    </main>
  )
}

export default Home
