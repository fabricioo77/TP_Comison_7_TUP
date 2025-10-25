// En tu archivo main.jsx o index.js

import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext'; 
import AppRouter from './router/AppRouter'; 


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   
    <AuthProvider>
      <BrowserRouter>
        <AppRouter /> 
      </BrowserRouter>
    </AuthProvider>
  </React.StrictMode>
);

import 'bootstrap/dist/css/bootstrap.min.css';