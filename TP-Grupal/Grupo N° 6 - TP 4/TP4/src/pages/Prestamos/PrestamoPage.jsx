// PrestamosPage.jsx
import { useEffect, useState } from "react";
import { Button, Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import { getLoans, getBooks, getStudents } from "../../store/dataService";

export default function PrestamosPage() {
  const [prestamos, setPrestamos] = useState([]);

  useEffect(() => {
    const all = getLoans();
    const libros = getBooks();
    const alumnos = getStudents();
    const joined = all.map(p => ({
      ...p,
      alumno: alumnos.find(a => a.id === p.alumnoId)?.nombre || "Desconocido",
      libro: libros.find(l => l.id === p.libroId)?.titulo || "Desconocido",
    }));
    setPrestamos(joined);
  }, []);

  return (
    <>
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h2>📖 Préstamos</h2>
        <Button as={Link} to="/prestamos/nuevo" variant="primary">
          ➕ Nuevo Préstamo
        </Button>
      </div>
      {prestamos.length === 0 ? (
        <p>No hay préstamos registrados.</p>
      ) : (
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Alumno</th>
              <th>Libro</th>
              <th>Fecha préstamo</th>
              <th>Devolución</th>
            </tr>
          </thead>
          <tbody>
            {prestamos.map(p=>(
              <tr key={p.id}>
                <td>{p.alumno}</td>
                <td>{p.libro}</td>
                <td>{p.fechaPrestamo}</td>
                <td>{p.fechaDevolucion}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      )}
    </>
  );
}
