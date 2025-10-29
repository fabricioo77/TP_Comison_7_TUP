// FormPrestamo.jsx
import { useState } from "react";
import { Form, Button, Alert } from "react-bootstrap";
import { addLoan, getBooks, getStudents } from "../../store/dataService";
import { useNavigate } from "react-router-dom";

export default function FormPrestamo() {
  const [prestamo, setPrestamo] = useState({ alumnoId: "", libroId: "", fechaPrestamo: "", fechaDevolucion: "" });
  const [msg, setMsg] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const alumnos = getStudents();
  const libros = getBooks();

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      addLoan(prestamo);
      setMsg("✅ Préstamo registrado correctamente");
      setTimeout(() => navigate("/prestamos"), 1000);
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <>
      <h3>Registrar Préstamo</h3>
      {msg && <Alert variant="success">{msg}</Alert>}
      {error && <Alert variant="danger">{error}</Alert>}

      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-2">
          <Form.Label>Alumno</Form.Label>
          <Form.Select value={prestamo.alumnoId} onChange={e=>setPrestamo({...prestamo, alumnoId: Number(e.target.value)})} required>
            <option value="">Seleccionar...</option>
            {alumnos.map(a=>(
              <option key={a.id} value={a.id}>{a.nombre}</option>
            ))}
          </Form.Select>
        </Form.Group>
        <Form.Group className="mb-2">
          <Form.Label>Libro</Form.Label>
          <Form.Select value={prestamo.libroId} onChange={e=>setPrestamo({...prestamo, libroId: Number(e.target.value)})} required>
            <option value="">Seleccionar...</option>
            {libros.map(l=>(
              <option key={l.id} value={l.id}>{l.titulo}</option>
            ))}
          </Form.Select>
        </Form.Group>
        <Form.Group className="mb-2">
          <Form.Label>Fecha préstamo</Form.Label>
          <Form.Control type="date" value={prestamo.fechaPrestamo} onChange={e=>setPrestamo({...prestamo, fechaPrestamo: e.target.value})} required/>
        </Form.Group>
        <Form.Group className="mb-2">
          <Form.Label>Fecha devolución</Form.Label>
          <Form.Control type="date" value={prestamo.fechaDevolucion} onChange={e=>setPrestamo({...prestamo, fechaDevolucion: e.target.value})} required/>
        </Form.Group>
        <Button type="submit" variant="success">Guardar</Button>
      </Form>
    </>
  );
}
