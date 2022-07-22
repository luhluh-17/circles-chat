import React from 'react'
import { NavLink } from 'react-router-dom'
import EmptyContent from './EmptyContent'

function SidebarItems({ list = [], errors }) {
  const style = ({ isActive }) => (isActive ? 'link active' : 'link')

  const channels = list.map(channel => (
    <li key={channel.id}>
      <NavLink to={`${channel.id}`} className={style}>
        <h5>{channel.name}</h5>
      </NavLink>
    </li>
  ))

  return errors !== undefined ? <EmptyContent /> : <ul>{channels}</ul>
}

export default SidebarItems
