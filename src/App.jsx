import { useState } from 'react'



import { BrowserRouter, Route, Routes, } from 'react-router'
import LoginPage from './components/LoginPage'
import SignUpPage from './components/SignUpPage'
import Home from './pages/Home'

function App() {
  

  return (
    <>
      <BrowserRouter>
        <Routes >
          <Route path="/" element={<Home />} />
          <Route path="/signUp" element={<SignUpPage />} />
          <Route path="/login" element={<LoginPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App
