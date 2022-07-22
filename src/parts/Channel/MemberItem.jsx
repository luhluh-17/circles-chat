import React from 'react'
import { useNavigate } from 'react-router-dom'
import Icon from '../../components/Icon'
import ProfileIcon from '../../components/ProfileIcon'

function MemberItem({ user, title = 'Member' }) {
  const navigate = useNavigate()

  const handleClick = () => {
    navigate(`/messages/${user.id}`)
  }

  return (
    <li className='member-item' onClick={handleClick}>
      <div className='member-container'>
        <ProfileIcon name={user.name} />
        <div className='member-details'>
          <h4>{user.name}</h4>
          <h5>{title}</h5>
        </div>
      </div>
      <div className='member-message'>
        <Icon icon='email' />
      </div>
    </li>
  )
}

export default MemberItem
