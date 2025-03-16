import { locationsAPI } from "@/api/locations";
import { LocationType } from "@/types";
import { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const locations: LocationType[] = await locationsAPI.getAll();

  const locationsPages: MetadataRoute.Sitemap = locations.map(({ slug }) => ({
    url: `https://hibachibybamboo.com/appointment/${slug}/`,
  }));

  return [
    {
      url: "https://hibachibybamboo.com/"
    },
    {
      url: "https://hibachibybamboo.com/about-us"
    },
    {
      url: "https://hibachibybamboo.com/estimate"
    },
    {
      url: "https://hibachibybamboo.com/faq"
    },
    {
      url: "https://hibachibybamboo.com/locations"
    },
    ...locationsPages
  ]
}