// About.jsx — info útil del proyecto para alumnos/profesor
import { Card, Table } from "react-bootstrap";

export default function About() {
  return (
    <div className="d-flex flex-column gap-3">
      <Card className="shadow-sm">
        <Card.Body>
          <Card.Title>TP 4 – Sistema de Gestión de Biblioteca Escolar</Card.Title>
          <Card.Text className="text-muted">
            App React con ruteo público/privado, services con <code>json-server</code>, y estilos con Bootstrap + CSS modular.
          </Card.Text>
        </Card.Body>
      </Card>

      <Card className="shadow-sm">
        <Card.Body>
          <Card.Title>Inicio rápido</Card.Title>
          <ul className="mb-0">
            <li>Instalar dependencias: <code>pnpm i</code></li>
            <li>Instalar iconos Lucide: <code>pnpm i lucide-react</code></li>
            <li>Levantar API fake: <code>pnpm run api</code> (puerto 4000)</li>
            <li>Levantar frontend: <code>pnpm run dev</code> (puerto 5173)</li>
          </ul>
        </Card.Body>
      </Card>

      <Card className="shadow-sm">
        <Card.Body>
          <Card.Title>Credenciales de prueba</Card.Title>
          <p className="text-muted mb-2">
            El login está simulado. Iniciar sesión con el email definido en <code>db.json</code> (cualquier contraseña).
          </p>
          <Table size="sm" bordered>
            <thead><tr><th>Campo</th><th>Valor</th></tr></thead>
            <tbody>
              <tr><td>Usuario</td><td><code>admin@escuela.edu</code> (el que figure en <code>db.json</code>)</td></tr>
              <tr><td>Contraseña</td><td><em>1234</em> (próximo paso: validar contraseña real)</td></tr>
              <tr><td>Usuario</td><td><code>ana@escuela.edu</code> (el que figure en <code>db.json</code>)</td></tr>
              <tr><td>Contraseña</td><td><em>1234</em> (próximo paso: validar contraseña real)</td></tr>
            </tbody>
          </Table>
        </Card.Body>
      </Card>

      <Card className="shadow-sm">
        <Card.Body>
          <Card.Title>Endpoints (json-server)</Card.Title>
          <ul className="mb-0">
            <li><code>GET/POST/PATCH/DELETE</code> <code>http://localhost:4000/books</code></li>
            <li><code>GET/POST/PATCH/DELETE</code> <code>http://localhost:4000/students</code></li>
            <li><code>GET/POST/PATCH/DELETE</code> <code>http://localhost:4000/loans</code></li>
            <li><code>POST</code> <code>http://localhost:4000/audit</code> (registro de auditoría)</li>
          </ul>
        </Card.Body>
      </Card>
    </div>
  );
}
