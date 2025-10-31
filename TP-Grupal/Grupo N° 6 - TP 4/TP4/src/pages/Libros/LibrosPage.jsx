import { useMemo, useState } from "react";
import { Button, Table, Spinner } from "react-bootstrap";
import { Link } from "react-router-dom";
import BookStatsHeader from "../../components/BookStatHeader";
import { useService } from "../../hooks/useService";
import { booksService } from "../../services/books.service";

/** Lista de libros desde json-server (GET /books) */
export default function LibrosPage() {
  const [selectedBook, setSelectedBook] = useState(null);

  const { loading, error, data: libros, refetch } = useService({
    request: () => booksService.getAll(),
    deps: [],   // carga una vez
  });

  const rows = useMemo(() => libros || [], [libros]);

  if (loading) {
    return (
      <>
        <div className="d-flex justify-content-between align-items-center mb-3">
          <h2>📚 Libros</h2>
          <Button as={Link} to="/libros/nuevo" variant="primary">➕ Nuevo Libro</Button>
        </div>
        <div className="text-center py-5">
          <Spinner animation="border" />
        </div>
      </>
    );
  }

  if (error) {
    return (
      <div className="alert alert-danger">
        Error cargando libros: {error.message}
        <Button variant="link" onClick={refetch} className="ms-2">Reintentar</Button>
      </div>
    );
  }

  return (
    <>
      {selectedBook && <BookStatsHeader libro={selectedBook} />}

      <div className="d-flex justify-content-between align-items-center mb-3">
        <h2>📚 Libros</h2>
        <div className="d-flex gap-2">
          <Button variant="outline-secondary" onClick={refetch}>Actualizar</Button>
          <Button as={Link} to="/libros/nuevo" variant="primary">➕ Nuevo Libro</Button>
        </div>
      </div>

      {rows.length === 0 ? (
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
            {rows.map(l => (
              <tr
                key={l.id}
                onClick={() => setSelectedBook(l)}
                style={{ cursor: "pointer" }}
              >
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
