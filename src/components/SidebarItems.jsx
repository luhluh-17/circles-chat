import React from 'react'
import { NavLink } from 'react-router-dom'
import EmptyContent from './EmptyContent'

function SidebarItems({ list = [], errors }) {
  const style = ({ isActive }) =>
    isActive ? 'sidebar-link sidebar-active' : 'sidebar-link'
  const channels = list.map(channel => (
    <li className={style} key={channel.id}>
      <NavLink to={`channel/${channel.name}`} className={style}>
        {channel.name}
      </NavLink>
    </li>
  ))

  return errors !== undefined ? <EmptyContent /> : <ul>{channels}</ul>
}

export default SidebarItems
