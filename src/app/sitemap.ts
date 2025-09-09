// src/app/sitemap.ts
import { type MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl =
    process.env.NEXT_PUBLIC_BASE_URL ||
    "https://Nandha2002.github.io/Portfolio";

  const now = new Date();

  return [
    { url: `${baseUrl}/`, lastModified: now },
    { url: `${baseUrl}/about/`, lastModified: now },
    { url: `${baseUrl}/projects/`, lastModified: now },
    { url: `${baseUrl}/contact/`, lastModified: now },
  ];
}
