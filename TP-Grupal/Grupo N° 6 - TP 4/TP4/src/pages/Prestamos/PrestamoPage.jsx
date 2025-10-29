import { useEffect, useState } from "react";
import { Button, Table, Card, Badge, Alert } from "react-bootstrap";
import { Link } from "react-router-dom";
import { getLoans, getBooks, getStudents } from "../../store/dataService";
import ProgressRing from "../../components/ProgressRing";

export default function PrestamosPage() {
  const [prestamos, setPrestamos] = useState([]);
  const [selectedLoan, setSelectedLoan] = useState(null);

  // 🔹 FUNCION para calcular días restantes
  const getDaysLeft = (fechaDevolucion) => {
    const hoy = new Date();
    const devolucion = new Date(fechaDevolucion);
    const diff = Math.ceil((devolucion - hoy) / (1000 * 60 * 60 * 24));
    return diff > 0 ? diff : 0;
  };

  // 🔹 Determinar el estado visual del préstamo
const getLoanStatus = (daysLeft) => {
  if (daysLeft <= 0) return { text: "Vencido", color: "danger" };
  if (daysLeft <= 2) return { text: "Por vencer", color: "warning" };
  return { text: "Activo", color: "success" };
};

  // 🔹 USEEFFECT con actualización automática cada día
  useEffect(() => {
    const actualizarPrestamos = () => {
      const all = getLoans();
      const libros = getBooks();
      const alumnos = getStudents();

      const joined = all.map((p) => {
        const daysLeft = getDaysLeft(p.fechaDevolucion);
        const estado = getLoanStatus(daysLeft);
        return {
          ...p,
          alumno: alumnos.find((a) => a.id === p.alumnoId)?.nombre || "Desconocido",
          libro: libros.find((l) => l.id === p.libroId)?.titulo || "Desconocido",
          daysLeft,
          estado,
        };
      });

      setPrestamos(joined);
    };

    actualizarPrestamos();

    const interval = setInterval(actualizarPrestamos, 1000 * 60 * 60 * 24); // cada 24 horas
    return () => clearInterval(interval);
  }, []);

  // 🔹 Mostrar alerta según estado
  const renderAlert = (estado) => {
    if (estado.text === "Vencido") {
      return (
        <Alert variant="danger" className="mt-3">
          ⚠️ Este libro está vencido. Comuníquese con el alumno para su devolución inmediata.
        </Alert>
      );
    }
    if (estado.text === "Por vencer") {
      return (
        <Alert variant="warning" className="mt-3">
          ⏰ El préstamo vence pronto. Faltan pocos días para la devolución.
        </Alert>
      );
    }
    return null;
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
          <tr className="text-center">
              <th>Alumno</th>
              <th>Libro</th>
              <th>Fecha préstamo</th>
              <th>Devolución</th>
              <th>Días restantes</th>
              <th>Estado</th>
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
                <td className="text-center">{p.fechaPrestamo}</td>
                <td className="text-center">{p.fechaDevolucion}</td>
                <td className="text-center fw-bold">
                  {p.daysLeft > 0 ? `${p.daysLeft} días` : "0"}
                </td>
                <td className="text-center">
                  <Badge bg={p.estado.color}>{p.estado.text}</Badge>
                </td>

              </tr>
            ))}
          </tbody>
        </Table>
      )}

 {/* Detalle del préstamo seleccionado */}
      {selectedLoan && (
        <Card className="mt-4 p-3 shadow-sm">
          <Card.Title>
            ⏰ Devolución de <strong>{selectedLoan.libro}</strong>
          </Card.Title>
          <p className="text-muted">
            Estado actual:{" "}
            <Badge bg={selectedLoan.estado.color}>
              {selectedLoan.estado.text}
            </Badge>
          </p>

          {/* 🔔 Alerta visual según estado */}
          {renderAlert(selectedLoan.estado)}

          {/* Progreso circular */}
          <div className="d-flex justify-content-center mt-3">
            <ProgressRing
              daysLeft={selectedLoan.daysLeft}
              totalDays={7}
            />
          </div>
        </Card>
      )}
    </>
  );
}
