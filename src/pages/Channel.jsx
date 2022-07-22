import React, { useEffect, useState } from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import ModalAddChannel from '../parts/Channel/ModalAddChannel'
import { apiGET } from '../services/api'
import { CHANNELS } from '../services/constant'

function Channel() {
  const [response, setResponse] = useState(null)

  const [isOpen, setIsOpen] = useState(false)

  const toggleDialog = () => setIsOpen(bool => !bool)
  const closeDialog = () => setIsOpen(false)
  const handleAdd = () => toggleDialog()

  const handleSuccess = response => {
    setResponse(response)
  }

  const handleError = message => {
    console.log(message)
  }

  useEffect(() => {
    const subscribeAPI = setInterval(() => {
      apiGET(CHANNELS, handleSuccess, handleError)
    }, 3000)
    return () => {
      clearInterval(subscribeAPI)
    }
  }, [])

  return (
    <>
      <section className='app-container'>
        <Navbar />
        <section className='app-content'>
          <Sidebar
            icon='diversity_3'
            title='Channels'
            response={response}
            onAdd={handleAdd}
          />
          <Outlet />
        </section>
      </section>
      <ModalAddChannel isOpen={isOpen} onClose={closeDialog} />
    </>
  )
}

export default Channel
