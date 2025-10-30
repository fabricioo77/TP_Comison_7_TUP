import axios from 'axios';// libreria para hacer peticiones http
import {API} from '../endpoints/api';

// crear una instancia de axios con la URL base de la API
const api = axios.create({
    baseURL: API
});

export default api;
