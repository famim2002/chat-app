import React from 'react'
import Nav from '../components/Nav'
import ChatList from '../components/ChatList'
import ChatPage from '../components/ChatPage'

const Home = () => {
  return (
      <>
          <div className='flex'>
              <Nav />
              <ChatList />
              <ChatPage />
          </div>
      </>
  )
}

export default Home
