// Este es el contenido para src/services/eventos.service.js (o como lo llames)

import { api } from './api';

const endpoint = 'eventos';

export const getAllEventos = () => api.get(endpoint);
export const getEventoById = (id) => api.get(`${endpoint}/${id}`);
export const addEvento = (evento) => api.post(endpoint, evento); // <-- ¡AQUÍ ESTÁ!
export const updateEvento = (id, evento) => api.put(`${endpoint}/${id}`, evento);
export const deleteEventoById = (id) => api.delete(`${endpoint}/${id}`);

export const asociarArtistaAEvento = (idEvento, idArtista) => {
  // Esta ruta es un ejemplo, ajústala a tu backend
  return api.post(`${endpoint}/${idEvento}/artistas`, { idArtista });
};

// Función para inscribir un asistente a un evento
export const inscribirAsistenteAEvento = (idEvento, idAsistente) => {
  // Esta ruta es un ejemplo, ajústala a tu backend
  return api.post(`${endpoint}/${idEvento}/asistentes`, { idAsistente });
};

export const removerArtistaDeEvento = (idEvento, idArtista) => {
  // Llama a la ruta DELETE que creamos en el backend
  return api.delete(`${endpoint}/${idEvento}/artistas/${idArtista}`);
};

export const removerAsistenteDeEvento = (idEvento, idAsistente) => {
  // Llama a la ruta DELETE que creamos en el backend
  return api.delete(`${endpoint}/${idEvento}/asistentes/${idAsistente}`);
};