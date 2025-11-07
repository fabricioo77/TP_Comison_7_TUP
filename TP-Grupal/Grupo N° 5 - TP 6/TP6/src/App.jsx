import { Navigate, Route, Routes } from 'react-router-dom';

import IniciarSesion from './Components/FormLogin.jsx';
import Dashboard from './Pages/DashBoard/Dashboard.jsx';

import Artistas from './Pages/DashBoard/Artistas.jsx';
import Asistentes from './Pages/DashBoard/Asistentes.jsx';
import Eventos from './Pages/DashBoard/Eventos.jsx';

// 1. Importamos la RutaPrivada
import RutaPrivada from './Components/RutaPrivada.jsx';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Navigate to='/login' replace />} />

        {/* 2. Ruta Pública */}
        <Route path='/login' element={<IniciarSesion />} />

        {/* 3. Rutas Privadas Protegidas */}
        {/* Envolvemos el Dashboard con el componente RutaPrivada */}
        <Route element={<RutaPrivada />}>
          <Route path='/dashboard' element={<Dashboard />}>
            <Route index element={
              <div>
                <h1 style={{ color: '#2c3e50', marginBottom: '20px' }}>ADMINISTRACIÓN</h1>
                <p style={{ color: '#7f8c8d', fontSize: '16px' }}>
                  Selecciona una opción del menú lateral para comenzar
                </p>
              </div>
            } />
            <Route path='artistas' element={<Artistas />} />
            <Route path='asistentes' element={<Asistentes />} />
            <Route path='eventos' element={<Eventos />} />
          </Route>
        </Route>
        
        {/* Opcional: Una ruta "catch-all" por si no matchea nada */}
        <Route path='*' element={<Navigate to='/' replace />} />
      </Routes>
    </>
  );
}

export default App;