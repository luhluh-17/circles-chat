import axios from 'axios'

export default axios.create({
  baseURL: 'http://206.189.91.54/api/v1',
})

const REGISTER = '/auth'
const LOGIN = '/auth/sign_in'
const USERS = '/users'
const MESSAGES = '/messages'
const CHANNELS = '/channels'
const ADD_MEMBER = '/channel/add_member'

const MESSAGES_PARAMS = (receiver_id, receiver_class) => {
  const PARAMS = `receiver_id=${receiver_id}&receiver_class=${receiver_class}`
  return `${MESSAGES}?${PARAMS}`
}

const CHANNEL_DETAILS = channel_id => {
  return `${CHANNELS}/${channel_id}`
}

// export const registerAccount = (email, password, password_confirmation) => {
//   const api = `${BASE_URL}/auth`

//   const data = JSON.stringify({
//     email,
//     password,
//     password_confirmation,
//   })

//   const config = {
//     headers: {
//       'Content-Type': 'application/json',
//     },
//   }

//   axios
//     .post(api, data, config)
//     .then(result => console.log(result))
//     .catch(error => console.log(error))
// }
