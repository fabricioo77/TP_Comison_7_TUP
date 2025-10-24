import { useState, useEffect } from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

import { getAll } from '../../Utils/utils.js';
import TablaComponent from '../../Components/Tabla.jsx';

function Artistas() {
  
  const [artistas, setArtistas] = useState([]);

  useEffect(() => {
    const artistasObtenidos = getAll('artistas');
    setArtistas(artistasObtenidos);
  }, []); 

  const handleAccion = (item) => {
    console.log("Acción en artista:", item.nombreArt);
  };

  const columnas = [
    { header: 'Nombre Artístico', field: 'nombreArt' },
    { header: 'Nombre', field: 'nombre' },
    { header: 'Apellido', field: 'apellido' },
    { header: 'DNI', field: 'dni' },
  ];

  return (
    <Container fluid className="mt-4">
      <Row>
        <Col>
          <h1 style={{ color: '#2c3e50', marginBottom: '20px' }}>
            Gestión de Artistas 🎹
          </h1>
        </Col>
      </Row>
      
      <Button variant="primary" className="mb-4" onClick={() => handleAccion(null)}>
        Añadir Nuevo Artista
      </Button>

      <Card>
        <Card.Header 
          style={{ 
            backgroundColor: '#343a40', 
            color: 'white', 
            fontWeight: 'bold', 
            fontSize: '18px' 
          }}
        >
          Listado de Artistas
        </Card.Header>
        <Card.Body style={{ padding: '0px' }}>
          <TablaComponent 
            datos={artistas}
            columnas={columnas}
            onVerDetalle={handleAccion}
            onEliminar={handleAccion}
          />
        </Card.Body>
      </Card>

    </Container>
  );
}

export default Artistas;