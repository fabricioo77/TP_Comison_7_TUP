import React, { useState, useEffect } from "react";
import {
  Container,
  Row,
  Col,
  Card,
  Form,
  Button,
  Alert,
  Spinner,
} from "react-bootstrap";
import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import { AUTH_CONFIG } from "../config/app.config";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [showAlert, setShowAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");
  const [alertVariant, setAlertVariant] = useState("danger");

  const navigate = useNavigate();
  const { login, isLoading, error, isAuthenticated, clearError } = useAuth();

  // Redirigir si ya está autenticado
  useEffect(() => {
    if (isAuthenticated) {
      navigate("/dashboard");
    }
  }, [isAuthenticated, navigate]);

  // Mostrar errores del hook
  useEffect(() => {
    if (error) {
      setAlertMessage(error);
      setAlertVariant("danger");
      setShowAlert(true);
    }
  }, [error]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

    // Limpiar alertas al escribir
    if (showAlert) {
      setShowAlert(false);
      clearError();
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setShowAlert(false);

    // Validación básica
    if (!formData.email || !formData.password) {
      setAlertMessage("Por favor, complete todos los campos");
      setAlertVariant("warning");
      setShowAlert(true);
      return;
    }

    // Intentar login
    const result = await login(formData);

    if (result.success) {
      setAlertMessage(result.message || "¡Bienvenido!");
      setAlertVariant("success");
      setShowAlert(true);

      // Redirigir después de un momento
      setTimeout(() => {
        navigate(AUTH_CONFIG.LOGIN_REDIRECT);
      }, 500);
    } else {
      setAlertMessage(result.error || "Error al iniciar sesión");
      setAlertVariant("danger");
      setShowAlert(true);
    }
  };

  return (
    <Container className="mt-5">
      <Row className="justify-content-center">
        <Col md={6}>
          <Card>
            <Card.Header className="bg-primary text-white">
              <h3 className="mb-0">Iniciar Sesión</h3>
            </Card.Header>
            <Card.Body>
              {showAlert && (
                <Alert
                  variant={alertVariant}
                  onClose={() => setShowAlert(false)}
                  dismissible
                >
                  {alertMessage}
                </Alert>
              )}

              <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Ingrese su email"
                    required
                    disabled={isLoading}
                  />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Contraseña</Form.Label>
                  <Form.Control
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    placeholder="Ingrese su contraseña"
                    required
                    disabled={isLoading}
                  />
                </Form.Group>

                <Button
                  variant="primary"
                  type="submit"
                  className="w-100"
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <>
                      <Spinner
                        as="span"
                        animation="border"
                        size="sm"
                        role="status"
                        aria-hidden="true"
                        className="me-2"
                      />
                      Iniciando sesión...
                    </>
                  ) : (
                    "Iniciar Sesión"
                  )}
                </Button>
              </Form>

              <div className="mt-3 text-center">
                <small className="text-muted">
                  💡 Modo Demo: Use cualquier email y contraseña
                </small>
              </div>

              <div className="mt-3 text-center">
                <small className="text-muted">
                  ¿No tienes cuenta? <Link to="/register">Regístrate aquí</Link>
                </small>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Login;
