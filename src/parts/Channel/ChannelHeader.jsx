import React, { useEffect, useState } from 'react'
import Icon from '../../components/Icon'
import { apiGET } from '../../services/api'
import { CHANNEL_MEMBERS, USERS } from '../../services/constant'

function ChannelHeader({ id, users }) {
  const [owner, setOwner] = useState({})
  const [members, setMembers] = useState([])

  const handleSuccess = response => {
    const { channel_members, owner_id } = response.data
    const memberIds = channel_members.map(member => member.user_id)

    apiGET(
      USERS,
      response => {
        const userList = response.data

        const owner = userList.find(user => user.id === owner_id)
        setOwner(owner)

        const memberList = userList.filter(user => memberIds.includes(user.id))
        setMembers(memberList)
      },

      message => {
        console.log(message)
      }
    )
  }

  const handleError = message => {
    console.log(message)
  }

  const handleClick = () => {
    console.log(owner)
    console.log(members)
  }
  useEffect(() => {
    apiGET(CHANNEL_MEMBERS(id), handleSuccess, handleError)
  }, [id])

  return (
    <div className='channel-header'>
      <h4>#DiscussionThread</h4>
      <ul className='navbar-items'>
        <li onClick={handleClick}>
          <Icon icon='call' />
        </li>
        <li onClick={handleClick}>
          <Icon icon='people' />
        </li>
        <li>
          <Icon icon='more_vert' />
        </li>
      </ul>
    </div>
  )
}

export default ChannelHeader
