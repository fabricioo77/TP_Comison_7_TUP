import React from 'react';
import './styles/Hero.css';

const Hero = () => {
  return (
    <section id="inicio" className="hero">
      <div className="hero-content">
        <div className="hero-text">
          <h1 className="hero-title">
            ¡Hola! Soy <span className="highlight">Desarrollador Full Stack</span>
          </h1>
          <p className="hero-subtitle">
            Estudiante de la Facultad Tecnológica Nacional
          </p>
          <p className="hero-description">
            Apasionado por crear soluciones web innovadoras y funcionales
          </p>
          <div className="hero-buttons">
            <a href="#proyectos" className="btn btn-primary">Ver proyectos</a>
            <a href="#contacto" className="btn btn-secondary">Contactar</a>
          </div>
        </div>
        <div className="hero-image">
          <div className="code-animation">
            <div className="code-line"></div>
            <div className="code-line"></div>
            <div className="code-line"></div>
            <div className="code-line"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
