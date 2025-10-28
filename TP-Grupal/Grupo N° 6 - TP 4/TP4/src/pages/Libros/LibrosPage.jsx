import { useEffect, useState } from "react";
import { Button, Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import { getBooks } from "../../store/dataService";

export default function LibrosPage() {
  const [libros, setLibros] = useState([]);

  useEffect(() => {
    setLibros(getBooks());
  }, []);

  return (
    <>
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h2>📚 Libros</h2>
        <Button as={Link} to="/libros/nuevo" variant="primary">
          ➕ Nuevo Libro
        </Button>
      </div>

      {libros.length === 0 ? (
        <p>No hay libros registrados.</p>
      ) : (
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Título</th>
              <th>Autor</th>
              <th>Categoría</th>
              <th>Cantidad</th>
              <th>Disponibles</th>
            </tr>
          </thead>
          <tbody>
            {libros.map(l => (
              <tr key={l.id}>
                <td>{l.titulo}</td>
                <td>{l.autor}</td>
                <td>{l.categoria}</td>
                <td>{l.cantidad}</td>
                <td>{l.cantidadDisponible}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      )}
    </>
  );
}
