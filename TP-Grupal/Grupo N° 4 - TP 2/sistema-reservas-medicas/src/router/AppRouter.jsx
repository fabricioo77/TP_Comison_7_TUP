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
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route 
            path="/dashboard" 
            element={
              <RouterProtect>
                <Dashboard />
              </RouterProtect>
            } 
          />
          <Route 
            path="/pacientes" 
            element={
              <RouterProtect>
                <Pacientes />
              </RouterProtect>
            } 
          />
          {/* Catch-all 404 route */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default AppRouter;
