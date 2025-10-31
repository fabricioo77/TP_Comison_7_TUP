import { useEffect, useState } from "react";
import { Card, Table, Badge } from "react-bootstrap";
import { getAudit } from "../services/audit.service";
import Loader from "../components/Loader";
import EmptyState from "../components/EmptyState";
import { ShieldCheck } from "lucide-react";

/** Vista simple de auditoría (solo admin) */
export default function Audit() {
  const [rows, setRows] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(()=>{
    (async ()=>{
      try {
        const data = await getAudit();
        setRows(data);
      } catch {
        setRows([]);
      } finally {
        setLoading(false);
      }
    })();
  },[]);

  if (loading) return <Loader label="Cargando auditoría..." />;

  if (!rows || rows.length === 0) {
    return (
      <EmptyState
        title="Sin registros"
        desc="Aún no hay acciones registradas en auditoría."
        icon={<ShieldCheck size={36} />}
      />
    );
  }

 return (
    <Card className="shadow-sm">
      <Card.Body>
        <Card.Title>Auditoría de Movimientos</Card.Title>

        <div className="d-flex justify-content-end mb-3">
          <Button variant="secondary" onClick={() => history.back()}>
            ← Volver
          </Button>
        </div>

        <Table striped bordered hover responsive className="mb-0">
          <thead>
            <tr>
              <th>Fecha</th>
              <th>Actor</th>
              <th>Acción</th>
              <th>Entidad</th>
              <th>ID Entidad</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((r)=>(
              <tr key={r.id || `${r.timestamp}-${r.entityId}`}>
                <td>{new Date(r.timestamp).toLocaleString()}</td>
                <td>{r.actor}</td>
                <td><Badge bg="secondary">{r.accion}</Badge></td>
                <td>{r.entity}</td>
                <td>{r.entityId}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Card.Body>
    </Card>
  );
}
