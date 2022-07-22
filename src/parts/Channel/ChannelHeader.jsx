import React, { useEffect, useState } from 'react'
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
  }
  useEffect(() => {
    apiGET(CHANNEL_MEMBERS(id), handleSuccess, handleError)
  }, [id])

  return (
    <div className='channel-header'>
      <h4>#DiscussionThread</h4>
      <div className='members-count' onClick={handleClick}>
        <h5>Members {members.length}</h5>
      </div>
    </div>
  )
}

export default ChannelHeader
