import React from 'react'
import logo from '../../../media/img/Farol-removebg-preview.png'
import "./style.css"

const Header = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }
  return (
    <div className='header'>
      <img src={logo} alt="Logo Farol" />
      <div className='titles'>
      <h4 onClick={() => scrollToSection('inicio')}>Inicio</h4>
        <h4 onClick={() => scrollToSection('caracteristicas')}>Características</h4>
        <h4 onClick={() => scrollToSection('quienes-somos')}>¿Quiénes somos?</h4>
      </div>
      <div className='buttons'>
      <h3 className='signin buttonHeader'>Sign-In</h3>
      <h3 className='login buttonHeader'>Login</h3>
      </div>
    </div>
  )
}

export default Header
