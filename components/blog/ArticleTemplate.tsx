"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Clock, Calendar, ChevronLeft, ArrowRight, Phone } from "lucide-react";

type ArticleSection = {
  id: string;
  title: string;
  content: string;
};

type ArticleFaq = {
  question: string;
  answer: string;
};

type ArticleTemplateArticle = {
  slug: string;
  title: string;
  metaDescription: string;
  categoryLabel: string;
  publishedAt: string;
  readingTime: number;
  updatedAt?: string;
  sections?: ArticleSection[];
  faqs?: ArticleFaq[];
  relatedSlugs?: string[];
};

interface ArticleTemplateProps {
  article: ArticleTemplateArticle;
}

function renderContentWithLinks(content: string): React.ReactNode[] {
  const linkRegex =
    /([^\n(]+?)\s*\((\/(blog|guides|knowledge|about|services|contact|faq)[^\s)]*)\)/g;

  const parts: React.ReactNode[] = [];
  let lastIndex = 0;
  let match: RegExpExecArray | null;

  while ((match = linkRegex.exec(content)) !== null) {
    if (match.index > lastIndex) {
      parts.push(content.slice(lastIndex, match.index));
    }

    const linkText = match[1].trim();
    const linkPath = match[2];

    parts.push(
      <Link
        key={match.index}
        href={linkPath}
        className="font-medium text-primary hover:underline"
      >
        {linkText}
      </Link>,
    );

    lastIndex = match.index + match[0].length;
  }

  if (lastIndex < content.length) {
    parts.push(content.slice(lastIndex));
  }

  return parts;
}

function formatHebrewDate(dateStr: string): string {
  const months = [
    "ינואר",
    "פברואר",
    "מרץ",
    "אפריל",
    "מאי",
    "יוני",
    "יולי",
    "אוגוסט",
    "ספטמבר",
    "אוקטובר",
    "נובמבר",
    "דצמבר",
  ];

  const d = new Date(dateStr);
  return `${d.getDate()} ב${months[d.getMonth()]} ${d.getFullYear()}`;
}

export function ArticleTemplate({ article }: ArticleTemplateProps) {
  const displayDate = article.updatedAt ?? article.publishedAt;

  const sections =
    article.sections && article.sections.length > 0
      ? article.sections
      : [
          {
            id: "overview",
            title: "סקירה כללית",
            content: article.metaDescription,
          },
        ];

  const faqs = article.faqs ?? [];
  const relatedSlugs = article.relatedSlugs ?? [];

  return (
    <>
      <article className="gradient-hero py-12 md:py-16">
        <div className="container-medical max-w-3xl">
          <nav
            aria-label="Breadcrumb"
            className="mb-8 flex items-center gap-2 text-sm text-muted-foreground"
          >
            <Link href="/" className="transition-colors hover:text-foreground">
              ראשי
            </Link>
            <ChevronLeft className="h-3.5 w-3.5" />
            <Link href="/blog" className="transition-colors hover:text-foreground">
              בלוג
            </Link>
            <ChevronLeft className="h-3.5 w-3.5" />
            <span className="text-foreground">{article.categoryLabel}</span>
          </nav>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="mb-4 inline-block rounded-full bg-accent px-3 py-1 text-xs font-medium text-primary">
              {article.categoryLabel}
            </span>

            <h1 className="text-balance mb-6 font-bold text-foreground">
              {article.title}
            </h1>

            <div className="mb-8 flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
              <span className="flex items-center gap-1.5">
                <Calendar className="h-4 w-4" />
                {formatHebrewDate(displayDate)}
              </span>
              <span className="flex items-center gap-1.5">
                <Clock className="h-4 w-4" />
                {article.readingTime} דקות קריאה
              </span>
            </div>

            <div className="rounded-2xl border border-border/60 bg-card p-5">
              <div className="flex items-center gap-3">
                <div className="gradient-teal shadow-teal flex h-12 w-12 items-center justify-center rounded-xl">
                  <span className="text-lg font-bold text-primary-foreground">א</span>
                </div>
                <div>
                  <p className="font-semibold text-foreground">ד״ר אנה ברמלי</p>
                  <p className="text-sm text-muted-foreground">
                    מומחית לאלרגיה ואימונולוגיה
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </article>

      <div className="container-medical max-w-3xl space-y-10 py-12 md:py-16">
        {sections.map((section, index) => (
          <motion.section
            key={section.id}
            id={section.id}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.05 }}
          >
            <h2 className="mb-4 text-xl font-bold text-foreground md:text-2xl">
              {section.title}
            </h2>

            <div className="prose-content whitespace-pre-line leading-relaxed text-muted-foreground">
              {renderContentWithLinks(section.content)}
            </div>
          </motion.section>
        ))}

        {faqs.length > 0 && (
          <section className="pt-4">
            <h2 className="mb-6 text-xl font-bold text-foreground md:text-2xl">
              שאלות נפוצות
            </h2>

            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className="rounded-2xl border border-border/60 bg-card p-6"
                >
                  <h3 className="mb-3 text-lg font-semibold text-foreground">
                    {faq.question}
                  </h3>
                  <p className="leading-relaxed text-muted-foreground">
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>
          </section>
        )}

        <section className="rounded-3xl bg-surface-warm p-8 text-center md:p-10">
          <h2 className="mb-4 text-xl font-bold text-foreground md:text-2xl">
            רוצים ייעוץ מקצועי?
          </h2>
          <p className="mx-auto mb-8 max-w-2xl text-lg text-muted-foreground">
            אם יש חשד לאלרגיה, תגובה למזון, שיעול כרוני, נזלת אלרגית או צורך
            בבירור מסודר - אפשר לפנות למרפאה לתיאום תור.
          </p>

          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-6 py-3 text-primary-foreground transition-opacity hover:opacity-90"
          >
            <Phone className="h-5 w-5" />
            קביעת תור ויצירת קשר
          </Link>
        </section>

        {relatedSlugs.length > 0 && (
          <section>
            <h2 className="mb-5 text-xl font-bold text-foreground">
              מאמרים קשורים
            </h2>

            <div className="grid gap-4 sm:grid-cols-2">
              {relatedSlugs.map((slug) => (
                <Link
                  key={slug}
                  href={`/blog/${slug}`}
                  className="group rounded-2xl border border-border/60 bg-card p-5 card-hover"
                >
                  <span className="text-xs font-medium text-primary">
                    מאמר קשור
                  </span>
                  <h3 className="mt-2 text-base font-semibold text-foreground transition-colors group-hover:text-primary">
                    {slug.replace(/-/g, " ")}
                  </h3>
                  <span className="mt-3 flex items-center gap-1 text-sm text-primary">
                    <ArrowRight className="h-3.5 w-3.5" />
                    קרא עוד
                  </span>
                </Link>
              ))}
            </div>
          </section>
        )}
      </div>
    </>
  );
}
