import fetchApi from ".";

export const pricingAPI = {
  estimateCost: async (body: string) => {
    return fetchApi('/web_act/estimate-cost/', {
      method: 'POST',
      body: body,
      headers: {
        'Content-Type': 'application/json'
      }
    });
  },

  getPricing: async () => {
    return fetchApi('/web_act/pricing/', {
      method: 'GET'
    });
  },
};
