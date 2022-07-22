import axios from 'axios'
import React, { useState } from 'react'
import Icon from '../../components/Icon'
import { apiPOST, getHeaders } from '../../services/api'
import { BASE_URL, MESSAGES } from '../../services/constant'

function ChatTextField({ id, obj }) {
  const API = axios.create({
    baseURL: BASE_URL,
    headers: getHeaders(),
  })

  const [message, setMessage] = useState('')

  const handleSendMessage = () => {
    const data = {
      receiver_id: id,
      receiver_class: obj,
      body: message,
    }

    const onSuccess = response => {}

    const onError = error => {
      console.log(error)
    }

    apiPOST(API, MESSAGES, data, onSuccess, onError)
    setMessage('')
  }

  return (
    <div className='chat-textfield-container'>
      <textarea
        className='chat-textfield'
        value={message}
        onChange={e => setMessage(e.target.value)}
        placeholder={'Message'}
      ></textarea>
      <button className='send-btn' onClick={handleSendMessage}>
        <Icon icon='send' />
      </button>
    </div>
  )
}

export default ChatTextField
