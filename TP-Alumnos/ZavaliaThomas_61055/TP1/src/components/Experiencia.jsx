import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import { AiOutlineLaptop } from 'react-icons/ai';

function Experiencia() {
  return (
    <section id="experiencia" className="mb-5">
      <Container>
        <Row className="justify-content-center">
          <Col md={8}>
            <h2 className="text-center text-white mb-4">
              <AiOutlineLaptop className="me-2" /> Experiencia Laboral
            </h2>
            <Card className="bg-dark text-white border-purple mb-3">
              <Card.Body>
                <Card.Title>Desarrollador Frontend Junior</Card.Title>
                <Card.Text>Empresa XYZ, 2022 - Presente</Card.Text>
              </Card.Body>
            </Card>
            <Card className="bg-dark text-white border-purple">
              <Card.Body>
                <Card.Title>Freelance</Card.Title>
                <Card.Text>Proyectos independientes, 2021 - 2022</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Experiencia;