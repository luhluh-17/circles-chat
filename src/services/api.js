import axios from 'axios'
import { BASE_URL, MESSAGES, USERS } from './constant'

const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    crossorigin: true,
    'access-token': localStorage.getItem('access-token'),
    client: localStorage.getItem('client'),
    expiry: localStorage.getItem('expiry'),
    uid: localStorage.getItem('uid'),
  },
})

export const getUsers = (onSuccess, onError) => {
  api
    .get(USERS)
    .then(response => {
      const { data } = response.data
      onSuccess(data)
    })
    .catch(error => onError(error.message))
}

export const sendMessage = (data, onSuccess, onError) => {
  api
    .post(MESSAGES, data)
    .then(result => onSuccess(result))
    .catch(error => onError(error))
}
