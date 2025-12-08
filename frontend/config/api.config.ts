import axios from "axios"

export const getApiConfig = () => {
  return axios.create({
    url: "https://projeto-if-backend.onrender.com"
  })
} 