import fetchApi from ".";

export const videoAPI = {
  getVideos: async () => {
    return fetchApi('/web_act/videos/', {
      method: 'GET'
    });
  },
};
