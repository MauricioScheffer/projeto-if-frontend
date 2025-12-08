import { http } from "./http";

export interface News {
  id?: number;
  titulo: string;
  resumo: string;
  conteudo: string;
  data: string;
  link?: string;
}

export const NewsAPI = {
  getAll: () => http<News[]>("/news"),

  getById: (id: number) => http<News>(`/news/${id}`),

  create: (body: News) =>
    http<News>("/news", {
      method: "POST",
      body: JSON.stringify(body),
    }),

  delete: (id: number) =>
    http<void>(`/news/${id}`, {
      method: "DELETE",
    }),
};
