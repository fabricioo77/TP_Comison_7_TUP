// src/layout/AppLayout.jsx
import React from "react";
import { Container, Navbar, Nav, Button, Row, Col } from "react-bootstrap";
import { Outlet, useNavigate, useLocation } from "react-router-dom";
import { clearAuth, getAuth } from "../utils/auth";
import ThemeSwitcher from "../components/ThemeSwitcher";
import Sidebar from "../dashboard/Dashboard"; // nuevo nombre más claro

export default function AppLayout() {
  const nav = useNavigate();
  const { pathname } = useLocation();
  const user = getAuth()?.user;

  const isDashboard = pathname !== "/login";

  return (
    <div
      className={`bg-cover ${isDashboard ? "bg-dashboard" : ""}`}
      style={isDashboard ? { "--bg-image": "url(/img/fondo2.jpg)" } : {}}
    >
      <Navbar bg="dark" data-bs-theme="dark" expand="lg" className="shadow-sm glass">
        <Container fluid>
          <Navbar.Brand>Proyecto C7</Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-between">
            <Nav>
              <Nav.Link onClick={() => nav("/dashboard")}>Dashboard</Nav.Link>
            </Nav>
            <div className="d-flex gap-3 align-items-center">
              <ThemeSwitcher />
              {user && <span className="text-light-emphasis small">Hola, {user}</span>}
              <Button
                size="sm"
                variant="outline-light"
                onClick={() => {
                  clearAuth();
                  nav("/login", { replace: true });
                }}
              >
                Salir
              </Button>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Container fluid className="py-4">
        <Row>
          <Col xs={12} md={3} lg={2}>
            <Sidebar /> {/* Lado izquierdo */}
          </Col>
          <Col xs={12} md={9} lg={10}>
            <Outlet /> {/* Lado derecho: contenido dinámico */}
          </Col>
        </Row>
      </Container>
    </div>
  );
}
