import React, { useState } from 'react'
import Icon from '../../components/Icon'
import ModalViewMembers from './ModalViewMembers'

function ChannelHeader() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleDialog = () => setIsOpen(bool => !bool)
  const closeDialog = () => setIsOpen(false)

  return (
    <>
      <div className='channel-header'>
        <h4>#DiscussionThread</h4>
        <ul className='navbar-items'>
          <li>
            <Icon icon='call' />
          </li>
          <li onClick={toggleDialog}>
            <Icon icon='people' />
          </li>
          <li>
            <Icon icon='more_vert' />
          </li>
        </ul>
      </div>
      <ModalViewMembers isOpen={isOpen} onClose={closeDialog} />
    </>
  )
}

export default ChannelHeader
