import type { Metadata } from "next";
import BlogClient from "./BlogClient";

export const metadata: Metadata = {
  title: "בלוג אלרגיה לילדים | ד״ר אנה ברמלי – מומחית לאלרגיה ואימונולוגיה",
  description:
    "מאמרים רפואיים מבוססי ראיות על אלרגיה בילדים: תסמינים, אבחון, טיפול וזכויות. נכתבו ונסקרו על ידי ד״ר אנה ברמלי.",
  alternates: {
    canonical: "https://ihaveallergy.com/blog",
  },
  openGraph: {
    type: "website",
    url: "https://ihaveallergy.com/blog",
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

export default function BlogPage() {
  return <BlogClient />;
}
