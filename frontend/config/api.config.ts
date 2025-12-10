import axios from "axios";

export const getApiConfig = () => {
  return axios.create({
    baseURL: "https://projeto-if-backend.onrender.com",
  });
};
