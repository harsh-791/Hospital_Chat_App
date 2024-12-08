import React from 'react'
import { StreamChat } from 'stream-chat'
import { Chat } from 'stream-chat-react'
import Cookies from 'universal-cookie'
import { ChannelContainer, ChannelListContainer, Auth } from './components'
// import ChannelContainer from './components/ChannelContainer'
// import ChannelListContainer from './components/ChannelListContainer'
import './App.css'

const apiKey = 'pc8azzm4fjy3';
const client = StreamChat.getInstance(apiKey);
function App() {
  return (
    <div className="app__wrapper">
      <Chat client={client} theme="team light">
        <ChannelListContainer />
        <ChannelContainer />
      </Chat>
    </div>
  )
}

export default App
