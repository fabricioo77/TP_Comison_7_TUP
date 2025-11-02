import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from '../layout/Layout';
import Home from '../pages/Home';
import Dashboard from '../dashboard/Dashboard';
import Login from '../pages/Login';
import Pacientes from '../pages/Pacientes';
import Register from '../pages/Register';
import NotFound from '../pages/NotFound';
import RouterProtect from './RouterProtect';

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}> 
          <Route index element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route
            path="dashboard"
            element={
              <RouterProtect>
                <Dashboard />
              </RouterProtect>
            }
          />
          <Route
            path="pacientes"
            element={
              <RouterProtect>
                <Pacientes />
              </RouterProtect>
            }
          />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default AppRouter;
