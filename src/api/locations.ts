import fetchApi from ".";

export const locationsAPI = {
  getAll: async () => {
    return fetchApi('/booking/locations/', {
      method: 'GET',
    });
  }
};
