import { useEffect, useState } from "react";
import { Button, Table, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import { getLoans, getBooks, getStudents } from "../../store/dataService";
import ProgressRing from "../../components/ProgressRing";

export default function PrestamosPage() {
  const [prestamos, setPrestamos] = useState([]);
  const [selectedLoan, setSelectedLoan] = useState(null);

  useEffect(() => {
    const all = getLoans();
    const libros = getBooks();
    const alumnos = getStudents();
    const joined = all.map((p) => ({
      ...p,
      alumno: alumnos.find((a) => a.id === p.alumnoId)?.nombre || "Desconocido",
      libro: libros.find((l) => l.id === p.libroId)?.titulo || "Desconocido",
    }));
    setPrestamos(joined);
  }, []);

  // Calcular días restantes
  const getDaysLeft = (fechaDevolucion) => {
    const hoy = new Date();
    const devolucion = new Date(fechaDevolucion);
    const diff = Math.ceil((devolucion - hoy) / (1000 * 60 * 60 * 24));
    return diff > 0 ? diff : 0;
  };

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
            {prestamos.map((p) => (
              <tr
                key={p.id}
                onClick={() => setSelectedLoan(p)}
                style={{ cursor: "pointer" }}
              >
                <td>{p.alumno}</td>
                <td>{p.libro}</td>
                <td>{p.fechaPrestamo}</td>
                <td>{p.fechaDevolucion}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      )}

      {selectedLoan && (
        <Card className="mt-4 p-3 shadow-sm">
          <Card.Title>
            ⏰ Devolución de <strong>{selectedLoan.libro}</strong>
          </Card.Title>
          <div className="d-flex justify-content-center mt-3">
            <ProgressRing
              daysLeft={getDaysLeft(selectedLoan.fechaDevolucion)}
              totalDays={7} // podés ajustarlo según política de la biblioteca
            />
          </div>
        </Card>
      )}
    </>
  );
}
