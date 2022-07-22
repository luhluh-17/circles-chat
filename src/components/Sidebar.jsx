import React from 'react'
import SidebarHeader from './SidebarHeader'
import SidebarItems from './SidebarItems'

function Sidebar({ icon, title, response, onAdd }) {
  return (
    <aside className='sidebar'>
      <SidebarHeader icon={icon} title={title} onAdd={onAdd} />
      <SidebarItems list={response?.data} errors={response?.errors} />
    </aside>
  )
}

export default Sidebar
