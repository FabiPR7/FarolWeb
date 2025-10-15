import React from 'react'
import "./style.css"
import logo from "../../media/img/Farol-removebg-preview.png"
import { useNavigate } from 'react-router-dom'
const Login = () => {
  const navigate = useNavigate();

  return (
    <div className='login-page'>
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
          <div className='login-buttons'>
            <button className='buttonOptions'>Iniciar sesión</button>
            <button className='buttonOptions' onClick={() => navigate("/sign-page")}>Registrarse</button>
          </div>
        </div>
      </div>
      <h2 className='without-password'>¿Te has olvidado la contraseña?</h2>
    </div>
  )
}

export default Login
