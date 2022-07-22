import React from 'react'
import { NavLink } from 'react-router-dom'
import EmptyContent from './EmptyContent'

function SidebarItems({ list = [], errors }) {
  const style = ({ isActive }) => (isActive ? 'link active' : 'link')

  const channels = list.map(item => (
    <li key={item.id}>
      <NavLink to={`${item.id}`} className={style}>
        <h5>{item.name}</h5>
      </NavLink>
    </li>
  ))

  return errors !== undefined ? (
    <EmptyContent />
  ) : (
    <ul className='sidebar-item-container'>{channels}</ul>
  )
}

export default SidebarItems
