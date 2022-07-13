import axios from 'axios'

export default axios.create({
  baseURL: 'http://206.189.91.54/api/v1',
  headers: {
    'Content-Type': 'application/json',
    'access-token': localStorage.getItem('access-token'),
    client: localStorage.getItem('client'),
    expiry: localStorage.getItem('expiry'),
    uid: localStorage.getItem('uid'),
  },
})

export const USERS = '/users'
export const MESSAGES = '/messages'
export const CHANNELS = '/channels'
export const ADD_MEMBER = '/channel/add_member'
