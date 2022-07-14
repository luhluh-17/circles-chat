import React from 'react'
import { getUsers } from '../services/api'

function Home() {
  const handleClick = () => {
    const onSuccess = result => console.log(result)
    const onError = error => console.log(error)
    getUsers(onSuccess, onError)
  }
  return <button onClick={handleClick}>Get Users</button>
}

export default Home
