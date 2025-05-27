import React from 'react'
import Nav from '../components/Nav'
import ChatList from '../components/ChatList'
import ChatPage from '../components/ChatPage'
import LoginPage from '../components/LoginPage'

const Home = () => {
  return (
      <>
          <div className='flex'>
              <LoginPage/>
              <Nav />
              <ChatList />
              <ChatPage />
          </div>
      </>
  )
}

export default Home
