import { useState, useEffect } from "react";
import { Table, Badge } from "react-bootstrap";

export default function Donantes() {
  const [donantes, setDonantes] = useState([]);

  useEffect(() => {
    const data = [
      {
        id: 1,
        nombre: "Laura Pérez",
        email: "laura@gmail.com",
        monto: 5000,
        activo: true,
      },
      {
        id: 2,
        nombre: "Carlos López",
        email: "carlos@gmail.com",
        monto: 2500,
        activo: false,
      },
      {
        id: 3,
        nombre: "María Torres",
        email: "maria@gmail.com",
        monto: 10000,
        activo: true,
      },
      {
        id: 4,
        nombre: "Agustin Berenguel",
        email: "berenguel@gmail.com",
        monto: 6000,
        activo: true,
      },
      {
        id: 5,
        nombre: "Mateo Avila",
        email: "avila@gmail.com",
        monto: 2500,
        activo: false,
      },
      {
        id: 6,
        nombre: "Agustin Monters",
        email: "agustin@gmail.com",
        monto: 10000,
        activo: true,
      },
    ];
    setDonantes(data);
  }, []);

  return (
    <div>
      <h2 className="mb-4 fw-bold text-primary">Listado de Donantes</h2>

      <Table striped bordered hover responsive className="shadow-sm bg-white">
        <thead className="table-primary">
          <tr>
            <th>#</th>
            <th>Nombre</th>
            <th>Email</th>
            <th>Monto Donado</th>
            <th>Estado</th>
          </tr>
        </thead>
        <tbody>
          {donantes.map((d) => (
            <tr key={d.id}>
              <td>{d.id}</td>
              <td>{d.nombre}</td>
              <td>{d.email}</td>
              <td>${d.monto.toLocaleString()}</td>
              <td>
                <Badge bg={d.activo ? "success" : "secondary"}>
                  {d.activo ? "Activo" : "Inactivo"}
                </Badge>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}
