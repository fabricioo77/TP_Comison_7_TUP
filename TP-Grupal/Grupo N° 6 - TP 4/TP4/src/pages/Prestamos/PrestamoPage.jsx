import { useEffect, useMemo, useState } from "react";
import { Button, Table, Card, Badge, Alert, Spinner, ButtonGroup } from "react-bootstrap";
import { Link } from "react-router-dom";
import ProgressRing from "../../components/ProgressRing";
import { loansService } from "../../services/loans.service";
import { useService } from "../../hooks/useService";
import { AlarmClock, AlertTriangle, CheckCircle2 } from "lucide-react";

/** Calcula días restantes */
const getDaysLeft = (fechaDevolucion) => {
  const hoy = new Date();
  const devolucion = new Date(fechaDevolucion);
  const diff = Math.ceil((devolucion - hoy) / (1000 * 60 * 60 * 24));
  return diff > 0 ? diff : 0;
};

/** Estado visual */
const getLoanStatus = (daysLeft, devuelto) => {
  if (devuelto) return { text: "Devuelto", color: "secondary", icon: <CheckCircle2 size={16} /> };
  if (daysLeft <= 0) return { text: "Vencido", color: "danger", icon: <AlertTriangle size={16} /> };
  if (daysLeft <= 2) return { text: "Por vencer", color: "warning", icon: <AlarmClock size={16} /> };
  return { text: "Activo", color: "success", icon: <CheckCircle2 size={16} /> };
};

export default function PrestamosPage() {
  const [selectedLoan, setSelectedLoan] = useState(null);

  const { loading, error, data, refetch } = useService({
    request: () => loansService.getJoined(),
    deps: [],
  });

  const prestamos = useMemo(() => {
    if (!data) return [];
    return data.map((p) => {
      const daysLeft = getDaysLeft(p.fechaDevolucion);
      const estado = getLoanStatus(daysLeft, p.devuelto);
      return { ...p, daysLeft, estado };
    });
  }, [data]);

  const onReturn = async (loan) => {
    try {
      await loansService.returnLoan(loan.id);
      await refetch();
      setSelectedLoan((prev) => prev && prev.id === loan.id ? { ...prev, devuelto: true, daysLeft: 0, estado: getLoanStatus(0, true) } : prev);
    } catch (e) {
      alert(e.message);
    }
  };

  return (
    <>
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h2>📖 Préstamos</h2>
        <div className="d-flex gap-2">
          <Button variant="outline-secondary" onClick={refetch}>Actualizar</Button>
          <Button as={Link} to="/prestamos/nuevo" variant="primary">➕ Nuevo Préstamo</Button>
        </div>
      </div>

      {loading && <div className="text-center py-5"><Spinner animation="border" /></div>}
      {error && <Alert variant="danger">Error: {error.message}</Alert>}

      {!loading && !error && (prestamos.length === 0 ? (
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
              <th>Acción</th>
            </tr>
          </thead>
          <tbody>
            {prestamos.map((p) => (
              <tr key={p.id} onClick={() => setSelectedLoan(p)} style={{ cursor: "pointer" }}>
                <td>{p.alumno}</td>
                <td>{p.libro}</td>
                <td className="text-center">{p.fechaPrestamo}</td>
                <td className="text-center">{p.fechaDevolucion}</td>
                <td className="text-center fw-bold">{p.devuelto ? "-" : (p.daysLeft > 0 ? `${p.daysLeft} días` : "0")}</td>
                <td className="text-center">
                  <Badge bg={p.estado.color} className="d-inline-flex align-items-center gap-1">
                    {p.estado.icon}{p.estado.text}
                  </Badge>
                </td>
                <td className="text-center">
                  <ButtonGroup size="sm">
                    <Button
                      variant="outline-success"
                      disabled={p.devuelto}
                      onClick={(e) => { e.stopPropagation(); onReturn(p); }}
                    >
                      Marcar devolución
                    </Button>
                  </ButtonGroup>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      ))}

      {/* Detalle del préstamo seleccionado */}
      {selectedLoan && (
        <Card className="mt-4 p-3 shadow-sm">
          <Card.Title>
            ⏰ Devolución de <strong>{selectedLoan.libro}</strong>
          </Card.Title>
          <p className="text-muted">
            Estado actual:{" "}
            <Badge bg={selectedLoan.estado.color} className="d-inline-flex align-items-center gap-1">
              {selectedLoan.estado.icon}{selectedLoan.estado.text}
            </Badge>
          </p>

          {/* Alerta contextual */}
          {selectedLoan.estado.text === "Vencido" && (
            <Alert variant="danger" className="mt-3">
              ⚠️ Este libro está vencido. Comuníquese con el alumno para su devolución inmediata.
            </Alert>
          )}
          {selectedLoan.estado.text === "Por vencer" && (
            <Alert variant="warning" className="mt-3">
              ⏰ El préstamo vence pronto. Faltan pocos días para la devolución.
            </Alert>
          )}
          {selectedLoan.estado.text === "Devuelto" && (
            <Alert variant="secondary" className="mt-3">
              ✅ Préstamo devuelto.
            </Alert>
          )}

          {!selectedLoan.devuelto && (
            <div className="d-flex justify-content-center mt-3">
              <ProgressRing daysLeft={selectedLoan.daysLeft} totalDays={7} />
            </div>
          )}

          <div className="d-flex justify-content-end mt-3">
            <Button
              variant="success"
              disabled={selectedLoan.devuelto}
              onClick={() => onReturn(selectedLoan)}
            >
              Marcar devolución
            </Button>
          </div>
        </Card>
      )}
    </>
  );
}
