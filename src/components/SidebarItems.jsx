import React from 'react'
import EmptyContent from './EmptyContent'

function SidebarItems({ list = [], errors }) {
  const channels = list.map(channel => (
    <li className='sidebar-items' key={channel.id}>
      {channel.name}
    </li>
  ))

  return errors !== undefined ? <EmptyContent /> : <ul>{channels}</ul>
}

export default SidebarItems
