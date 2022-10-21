import axios from 'axios'
import { BASE_URL } from './constant'

const auth = axios.create({
  baseURL: BASE_URL,
  headers: {
    crossorigin: true,
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type, Authorization',
  },
})

export const authUser = async (url, data, onSuccess, onError) => {
  await auth
    .post(url, data)
    .then(response => {
      const {
        data: { id },
      } = response.data

      const {
        'access-token': accessToken,
        client,
        expiry,
        uid,
      } = response.headers

      localStorage.setItem('access-token', accessToken)
      localStorage.setItem('client', client)
      localStorage.setItem('expiry', expiry)
      localStorage.setItem('uid', uid)
      localStorage.setItem('id', id)

      onSuccess(response)
    })
    .catch(error => {
      const { errors } = error.response.data
      onError(errors)
    })
}
