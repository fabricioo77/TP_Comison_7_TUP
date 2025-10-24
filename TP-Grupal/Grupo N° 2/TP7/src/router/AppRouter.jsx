import { Routes, Route, Navigate } from 'react-router-dom';
import LoginPage from '../pages/LoginPage';
import DashboardPage from "../pages/dashboard/Dashboard";
import MainLayout from "../layout/MainLayOut.jsx";
import ProtectedRoute from '../components/ProtectedRoute';


const AppRouter = () => {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      
      {/* Rutas protegidas */}
      <Route
        path="/dashboard"
        element={
          <ProtectedRoute>
            <DashboardPage />
          </ProtectedRoute>
        }
      />
      
      {/* Redirigir / a /login */}
      <Route path="/" element={<Navigate to="/login" replace />} />
      
      {/* Ruta 404 - redirige a login */}
      <Route path="*" element={<Navigate to="/login" replace />} />
    </Routes>
  );
};

export default AppRouter;
