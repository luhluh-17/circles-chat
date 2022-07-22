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
    console.log(response)
  }

  const handleError = error => {
    console.log(error)
  }

  const handleAPICall = () => {
    apiGET(CHANNELS, handleSuccess, handleError)
  }

  useEffect(() => {
    apiGET(CHANNELS, handleSuccess, handleError)
  }, [])

  return (
    <>
      <main className='app-container'>
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
      </main>
      <ModalAddChannel
        isOpen={isOpen}
        onClose={closeDialog}
        onSuccessCallback={handleAPICall}
      />
    </>
  )
}

export default Channel
