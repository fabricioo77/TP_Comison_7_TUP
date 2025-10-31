import { useAuth } from "../context/AuthContext";
import { Button, Nav } from "react-bootstrap";
import { useNavigate, NavLink } from "react-router-dom";
import { useState } from "react";

export default function AdminLayout({ children }) {
  const { usuario, logout } = useAuth();
  const navigate = useNavigate();
  const [collapsed, setCollapsed] = useState(false);

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <div className="d-flex" style={{ minHeight: "100vh" }}>
      {/* Sidebar */}
      <div
        className={`bg-dark text-white p-3 d-flex flex-column justify-content-between ${
          collapsed ? "col-1" : "col-2"
        }`}
        style={{
          transition: "all 0.3s ease",
        }}
      >
        {/* Logo / título */}
        <div>
          <h5
            className="text-center mb-4 fw-bold"
            style={{ cursor: "pointer" }}
            onClick={() => navigate("/dashboard")}
          >
            <i className="bi bi-mortarboard-fill me-2"></i>
            {collapsed ? "" : "Academy"}
          </h5>

          {/* Navegación */}
          <Nav className="flex-column">
            <NavLink
              to="/dashboard"
              className={({ isActive }) =>
                `nav-link text-white d-flex align-items-center gap-2 ${
                  isActive ? "fw-bold text-info" : ""
                }`
              }
            >
              <i className="bi bi-speedometer2"></i>
              {!collapsed && "Dashboard"}
            </NavLink>

            <NavLink
              to="/courses"
              className={({ isActive }) =>
                `nav-link text-white d-flex align-items-center gap-2 ${
                  isActive ? "fw-bold text-info" : ""
                }`
              }
            >
              <i className="bi bi-book-fill"></i>
              {!collapsed && "Cursos"}
            </NavLink>

            <NavLink
              to="/students"
              className={({ isActive }) =>
                `nav-link text-white d-flex align-items-center gap-2 ${
                  isActive ? "fw-bold text-info" : ""
                }`
              }
            >
              <i className="bi bi-people-fill"></i>
              {!collapsed && "Alumnos"}
            </NavLink>

            <NavLink
              to="/enrollments"
              className={({ isActive }) =>
                `nav-link text-white d-flex align-items-center gap-2 ${
                  isActive ? "fw-bold text-info" : ""
                }`
              }
            >
              <i className="bi bi-card-checklist"></i>
              {!collapsed && "Inscripciones"}
            </NavLink>
          </Nav>
        </div>

        {/* Controles inferiores */}
        <div className="text-center mt-auto">
          <Button
            variant="outline-light"
            size="sm"
            className="mb-2 w-100"
            onClick={() => setCollapsed(!collapsed)}
          >
            {collapsed ? <i className="bi bi-arrow-right"></i> : <i className="bi bi-arrow-left"></i>}
          </Button>
          <Button
            variant="outline-danger"
            size="sm"
            className="w-100"
            onClick={handleLogout}
          >
            <i className="bi bi-box-arrow-right me-1"></i>
            {!collapsed && "Cerrar sesión"}
          </Button>
        </div>
      </div>

      {/* Contenido principal */}
      <div className="flex-grow-1 bg-light">
        {/* Header */}
        <header className="d-flex justify-content-between align-items-center p-3 border-bottom bg-white shadow-sm">
          <h5 className="m-0">
            <i className="bi bi-columns-gap me-2"></i>
            Panel Administrativo
          </h5>
          <div className="text-end">
            <div className="fw-semibold">
              <i className="bi bi-person-circle me-1 text-secondary"></i>
              {usuario?.user?.name || "Admin"}
            </div>
            <small className="text-secondary">
              {usuario?.user?.role
                ? usuario.user.role.toUpperCase()
                : "ADMIN"}
            </small>
          </div>
        </header>

        {/* Contenido dinámico */}
        <main className="p-4">{children}</main>
      </div>
    </div>
  );
}
