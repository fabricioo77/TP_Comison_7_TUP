import { Routes, Route } from 'react-router-dom';
import LoginPage from '../pages/LoginPage';
import DashboardPage from '../pages/DashboardPage';


const AppRouter = () => {
  return (
    <Routes>
      {/* Rutas públicas */}
      <Route path="/login" element={<LoginPage />} />
      
    
      <Route path="/dashboard" element={<DashboardPage />} />

     
      <Route path="/" element={<LoginPage />} />
      
     
      <Route path="*" element={<p>404 - Página no encontrada</p>} />
    </Routes>
  );
};

export default AppRouter;