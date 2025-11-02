import React, { useEffect } from "react";
import { Container, Navbar, Nav, Dropdown } from "react-bootstrap";
import { Link, useLocation, Outlet } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

const Layout = () => {
  const { user, isAuthenticated, logout, verifySession } = useAuth();
  const location = useLocation();

  useEffect(() => {
    verifySession();
  }, [location.pathname, verifySession]);

  useEffect(() => {
    const handleStorageChange = () => verifySession();
    const handleAuthChange = () => verifySession();

    window.addEventListener("storage", handleStorageChange);
    window.addEventListener("authChange", handleAuthChange);

    return () => {
      window.removeEventListener("storage", handleStorageChange);
      window.removeEventListener("authChange", handleAuthChange);
    };
  }, [verifySession]);

  const handleLogout = () => {
    logout && logout(true);
  };

  return (
    <>
      <Navbar bg="dark" variant="dark" expand="lg">
        <Container>
          <Navbar.Brand as={Link} to="/">Sistema Reservas Médicas</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/">Inicio</Nav.Link>
              {isAuthenticated && (
                <>
                  <Nav.Link as={Link} to="/dashboard">Dashboard</Nav.Link>
                  <Nav.Link as={Link} to="/doctores">Doctores</Nav.Link>
                  <Nav.Link as={Link} to="/pacientes">Pacientes</Nav.Link>
                  <Nav.Link as={Link} to="/turnos">Turnos</Nav.Link>
                </>
              )}
            </Nav>
            <Nav>
              {isAuthenticated ? (
                <Dropdown align="end">
                  <Dropdown.Toggle variant="outline-light" size="sm" id="user-dropdown">
                    {user?.email || "Usuario"}
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    <Dropdown.Header>{user?.email}</Dropdown.Header>
                    <Dropdown.Divider />
                    <Dropdown.Item as={Link} to="/perfil">Mi Perfil</Dropdown.Item>
                    <Dropdown.Item as={Link} to="/configuracion">Configuración</Dropdown.Item>
                    <Dropdown.Divider />
                    <Dropdown.Item onClick={handleLogout} className="text-danger">Cerrar Sesión</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              ) : (
                <>
                  <Nav.Link as={Link} to="/login">Iniciar Sesión</Nav.Link>
                  <Nav.Link as={Link} to="/register">Registrarse</Nav.Link>
                </>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default Layout;
