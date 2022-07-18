import React, { useEffect, useState } from 'react'
import { apiGET } from '../services/api'
import { CHANNELS } from '../services/constant'
import SidebarHeader from './SidebarHeader'
import SidebarItems from './SidebarItems'

function Sidebar() {
  const [reponse, setResponse] = useState(null)

  const handleSuccess = reponse => {
    setResponse(reponse)
  }

  const handleError = message => {
    console.log(message)
  }

  useEffect(() => {
    apiGET(CHANNELS, handleSuccess, handleError)
  }, [])

  return (
    <aside className='sidebar'>
      <SidebarHeader />
      <SidebarItems list={reponse?.data} errors={reponse?.errors} />
    </aside>
  )
}

export default Sidebar
