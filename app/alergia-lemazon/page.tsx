import type { Metadata } from "next";
import FoodAllergyGuideClient from "./FoodAllergyGuideClient";

const CANONICAL = "https://seo.ihaveallergy.com/alergia-lemazon";
const TITLE = "אלרגיה למזון – מדריך מקיף | ד״ר אנה ברמלי";
const DESCRIPTION =
  "מדריך רפואי מקיף על אלרגיה למזון: אלרגנים נפוצים, תסמינים, אבחון, טיפול, ניהול יומיומי וחיים עם אלרגיה למזון בישראל. נכתב ונסקר על ידי ד״ר אנה ברמלי, מומחית לאלרגיה.";
const OG_IMAGE = "https://ihaveallergy.com/og-logo.png";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: {
    canonical: CANONICAL,
  },
  openGraph: {
    type: "article",
    url: CANONICAL,
    title: TITLE,
    description:
      "מדריך רפואי מקיף על אלרגיה למזון: אלרגנים, תסמינים, אבחון, טיפול וניהול יומיומי.",
    locale: "he_IL",
    siteName: "I Have Allergy",
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        alt: TITLE,
      },
    ],
    publishedTime: "2026-03-26",
    modifiedTime: "2026-03-26",
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description:
      "מדריך רפואי מקיף על אלרגיה למזון: תסמינים, אבחון, טיפול וניהול יומיומי.",
    images: [OG_IMAGE],
  },
};

const faqs = [
  {
    question: "מהם 8 האלרגנים הנפוצים ביותר בישראל?",
    answer:
      "שמונת האלרגנים המובילים הם: חלב פרה, ביצים, בוטנים, אגוזי עץ, שומשום (טחינה), חיטה, דגים ופירות ים, וסויה. בישראל שומשום נפוץ במיוחד בשל צריכת טחינה גבוהה.",
  },
  {
    question: "מה ההבדל בין אלרגיה למזון לאי-סבילות למזון?",
    answer:
      "אלרגיה למזון היא תגובה חיסונית הכוללת ייצור נוגדני IgE ועלולה לגרום לאנפילקסיס מסכן חיים. אי-סבילות (כמו לאקטוז) היא תגובת מערכת העיכול שאינה מסוכנת. ההבדל קריטי לאבחון ולניהול הנכון.",
  },
  {
    question: "האם אפשר לגדל מחדש סבילות לאלרגן מזון?",
    answer:
      "כן – אימונותרפיה אוראלית (OIT) היא טיפול מוכח שבו חושפים את הגוף לכמויות הולכות וגדלות של האלרגן עד להשגת סבילות. הטיפול מתבצע תחת פיקוח אלרגולוג מנוסה ויכול לאפשר אכילה מבוקרת של האלרגן.",
  },
  {
    question: "מה עושים בתגובה אנפילקטית חמורה?",
    answer:
      "מזריקים אפינפרין (אפיפן) מיד לשריר הירך, קוראים לאמבולנס (101), שוכבים עם רגליים מורמות (אם אין קשיי נשימה), ואם אין שיפור לאחר 5-10 דקות – מזריקים מנה שנייה. אפיפן תמיד קודם לאנטיהיסטמין.",
  },
  {
    question: "איך קוראים תוויות מזון בישראל לצורך זיהוי אלרגנים?",
    answer:
      "לפי תקנות תיווית מזון ישראליות, יצרנים חייבים לציין בבירור את 14 האלרגנים המוגדרים. חפשו את הסעיף 'מכיל' ו'עלול להכיל' בתווית. שימו לב לשמות נסתרים: קזאין=חלב, גלוטן=חיטה, אלבומין=ביצה.",
  },
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "MedicalWebPage",
  headline: "אלרגיה למזון – מדריך מקיף: אלרגנים, תסמינים, אבחון וטיפול",
  name: TITLE,
  description: DESCRIPTION,
  datePublished: "2026-03-26",
  dateModified: "2026-03-26",
  url: CANONICAL,
  inLanguage: "he-IL",
  image: OG_IMAGE,
  about: {
    "@type": "MedicalCondition",
    name: "Food Allergy",
    alternateName: "אלרגיה למזון",
    code: {
      "@type": "MedicalCode",
      code: "L27.2",
      codingSystem: "ICD-10",
    },
  },
  author: {
    "@type": "Physician",
    name: "ד״ר אנה ברמלי",
    jobTitle: "מומחית לאלרגיה ואימונולוגיה",
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
    {
      "@type": "ListItem",
      position: 1,
      name: "ראשי",
      item: "https://ihaveallergy.com/",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "אלרגיה למזון – מדריך מקיף",
      item: CANONICAL,
    },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
};

export default function FoodAllergyGuidePage() {
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <FoodAllergyGuideClient />
    </>
  );
}
