import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Section from './section1/section' 
import Section2 from './section2/section2'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Section/>
    <Section2/>
     </>
  )
}

export default App
