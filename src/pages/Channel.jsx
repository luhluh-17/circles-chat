import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { groupBy } from 'lodash'
import { apiGET } from '../services/api'
import { READ_MESSAGE } from '../services/constant'
import ChatContainer from '../parts/Channel/ChatContainer'
import ChatBox from '../parts/Channel/ChatBox'
import MembersButton from '../parts/Channel/MembersButton'

function Channel() {
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
    setChats(chatListByDate)
  }

  const handleError = message => {
    console.log(message)
  }

  useEffect(() => {
    apiGET(READ_MESSAGE(channelId, 'Channel'), handleSuccess, handleError)
  }, [channelId])

  return (
    <div className='channel-container'>
      <MembersButton id={channelId} />
      <ChatContainer chats={chats} />
      <ChatBox />
    </div>
  )
}

export default Channel
