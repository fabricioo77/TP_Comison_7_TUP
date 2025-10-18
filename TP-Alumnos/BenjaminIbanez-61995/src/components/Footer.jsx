export default function Footer() {
  return (
    <footer className="footer">
      <p>© {new Date().getFullYear()} Lucas Benjamin Ibañez</p>
      <nav>
        <a href="#Proyectos">Proyectos</a>
        <a href="#Estudios">Estudios</a>
        <a href="#Softskills">Soft Skills</a>
      </nav>
    </footer>
  );
}
