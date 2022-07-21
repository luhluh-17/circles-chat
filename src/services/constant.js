export const BASE_URL = 'http://206.189.91.54/api/v1'
export const REGISTER = '/auth'
export const LOGIN = '/auth/sign_in'
export const USERS = '/users'
export const MESSAGES = '/messages'
export const CHANNELS = '/channels'
export const ADD_MEMBER = '/channel/add_member'

export const READ_MESSAGE = (id, type) =>
  `${MESSAGES}/?receiver_id=${id}&receiver_class=${type}`

export const CHANNEL_MEMBERS = id => `${CHANNELS}/${id}`
