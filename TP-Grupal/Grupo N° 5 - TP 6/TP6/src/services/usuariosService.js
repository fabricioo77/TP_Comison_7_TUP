import { api } from './api';

// Usamos json-server para buscar por email
export const getUsuarioPorEmail = async (email) => {
  if (!email) return null;
  const users = await api.get(`usuarios?email_like=${email.toLowerCase()}`);
  return users.length > 0 ? users[0] : null;
};