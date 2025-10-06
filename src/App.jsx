import { useState } from 'react'
import './App.css'
import { Routes, Route, Link, Navigate } from 'react-router-dom'
import Login from './app/login/login'
import Landing from './landing/main'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Routes>
        <Route path="/" element={<Navigate to="/web" replace />} />
        <Route path="/web" element={<Landing />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  )
}

export default App