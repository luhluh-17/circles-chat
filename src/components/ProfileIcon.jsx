import React from 'react'
import { getInitials } from '../utils/helper'

function ProfileIcon({ name }) {
  return <span className='profile-icon'>{getInitials(name)}</span>
}

export default ProfileIcon
