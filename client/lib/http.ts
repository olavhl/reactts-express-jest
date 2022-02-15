export async function fetchJSON(url: string, options = {}) {
  const res = await fetch(url, options);
  if (!res.ok) {
    throw new Error(`Failed to fetch ${url}: ${res.status} ${res.statusText}`);
  }
  return await res.json();
}

export async function postJSON<T = unknown, P = unknown>(
  url: string,
  payload: { id: T; answer: P },
  method = "POST"
) {
  return await fetch(url, {
    method: method,
    body: JSON.stringify(payload),
    headers: {
      "Content-Type": "application/json",
    },
  });
}
