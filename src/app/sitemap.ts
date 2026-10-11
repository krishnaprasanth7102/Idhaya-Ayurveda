import type { MetadataRoute } from "next";
import { locales } from "@/config/clinic";
import { siteUrl } from "@/config/site";
import { treatments } from "@/lib/content";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = [
    "",
    "/about",
    "/treatments",
    "/doctor",
    "/contact",
    "/appointment",
    "/privacy",
  ];
  const urls = locales.flatMap((locale) => [
    ...pages.map((page) => `/${locale}${page}`),
    ...treatments.map(
      (treatment) => `/${locale}/treatments/${treatment.slug}`,
    ),
  ]);

  return urls.map((path) => ({
    url: new URL(path, siteUrl).toString(),
    alternates: {
      languages: {
        en: new URL(path.replace(/^\/ml(?=\/|$)/, "/en"), siteUrl).toString(),
        ml: new URL(path.replace(/^\/en(?=\/|$)/, "/ml"), siteUrl).toString(),
      },
    },
  }));
}
