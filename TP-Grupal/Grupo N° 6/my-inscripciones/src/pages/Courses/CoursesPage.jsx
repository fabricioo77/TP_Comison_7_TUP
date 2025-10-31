import React, { useEffect, useState } from "react";
import { getCourses } from "../../services/coursesService";  // Importamos el servicio
import { Table, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function CoursesPage() {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    const fetchCourses = async () => {
      const data = await getCourses();
      setCourses(data);
    };
    fetchCourses();
  }, []);

  return (
    <div>
      <h3>Lista de Cursos</h3>
      <Link to="/courses/create">
        <Button variant="primary" className="mb-3">
          Crear Curso
        </Button>
      </Link>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {courses.map((course) => (
            <tr key={course.id}>
              <td>{course.id}</td>
              <td>{course.name}</td>
              <td>
                <Button variant="danger" size="sm">
                  Eliminar
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}
