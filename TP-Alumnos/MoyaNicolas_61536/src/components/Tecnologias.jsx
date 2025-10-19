import { FaHtml5, FaCss3Alt, FaJs } from 'react-icons/fa';
import { SiMysql } from 'react-icons/si';
import '../styles/Tecnologias.css';

function Tecnologias() {
  const tecnologias = [
    { id: 1, nombre: 'HTML', icono: <FaHtml5 /> },
    { id: 2, nombre: 'CSS', icono: <FaCss3Alt /> },
    { id: 3, nombre: 'JAVASCRIPT', icono: <FaJs /> },
    { id: 4, nombre: 'MYSQL', icono: <SiMysql /> },
  ];

  return (
    <div className="tecnologias-container">
      <h2 className="section-title">Tecnologías</h2>
      <div className="tecnologias-grid">
        {tecnologias.map((tech) => (
          <div key={tech.id} className="tech-card">
            <div className="tech-icon">{tech.icono}</div>
            <h3 className="tech-nombre">{tech.nombre}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Tecnologias;
