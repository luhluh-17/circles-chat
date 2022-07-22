import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { groupBy } from 'lodash'
import { apiGET } from '../services/api'
import { READ_MESSAGE } from '../services/constant'
import ChatContainer from '../parts/Channel/ChatContainer'
import ChatTextField from '../parts/Channel/ChatTextField'
import ChannelHeader from '../parts/Channel/ChannelHeader'

function ChannelDetails() {
  const [chats, setChats] = useState([])
  const { channelId } = useParams()

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

  const handleError = message => {
    console.log(message)
  }

  useEffect(() => {
    const subscribeAPI = setInterval(() => {
      apiGET(READ_MESSAGE(channelId, 'Channel'), handleSuccess, handleError)
    }, 3000)
    return () => {
      clearInterval(subscribeAPI)
    }
  }, [channelId])

  return (
    <div className='channel-container'>
      <ChannelHeader id={channelId} />
      <ChatContainer chats={chats} />
      <ChatTextField id={channelId} obj='Channel' />
    </div>
  )
}

export default ChannelDetails
