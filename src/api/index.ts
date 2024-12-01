'use server'

const baseURL = process.env.API_URL || '';

interface FetchOptions extends RequestInit {
  headers?: Record<string, string>;
}

async function fetchApi(endpoint: string, options: FetchOptions = {}) {
  try {
    const response = await fetch(`${baseURL}/api${endpoint}`, options);

    if (!response.ok) {
      const errorData = await response.json();
      console.log(errorData);
    }

    return response.json();
  } catch (error) {
    console.error('Fetch API error:', error);
    throw error;
  }
}

export default fetchApi;
