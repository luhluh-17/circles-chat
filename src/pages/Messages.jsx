import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import { getUsersFromLocal } from '../utils/helper'

function Messages() {
  const response = { data: getUsersFromLocal() }

  return (
    <>
      <main className='app-container'>
        <Navbar />
        <section className='app-content'>
          <Sidebar
            icon='email'
            title='Messages'
            response={response}
            onAdd={() => alert('test')}
          />
          <Outlet />
        </section>
      </main>
    </>
  )
}

export default Messages
