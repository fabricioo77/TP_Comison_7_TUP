import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import AppLayout from "../layout/AppLayout";
import Login from "../pages/Login";
import Dashboard from "../dashboard/Dashboard";
import RouterProtect from "./RouterProtect";
import LibrosPage from "../pages/Libros/LibrosPage";
import FormLibro from "../pages/Libros/FormLibros";
import AlumnosPage from "../pages/Alumnos/AlumnosPage";
import FormAlumno from "../pages/Alumnos/FormAlumno";
import PrestamosPage from "../pages/Prestamos/PrestamoPage";
import FormPrestamo from "../pages/Prestamos/FormPrestamo";

export default function AppRouter() {
  return (
    <Routes>
      {/* Página pública */}
      <Route path="/login" element={<Login />} />

      {/* Layout protegido */}
      <Route element={<AppLayout />}>
        <Route
          path="/dashboard"
          element={
            <RouterProtect>
              <Dashboard />
            </RouterProtect>
          }
        />

        {/* Libros */}
        <Route
          path="/libros"
          element={
            <RouterProtect>
              <LibrosPage />
            </RouterProtect>
          }
        />
        <Route
          path="/libros/nuevo"
          element={
            <RouterProtect>
              <FormLibro />
            </RouterProtect>
          }
        />

        {/* Alumnos */}
        <Route
          path="/alumnos"
          element={
            <RouterProtect>
              <AlumnosPage />
            </RouterProtect>
          }
        />
        <Route
          path="/alumnos/nuevo"
          element={
            <RouterProtect>
              <FormAlumno />
            </RouterProtect>
          }
        />

        {/* Préstamos */}
        <Route
          path="/prestamos"
          element={
            <RouterProtect>
              <PrestamosPage />
            </RouterProtect>
          }
        />
        <Route
          path="/prestamos/nuevo"
          element={
            <RouterProtect>
              <FormPrestamo />
            </RouterProtect>
          }
        />
      </Route>

      {/* Rutas por defecto */}
      <Route path="/" element={<Navigate to="/login" replace />} />
      <Route path="*" element={<Navigate to="/login" replace />} />
    </Routes>
  );
}