import axios from 'axios';

const API_URL = 'https://tma.kidcash.guru/api';

const api = axios.create({
  baseURL: API_URL,
});

// Добавляем токен в заголовки запросов
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('access_token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default api;