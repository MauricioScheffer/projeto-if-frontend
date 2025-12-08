export const API_URL = "http://localhost:8080"; // backend rodando no Spring

export async function http<T>(
  endpoint: string,
  options?: RequestInit
): Promise<T> {
  const response = await fetch(`${API_URL}${endpoint}`, {
    headers: { "Content-Type": "application/json" },
    ...options,
  });

  if (!response.ok) {
    const msg = await response.text();
    throw new Error(msg || `Erro HTTP ${response.status}`);
  }

  return response.json() as Promise<T>;
}