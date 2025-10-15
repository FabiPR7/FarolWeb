import React from 'react'
import "./style.css"
import logo from "../../media/img/Farol.png"
import { useNavigate } from 'react-router-dom'
const SignIn = () => {
  const navigate = useNavigate();
  return (
    <div className='sign-in-page'>
      <h1 className='textOpacity'>Tu Faro en el mundo del freelance</h1>
      <div className='sign-container'>
        <div className='sign-title'>
          <h1 className='title-text-sign'>Farol</h1>
          <img src={logo} alt="Logo Farol" className='logo' />
        </div>
        <div className='sign-form'>
          <input type="text" id='email' />
          <label for="email">Email</label>
          <input type="password" id='password' />
          <label for="password">Contraseña</label> 
          <input type="password" id='confirm-password' />
          <label for="confirm-password">Confirma contraseña</label> 
            <button className='sign-button'>Crear Cuenta</button>
        </div>
      </div>
      <h2 className='account-created'  onClick={() => navigate("/login-page")}>Ya tengo cuenta</h2>
    </div>
  )
}

export default SignIn
