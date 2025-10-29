// FormAlumno.jsx
import { useState } from "react";
import { Form, Button, Alert } from "react-bootstrap";
import { addStudent } from "../../store/dataService";
import { useNavigate } from "react-router-dom";

export default function FormAlumno() {
  const [alumno, setAlumno] = useState({ nombre: "", email: "", dni: "" });
  const [msg, setMsg] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    addStudent(alumno);
    setMsg("✅ Alumno registrado correctamente");
    setTimeout(() => navigate("/alumnos"), 1000);
  };

  return (
    <>
      <h3>Registrar Alumno</h3>
      {msg && <Alert variant="success">{msg}</Alert>}
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-2">
          <Form.Label>Nombre</Form.Label>
          <Form.Control value={alumno.nombre} onChange={e=>setAlumno({...alumno, nombre: e.target.value})} required />
        </Form.Group>
        <Form.Group className="mb-2">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" value={alumno.email} onChange={e=>setAlumno({...alumno, email: e.target.value})} required />
        </Form.Group>
        <Form.Group className="mb-2">
          <Form.Label>DNI</Form.Label>
          <Form.Control type="number" value={alumno.dni} onChange={e=>setAlumno({...alumno, dni: e.target.value})} required />
        </Form.Group>
        <Button type="submit" variant="success">Guardar</Button>
      </Form>
    </>
  );
}
