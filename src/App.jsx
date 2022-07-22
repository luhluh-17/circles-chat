import { Route, Routes } from 'react-router-dom'
import ChannelDetails from './pages/ChannelDetails'
import MainChannel from './pages/MainChannel'
import Channel from './pages/Channel'
import Landing from './pages/Landing'
import Login from './pages/Login'
import Register from './pages/Register'
import Messages from './pages/Messages'
import MainMessages from './pages/MainMessages'

function App() {
  return (
    <Routes path='/'>
      <Route index element={<Landing />} />
      <Route path='login' element={<Login />} />
      <Route path='register' element={<Register />} />

      <Route path='/channels' element={<Channel />}>
        <Route index element={<MainChannel />} />
        <Route path=':channelId' element={<ChannelDetails />} />
      </Route>

      <Route path='/messages' element={<Messages />}>
        <Route index element={<MainMessages />} />
        <Route path=':uid' element={<ChannelDetails />} />
      </Route>
    </Routes>
  )
}

export default App
