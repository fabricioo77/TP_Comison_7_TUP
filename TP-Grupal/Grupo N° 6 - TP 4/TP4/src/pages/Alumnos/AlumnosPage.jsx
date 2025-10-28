// AlumnosPage.jsx
import { useEffect, useState } from "react";
import { Button, Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import { getStudents } from "../../store/dataService";

export default function AlumnosPage() {
  const [alumnos, setAlumnos] = useState([]);

  useEffect(() => {
    setAlumnos(getStudents());
  }, []);

  return (
    <>
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h2>👩‍🎓 Alumnos</h2>
        <Button as={Link} to="/alumnos/nuevo" variant="primary">➕ Nuevo Alumno</Button>
      </div>
      {alumnos.length === 0 ? (
        <p>No hay alumnos registrados.</p>
      ) : (
        <Table striped bordered hover>
          <thead>
            <tr><th>Nombre</th><th>Email</th><th>DNI</th></tr>
          </thead>
          <tbody>
            {alumnos.map(a=>(
              <tr key={a.id}>
                <td>{a.nombre}</td>
                <td>{a.email}</td>
                <td>{a.dni}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      )}
    </>
  );
}
