import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { AiOutlineProject } from 'react-icons/ai';

function Proyectos({ datosProyectos, datosBasicos }) {
  const [mostrarModal, setMostrarModal] = useState(false);
  const [proyectoSeleccionado, setProyectoSeleccionado] = useState(null);

  const manejarMostrarModal = (proyecto) => {
    setProyectoSeleccionado(proyecto);
    setMostrarModal(true);
  };

  const manejarCerrarModal = () => setMostrarModal(false);

  if (datosProyectos && datosBasicos) {
    const nombreSeccion = datosBasicos.nombre_seccion?.proyectos || 'Mis Proyectos';

    const elementosProyectos = datosProyectos.map((proyecto) => (
      <Col sm={12} md={6} lg={4} key={proyecto.titulo} className="mb-4">
        <div
          className="portfolio-item d-block"
          style={{ cursor: 'pointer' }}
          onClick={() => manejarMostrarModal(proyecto)}
        >
          <div className="foto">
            <img
              src={proyecto.imagenes?.[0]}
              alt={proyecto.titulo}
              height="230"
              className="img-fluid"
              style={{ marginBottom: 0, paddingBottom: 0 }}
            />
            <span className="project-date">{proyecto.fechaInicio}</span>
            <p className="project-title-settings mt-3">
              {proyecto.titulo}
            </p>
          </div>
        </div>
      </Col>
    ));

    return (
      <section id="proyectos" className="mb-5" style={{ backgroundColor: '#1b1a2e' }}>
        <Container>
          <h2 className="text-center text-white mb-4">
            <AiOutlineProject className="me-2" /> {nombreSeccion}
          </h2>
          <Row className="mx-auto">{elementosProyectos}</Row>

          {/* Modal para mostrar detalles del proyecto */}
          <Modal show={mostrarModal} onHide={manejarCerrarModal} centered>
            <Modal.Header
              closeButton
              style={{ backgroundColor: '#1b1a2e', color: 'white' }}
            >
              <Modal.Title>{proyectoSeleccionado?.titulo}</Modal.Title>
            </Modal.Header>
            <Modal.Body style={{ backgroundColor: '#1b1a2e', color: '#d0d0d0' }}>
              {proyectoSeleccionado?.descripcion}
              <p>
                <strong>Fecha:</strong> {proyectoSeleccionado?.fechaInicio}
              </p>
              {/* Puedes agregar más campos como imágenes adicionales */}
            </Modal.Body>
            <Modal.Footer style={{ backgroundColor: '#1b1a2e' }}>
              <Button variant="secondary" onClick={manejarCerrarModal}>
                Cerrar
              </Button>
            </Modal.Footer>
          </Modal>
        </Container>
      </section>
    );
  }

  return null;
}

export default Proyectos;
