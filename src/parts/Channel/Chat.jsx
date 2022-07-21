import React from 'react'
import ProfileIcon from '../../components/ProfileIcon'

function Chat({ chat }) {
  const loggedUser = localStorage.getItem('uid')
  const styleChat = loggedUser === chat.sender ? 'chat reverse' : 'chat'
  const styleHeader =
    loggedUser === chat.sender ? ' chat-header reverse' : 'chat-header'
  return (
    <li className={styleChat}>
      <div>
        <div className={styleHeader}>
          <ProfileIcon name={chat.sender} />
          <div>
            <h5>{chat.sender}</h5>
            <h6>{chat.time}</h6>
          </div>
        </div>
        <div className='chat-body'>
          <p>{chat.body}</p>
        </div>
      </div>
    </li>
  )
}

export default Chat
