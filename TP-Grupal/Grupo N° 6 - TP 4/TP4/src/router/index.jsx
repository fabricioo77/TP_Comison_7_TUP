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
import About from "../pages/About";
import NotFound from "../pages/NotFound";
import Audit from "../pages/Audit";
import RouterProtect, { RequireAdmin } from "./RouterProtect";

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
        <Route path="/libros" element={<RouterProtect><LibrosPage /></RouterProtect>} />
        <Route path="/libros/nuevo" element={<RouterProtect><FormLibro /></RouterProtect>} />

        {/* Alumnos */}
        <Route path="/alumnos" element={<RouterProtect><AlumnosPage /></RouterProtect>} />
        <Route path="/alumnos/nuevo" element={<RouterProtect><FormAlumno /></RouterProtect>} />

        {/* Préstamos */}
        <Route path="/prestamos" element={<RouterProtect><PrestamosPage /></RouterProtect>} />
        <Route path="/prestamos/nuevo" element={<RouterProtect><FormPrestamo /></RouterProtect>} />

        {/* About (visible solo logueado para mantener el flujo) */}
        <Route path="/about" element={<RouterProtect><About /></RouterProtect>} />
      </Route>

      {/* Audit (solo admin) */}
        <Route
          path="/audit"
          element={
            <RouterProtect requiredRole="admin">
              <RequireAdmin>
              <Audit />
              </RequireAdmin>
            </RouterProtect>
          }
        />
      


      {/* Defaults */}
      <Route path="/" element={<Navigate to="/login" replace />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}


// Login con:

// admin@escuela.edu / 1234 → debe ver Audit en el navbar y entrar a /audit.

// ana@escuela.edu / 1234 → no debe ver “Audit” y si entra a /audit, lo redirige a /dashboard.