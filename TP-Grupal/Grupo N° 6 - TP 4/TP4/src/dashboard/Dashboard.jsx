// src/components/ui/Sidebar.jsx
import { useEffect, useState } from "react";
import { Card, Nav } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";
import { getBooks, getLoans } from "../store/dataService";

export default function Sidebar() {
  const location = useLocation();
  const [libros, setLibros] = useState([]);
  const [prestamos, setPrestamos] = useState([]);

  useEffect(() => {
    setLibros(getBooks());
    setPrestamos(getLoans());
  }, []);

  const totalLibros = libros.length;
  const librosPrestados = prestamos.length;
  const librosDisponibles = libros.reduce(
    (acc, l) => acc + (l.cantidadDisponible || 0),
    0
  );

  const navItems = [
    { path: "/libros", label: "📚 Libros" },
    { path: "/alumnos", label: "👩‍🎓 Alumnos" },
    { path: "/prestamos", label: "📖 Préstamos" },
  ];

  return (
    <div className="bg-light border-end vh-100 p-3 overflow-auto">
      <h5 className="text-center mb-3 fw-bold">Panel de Biblioteca</h5>

      {/* Métricas */}
      <Card className="mb-2 text-center shadow-sm">
        <Card.Body>
          <Card.Title>Total Libros</Card.Title>
          <Card.Text className="fw-bold">{totalLibros}</Card.Text>
        </Card.Body>
      </Card>
      <Card className="mb-2 text-center shadow-sm">
        <Card.Body>
          <Card.Title>Prestados</Card.Title>
          <Card.Text className="text-danger fw-bold">{librosPrestados}</Card.Text>
        </Card.Body>
      </Card>
      <Card className="mb-3 text-center shadow-sm">
        <Card.Body>
          <Card.Title>Disponibles</Card.Title>
          <Card.Text className="text-success fw-bold">
            {librosDisponibles}
          </Card.Text>
        </Card.Body>
      </Card>

      {/* Navegación */}
      <Nav className="flex-column">
        {navItems.map((item) => (
          <Nav.Link
            as={Link}
            to={item.path}
            key={item.path}
            active={location.pathname === item.path}
            className="mb-2"
          >
            {item.label}
          </Nav.Link>
        ))}
      </Nav>
    </div>
  );
}

