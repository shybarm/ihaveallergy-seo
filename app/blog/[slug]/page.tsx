import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ArticleTemplate } from "@/components/blog/ArticleTemplate";
import { blogArticles } from "@/data/blog-articles";

interface Props {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return blogArticles.map((article) => ({
    slug: article.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const article = blogArticles.find((a) => a.slug === slug);

  if (!article) {
    return {
      title: "כתבה לא נמצאה | ד״ר אנה ברמלי",
      description: "העמוד שחיפשת לא נמצא.",
    };
  }

  const canonical = `https://ihaveallergy.com/blog/${article.slug}`;
  const title = "metaTitle" in article ? article.metaTitle : article.title;
  const description = article.metaDescription;
  const publishedAt = article.publishedAt;
  const updatedAt =
    "updatedAt" in article && article.updatedAt
      ? article.updatedAt
      : article.publishedAt;

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
  const article = blogArticles.find((a) => a.slug === slug);

  if (!article) {
    notFound();
  }

  return <ArticleTemplate article={article} />;
}
