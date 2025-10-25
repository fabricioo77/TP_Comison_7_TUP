import React, { useState, useEffect } from 'react';
import { Container, Button, Form, Card, Alert, Row, Col, Image } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

// Componente de la página de login
const LoginPage = () => {
  // Estado del formulario: email y password
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  // Estado para mostrar mensajes de error al usuario
  const [error, setError] = useState('');

  // Hook para navegación programática (react-router)
  const navigate = useNavigate();

  // Hooks del contexto de autenticación
  const { login, isAuthenticated } = useAuth();

  // Efecto: si el usuario ya está autenticado, redirigir al dashboard
  // Esto evita que un usuario ya logueado vea la página de login.
  useEffect(() => {
    if (isAuthenticated) {
      navigate('/dashboard');
    }
  }, [isAuthenticated, navigate]);

  // Usuario de prueba (simulación de backend)
  // En una app real esto vendría de una API.
  const mockUser = {
    email: 'admin@test.com',
    password: '123456'
  };

  // Maneja cambios en los inputs del formulario
  // name corresponde a las propiedades de formData (email/password)
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  // Maneja el envío del formulario
  // - Valida las credenciales contra mockUser
  // - Llama a login() del contexto para guardar el usuario en localStorage
  // - No hace la navegación aquí; el useEffect la realizará cuando isAuthenticated cambie
  const handleSubmit = (e) => {
    e.preventDefault();
    setError(''); // limpiar errores previos

    // Validamos localmente las credenciales
    if (formData.email === mockUser.email && formData.password === mockUser.password) {
      // Construimos el objeto de usuario que guardaremos
      const userData = {
        email: formData.email,
        isAuthenticated: true,
        loginDate: new Date().toISOString()
      };

      // Llamamos al método del contexto que guarda en localStorage
      login(userData);

      // Nota: la redirección al dashboard se hace en el useEffect
    } else {
      // Mostrar mensaje de error amigable
      setError('Usuario o Contraseña incorrectas.');
    }
  };

  // Render del formulario con Bootstrap
  // - Muestra un Alert si hay error
  // - Inputs controlados por formData
  return (
    <Container fluid className="vh-100 login-bg">
      <Row className="h-100 align-items-center justify-content-center">
        <Col xs={12} md={8} lg={6} xl={4}>
          <Card className="shadow-lg border-0" style={{ backgroundColor: '#a9b5beff' }}>
            <Card.Body className="p-5">
              <div className="text-center mb-4">

                <h2 className="fw-bold mb-2">Bienvenido</h2>
                <p className="text-muted">Ingresa a tu cuenta</p>
              </div>

              {/* Mensaje de error */}
              {error && (
                <Alert variant="danger" className="mb-4">
                  <i className="fas fa-exclamation-circle me-2"></i>
                  {error}
                </Alert>
              )}

              {/* Formulario controlado */}
              <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-4">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="ejemplo@email.com"
                    required
                    size="lg"
                    className="bg-light"
                  />
                </Form.Group>

                <Form.Group className="mb-4">
                  <Form.Label>Contraseña</Form.Label>
                  <Form.Control
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleInputChange}
                    placeholder="••••••••"
                    required
                    size="lg"
                    className="bg-light"
                  />
                </Form.Group>

                <div className="d-grid">
                  <Button 
                    type="submit" 
                    variant="primary" 
                    size="lg"
                    className="text-uppercase fw-bold"
                  >
                    Iniciar Sesión
                  </Button>
                </div>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default LoginPage;