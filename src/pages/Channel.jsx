import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { apiGET } from '../services/api'
import { READ_MESSAGE } from '../services/constant'

function Channel() {
  const [chats, setChats] = useState([])
  const { channelId } = useParams()

  console.log(channelId)
  const handleSuccess = reponse => {
    setChats(reponse.data)
    console.log(reponse.data)
  }

  const handleError = message => {
    console.log(message)
  }

  useEffect(() => {
    apiGET(READ_MESSAGE(channelId, 'Channel'), handleSuccess, handleError)
  }, [channelId])

  const chatList = chats.map(chat => {
    const date = new Date(chat.created_at).toLocaleDateString()
    const time = new Date(chat.created_at).toLocaleTimeString()

    const selectedUID = localStorage.getItem('uid')
    const style =
      selectedUID === chat.sender.uid ? 'chat-message sender' : 'chat-message'
    return (
      <li className={style} key={chat.id}>
        <p className='chat'>{chat.sender.uid}</p>
        <p className='chat'>{chat.body}</p>
        <p className='chat'>{time}</p>
        <p className='chat'>{date}</p>
      </li>
    )
  })
  return (
    <section className='chat-container'>
      <ul>{chatList}</ul>
    </section>
  )
}

export default Channel
