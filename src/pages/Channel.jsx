import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import ModalAddChannel from '../parts/Channel/ModalAddChannel'
import { apiGET, getHeaders } from '../services/api'
import { BASE_URL, CHANNELS } from '../services/constant'

function Channel() {
  const [response, setResponse] = useState(null)
  const [isOpen, setIsOpen] = useState(false)

  const API = axios.create({
    baseURL: BASE_URL,
    headers: getHeaders(),
  })

  const toggleDialog = () => setIsOpen(bool => !bool)
  const closeDialog = () => setIsOpen(false)
  const handleAdd = () => toggleDialog()

  const handleSuccess = response => {
    setResponse(response)
  }

  const handleError = error => {
    console.log(error)
  }

  const handleAPICall = () => {
    apiGET(API, CHANNELS, handleSuccess, handleError)
  }

  const handleFilter = value => {
    console.log(value)
  }

  useEffect(() => {
    apiGET(API, CHANNELS, handleSuccess, handleError)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <>
      <main className='app-container'>
        <Navbar onFilter={handleFilter} />
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
