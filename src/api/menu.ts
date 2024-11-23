import fetchApi from ".";

export const menuAPI = {
  getMeals: async () => {
    return fetchApi(`/web_act/meals/`, {
      method: 'GET',
    });
  },
};
