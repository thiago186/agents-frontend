import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL;

const api = axios.create({
    baseURL: API_URL,
    withCredentials: true,
});

export const login = async (credentials) => {
  const response = await api.post('/auth/login', credentials);
  return response.data;
};

export default api;