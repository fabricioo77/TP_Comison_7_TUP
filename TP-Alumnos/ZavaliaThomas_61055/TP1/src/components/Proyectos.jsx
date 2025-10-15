import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import ProjectCard from './ProyectoCard'; 
import { AiOutlineProject } from 'react-icons/ai';


const datosProyectos = [
  {
    titulo: 'Sistema de Reserva de Películas',
    imagenes: ['/cine.png'], 
    ghLink: 'https://github.com/ThomasZavalia/MovieReservationSystem',
    descripcion: 'Sistema que permite gestionar la reserva de entradas de cine.'
  },
 {
titulo: 'E-Commerce API ',
imagenes: ['../../public/ecommerce.png'],
ghLink: 'https://github.com/ThomasZavalia/E-commerce',
descripcion: 'API RESTful para un sistema de comercio electronico usando .NET y PostgreSQL.'


 }
];

function Proyectos() {
  return (
    <section id="proyectos" className="project-section">
      <Container>
        <h1 className="project-heading">
          <AiOutlineProject className="me-2" />
          Mis <strong className="text-purple">Proyectos</strong> Recientes
        </h1>
     
        <p style={{ color: 'white', textAlign: 'center' }}>
          Estos son algunos de los proyectos en los que he trabajado.
        </p>
        <Row style={{ justifyContent: 'center', paddingBottom: '10px' }}>
          {datosProyectos.map((proyecto, index) => (
            <Col md={4} className="project-card" key={index}>
              <ProjectCard
                imgPath={proyecto.imagenes[0]}
                title={proyecto.titulo}
                description={proyecto.descripcion}
                ghLink={proyecto.ghLink} 
              />
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}

export default Proyectos;