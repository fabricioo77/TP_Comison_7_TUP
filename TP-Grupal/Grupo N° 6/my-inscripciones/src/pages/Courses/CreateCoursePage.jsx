import React, { useState } from "react";
import { createCourse } from "../../services/coursesService"; // Importamos el servicio
import { Form, Button, Container, Alert } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

export default function CreateCoursePage() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [cupo, setCupo] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      const course = { name, cupo };
      await createCourse(course); // Usamos el servicio
      navigate("/courses"); // Redirigir a la lista de cursos
    } catch (err) {
      setError("No se pudo crear el curso");
    }
  };

  return (
    <Container className="py-5" style={{ maxWidth: 500 }}>
      <h3>Crear un nuevo curso</h3>
      {error && <Alert variant="danger">{error}</Alert>}
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>Nombre del curso</Form.Label>
          <Form.Control
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Cupo máximo</Form.Label>
          <Form.Control
            type="number"
            value={cupo}
            onChange={(e) => setCupo(e.target.value)}
            required
          />
        </Form.Group>
        <Button type="submit">Crear Curso</Button>
      </Form>
    </Container>
  );
}
