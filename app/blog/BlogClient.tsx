"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Clock, ArrowRight } from "lucide-react";
import {
  blogArticles,
  blogCategories,
  type BlogArticle,
} from "@/data/blog-articles";

const categoryKeys = Object.keys(blogCategories) as BlogArticle["category"][];

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

export default function BlogClient() {
  const [activeCategory, setActiveCategory] =
    useState<BlogArticle["category"] | null>(null);

  const filtered = activeCategory
    ? blogArticles.filter((a) => a.category === activeCategory)
    : blogArticles;

  return (
    <>
      <section className="gradient-hero py-16 md:py-20">
        <div className="container-medical">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-2xl"
          >
            <h1 className="font-bold text-foreground mb-4">
              בלוג אלרגיה לילדים
            </h1>

            <p className="text-lg text-muted-foreground leading-relaxed">
              מידע רפואי מהימן ומבוסס ראיות על אלרגיה בילדים. נכתב ונסקר על ידי
              ד״ר אנה ברמלי, מומחית לאלרגיה ואימונולוגיה.
            </p>
          </motion.div>

          <div className="flex flex-wrap gap-2 mt-8">
            <button
              onClick={() => setActiveCategory(null)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                !activeCategory
                  ? "bg-primary text-primary-foreground"
                  : "bg-card text-muted-foreground hover:text-foreground border border-border"
              }`}
            >
              הכל
            </button>

            {categoryKeys.map((key) => (
              <button
                key={key}
                onClick={() => setActiveCategory(key)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  activeCategory === key
                    ? "bg-primary text-primary-foreground"
                    : "bg-card text-muted-foreground hover:text-foreground border border-border"
                }`}
              >
                {blogCategories[key].label}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="section-spacing">
        <div className="container-medical">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((article, index) => (
              <motion.div
                key={article.slug}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
              >
                <Link
                  href={`/blog/${article.slug}`}
                  className="block bg-card rounded-2xl p-6 border border-border/60 h-full card-hover group"
                >
                  <span className="inline-block text-xs font-medium text-primary bg-accent px-3 py-1 rounded-full mb-4">
                    {article.categoryLabel}
                  </span>

                  <h2 className="text-lg font-semibold text-foreground mb-3 group-hover:text-primary transition-colors leading-snug">
                    {article.title}
                  </h2>

                  <p className="text-sm text-muted-foreground line-clamp-3 mb-4">
                    {article.metaDescription}
                  </p>

                  <div className="flex items-center justify-between text-sm text-muted-foreground">
                    <span className="flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5" />
                      {article.readingTime} דקות
                    </span>

                    <span className="flex items-center gap-1 text-primary font-medium">
                      <ArrowRight className="w-3.5 h-3.5" />
                      קרא עוד
                    </span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          {filtered.length === 0 && (
            <p className="text-center text-muted-foreground py-12">
              אין מאמרים בקטגוריה זו עדיין.
            </p>
          )}
        </div>
      </section>
    </>
  );
}
