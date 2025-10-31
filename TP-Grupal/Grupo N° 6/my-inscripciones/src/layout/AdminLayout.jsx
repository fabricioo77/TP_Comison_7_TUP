import { useAuth } from "../context/AuthContext";
import { Button } from "react-bootstrap";
import { Navigate } from "react-router-dom";

export default function AdminLayout({ children }) {
  const { usuario, logout } = useAuth();

  if (!usuario || usuario.role !== "admin") {
    return <Navigate to="/login" />;
  }

  return (
    <div>
      <header className="d-flex justify-content-between align-items-center p-3 bg-dark text-white">
        <h5 className="m-0">Panel Administrativo</h5>
        <div>
          <span className="me-3">👤 {usuario?.user?.name}</span>
          <Button variant="outline-light" size="sm" onClick={logout}>
            Cerrar sesión
          </Button>
        </div>
      </header>

      <main className="p-4">{children}</main>
    </div>
  );
}
