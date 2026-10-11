import { clinic, type Locale } from "@/config/clinic";
import { siteUrl } from "@/config/site";

export function localizedMetadata(
  locale: Locale,
  path: string,
  title: string,
  description: string,
) {
  const routePath = path ? `/${locale}/${path}` : `/${locale}`;
  const translatedPath = (target: Locale) =>
    path ? `/${target}/${path}` : `/${target}`;

  return {
    title: { absolute: "Idhaya AYURVEDA" },
    description,
    alternates: {
      canonical: routePath,
      languages: {
        en: translatedPath("en"),
        ml: translatedPath("ml"),
      },
    },
    openGraph: {
      title,
      description,
      type: "website" as const,
      url: new URL(routePath, siteUrl).toString(),
      siteName: clinic.name,
    },
  };
}
