import perfil from "../src/assets/IMG-20230223-WA0000.jpg";


export default function Header() {
  return (
    <header className="header">
      <div className="header-content">
        <img
          src={perfil}
          alt="Foto personal"
          className="perfil"
        />

       
        <div className="info">

          <nav className="nav">
            <a href="#estudios">Estudios</a>
            <a href="#proyectos">Proyectos</a>
            <a href="#softskills">Soft Skills</a>
            <a href="#idiomas">Idiomas</a>
          </nav>
        </div>
      </div>
    </header>
  );
}
