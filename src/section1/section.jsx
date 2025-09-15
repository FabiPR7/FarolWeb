import React from 'react'
import "./style.css"
import Header from './header/header'
import Body from './body/body'

const Section = () => {
  return (
    <section className='section'>
      <Header/>
      <Body/>
    </section>
  )
}

export default Section
