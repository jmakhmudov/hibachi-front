'use server'

const baseURL = process.env.API_URL || '';

interface FetchOptions extends RequestInit {
  headers?: Record<string, string>;
}

async function fetchApi(endpoint: string, options: FetchOptions = {}) {
  const { headers, ...restOptions } = options;

  const config: RequestInit = {
    ...restOptions,
    headers: {
      'Content-Type': 'application/json',
      ...headers,
    },
    credentials: 'include',
  };

  try {
    const response = await fetch(`${baseURL}/api${endpoint}`, config);

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData?.message || 'An error occurred');
    }

    return response.json();
  } catch (error) {
    console.error('Fetch API error:', error);
    throw error;
  }
}

export default fetchApi;
