// src/layout/AppLayout.jsx
import React from "react";
import { Container, Navbar, Nav, Button, Row, Col, Dropdown } from "react-bootstrap";
import { Outlet, useNavigate, useLocation } from "react-router-dom";
import { clearAuth, getAuth } from "../utils/auth";
import ThemeSwitcher from "../components/ThemeSwitcher";
import Sidebar from "../dashboard/DashboardSidebar";
import { LogOut, User } from "lucide-react";
import DashboardSidebar from "../dashboard/DashboardSidebar";

export default function AppLayout() {
  const nav = useNavigate();
  const { pathname } = useLocation();
  const session = getAuth();
  const userName = session?.name || session?.user || "Usuario";
  const isAdmin = session?.role === "admin";

  const isDashboard = pathname !== "/login";

  const onLogout = () => {
    if (confirm("¿Cerrar sesión?")) {
      clearAuth();
      nav("/login", { replace: true });
    }
  };

  return (
    <div
      className={`bg-cover ${isDashboard ? "bg-dashboard" : ""}`}
      style={isDashboard ? { "--bg-image": "url(/img/fondo2.jpg)" } : {}}
    >
      <Navbar bg="dark" data-bs-theme="dark" expand="lg" className="shadow-sm glass">
        <Container fluid>
          <Navbar.Brand role="button" onClick={()=>nav("/dashboard")}>Proyecto C7</Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-between">
            <Nav>
              <Nav.Link onClick={() => nav("/dashboard")}>Dashboard</Nav.Link>
              <Nav.Link onClick={() => nav("/about")}>About</Nav.Link>
              {isAdmin && <Nav.Link onClick={() => nav("/audit")}>Audit</Nav.Link>}
            </Nav>

            <div className="d-flex gap-3 align-items-center">
              <ThemeSwitcher />
              <Dropdown align="end">
                <Dropdown.Toggle variant="outline-light" size="sm">
                  <User size={16} className="me-1" />
                  {userName}
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item disabled>Rol: {session?.role || "user"}</Dropdown.Item>
                  <Dropdown.Divider />
                  <Dropdown.Item onClick={onLogout} className="text-danger">
                    <LogOut size={14} className="me-1" /> Cerrar sesión
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Container fluid className="py-4">
        <Row>
          <Col xs={12} md={3} lg={2}>
            <DashboardSidebar />
          </Col>
          <Col xs={12} md={9} lg={10}>
            <Outlet />
          </Col>
        </Row>
      </Container>
    </div>
  );
}
