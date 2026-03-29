import type { MetadataRoute } from "next";
import { blogArticles } from "@/data/blog-articles";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://seo.ihaveallergy.com";
  const now = new Date("2026-03-26");

  const staticPages: MetadataRoute.Sitemap = [
    { url: `${baseUrl}/`, lastModified: now, changeFrequency: "weekly", priority: 1 },
    { url: `${baseUrl}/about`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/services`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${baseUrl}/faq`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/contact`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${baseUrl}/blog`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${baseUrl}/guides`, lastModified: now, changeFrequency: "weekly", priority: 0.95 },
    { url: `${baseUrl}/guides/טעימות-ראשונות-אלרגנים`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${baseUrl}/guides/בדיקות-אלרגיה-ילדים-ישראל`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${baseUrl}/guides/זכויות-ילד-אלרגי-ישראל`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${baseUrl}/alergiya-beyeladim`, lastModified: now, changeFrequency: "monthly", priority: 0.95 },
    { url: `${baseUrl}/alergia-lemazon`, lastModified: now, changeFrequency: "monthly", priority: 0.95 },
    { url: `${baseUrl}/atopic-dermatitis`, lastModified: now, changeFrequency: "monthly", priority: 0.95 },
    { url: `${baseUrl}/dr-anna-brameli`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/whois`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    { url: `${baseUrl}/alergia-lechalav`, lastModified: now, changeFrequency: "monthly", priority: 0.95 },
    { url: `${baseUrl}/alergia-lebotnim`, lastModified: now, changeFrequency: "monthly", priority: 0.95 },
    { url: `${baseUrl}/alergia-lesumsum`, lastModified: now, changeFrequency: "monthly", priority: 0.95 },
    { url: `${baseUrl}/anaphylaxis`, lastModified: now, changeFrequency: "monthly", priority: 0.95 },
    { url: `${baseUrl}/immunotherapy`, lastModified: now, changeFrequency: "monthly", priority: 0.95 },
    { url: `${baseUrl}/areas`, lastModified: now, changeFrequency: "monthly", priority: 0.85 },
    { url: `${baseUrl}/areas/hod-hasharon`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${baseUrl}/areas/herzliya`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/areas/ramat-hasharon`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/areas/kfar-saba`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/areas/raanana`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/areas/netanya`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/areas/tel-aviv`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/areas/petah-tikva`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
  ];

  const blogPages: MetadataRoute.Sitemap = blogArticles.map((article) => ({
    url: `${baseUrl}/blog/${encodeURIComponent(article.slug)}`,
    lastModified: new Date(article.updatedAt || article.publishedAt),
    changeFrequency: "monthly" as const,
    priority: 0.85,
  }));

  return [...staticPages, ...blogPages];
}
