// Centralized API client (REST)
// Extend to add error handling, auth tokens, etc.
const BASE_URL = process.env.REACT_APP_API_URL || '/api';

export async function apiGet(path) {
  const res = await fetch(`${BASE_URL}${path}`, { credentials: 'include' });
  if (!res.ok) throw new Error('API error');
  return res.json();
}

// Add more generic methods: apiPost, apiPut, apiDelete as needed.
