import fetchApi from ".";

export const featuredListApi = {
  getList: async () => {
    return fetchApi('/v1/featured-list', {
      method: 'GET',
    });
  },
  getListDetail: async (key: string) => {

    return fetchApi(`/v1/featured-list/${key}`, {
      method: 'GET',
    });
  },
};
