import React from "react";

const Header = () => {
  return (
    <header className="flex justify-center align-items-center z-10">
      <nav className="flex justify-between align-items-center w-5xl border border-white p-4 rounded-full backdrop-blur-lg bg-white/5 ">
        <div className="">
          <img src="logo.png" alt="Logo" />
        </div>
        <div className="nav-links flex gap-4">
          <a href="#home" className="nav-link">
            Inicio
          </a>
          <a href="#experiencia" className="nav-link">
            Experiencia
          </a>
          <a href="#estudios" className="nav-link">
            Estudios
          </a>
          <a href="#proyectos" className="nav-link">
            Proyectos
          </a>
          <a href="#certificados" className="nav-link">
            Certificados
          </a>
          <a href="#idiomas" className="nav-link">
            Idiomas
          </a>
          <a href="#softskills" className="nav-link">
            Soft Skills
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Header;
