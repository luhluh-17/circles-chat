import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { groupBy } from 'lodash'
import ChatContainer from '../parts/Channel/ChatContainer'
import ChatTextField from '../parts/Channel/ChatTextField'
import MessageHeader from '../parts/Messages/MessageHeader'
import { apiGET, getHeaders } from '../services/api'
import { BASE_URL, READ_MESSAGE } from '../services/constant'
import axios from 'axios'
import { getUsersFromLocal } from '../utils/helper'

function MessageDetails() {
  const API = axios.create({
    baseURL: BASE_URL,
    headers: getHeaders(),
  })
  const { id } = useParams()
  const [chats, setChats] = useState([])

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
      apiGET(API, READ_MESSAGE(id, 'User'), handleSuccess, handleError)
    }, 1000)
    return () => {
      clearInterval(subscribeAPI)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id])

  return (
    <div className='channel-container'>
      <MessageHeader id={id} />
      <ChatContainer chats={chats} />
      <ChatTextField id={id} obj='User' />
    </div>
  )
}

export default MessageDetails
