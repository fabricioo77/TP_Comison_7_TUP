export default function Header() {
  return (
    <header className="header">
      <nav className="nav">
        <a href="#Proyectos">Proyectos</a>
        <a href="#Estudios">Estudios</a>
        <a href="#Idiomas">Idiomas</a>
        <a href="#Experiencia">Experiencia</a>
        <a href="#Softskills">Soft Skills</a>
        <a href="#Certificados">Certificados</a>
      </nav>

      <div className="hero">
        <img src="/profile.jpg" alt="Foto de perfil" className="avatar" />
        <div>
          <h1>Ibañez Lucas Benjamin</h1>
          <p>Desarrollador Web JR</p>
          <a className="btn" href="mailto:benjaminibanez394@gmail.com">Contactarme</a>
        </div>
      </div>
    </header>
  );
}
