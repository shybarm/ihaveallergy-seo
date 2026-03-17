import type { Metadata } from "next";
import FAQClient from "./FAQClient";

export const metadata: Metadata = {
  title: "שאלות ותשובות | ד״ר אנה ברמלי",
  description:
    "תשובות מקצועיות לשאלות נפוצות על אלרגיות: אלרגיה למזון, לחלב, לבוטנים, לתרופות, לדבורים, אסתמה, אנפילקסיס ובדיקות אלרגיה.",
  alternates: {
    canonical: "https://seo.ihaveallergy.com/faq",
  },
  openGraph: {
    type: "website",
    url: "https://ihaveallergy.com/faq",
    title: "שאלות ותשובות | ד״ר אנה ברמלי",
    description:
      "תשובות מקצועיות לשאלות נפוצות על אלרגיות: אלרגיה למזון, לחלב, לבוטנים, לתרופות, לדבורים, אסתמה, אנפילקסיס ובדיקות אלרגיה.",
    locale: "he_IL",
    images: [
      {
        url: "https://ihaveallergy.com/og-logo.png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "שאלות ותשובות | ד״ר אנה ברמלי",
    description:
      "תשובות מקצועיות לשאלות נפוצות על אלרגיות: אלרגיה למזון, לחלב, לבוטנים, לתרופות, לדבורים, אסתמה, אנפילקסיס ובדיקות אלרגיה.",
    images: ["https://ihaveallergy.com/og-logo.png"],
  },
};

export default function FAQPage() {
  return <FAQClient />;
}
