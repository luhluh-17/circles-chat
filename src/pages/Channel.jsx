import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { groupBy } from 'lodash'
import { apiGET } from '../services/api'
import { READ_MESSAGE } from '../services/constant'
import AccountCircle from '../components/AccountCircle'

function Channel() {
  const [chats, setChats] = useState([])
  const { channelId } = useParams()

  const handleSuccess = reponse => {
    const chatList = reponse.data.map(chat => {
      const date = new Date(chat.created_at)

      return {
        id: chat.id,
        body: chat.body,
        date: date.toLocaleDateString(),
        time: date.toLocaleTimeString(),
        sender: chat.sender.uid,
      }
    })

    const chatListByDate = groupBy(chatList, chat => chat.date)
    setChats(chatListByDate)
  }

  const handleError = message => {
    console.log(message)
  }

  useEffect(() => {
    apiGET(READ_MESSAGE(channelId, 'Channel'), handleSuccess, handleError)
  }, [channelId])

  const chatDate = Object.entries(chats).map(([key, value]) => {
    const chatList = value.map(chat => {
      const loggedUser = localStorage.getItem('uid')
      const styleChat = loggedUser === chat.sender ? 'chat reverse' : 'chat'
      const styleHeader =
        loggedUser === chat.sender ? ' chat-header reverse' : 'chat-header'
      return (
        <li className={styleChat} key={chat.id}>
          <div>
            <div className={styleHeader}>
              <AccountCircle name={chat.sender} />
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
  return <section className='chatlist-container'>{chatDate}</section>
}

export default Channel
