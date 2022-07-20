import React from 'react'
import { getInitials } from '../utils/helper'

function AccountCircle({ name }) {
  return <span className='dot'>{getInitials(name)}</span>
}

export default AccountCircle
