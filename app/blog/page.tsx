import type { Metadata } from "next";
import BlogClient from "./BlogClient";
import { blogArticles } from "@/data/blog-articles";

export const metadata: Metadata = {
  title: "בלוג אלרגיה לילדים | ד״ר אנה ברמלי – מומחית לאלרגיה ואימונולוגיה",
  description:
    "מאמרים רפואיים מבוססי ראיות על אלרגיה בילדים: תסמינים, אבחון, טיפול וזכויות. נכתבו ונסקרו על ידי ד״ר אנה ברמלי.",
  alternates: {
    canonical: "https://seo.ihaveallergy.com/blog",
  },
  openGraph: {
    type: "website",
    url: "https://seo.ihaveallergy.com/blog",
    title: "בלוג אלרגיה לילדים | ד״ר אנה ברמלי",
    description:
      "מאמרים רפואיים מבוססי ראיות על אלרגיה בילדים: תסמינים, אבחון וטיפול.",
    images: [
      {
        url: "https://ihaveallergy.com/og-logo.png",
      },
    ],
    locale: "he_IL",
  },
  twitter: {
    card: "summary_large_image",
    title: "בלוג אלרגיה לילדים | ד״ר אנה ברמלי",
    description:
      "מאמרים רפואיים מבוססי ראיות על אלרגיה בילדים: תסמינים, אבחון וטיפול.",
    images: ["https://ihaveallergy.com/og-logo.png"],
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "ראשי", item: "https://seo.ihaveallergy.com/" },
    { "@type": "ListItem", position: 2, name: "בלוג", item: "https://seo.ihaveallergy.com/blog" },
  ],
};

const blogSchema = {
  "@context": "https://schema.org",
  "@type": "Blog",
  name: "בלוג אלרגיה לילדים | ד״ר אנה ברמלי",
  description: "מאמרים רפואיים מבוססי ראיות על אלרגיה בילדים: תסמינים, אבחון, טיפול וזכויות.",
  url: "https://seo.ihaveallergy.com/blog",
  inLanguage: "he-IL",
  author: {
    "@type": "Physician",
    name: "ד״ר אנה ברמלי",
    jobTitle: "מומחית לאלרגיה ואימונולוגיה",
    url: "https://seo.ihaveallergy.com/dr-anna-brameli",
  },
  publisher: {
    "@type": "Organization",
    name: "I Have Allergy",
    url: "https://ihaveallergy.com/",
  },
  blogPost: blogArticles.map((a) => ({
    "@type": "BlogPosting",
    headline: a.title,
    url: `https://seo.ihaveallergy.com/blog/${encodeURIComponent(a.slug)}`,
    datePublished: a.publishedAt,
    dateModified: a.updatedAt || a.publishedAt,
  })),
};

export default function BlogPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogSchema) }}
      />
      <BlogClient />
    </>
  );
}
