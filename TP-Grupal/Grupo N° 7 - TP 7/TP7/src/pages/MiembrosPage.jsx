import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Table, Badge, Form, InputGroup, Spinner, Button, Modal } from 'react-bootstrap';
import { Search, Pencil, Calendar3 } from 'react-bootstrap-icons';
import { miembrosDetallados, actividades as actividadesData } from '../utils/fakeData';
import CardComponent from '../components/Card';
import { PeopleFill, PersonCheckFill, PersonXFill, Activity } from 'react-bootstrap-icons';

const MiembrosPage = () => {
  // Estados para Miembros
  const [miembros, setMiembros] = useState([]);
  const [filteredMiembros, setFilteredMiembros] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState('Todos');
  const [filterPlan, setFilterPlan] = useState('Todos');
  const [showEditMiembro, setShowEditMiembro] = useState(false);
  const [miembroEditando, setMiembroEditando] = useState(null);
  const [formDataMiembro, setFormDataMiembro] = useState({});

  // Estados para Actividades
  const [actividades, setActividades] = useState([]);
  const [showEditActividad, setShowEditActividad] = useState(false);
  const [actividadEditando, setActividadEditando] = useState(null);
  const [formDataActividad, setFormDataActividad] = useState({});

  useEffect(() => {
    const timer = setTimeout(() => {
      setMiembros([...miembrosDetallados]);
      setFilteredMiembros([...miembrosDetallados]);
      setActividades([...actividadesData]);
      setLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    let filtered = [...miembros];

    // Filtro por búsqueda
    if (searchTerm) {
      filtered = filtered.filter(miembro =>
        miembro.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        miembro.email.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Filtro por estado
    if (filterStatus !== 'Todos') {
      filtered = filtered.filter(miembro => miembro.status === filterStatus);
    }

    // Filtro por plan
    if (filterPlan !== 'Todos') {
      filtered = filtered.filter(miembro => miembro.plan === filterPlan);
    }

    setFilteredMiembros(filtered);
  }, [searchTerm, filterStatus, filterPlan, miembros]);

  // Funciones para editar Miembros
  const handleEditarMiembro = (miembro) => {
    setMiembroEditando(miembro);
    setFormDataMiembro({ ...miembro });
    setShowEditMiembro(true);
  };

  const handleGuardarMiembro = () => {
    setMiembros(prev =>
      prev.map(m => m.id === miembroEditando.id ? { ...formDataMiembro } : m)
    );
    setShowEditMiembro(false);
    setMiembroEditando(null);
  };

  // Funciones para editar Actividades
  const handleEditarActividad = (actividad) => {
    setActividadEditando(actividad);
    setFormDataActividad({ ...actividad });
    setShowEditActividad(true);
  };

  const handleGuardarActividad = () => {
    setActividades(prev =>
      prev.map(a => a.id === actividadEditando.id ? { ...formDataActividad } : a)
    );
    setShowEditActividad(false);
    setActividadEditando(null);
  };

  // Calcular métricas
  const totalMiembros = miembros.length;
  const miembrosActivos = miembros.filter(m => m.status === 'Activo').length;
  const miembrosInactivos = miembros.filter(m => m.status === 'Inactivo').length;
  const totalActividades = actividades.length;
  const totalInscritos = actividades.reduce((sum, a) => sum + a.inscritos, 0);

  if (loading) {
    return (
      <Container className="d-flex justify-content-center align-items-center" style={{ minHeight: '80vh' }}>
        <Spinner animation="border" variant="primary" />
        <span className="ms-3 fs-4">Cargando...</span>
      </Container>
    );
  }

  return (
    <Container fluid className="p-4">
      <Row className="mb-4">
        <Col>
          <h1 className="h2">Miembros y Actividades</h1>
        </Col>
      </Row>

      {/* Cards de resumen */}
      <Row className="mb-4">
        <CardComponent
          titulo="Total Miembros"
          valor={totalMiembros}
          variante="primary"
          icono={<PeopleFill />}
        />
        <CardComponent
          titulo="Miembros Activos"
          valor={miembrosActivos}
          variante="success"
          icono={<PersonCheckFill />}
        />
        <CardComponent
          titulo="Total Actividades"
          valor={totalActividades}
          variante="info"
          icono={<Activity />}
        />
        <CardComponent
          titulo="Total Inscritos"
          valor={totalInscritos}
          variante="warning"
          icono={<Calendar3 />}
        />
      </Row>

      {/* SECCIÓN MIEMBROS */}
      <Row className="mb-5">
        <Col>
          <h3 className="mb-3">Gestión de Miembros</h3>
          
          {/* Filtros y búsqueda */}
          <Row className="mb-3">
            <Col md={4}>
              <InputGroup>
                <InputGroup.Text>
                  <Search />
                </InputGroup.Text>
                <Form.Control
                  type="text"
                  placeholder="Buscar por nombre o email..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </InputGroup>
            </Col>
            <Col md={4}>
              <Form.Select
                value={filterStatus}
                onChange={(e) => setFilterStatus(e.target.value)}
              >
                <option value="Todos">Todos los Estados</option>
                <option value="Activo">Activos</option>
                <option value="Inactivo">Inactivos</option>
              </Form.Select>
            </Col>
            <Col md={4}>
              <Form.Select
                value={filterPlan}
                onChange={(e) => setFilterPlan(e.target.value)}
              >
                <option value="Todos">Todos los Planes</option>
                <option value="Básico">Plan Básico</option>
                <option value="Full">Plan Full</option>
              </Form.Select>
            </Col>
          </Row>

          {/* Tabla de miembros */}
          <div className="table-responsive">
            <Table striped bordered hover responsive className="shadow-sm">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Nombre</th>
                  <th>Email</th>
                  <th>Teléfono</th>
                  <th>Plan</th>
                  <th>Estado</th>
                  <th>Fecha Ingreso</th>
                  <th>Acción</th>
                </tr>
              </thead>
              <tbody>
                {filteredMiembros.length === 0 ? (
                  <tr>
                    <td colSpan="8" className="text-center">
                      No se encontraron miembros con los filtros aplicados.
                    </td>
                  </tr>
                ) : (
                  filteredMiembros.map((miembro) => (
                    <tr key={miembro.id}>
                      <td>{miembro.id}</td>
                      <td>{miembro.name}</td>
                      <td>{miembro.email}</td>
                      <td>{miembro.telefono}</td>
                      <td>
                        <Badge bg={miembro.plan === 'Full' ? 'primary' : 'secondary'}>
                          {miembro.plan}
                        </Badge>
                      </td>
                      <td>
                        <Badge bg={miembro.status === 'Activo' ? 'success' : 'danger'}>
                          {miembro.status}
                        </Badge>
                      </td>
                      <td>{miembro.fechaIngreso}</td>
                      <td>
                        <Button
                          variant="outline-primary"
                          size="sm"
                          onClick={() => handleEditarMiembro(miembro)}
                        >
                          <Pencil /> Editar
                        </Button>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </Table>
          </div>
        </Col>
      </Row>

      {/* SECCIÓN ACTIVIDADES */}
      <Row>
        <Col>
          <h3 className="mb-3">Gestión de Actividades</h3>
          
          {/* Tabla de actividades */}
          <div className="table-responsive">
            <Table striped bordered hover responsive className="shadow-sm">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Nombre</th>
                  <th>Instructor</th>
                  <th>Horario</th>
                  <th>Días</th>
                  <th>Inscritos</th>
                  <th>Cupo Máximo</th>
                  <th>Disponibilidad</th>
                  <th>Acción</th>
                </tr>
              </thead>
              <tbody>
                {actividades.map((actividad) => {
                  const disponibles = actividad.cupoMaximo - actividad.inscritos;
                  const porcentajeOcupado = ((actividad.inscritos / actividad.cupoMaximo) * 100).toFixed(0);
                  
                  return (
                    <tr key={actividad.id}>
                      <td>{actividad.id}</td>
                      <td><strong>{actividad.nombre}</strong></td>
                      <td>{actividad.instructor}</td>
                      <td>{actividad.horario}</td>
                      <td>{actividad.dias}</td>
                      <td>{actividad.inscritos}</td>
                      <td>{actividad.cupoMaximo}</td>
                      <td>
                        <Badge bg={disponibles > 5 ? 'success' : disponibles > 0 ? 'warning' : 'danger'}>
                          {disponibles} disponibles ({porcentajeOcupado}% ocupado)
                        </Badge>
                      </td>
                      <td>
                        <Button
                          variant="outline-primary"
                          size="sm"
                          onClick={() => handleEditarActividad(actividad)}
                        >
                          <Pencil /> Editar
                        </Button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </Table>
          </div>
        </Col>
      </Row>

      {/* Modal Editar Miembro */}
      <Modal show={showEditMiembro} onHide={() => setShowEditMiembro(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Editar Miembro</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {miembroEditando && (
            <Form>
              <Form.Group className="mb-3">
                <Form.Label>Nombre</Form.Label>
                <Form.Control
                  type="text"
                  value={formDataMiembro.name || ''}
                  onChange={(e) => setFormDataMiembro({ ...formDataMiembro, name: e.target.value })}
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  value={formDataMiembro.email || ''}
                  onChange={(e) => setFormDataMiembro({ ...formDataMiembro, email: e.target.value })}
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Teléfono</Form.Label>
                <Form.Control
                  type="text"
                  value={formDataMiembro.telefono || ''}
                  onChange={(e) => setFormDataMiembro({ ...formDataMiembro, telefono: e.target.value })}
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Plan</Form.Label>
                <Form.Select
                  value={formDataMiembro.plan || ''}
                  onChange={(e) => setFormDataMiembro({ ...formDataMiembro, plan: e.target.value })}
                >
                  <option value="Básico">Básico</option>
                  <option value="Full">Full</option>
                </Form.Select>
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Estado</Form.Label>
                <Form.Select
                  value={formDataMiembro.status || ''}
                  onChange={(e) => setFormDataMiembro({ ...formDataMiembro, status: e.target.value })}
                >
                  <option value="Activo">Activo</option>
                  <option value="Inactivo">Inactivo</option>
                </Form.Select>
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Fecha de Ingreso</Form.Label>
                <Form.Control
                  type="date"
                  value={formDataMiembro.fechaIngreso || ''}
                  onChange={(e) => setFormDataMiembro({ ...formDataMiembro, fechaIngreso: e.target.value })}
                />
              </Form.Group>
            </Form>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowEditMiembro(false)}>
            Cancelar
          </Button>
          <Button variant="primary" onClick={handleGuardarMiembro}>
            Guardar Cambios
          </Button>
        </Modal.Footer>
      </Modal>

      {/* Modal Editar Actividad */}
      <Modal show={showEditActividad} onHide={() => setShowEditActividad(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Editar Actividad</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {actividadEditando && (
            <Form>
              <Form.Group className="mb-3">
                <Form.Label>Nombre</Form.Label>
                <Form.Control
                  type="text"
                  value={formDataActividad.nombre || ''}
                  onChange={(e) => setFormDataActividad({ ...formDataActividad, nombre: e.target.value })}
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Instructor</Form.Label>
                <Form.Control
                  type="text"
                  value={formDataActividad.instructor || ''}
                  onChange={(e) => setFormDataActividad({ ...formDataActividad, instructor: e.target.value })}
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Horario</Form.Label>
                <Form.Control
                  type="text"
                  value={formDataActividad.horario || ''}
                  onChange={(e) => setFormDataActividad({ ...formDataActividad, horario: e.target.value })}
                  placeholder="Ej: 09:00 - 10:00"
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Días</Form.Label>
                <Form.Control
                  type="text"
                  value={formDataActividad.dias || ''}
                  onChange={(e) => setFormDataActividad({ ...formDataActividad, dias: e.target.value })}
                  placeholder="Ej: Lunes, Miércoles, Viernes"
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Inscritos</Form.Label>
                <Form.Control
                  type="number"
                  min="0"
                  max={formDataActividad.cupoMaximo}
                  value={formDataActividad.inscritos || 0}
                  onChange={(e) => setFormDataActividad({ ...formDataActividad, inscritos: parseInt(e.target.value) })}
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Cupo Máximo</Form.Label>
                <Form.Control
                  type="number"
                  min="1"
                  value={formDataActividad.cupoMaximo || 0}
                  onChange={(e) => setFormDataActividad({ ...formDataActividad, cupoMaximo: parseInt(e.target.value) })}
                />
              </Form.Group>
            </Form>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowEditActividad(false)}>
            Cancelar
          </Button>
          <Button variant="primary" onClick={handleGuardarActividad}>
            Guardar Cambios
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
};

export default MiembrosPage;
