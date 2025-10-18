export default function Header() {
  return (
    <header className="header">
      <nav className="nav">
        <a href="#proyectos">Proyectos</a>
        <a href="#estudios">Estudios</a>
        <a href="#idiomas">Idiomas</a>
        <a href="#experiencia">Experiencia</a>
        <a href="#softskills">Soft Skills</a>
        <a href="#certificados">Certificados</a>
      </nav>

      <div className="hero">
        <img src="/profile.jpg" alt="Foto de perfil" className="avatar" />
        <div>
          <h1>Nombre Apellido</h1>
          <p>Desarrollador/a Web JR</p>
          <a className="btn" href="mailto:tucorreo@dominio.com">Contactarme</a>
        </div>
      </div>
    </header>
  );
}
