import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://www.cardcare.jp",
      lastModified: new Date(),
    },
    {
      url: "https://www.cardcare.jp/commerce",
      lastModified: new Date(),
    },
    {
      url: "https://www.cardcare.jp/privacy",
      lastModified: new Date(),
    },
    {
      url: "https://www.cardcare.jp/terms",
      lastModified: new Date(),
    },
    {
      url: "https://www.cardcare.jp/blog/annual-fee-free-condition",
      lastModified: new Date(),
    },
  ];
}