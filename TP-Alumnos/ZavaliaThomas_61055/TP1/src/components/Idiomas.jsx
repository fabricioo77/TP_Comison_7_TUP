import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { motion } from 'framer-motion'; // Ya importado
import { AiOutlineGlobal } from 'react-icons/ai';

const idiomas = [ // Array para los idiomas
  { title: 'Español', description: 'Nativo' },
  { title: 'Inglés', description: 'Avanzado (C1)' },
];

function Idiomas() {
  return (
    <section id="idiomas" className="mb-5">
      <Container>
        <Row className="justify-content-center">
          <Col md={8}>
            <h2 className="text-center text-white mb-4">
              <AiOutlineGlobal className="me-2" /> Idiomas
            </h2>
            <Row>
              {idiomas.map((idioma, index) => (
                <Col md={6} key={index} className="mb-3">
                  <motion.div
                    className="text-center p-3 bg-dark border-purple rounded"
                    initial={{ opacity: 0, y: 20 }} 
                    animate={{ opacity: 1, y: 0 }} 
                    transition={{ duration: 0.4, delay: index * 0.2 }} 
                    whileHover={{ scale: 1.05, boxShadow: "0px 10px 20px rgba(190, 80, 244, 0.2)" }} // Efecto hover
                  >
                    <h5>{idioma.title}</h5>
                    <p className="text-light">{idioma.description}</p>
                  </motion.div>
                </Col>
              ))}
            </Row>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Idiomas;