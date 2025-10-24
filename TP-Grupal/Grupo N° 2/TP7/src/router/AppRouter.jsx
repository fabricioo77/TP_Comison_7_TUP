import { Routes, Route, Navigate } from 'react-router-dom';
import LoginPage from '../pages/LoginPage';
import DashboardPage from "../pages/dashboard/Dashboard";
import MainLayout from "../layout/MainLayOut.jsx";


const AppRouter = () => {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />

      <Route path="/" element={<MainLayout />}>

        <Route index element={<Navigate to="/dashboard" replace />} />
        <Route path="dashboard" element={<DashboardPage />} />
        
      </Route>

      <Route path="*" element={<p>404 - Página no encontrada</p>} />
    </Routes>
  );
};

export default AppRouter;
