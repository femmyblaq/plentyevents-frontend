// src/api/axios.js
import axios from "axios";

const api = axios.create({
  baseURL: "https://plenty-events-backend.vercel.app/api",
  headers: {
    "Content-Type": "application/json",
  },
});

// api.interceptors.request.use(
//   (config) => {
//     const token = localStorage.getItem("token");
//     if (token) {
//       config.headers.Authorization = `Bearer ${token}`;
//     }
//     return config;
//   })

export function setAuthToken(token) {
  if(token) {
    api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  }else {
    api.defaults.headers.common['Authorization']; 

  }
}

export default api;