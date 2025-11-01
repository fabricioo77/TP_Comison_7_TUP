import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import { Spinner } from "react-bootstrap";

const RouterProtect = ({ children }) => {
  const { isAuthenticated, isLoading } = useAuth();

  // Mostrar loading mientras se verifica la autenticación
  if (isLoading) {
    return (
      <div
        className="d-flex flex-column justify-content-center align-items-center"
        style={{ height: "100vh" }}
      >
        <Spinner animation="border" variant="primary" role="status">
          <span className="visually-hidden">Verificando sesión...</span>
        </Spinner>
        <p className="mt-3 text-muted">Verificando sesión...</p>
      </div>
    );
  }

  // Redirigir al login si no está autenticado
  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  // Renderizar el contenido protegido
  return children;
};

export default RouterProtect;
