import axios from 'axios'
import { BASE_URL } from './constant'

const auth = axios.create({
  baseURL: BASE_URL,
  headers: { 'Content-Type': 'application/json' },
})

export const authUser = (url, data, onSuccess, onError) => {
  auth
    .post(url, data)
    .then(result => {
      const {
        data: { id },
      } = result.data

      const {
        'access-token': accessToken,
        client,
        expiry,
        uid,
      } = result.headers

      localStorage.setItem('access-token', accessToken)
      localStorage.setItem('client', client)
      localStorage.setItem('expiry', expiry)
      localStorage.setItem('uid', uid)
      localStorage.setItem('id', id)

      onSuccess()
    })
    .catch(error => {
      const { errors } = error.response.data
      onError(errors)
    })
}
