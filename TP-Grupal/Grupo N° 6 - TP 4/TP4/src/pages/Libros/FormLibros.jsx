import { useState } from "react";
import { Form, Button, Alert } from "react-bootstrap";
import { addBook } from "../../store/dataService";
import { useNavigate } from "react-router-dom";

export default function FormLibro() {
  const [libro, setLibro] = useState({ titulo: "", autor: "", categoria: "", cantidad: 1 });
  const [msg, setMsg] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const nuevoLibro = { ...libro, cantidadDisponible: libro.cantidad };
    addBook(nuevoLibro);
    setMsg("✅ Libro agregado correctamente");
    setTimeout(() => navigate("/libros"), 1000);
  };

  return (
    <>
      <h3>Agregar Libro</h3>
      {msg && <Alert variant="success">{msg}</Alert>}
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-2">
          <Form.Label>Título</Form.Label>
          <Form.Control value={libro.titulo} onChange={e=>setLibro({...libro, titulo: e.target.value})} required />
        </Form.Group>
        <Form.Group className="mb-2">
          <Form.Label>Autor</Form.Label>
          <Form.Control value={libro.autor} onChange={e=>setLibro({...libro, autor: e.target.value})} required />
        </Form.Group>
        <Form.Group className="mb-2">
          <Form.Label>Categoría</Form.Label>
          <Form.Control value={libro.categoria} onChange={e=>setLibro({...libro, categoria: e.target.value})} required />
        </Form.Group>
        <Form.Group className="mb-2">
          <Form.Label>Cantidad total</Form.Label>
          <Form.Control type="number" min="1" value={libro.cantidad} onChange={e=>setLibro({...libro, cantidad: Number(e.target.value)})} required />
        </Form.Group>
        <Button type="submit" variant="success">Guardar</Button>
      </Form>
    </>
  );
}
