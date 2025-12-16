import axios from "axios";

export const getApiConfig = () => {
  const api = axios.create({
    baseURL: "https://projeto-if-backend.onrender.com",
  });

  api.interceptors.request.use((config) => {
    const token = localStorage.getItem("token");

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  });

  return api;
};
