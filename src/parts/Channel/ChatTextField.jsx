import React, { useState } from 'react'
import Icon from '../../components/Icon'

function ChatTextField() {
  const [message, setMessage] = useState('')
  return (
    <div className='chatbox-container'>
      <textarea
        className='chatbox'
        value={message}
        onChange={e => setMessage(e.target.value)}
        placeholder={'Message'}
      ></textarea>
      <button>
        <Icon icon='send' />
      </button>
    </div>
  )
}

export default ChatTextField
