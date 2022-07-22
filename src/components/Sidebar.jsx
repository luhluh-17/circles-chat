import React, { useEffect, useState } from 'react'
import ModalAddChannel from '../parts/Channel/ModalAddChannel'
import { apiGET } from '../services/api'
import { CHANNELS } from '../services/constant'
import SidebarHeader from './SidebarHeader'
import SidebarItems from './SidebarItems'

function Sidebar() {
  const [response, setResponse] = useState(null)
  const [isOpen, setIsOpen] = useState(false)

  const toggleDialog = () => setIsOpen(bool => !bool)
  const closeDialog = () => setIsOpen(false)

  const handleAdd = () => {
    toggleDialog()
  }

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
    <aside className='sidebar'>
      <SidebarHeader icon='diversity_3' title='Channels' onAdd={handleAdd} />
      <SidebarItems list={response?.data} errors={response?.errors} />
      <ModalAddChannel isOpen={isOpen} onClose={closeDialog} />
    </aside>
  )
}

export default Sidebar
