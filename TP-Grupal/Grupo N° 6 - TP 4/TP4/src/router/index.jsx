import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import AppLayout from "../layout/AppLayout";
import Login from "../pages/Login";

// Páginas
import Dashboard from "../dashboard/Dashboard";
import LibrosPage from "../pages/Libros/LibrosPage";
import FormLibro from "../pages/Libros/FormLibros";
import AlumnosPage from "../pages/Alumnos/AlumnosPage";
import FormAlumno from "../pages/Alumnos/FormAlumno";
import PrestamosPage from "../pages/Prestamos/PrestamoPage";
import FormPrestamo from "../pages/Prestamos/FormPrestamo";
import About from "../pages/About"
import Audit from "../pages/Audit"; // si no existe, borrar esta línea y la ruta

// 🔐 Protección (IMPORTAR UNA SOLA VEZ)
import RouterProtect, { RequireAdmin } from "./RouterProtect";
import DashboardSidebar from "../dashboard/DashboardSidebar";

export default function AppRouter() {
  return (
    <Routes>
      {/* Pública */}
      <Route path="/login" element={<Login />} />
      

      {/* Privadas con layout */}
      <Route element={<AppLayout />}>
        <Route path="/about" element={<About />} />
        <Route
          path="/dashboard"
          element={
            <RouterProtect>
              <Dashboard/>
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

        {/* Audit (solo admin) */}
        <Route
          path="/audit"
          element={
            <RouterProtect>
              <RequireAdmin>
                <Audit />
              </RequireAdmin>
            </RouterProtect>
          }
        />
      </Route>

      {/* Default/Fallback */}
      <Route path="/" element={<Navigate to="/login" replace />} />
      <Route path="*" element={<Navigate to="/login" replace />} />
    </Routes>
  );
}
