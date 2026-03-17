import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://seo.ihaveallergy.com";

  return [
    {
      url: `${baseUrl}/`,
      lastModified: new Date("2026-03-17"),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date("2026-03-17"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/services`,
      lastModified: new Date("2026-03-17"),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/faq`,
      lastModified: new Date("2026-03-17"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date("2026-03-17"),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date("2026-03-17"),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/guides`,
      lastModified: new Date("2026-03-17"),
      changeFrequency: "weekly",
      priority: 0.95,
    },
    {
      url: `${baseUrl}/guides/טעימות-ראשונות-אלרגנים`,
      lastModified: new Date("2026-03-17"),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/guides/בדיקות-אלרגיה-ילדים-ישראל`,
      lastModified: new Date("2026-03-17"),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/guides/זכויות-ילד-אלרגי-ישראל`,
      lastModified: new Date("2026-03-17"),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/dr-anna-brameli`,
      lastModified: new Date("2026-03-17"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/whois`,
      lastModified: new Date("2026-03-17"),
      changeFrequency: "monthly",
      priority: 0.6,
    },
  ];
}
