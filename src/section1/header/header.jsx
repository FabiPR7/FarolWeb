import React from 'react'
import logo from '../../media/img/Farol-removebg-preview.png'
import "./style.css"

const Header = () => {
  return (
    <div className='header'>
      <img src={logo} alt="Logo Farol" />
      <div className='titles'>
        <h4>Inicio</h4>
        <h4>Características</h4>
        <h4>¿Quiénes somos?</h4>
      </div>
      <div className='buttons'>
      <h3 className='signin buttonHeader'>Sign-In</h3>
      <h3 className='login buttonHeader'>Login</h3>
      </div>
    </div>
  )
}

export default Header
