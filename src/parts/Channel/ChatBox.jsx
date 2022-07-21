import React, { useState } from 'react'

function ChatBox() {
  const [message, setMessage] = useState('')
  return (
    <div className='chatbox-container'>
      <textarea
        className='chatbox'
        value={message}
        onChange={e => setMessage(e.target.value)}
        placeholder={'Message'}
      ></textarea>
      <button className='btn-round'>Send</button>
    </div>
  )
}

export default ChatBox
