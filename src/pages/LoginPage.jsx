import React from 'react';
import LogoGesliga from '../assets/imgs/1.png'

const LoginPage = () => {
  return (
    <div class="login-container">
      <img src={LogoGesliga} alt="logo-gesliga" />
      <form class="login-form">
        <h1>Iniciar sesión</h1>
        <p>Ingresa tu información para continuar con Gesliga</p>
        <input type="email" placeholder="Correo electrónico" required/>
        <input type="password" placeholder="Contraseña" required/>
        <button type="submit">Iniciar Sesión</button>
        <p>¿Olvidaste tu contraseña? <a href="#">Recuperar</a></p>
      </form>
    </div>
  );
};

export default LoginPage;