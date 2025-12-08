import { getApiConfig } from "../config/api.config"

export const login = (email, password) => {
    const api = getApiConfig()
    api.post("/users/login", {
        email, password
    })

}