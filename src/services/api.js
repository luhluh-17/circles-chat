import axios from 'axios'

export default axios.create({
  baseURL: '',
  headers: {
    crossorigin: true,
    'access-token': localStorage.getItem('access-token'),
    client: localStorage.getItem('client'),
    expiry: localStorage.getItem('expiry'),
    uid: localStorage.getItem('uid'),
  },
})
