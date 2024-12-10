import React from 'react';
import LogoGesliga from '../assets/imgs/1.png'
import { useNavigate } from 'react-router-dom'

const LoginPage = () => {
  const navigate = useNavigate()
  
  const handleSubmit = () => {
    navigate('/admin')
  }

  return (
    <div class="login-container">
      <img src={LogoGesliga} alt="logo-gesliga" />
      <form onSubmit={handleSubmit} class="login-form">
        <h1>Iniciar sesión</h1>
        <p>Ingresa tu información para continuar con Gesliga</p>
        <input type="email" placeholder="Correo electrónico" value={"axel@gmail.com"} required/>
        <input type="password" placeholder="Contraseña" value={"melash18"} required/>
        <button type="submit">Entrar</button>
        <p>¿Olvidaste tu contraseña? <a href="#">Recuperar</a></p>
      </form>
    </div>
  );
};

export default LoginPage;