import React from 'react'
import Icon from './Icon'

function SidebarHeader({ icon, title, onAdd }) {
  return (
    <header className='sidebar-header'>
      <h4 className='sidebar-header-title'>
        <Icon icon={icon} />
        {title}
      </h4>
      <ul className='navbar-items'>
        <li>
          <Icon icon='more_vert' />
        </li>
        <li onClick={onAdd}>
          <Icon icon='add' />
        </li>
      </ul>
    </header>
  )
}

export default SidebarHeader
