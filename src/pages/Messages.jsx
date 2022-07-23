import React, { useState } from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import { getUsersFromLocal } from '../utils/helper'

function Messages() {
  const [users, setUsers] = useState(getUsersFromLocal())

  const handleFilter = value => {
    if (value === '') {
      setUsers(getUsersFromLocal())
    } else {
      const filteredUsers = users.filter(user =>
        user.name.toLowerCase().includes(value.toLowerCase())
      )
      setUsers(filteredUsers)
    }
  }

  return (
    <>
      <main className='app-container'>
        <Navbar onFilter={handleFilter} />
        <section className='app-content'>
          <Sidebar
            icon='email'
            title='Messages'
            response={{ data: users }}
            onAdd={() => alert('test')}
          />
          <Outlet />
        </section>
      </main>
    </>
  )
}

export default Messages
