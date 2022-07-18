import axios from 'axios'
import { BASE_URL } from './constant'

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

export const apiGET = async (url, onSuccess, onError) => {
  await api
    .get(url)
    .then(response => {
      onSuccess(response.data)
    })
    .catch(error => onError(error.message))
}

export const apiPOST = (url, data, onSuccess, onError) => {
  api
    .post(url, data)
    .then(result => onSuccess(result))
    .catch(error => onError(error))
}
