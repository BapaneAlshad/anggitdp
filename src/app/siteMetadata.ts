import type { Metadata } from "next";
import { profile, seo } from "../data/siteData";

const configuredSiteUrl = process.env.NEXT_PUBLIC_SITE_URL
  ?? (process.env.VERCEL_PROJECT_PRODUCTION_URL ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}` : undefined);
export const siteUrl = configuredSiteUrl ? new URL(configuredSiteUrl) : undefined;

export function createPageMetadata(path: string, title: string, description: string): Metadata {
  const images = siteUrl ? [{ url: new URL("/og-image.png", siteUrl), width: 1200, height: 630, alt: seo.title }] : [];
  return {
    title,
    description,
    ...(siteUrl ? { alternates: { canonical: path } } : {}),
    openGraph: {
      type: "website",
      locale: seo.locale,
      siteName: profile.name,
      title,
      description,
      images,
      ...(siteUrl ? { url: new URL(path, siteUrl) } : {}),
    },
    twitter: { card: "summary_large_image", title, description, images: images.map((image) => image.url) },
  };
}
