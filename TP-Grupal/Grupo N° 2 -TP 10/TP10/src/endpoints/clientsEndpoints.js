// endpoints/clientEndpoints.js
const API_URL = 'http://localhost:5000';

export const getClients = async () => {
  const response = await fetch(`${API_URL}/clients`);
  if (!response.ok) {
    throw new Error('Error al obtener los clientes');
  }
  return await response.json();
};

// ...crea archivos similares para 'serviceEndpoints.js' y 'appointmentEndpoints.js'