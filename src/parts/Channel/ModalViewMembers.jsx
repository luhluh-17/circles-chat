import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Modal from '../../components/Modal'
import MemberItem from './MemberItem'
import { apiGET, getHeaders } from '../../services/api'
import { BASE_URL, CHANNEL_MEMBERS } from '../../services/constant'
import { getUsersFromLocal } from '../../utils/helper'

function ModalViewMembers({ isOpen, onClose }) {
  const [owner, setOwner] = useState({ uid: '0' })
  const [members, setMembers] = useState([])
  const { id } = useParams()

  const API = axios.create({
    baseURL: BASE_URL,
    headers: getHeaders(),
  })

  const handleSuccess = response => {
    const { channel_members, owner_id } = response.data
    const memberIds = channel_members.map(member => member.user_id)

    const userList = getUsersFromLocal()

    const selectedOwner = userList.find(user => user.id === owner_id)
    setOwner(selectedOwner)

    const filteredMembers = userList.filter(
      user => memberIds.includes(user.id) && user.id !== selectedOwner.id
    )

    setMembers(filteredMembers)
  }

  const handleError = message => {
    console.log(message)
  }

  useEffect(() => {
    apiGET(API, CHANNEL_MEMBERS(id), handleSuccess, handleError)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id])

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <h2>{members.length + 1} Members</h2>
      <ul className='memberlist-container'>
        <MemberItem user={owner} title='Owner' />
        {members.map(member => {
          return <MemberItem user={member} key={member.id} />
        })}
      </ul>
    </Modal>
  )
}

export default ModalViewMembers
