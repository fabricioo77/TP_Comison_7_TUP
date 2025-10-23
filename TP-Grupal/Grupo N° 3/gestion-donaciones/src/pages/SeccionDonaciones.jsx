import { useState, useEffect } from "react";
import { Card, Row, Col, Badge } from "react-bootstrap";

export default function SeccionDonaciones() {
  const [donaciones, setDonaciones] = useState([]);

  useEffect(() => {
    // Datos simulados
    const data = [
      {
        id: 1,
        nombre: "Campaña Invierno",
        monto: 25000,
        fecha: "2025-10-10",
        estado: "Completada",
      },
      {
        id: 2,
        nombre: "Donación Escolar",
        monto: 12000,
        fecha: "2025-10-15",
        estado: "Pendiente",
      },
      {
        id: 3,
        nombre: "Ayuda Social",
        monto: 8000,
        fecha: "2025-10-20",
        estado: "Completada",
      },

      {
        id: 4,
        nombre: "Recolección Médica",
        monto: 15000,
        fecha: "2025-10-22",
        estado: "Pendiente",
      },

      {
        id: 5,
        nombre: "Fondo Ambiental",
        monto: 20000,
        fecha: "2025-09-30",
        estado: "Completada",
      },

      {
        id: 6,
        nombre: "Donación de Emergencia",
        monto: 5000,
        fecha: "2025-10-05",
        estado: "Pendiente",
      },
    ];
    setDonaciones(data);
  }, []);

  return (
    <div>
      <h2 className="mb-4 fw-bold text-primary">Sección Donaciones</h2>

      <Row xs={1} md={2} lg={3} className="g-4">
        {donaciones.map((don) => (
          <Col key={don.id}>
            <Card className="shadow-sm border-0">
              <Card.Body>
                <Card.Title className="fw-bold">{don.nombre}</Card.Title>
                <Card.Text>
                  <strong>Monto:</strong> ${don.monto.toLocaleString()} <br />
                  <strong>Fecha:</strong> {don.fecha}
                </Card.Text>
                <Badge
                  bg={don.estado === "Completada" ? "success" : "warning"}
                  text="dark"
                >
                  {don.estado}
                </Badge>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
}
