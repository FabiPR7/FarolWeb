import React from 'react'
import "./style.css"
import logo from "../../media/img/Farol-removebg-preview.png"
const SignIn = () => {
  return (
    <div className='sign-in-page'>
      <h1 className='textOpacity'>Tu Faro en el mundo del freelance</h1>
      <div className='login-container'>
        <div className='login-title'>
          <h1 className='title-text'>Farol</h1>
          <img src={logo} alt="Logo Farol" className='logo' />
        </div>
        <div className='login-form'>
          <input type="text" id='email' />
          <label for="email">Email</label>
          <input type="password" id='password' />
          <label for="password">Contraseña</label> 
          <input type="password" id='confirm-password' />
          <label for="confirm-password">Confirma contraseña</label> 
          <div className='login-buttons'>
            <button className='buttonOptions'>Iniciar sesión</button>
            <button className='buttonOptions'>Registrarse</button>
          </div>
        </div>
      </div>
      <h2 className='without-password'>¿Te has olvidado la contraseña?</h2>
    </div>
  )
}

export default SignIn
