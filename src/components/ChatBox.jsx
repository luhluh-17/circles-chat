import React, { useState } from 'react'

function ChatBox({ channelName: name }) {
  const [message, setMessage] = useState('')
  return (
    <div>
      <textarea
        className='chatbox'
        value={message}
        onChange={e => setMessage(e.target.value)}
        placeholder={`Message ${name}`}
      ></textarea>
      <button>Send</button>
    </div>
  )
}

export default ChatBox
