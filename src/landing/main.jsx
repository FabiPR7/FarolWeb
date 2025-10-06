
import { useState } from 'react'
import Section from './section1/section' 
import Section2 from './section2/section2'
import Section3 from './section3/section3'
import Footer from './footer/footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Section/>
    <Section2/>
    <Section3/>
    <Footer/>
     </>
  )
}

export default App
