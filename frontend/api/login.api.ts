import { getApiConfig } from "../config/api.config";

type LoginResponse = {
  token: string;
};

type LoginRequest = {
  email: string;
  password: string;
};

export const login = ({ email, password }: LoginRequest) => {
  const api = getApiConfig();
  return api.post<LoginResponse>("/users/login", {
    email,
    password,
  });
};
