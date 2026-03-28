import type { Metadata } from "next";
import FAQClient from "./FAQClient";

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "האם אלרגיה למזון יכולה להופיע בפתאומיות?",
      acceptedAnswer: { "@type": "Answer", text: "כן. גם אם הילד אכל מזון מסוים בעבר ללא תגובה, אלרגיה יכולה להתפתח בהמשך החיים. מערכת החיסון משתנה, ולעיתים החשיפה דווקא מחזקת את הרגישות." },
    },
    {
      "@type": "Question",
      name: "מה ההבדל בין אלרגיה לחלב לאי-סבילות ללקטוז?",
      acceptedAnswer: { "@type": "Answer", text: "אלרגיה מערבת מערכת חיסון — עם פריחה, נפיחות או קשיי נשימה. אי-סבילות ללקטוז גורמת בעיקר לגזים ושלשולים ואינה כוללת תגובה חיסונית." },
    },
    {
      "@type": "Question",
      name: "האם אלרגיה למזון יכולה לעבור עם הזמן?",
      acceptedAnswer: { "@type": "Answer", text: "כן — חלק מאלרגיות, בעיקר לחלב, ביצים וחיטה, עשויות לחלוף עם הגדילה. אלרגיות לבוטנים, אגוזים ודגים לרוב נשארות לאורך שנים." },
    },
    {
      "@type": "Question",
      name: "מתי עקיצת דבורה מסוכנת?",
      acceptedAnswer: { "@type": "Answer", text: "כאשר מופיעים: קוצר נשימה, סחרחורת, נפיחות בפנים או ירידת לחץ דם. אלה סימנים לאנפילקסיס הדורש טיפול מיידי." },
    },
    {
      "@type": "Question",
      name: "מה לעשות במקרה של תגובה אלרגית ראשונית?",
      acceptedAnswer: { "@type": "Answer", text: "להפסיק מיד את האכילה, לתעד תמונות של הפריחה או הנפיחות, ולהתייעץ עם מומחה לאלרגיות. במקרה של תסמינים חמורים — לפנות מיידית למיון." },
    },
    {
      "@type": "Question",
      name: "האם יש טיפול שמעלים אלרגיה לאבקנים?",
      acceptedAnswer: { "@type": "Answer", text: "כן — אימונותרפיה (טיפול חיסוני) יכולה להפחית משמעותית את התסמינים ואת הצורך בתרופות. הטיפול נמשך 3-5 שנים ויעיל ב-80-90% מהמקרים." },
    },
  ],
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "ראשי", item: "https://seo.ihaveallergy.com/" },
    { "@type": "ListItem", position: 2, name: "שאלות ותשובות", item: "https://seo.ihaveallergy.com/faq" },
  ],
};

export const metadata: Metadata = {
  title: "שאלות ותשובות | ד״ר אנה ברמלי",
  description:
    "תשובות מקצועיות לשאלות נפוצות על אלרגיות: אלרגיה למזון, לחלב, לבוטנים, לתרופות, לדבורים, אסתמה, אנפילקסיס ובדיקות אלרגיה.",
  alternates: {
    canonical: "https://seo.ihaveallergy.com/faq",
  },
  openGraph: {
    type: "website",
    url: "https://seo.ihaveallergy.com/faq",
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
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <FAQClient />
    </>
  );
}
