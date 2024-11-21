import { LocaleType } from "@/i18n/routing";
import fetchApi from ".";

export const featuredListApi = {
  getList: async () => {
    return fetchApi('/v1/featured-list', {
      method: 'GET',
    });
  },
  getListDetail: async (key: string, lang: LocaleType) => {
    const params = new URLSearchParams({
      lang,
    });

    return fetchApi(`/v1/featured-list/${key}?${params.toString()}`, {
      method: 'GET',
    });
  },
};
