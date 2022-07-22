import React, { useState } from 'react'
import Icon from '../../components/Icon'

function ChatTextField() {
  const [message, setMessage] = useState('')
  return (
    <div className='chat-textfield-container'>
      <textarea
        className='chat-textfield'
        value={message}
        onChange={e => setMessage(e.target.value)}
        placeholder={'Message'}
      ></textarea>
      <button className='send-btn'>
        <Icon icon='send' />
      </button>
    </div>
  )
}

export default ChatTextField
