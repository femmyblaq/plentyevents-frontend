// src/api/axios.js
import axios from "axios";

const api = axios.create({
  baseURL: "https://plenty-events.vercel.app/api",
  headers: {
    "Content-Type": "application/json",
  },
});

// Attach token from localStorage automatically before every request
api.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// Helper function if you want to set/remove manually
export function setAuthToken(token) {
  if (token) {
    localStorage.setItem("token", token); // save token in storage
    api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  } else {
    localStorage.removeItem("token"); // clear on logout
    delete api.defaults.headers.common["Authorization"];
  }
}

export default api;
