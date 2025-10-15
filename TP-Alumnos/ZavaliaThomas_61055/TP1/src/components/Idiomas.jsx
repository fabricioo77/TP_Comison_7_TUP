import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { AiOutlineGlobal } from 'react-icons/ai';

const idiomas = [
  {
    title: 'Español',
    description: 'Nativo',
    // CORRECCIÓN: Las rutas a archivos en la carpeta `public` empiezan con "/"
    flag: '/españa.png', 
  },
  {
    title: 'Inglés',
    description: 'Avanzado (C1)',
    // CORRECCIÓN: Las rutas a archivos en la carpeta `public` empiezan con "/"
    flag: '/uk.png', 
  },
];

function Idiomas() {
  return (
    // CAMBIO: Aseguramos que el fondo sea el correcto
    <section id="idiomas" className="project-section">
      <Container>
        <Row className="justify-content-center">
          <Col md={8} className="text-center">
            <h1 className="project-heading">
              <AiOutlineGlobal className="me-2" />
              <strong className="text-purple">Idiomas</strong>
            </h1>
          </Col>
        </Row>
        <Row className="justify-content-center" style={{ paddingTop: '50px' }}>
          {idiomas.map((idioma, index) => (
            <Col md={4} key={index} className="project-card"> {/* Usamos la misma clase que en Proyectos */}
              {/* CAMBIO: Usamos el estilo 'project-card-view' para unificar el diseño */}
              <motion.div
                className="project-card-view text-center"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <img src={idioma.flag} alt={`${idioma.title} flag`} className="language-flag" />
                <h5 className="mt-3 card-title">{idioma.title}</h5>
                <p className="text-light">{idioma.description}</p>
              </motion.div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}

export default Idiomas;