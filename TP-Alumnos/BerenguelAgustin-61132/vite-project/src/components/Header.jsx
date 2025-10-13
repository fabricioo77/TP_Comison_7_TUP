import React from 'react';
import '../Style/Header.css';
import MiFoto from '../resources/yo.jpg'

const Header = () => {
  return (
     <header className="header">
        <div className='Imagen_y_Titulo'>
        <img src={MiFoto} alt="Yo"/>
         <h1>Berenguel Juan Agustin</h1>
         </div>
         <nav className='navbar'>
        <ul>
          <li><a href="Header.jsx">Inicio</a></li>
          <li><a href="Estudios">Estudios</a></li>
          <li><a href="Proyectos">Proyectos</a></li>
          <li><a href="Softskills">Softskills</a></li>
          <li><a href="Experiencia">Experiencia</a></li>
          <li><a href="Certificado">Certificados</a></li>
          <li><a href="Idiomas">Idiomas</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;