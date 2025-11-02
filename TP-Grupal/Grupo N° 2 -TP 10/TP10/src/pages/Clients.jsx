// src/pages/Clients.jsx
import React from 'react';
import { Spinner, Alert, Button } from 'react-bootstrap';
import DataTable from '../components/DataTable';
import ClientForm from '../components/ClientForm';
import { useApi } from '../hooks/useApi'; 
import {getClients,deleteClient} from '../services/ClientService';
import "../styles/clients.css";

export default function Clients() {
  
  const { data: clients, loading, error} = useApi(getClients); 

 const handleDelete = async (id, name) => {
    // Pedimos confirmación
    if (window.confirm(`¿Estás seguro de que deseas eliminar a ${name}?`)) {
      try {
        await deleteClient(id);
        alert('Cliente eliminado con éxito.');
        // Recarga la página para ver los cambios
        window.location.reload(); 
      } catch (err) {
        alert('Error al eliminar el cliente.');
        console.error(err);
      }
    }
  };



  if (loading) {
    return (
      <div className="text-center mt-5">
        <Spinner animation="border" variant="primary" />
        <p className="mt-2 text-muted">Cargando clientes...</p>
      </div>
    );
  }

  if (error) {
    return <Alert variant="danger">Error al cargar datos: {error}</Alert>;
  }

 return (
    <div className="clients-container">
      <h4 className="clients-title">Gestión de Clientes</h4>
      <ClientForm /> 
      <div className="table-wrapper">
        <DataTable
          // 4. Añade la columna "Acciones"
          columns={["ID", "Nombre", "Email", "Acciones"]}
          data={clients ? clients.map((c) => [
            c.id,
            c.name,
            c.email,
            
            <Button 
              variant="danger" 
              size="sm"
              onClick={() => handleDelete(c.id, c.name)}
            >
              Borrar
            </Button>
          ]) : []}
        />
      </div>
    </div>
  );
}