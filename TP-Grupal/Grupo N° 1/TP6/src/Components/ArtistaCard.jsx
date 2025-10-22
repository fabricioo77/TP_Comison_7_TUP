import Card from 'react-bootstrap/Card';

function ArtistaComponent() {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>AQUI VAN LOS ARTISTAS</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">...</Card.Subtitle>
        <Card.Text>
          ...
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default ArtistaComponent;