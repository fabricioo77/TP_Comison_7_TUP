import { Navigate, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import IniciarSesion from './Pages/Inicio';
import Dashboard from './Pages/DashBoard/Dashboard';
import Artista from './Components/ArtistaCard';
import Asistente from './Pages/DashBoard/Asistentes';
import Eventos from './Pages/DashBoard/Eventos';
function App() {
  return (
    <>
      <Routes>
        
        <Route path='/' element={<Navigate to='/login' replace />} />

        
        <Route path='/login' element={<IniciarSesion />} />

        
        <Route path='/dashboard' element={<Dashboard />}>
          <Route index element={
            <div>
              <h1 style={{ color: '#2c3e50', marginBottom: '20px' }}>ADMINISTRACIÓN</h1>
              <p style={{ color: '#7f8c8d', fontSize: '16px' }}>
                Selecciona una opción del menú lateral para comenzar
              </p>
            </div>
          } />
          <Route path='artistas' element={<Artista />} />
          <Route path='asistentes' element={<Asistente />} />
          <Route path='eventos' element={<Eventos />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
