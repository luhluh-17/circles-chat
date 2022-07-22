import React, { useEffect, useRef } from 'react'
import Chat from './Chat'

function ChatContainer({ chats }) {
  const bottomRef = useRef(null)

  const chatList = Object.entries(chats).map(([key, value]) => {
    const chatList = value.map(chat => {
      return <Chat chat={chat} key={chat.id} />
    })

    return (
      <div key={key}>
        <header className='chat-divider-header'>
          <div className='chat-line'></div>
          <h5>{key}</h5>
          <div className='chat-line'></div>
        </header>
        <ul className='chat-container'>{chatList}</ul>
      </div>
    )
  })

  useEffect(() => {
    // bottomRef.current?.scrollIntoView({ behavior: 'auto' })
  }, [chatList])

  return (
    <div className='chatlist-container'>
      {chatList}
      <div ref={bottomRef} />
    </div>
  )
}

export default ChatContainer
