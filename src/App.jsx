import { useState } from 'react'
import './App.css'
import { Routes, Route, Link, Navigate } from 'react-router-dom'
import Login from './app/login/login'
import Landing from './landing/main'
import SignIn from './app/sign-in/sign-in'
import { useNavigate } from "react-router-dom";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Routes>
        <Route path="/" element={<Navigate to="/web" replace />} />
        <Route path="/web" element={<Landing />} />
        <Route path="/login-page" element={<Login />} />
        <Route path= "/sign-page" element={<SignIn />}/>
       </Routes>
    </>
  )
}

export default App