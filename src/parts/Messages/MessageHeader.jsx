import React from 'react'
import Icon from '../../components/Icon'

function MessageHeader() {
  return (
    <div className='channel-header'>
      <div></div>
      <ul className='navbar-items'>
        <li>
          <Icon icon='call' />
        </li>
        <li>
          <Icon icon='more_vert' />
        </li>
      </ul>
    </div>
  )
}

export default MessageHeader
