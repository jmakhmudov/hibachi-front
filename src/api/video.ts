import fetchApi from ".";

export const videoAPI = {
  getVideo: async () => {
    return fetchApi('/web_act/videos/', {
      method: 'GET'
    });
  },
};
