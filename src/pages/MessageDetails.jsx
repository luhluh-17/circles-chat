import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { groupBy } from 'lodash'
import ChatContainer from '../parts/Channel/ChatContainer'
import ChatTextField from '../parts/Channel/ChatTextField'
import MessageHeader from '../parts/Messages/MessageHeader'
import { apiGET } from '../services/api'
import { READ_MESSAGE } from '../services/constant'

function MessageDetails() {
  const [chats, setChats] = useState([])
  const { id } = useParams()

  const handleSuccess = response => {
    const chatList = response.data.map(chat => {
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
    setChats(state => {
      if (JSON.stringify(state) === JSON.stringify(chatListByDate)) {
        return state
      } else {
        return chatListByDate
      }
    })
  }

  const handleError = error => {
    console.log(error)
  }

  useEffect(() => {
    const subscribeAPI = setInterval(() => {
      apiGET(READ_MESSAGE(id, 'User'), handleSuccess, handleError)
    }, 1000)
    return () => {
      clearInterval(subscribeAPI)
    }
  }, [id])

  return (
    <div className='channel-container'>
      <MessageHeader />
      <ChatContainer chats={chats} />
      <ChatTextField id={id} obj='User' />
    </div>
  )
}

export default MessageDetails
