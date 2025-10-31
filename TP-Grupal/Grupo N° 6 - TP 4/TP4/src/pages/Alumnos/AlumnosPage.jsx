import { useMemo } from "react";
import { Button, Table, Spinner, Alert } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useService } from "../../hooks/useService";
import { studentsService } from "../../services/students.service";

/** Lista de alumnos desde json-server */
export default function AlumnosPage() {
  const { loading, error, data: alumnos, refetch } = useService({
    request: () => studentsService.getAll(),
    deps: [],
  });

  const rows = useMemo(() => alumnos || [], [alumnos]);

  return (
    <>
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h2>👩‍🎓 Alumnos</h2>
        <div className="d-flex gap-2">
          <Button variant="outline-secondary" onClick={refetch}>Actualizar</Button>
          <Button as={Link} to="/alumnos/nuevo" variant="primary">➕ Nuevo Alumno</Button>
        </div>
      </div>

      {loading && (
        <div className="text-center py-5"><Spinner animation="border" /></div>
      )}

      {error && (
        <Alert variant="danger">
          Error cargando alumnos: {error.message}
          <Button size="sm" variant="link" onClick={refetch} className="ms-2">Reintentar</Button>
        </Alert>
      )}

      {!loading && !error && (rows.length === 0 ? (
        <p>No hay alumnos registrados.</p>
      ) : (
        <Table striped bordered hover>
          <thead>
            <tr><th>Nombre</th><th>Email</th><th>DNI</th></tr>
          </thead>
          <tbody>
            {rows.map(a=>(
              <tr key={a.id}>
                <td>{a.nombre}</td>
                <td>{a.email}</td>
                <td>{a.dni}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      ))}
    </>
  );
}
