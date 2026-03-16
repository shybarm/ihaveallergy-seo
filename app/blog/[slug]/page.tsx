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

export default async function BlogArticlePage({ params }: Props) {
  const { slug } = await params;
  const article = blogArticles.find((a) => a.slug === slug);

  if (!article) {
    notFound();
  }

  return <ArticleTemplate article={article} />;
}
