import { http } from "./http";

export interface User {
  id?: number;
  nome: string;
  email: string;
  senha: string;
  tipo: "ALUNO" | "PROFESSOR" | "ADMIN";
}

export const UserAPI = {
  create: (body: User) =>
    http<User>("/users", {
      method: "POST",
      body: JSON.stringify(body),
    }),

  getById: (id: number) => http<User>(`/users/${id}`),

  getByTipo: (tipo: string) => http<User[]>(`/users/tipo/${tipo}`),

  delete: (id: number) =>
    http(`/users/${id}`, { method: "DELETE" }),
};
