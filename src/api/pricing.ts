import fetchApi from ".";

export const pricingAPI = {
  estimateCost: async (formData: FormData) => {
    return fetchApi('/web_act/estimate-cost/', {
      method: 'POST',
      body: formData
    });
  },

  getPricing: async () => {
    return fetchApi('/web_act/pricing/', {
      method: 'GET'
    });
  },
};
