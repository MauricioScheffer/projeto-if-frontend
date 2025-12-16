import { getApiConfig } from "../config/api.config";

type LoginRequest = {
  email: string;
  password: string;
};

type LoginResponse = {
  token: string;
};

type RegisterRequest = {
  email: string;
  password: string;
  name: string;
  type: string;
};

export const login = ({ email, password }: LoginRequest) => {
  const api = getApiConfig();
  return api.post<LoginResponse>("/users/login", {
    email,
    password,
  });
};

export const register = ({
  email,
  password,
  name,
  type,
}: RegisterRequest) => {
  const api = getApiConfig();
  return api.post("/users/new", {
    email,
    password,
    name,
    type,
  });
};
