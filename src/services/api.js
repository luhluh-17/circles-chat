import axios from 'axios'

export default axios.create({
  baseURL: 'http://206.189.91.54/api/v1',
  headers: { 'Content-Type': 'application/json' },
})

export const REGISTER = '/auth'
export const LOGIN = '/auth/sign_in'
export const USERS = '/users'
export const MESSAGES = '/messages'
export const CHANNELS = '/channels'
export const ADD_MEMBER = '/channel/add_member'
