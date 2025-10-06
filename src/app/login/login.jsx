import React from 'react'
import "./style.css"
const Login = () => {
  return (
    <div className='login-page'>
      <h1>Login</h1>
      <form className='login-form'>
        <input type='email' placeholder='Email' />
        <input type='password' placeholder='Password' />
        <button type='submit'>Entrar</button>
      </form>
    </div>
  )
}

export default Login
