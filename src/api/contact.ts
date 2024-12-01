import fetchApi from ".";

export const contactAPI = {
  sendMessage: async (formData: FormData) => {
    return fetchApi('/web_act/send-message/', {
      method: 'POST',
      body: formData,
    });
  }
};
