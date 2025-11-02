import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "../layout/Layout";
import Home from "../pages/Home";
import Dashboard from "../dashboard/Dashboard";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Pacientes from "../pages/Pacientes";
import Doctores from "../pages/Doctores";
import Turnos from "../pages/Turnos";
import NotFound from "../pages/NotFound";
import RouterProtect from "./RouterProtect";

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

          <Route
            path="doctores"
            element={
              <RouterProtect>
                <Doctores />
              </RouterProtect>
            }
          />

          <Route
            path="turnos"
            element={
              <RouterProtect>
                <Turnos />
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
