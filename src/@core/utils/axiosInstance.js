// utils/axiosInstance.js
import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: "http://localhost:5000/api", // use .env for base URL
  timeout: 10000, // optional
  headers: {
    'Content-Type': 'application/json',
  },
});

// Optionally handle interceptors (for auth tokens, errors, etc.)
axiosInstance.interceptors.request.use(
  (config) => {
    const token = typeof window !== "undefined" ? localStorage.getItem('token') : null;
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

export default axiosInstance;
