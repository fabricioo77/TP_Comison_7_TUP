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
          <h1>Fabricio Toranzo</h1>
          <p>Desarrollador Full Stack | UTN - FRT</p>

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
