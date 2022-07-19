import { Route, Routes } from 'react-router-dom'
import Channel from './pages/Channel'
import Home from './pages/Home'
import Landing from './pages/Landing'
import Login from './pages/Login'
import Messages from './pages/Messages'
import Register from './pages/Register'

function App() {
  return (
    <Routes path='/'>
      <Route index element={<Landing />} />
      <Route path='login' element={<Login />} />
      <Route path='register' element={<Register />} />

      <Route path='/home' element={<Home />}>
        <Route index element={<Channel />} />
        <Route path='channel/:channelName' element={<Channel />} />
        <Route path='messages' element={<Messages />} />
        <Route path='messages/:email' element={<Messages />} />
      </Route>
    </Routes>
  )
}

export default App
