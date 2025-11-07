// Este es el contenido para src/services/eventos.service.js (o como lo llames)

import { api } from './api';

const endpoint = 'eventos';

export const getAllEventos = () => api.get(endpoint);
export const getEventoById = (id) => api.get(`${endpoint}/${id}`);
export const addEvento = (evento) => api.post(endpoint, evento); // <-- ¡AQUÍ ESTÁ!
export const updateEvento = (id, evento) => api.put(`${endpoint}/${id}`, evento);
export const deleteEventoById = (id) => api.delete(`${endpoint}/${id}`);