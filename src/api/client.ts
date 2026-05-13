const BASE_URL = process.env.REACT_APP_API_URL || '';

interface FetchOptions extends RequestInit {
  timeout?: number;
}

export async function apiFetch<T>(endpoint: string, options: FetchOptions = {}): Promise<T> {
  const { timeout = 8000, ...rest } = options;
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), timeout);
  try {
    const res = await fetch(`${BASE_URL}${endpoint}`, {
      ...rest,
      signal: controller.signal,
      headers: { 'Content-Type': 'application/json', ...rest.headers },
    });
    clearTimeout(timer);
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    return res.json() as Promise<T>;
  } catch (err) {
    clearTimeout(timer);
    throw err;
  }
}
