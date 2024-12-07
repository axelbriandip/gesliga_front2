import React from 'react';
import LogoGesliga from '../assets/imgs/1.png'
import '../styles/nav.css'

const Nav = () => {
  return (
    <nav className='nav-container'>
      <div className="logo">
        <img src={LogoGesliga} alt="logo-gesliga" />
      </div>
      <div className="buttons">
        <button type="button" class="btn btn-primary">Volver</button>
        <button type="button" class="btn btn-primary">Cerrar sesión</button>
      </div>
    </nav>
  );
};

export default Nav;