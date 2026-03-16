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

export async function generateStaticParams() {
  return blogArticles.map((article) => ({
    slug: article.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const article = blogArticles.find((a) => a.slug === slug) as
    | ArticleData
    | undefined;

  if (!article) {
    return {
      title: "כתבה לא נמצאה | ד״ר אנה ברמלי",
      description: "העמוד שחיפשת לא נמצא.",
    };
  }

  const canonical = `https://ihaveallergy.com/blog/${article.slug}`;
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
  const article = blogArticles.find((a) => a.slug === slug);

  if (!article) {
    notFound();
  }

  return <ArticleTemplate article={article} />;
}
