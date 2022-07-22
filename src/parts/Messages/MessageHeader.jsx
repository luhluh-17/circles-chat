import React, { useEffect, useState } from 'react'
import Icon from '../../components/Icon'
import { getUsersFromLocal } from '../../utils/helper'

function MessageHeader({ id }) {
  const [selectedUser, setSelectedUser] = useState({})

  useEffect(() => {
    const findUser = getUsersFromLocal().find(user => user.id === parseInt(id))
    setSelectedUser(findUser)
  }, [id])

  return (
    <div className='channel-header'>
      <div>{selectedUser?.name}</div>
      <ul className='navbar-items'>
        <li>
          <Icon icon='group_add' />
        </li>
        <li>
          <Icon icon='call' />
        </li>
        <li>
          <Icon icon='more_vert' />
        </li>
      </ul>
    </div>
  )
}

export default MessageHeader
