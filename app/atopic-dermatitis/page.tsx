import type { Metadata } from "next";
import AtopicDermatitisGuideClient from "./AtopicDermatitisGuideClient";
import { MedicalDisclaimer } from "@/components/MedicalDisclaimer";

const CANONICAL = "https://seo.ihaveallergy.com/atopic-dermatitis";
const TITLE = "אטופיק דרמטיטיס - מדריך מקיף | ד״ר אנה ברמלי";
const DESCRIPTION =
  "מדריך רפואי מקיף על אטופיק דרמטיטיס (אגזמה): תסמינים לפי גיל, שלבי טיפול, טריגרים, טיפול אמבטיה, ביולוגיים ואיך לנהל התלקחויות. נכתב על ידי ד״ר אנה ברמלי, מומחית לאלרגיה ואימונולוגיה.";
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
      "מדריך רפואי מקיף על אטופיק דרמטיטיס: תסמינים, גורמים, טיפול מדורג וניהול יומיומי.",
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
      "מדריך על אטופיק דרמטיטיס: תסמינים לפי גיל, שלבי טיפול וניהול יומיומי.",
    images: [OG_IMAGE],
  },
};

const faqs = [
  {
    question: "מה ההבדל בין אטופיק דרמטיטיס לאגזמה?",
    answer:
      "אטופיק דרמטיטיס ואגזמה הם שמות שונים לאותה מחלה - עור כרונית, דלקתית ומגרדת. המונח 'אטופיק' מציין קשר לנטייה אלרגית כללית, בעוד 'אגזמה' הוא השם המוכר יותר בשפה היומיומית.",
  },
  {
    question: "האם אטופיק דרמטיטיס קשור לאלרגיה למזון?",
    answer:
      "יש קשר, אך לא תמיד סיבתי. כ-35% מהתינוקות עם AD בינוני-חמור סובלים גם מאלרגיה למזון. אכילת המזון האלרגני עלולה להחמיר את ה-AD, אך הימנעות ממנו אינה תמיד פותרת את ה-AD.",
  },
  {
    question: "מה הם הטריגרים הנפוצים ביותר להתלקחות AD?",
    answer:
      "גורמים מחמירים נפוצים: עור יבש מחוסר לחות, חום וזיעה מוגזמת, בגדי צמר או סינתטיים גסים, סבון וחומרי ניקיי, עשן סיגריות, עקה (סטרס) רגשית, זיהומים ויראליים, וחשיפה לאלרגנים סביבתיים כמו קרדית אבק הבית.",
  },
  {
    question: "האם ניתן לרפא לחלוטין אטופיק דרמטיטיס?",
    answer:
      "אין ריפוי מוחלט, אך ניתן להשיג שליטה מצוינת. כ-60% מהילדים עם AD חווים שיפור משמעותי עד הבגרות. עם טיפול נכון - לחות קבועה, טיפולים מקומיים, והימנעות מטריגרים - ניתן לנהל חיים תקינים לחלוטין.",
  },
  {
    question: "מתי כדאי לפנות לאלרגולוג ולא לרופא עור?",
    answer:
      "כשה-AD מלווה בחשד לאלרגיה למזון, כשיש נזלת אלרגית או אסתמה נלוות, כשהטיפול הרגיל לא עוזר, כשמעוניינים בהערכה לטיפולים ביולוגיים כמו dupilumab, או כשיש חשד לאלרגיה לחומר בטיפול.",
  },
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "MedicalWebPage",
  headline: "אטופיק דרמטיטיס - מדריך מקיף: תסמינים, גורמים, טיפול וניהול",
  name: TITLE,
  description: DESCRIPTION,
  datePublished: "2026-03-26",
  dateModified: "2026-03-26",
  url: CANONICAL,
  inLanguage: "he-IL",
  image: OG_IMAGE,
  about: {
    "@type": "MedicalCondition",
    name: "Atopic Dermatitis",
    alternateName: "אטופיק דרמטיטיס",
    code: {
      "@type": "MedicalCode",
      code: "L20",
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
      name: "אטופיק דרמטיטיס - מדריך מקיף",
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

export default function AtopicDermatitisGuidePage() {
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
      <AtopicDermatitisGuideClient />
      <MedicalDisclaimer />
    </>
  );
}
