import React, { useEffect, useState } from 'react'
import { apiGET } from '../services/api'
import { CHANNELS } from '../services/constant'
import SidebarHeader from './SidebarHeader'
import SidebarItems from './SidebarItems'

function Sidebar() {
  const [response, setResponse] = useState(null)

  const handleAdd = () => {
    alert('add')
  }

  const handleSuccess = response => {
    setResponse(response)
  }

  const handleError = message => {
    console.log(message)
  }

  useEffect(() => {
    apiGET(CHANNELS, handleSuccess, handleError)
  }, [])

  return (
    <aside className='sidebar'>
      <SidebarHeader icon='forum' title='Channels' onAdd={handleAdd} />
      <SidebarItems list={response?.data} errors={response?.errors} />
    </aside>
  )
}

export default Sidebar
