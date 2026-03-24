import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import FloatingBotButton from "@/components/chat/FloatingBotButton";

export const metadata: Metadata = {
  metadataBase: new URL("https://seo.ihaveallergy.com"),
  title: {
    default: "ד״ר אנה ברמלי | אלרגיה ואימונולוגיה",
    template: "%s | ד״ר אנה ברמלי",
  },
  description:
    "מידע מקצועי, מדריכים ועמודי SEO בנושא אלרגיה, בדיקות אלרגיה, חשיפה לאלרגנים, אבחון וטיפול בילדים ובמבוגרים.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "he_IL",
    url: "https://seo.ihaveallergy.com",
    siteName: "I Have Allergy",
    title: "ד״ר אנה ברמלי | אלרגיה ואימונולוגיה",
    description:
      "מידע מקצועי, מדריכים ועמודי SEO בנושא אלרגיה, בדיקות אלרגיה, חשיפה לאלרגנים, אבחון וטיפול בילדים ובמבוגרים.",
    images: [
      {
        url: "https://ihaveallergy.com/og-logo.png",
        width: 1200,
        height: 630,
        alt: "I Have Allergy",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ד״ר אנה ברמלי | אלרגיה ואימונולוגיה",
    description:
      "מידע מקצועי, מדריכים ועמודי SEO בנושא אלרגיה, בדיקות אלרגיה, חשיפה לאלרגנים, אבחון וטיפול בילדים ובמבוגרים.",
    images: ["https://ihaveallergy.com/og-logo.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="he" dir="rtl">
      <body>
        <Header />
        {children}
        <Footer />
        <FloatingBotButton />
      </body>
    </html>
  );
}
