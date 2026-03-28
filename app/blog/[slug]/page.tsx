import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ArticleTemplate } from "@/components/blog/ArticleTemplate";
import { blogArticles } from "@/data/blog-articles";

type ArticleData = {
  slug: string;
  title: string;
  metaDescription: string;
  publishedAt: string;
  updatedAt?: string;
  metaTitle?: string;
};

interface Props {
  params: Promise<{
    slug: string;
  }>;
}

function normalizeSlug(slug: string): string {
  try {
    return decodeURIComponent(slug).trim();
  } catch {
    return slug.trim();
  }
}

export async function generateStaticParams() {
  return blogArticles.map((article) => ({
    slug: article.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const normalizedSlug = normalizeSlug(slug);

  const article = blogArticles.find(
    (a) => a.slug === normalizedSlug,
  ) as ArticleData | undefined;

  if (!article) {
    return {
      title: "כתבה לא נמצאה | ד״ר אנה ברמלי",
      description: "העמוד שחיפשת לא נמצא.",
    };
  }

  const canonical = `https://seo.ihaveallergy.com/blog/${encodeURIComponent(article.slug)}`;
  const title: string = article.metaTitle ?? article.title;
  const description: string = article.metaDescription;
  const publishedAt: string = article.publishedAt;
  const updatedAt: string = article.updatedAt ?? article.publishedAt;

  return {
    title,
    description,
    alternates: {
      canonical,
    },
    openGraph: {
      type: "article",
      url: canonical,
      title,
      description,
      locale: "he_IL",
      images: [
        {
          url: "https://ihaveallergy.com/og-logo.png",
        },
      ],
      publishedTime: publishedAt,
      modifiedTime: updatedAt,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["https://ihaveallergy.com/og-logo.png"],
    },
  };
}

export default async function BlogArticlePage({ params }: Props) {
  const { slug } = await params;
  const normalizedSlug = normalizeSlug(slug);

  const article = blogArticles.find((a) => a.slug === normalizedSlug);

  if (!article) {
    notFound();
  }

  const articleUrl = `https://seo.ihaveallergy.com/blog/${encodeURIComponent(article.slug)}`;

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "MedicalWebPage",
    headline: article.title,
    name: article.metaTitle ?? article.title,
    description: article.metaDescription,
    url: articleUrl,
    datePublished: article.publishedAt,
    dateModified: article.updatedAt || article.publishedAt,
    inLanguage: "he-IL",
    image: "https://ihaveallergy.com/og-logo.png",
    author: {
      "@type": "Physician",
      name: "ד״ר אנה ברמלי",
      jobTitle: "מומחית לאלרגיה ואימונולוגיה קלינית",
      url: "https://seo.ihaveallergy.com/dr-anna-brameli",
    },
    publisher: {
      "@type": "Organization",
      name: "I Have Allergy",
      url: "https://seo.ihaveallergy.com",
    },
    reviewedBy: {
      "@type": "Physician",
      name: "ד״ר אנה ברמלי",
    },
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "ראשי", item: "https://seo.ihaveallergy.com/" },
      { "@type": "ListItem", position: 2, name: "בלוג", item: "https://seo.ihaveallergy.com/blog" },
      { "@type": "ListItem", position: 3, name: article.title, item: articleUrl },
    ],
  };

  const faqSchema = article.faqs.length > 0
    ? {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: article.faqs.map((faq) => ({
          "@type": "Question",
          name: faq.question,
          acceptedAnswer: { "@type": "Answer", text: faq.answer },
        })),
      }
    : null;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      {faqSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      )}
      <ArticleTemplate article={article} />
    </>
  );
}
