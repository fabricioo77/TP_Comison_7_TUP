import { Navigate, Outlet } from 'react-router-dom';

const RutaPrivada = () => {
  // Comprueba si el usuario está logueado según localStorage
  const isLogged = localStorage.getItem('usuarioLogueado') === 'Si';

  if (!isLogged) {
    // Si no está logueado, redirige al login
    return <Navigate to="/login" replace />;
  }

  // Si está logueado, renderiza el contenido (Dashboard y sus hijos)
  return <Outlet />;
};

export default RutaPrivada;