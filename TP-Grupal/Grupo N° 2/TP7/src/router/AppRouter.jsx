import { Routes, Route, Navigate } from 'react-router-dom';
import LoginPage from '../pages/LoginPage';
import DashboardPage from "../pages/dashboard/Dashboard";
import MainLayout from "../layout/MainLayOut.jsx";
import ProtectedRoute from '../components/ProtectedRoute'; // <-- Asegúrate que la ruta sea correcta
import { useAuth } from '../context/AuthContext'; // <-- Asegúrate que la ruta sea correcta

const AppRouter = () => {
  // 2. Obtén el estado de autenticación
  const { isAuthenticated } = useAuth(); // O usa 'user', lo que tengas en tu AuthContext

  return (
    <Routes>
      {/* 3. RUTA LOGIN:
      */}
      <Route 
        path="/login" 
        element={isAuthenticated ? <Navigate to="/dashboard" replace /> : <LoginPage />} 
      />

      {/* 4. RUTAS PROTEGIDAS (Layout Principal):
          
      */}
      <Route 
        path="/" 
        element={
          <ProtectedRoute>
            <MainLayout />
          </ProtectedRoute>
        }
      >
        {/* Si el usuario SÍ está logueado y va a '/', lo mandamos al dashboard */}
        <Route index element={<Navigate to="/dashboard" replace />} />
        <Route path="dashboard" element={<DashboardPage />} />
        
        {/* Aquí puedes agregar más rutas protegidas que usen MainLayout */}
        {/* <Route path="profile" element={<ProfilePage />} /> */}
      </Route>

      {/* 5. RUTA 404:
        
      */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
};

export default AppRouter;