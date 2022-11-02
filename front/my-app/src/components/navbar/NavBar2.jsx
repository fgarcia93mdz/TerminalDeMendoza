import React from 'react';
import './NavBar2.styles.css'

const NavBar2 = () => {
    return (
<nav>
    <img className="icon" src={require("../../assets/img/icono-colectivo.png")} alt="icono colectivo" />
      <ul>
        <li><a href="">Ver horarios</a></li>
        <li><a href="">Cómo llegar</a></li>
        <li><a href="">Teléfonos</a></li>
        <li><a href="">Contacto</a></li>
        <li><a href="">Plataforma ahora</a></li>
      </ul>  
</nav>
    );
}

export default NavBar2;