import type { Metadata } from "next";
import AllergyChildrenGuideClient from "./AllergyChildrenGuideClient";

const CANONICAL = "https://ihaveallergy.com/אלרגיה-בילדים-מדריך-מלא";
const TITLE = "אלרגיה בילדים – מדריך מלא להורים | ד״ר אנה ברמלי";
const DESCRIPTION =
  "מדריך רפואי מקיף על אלרגיה בילדים: סוגי אלרגיה, תסמינים, אבחון, טיפול, מניעה, זכויות במערכת החינוך, וניהול חיי יומיום. נכתב ונסקר על ידי ד״ר אנה ברמלי.";
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
      "מדריך רפואי מקיף על אלרגיה בילדים: סוגי אלרגיה, תסמינים, אבחון, טיפול, מניעה וזכויות.",
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
    publishedTime: "2026-02-26",
    modifiedTime: "2026-02-26",
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: "מדריך רפואי מקיף על אלרגיה בילדים: תסמינים, אבחון, טיפול וזכויות.",
    images: [OG_IMAGE],
  },
};

const faqs = [
  {
    question: "מאיזה גיל אפשר לבצע בדיקות אלרגיה?",
    answer:
      "בדיקות דם אפשריות בכל גיל, כולל תינוקות. תבחיני עור אפשריים בדרך כלל מגיל 6 חודשים. אלרגולוג ילדים יתאים את סוג הבדיקה לגיל ולמצב הקליני של הילד.",
  },
  {
    question: "האם ילד יכול להתגבר על אלרגיה למזון?",
    answer:
      "כן, חלק מהאלרגיות נעלמות עם הגיל. אלרגיה לחלב ולביצים – כ-80% מהילדים מתגברים עליה עד גיל 16. אלרגיה לבוטנים ואגוזי עץ נוטה להישאר, אם כי 15-20% מהילדים עם אלרגיה לבוטנים מתגברים עליה.",
  },
  {
    question: "מה ההבדל בין אלרגיה לרגישות למזון?",
    answer:
      "אלרגיה היא תגובה של מערכת החיסון שעלולה לסכן חיים. רגישות (אי-סבילות) היא תגובת מערכת העיכול שאינה מסוכנת. ההבדל קריטי לניהול נכון של המצב.",
  },
  {
    question: "האם צריך לשאת אפיפן תמיד?",
    answer:
      "ילד שאובחן עם אלרגיה שעלולה לגרום לאנפילקסיס חייב לשאת אפיפן בכל עת. האלרגולוג ידריך בדיוק מתי ואיך להשתמש. חשוב: אפיפן הוא תרופה בטוחה – עדיף להזריק ולגלות שלא היה צורך.",
  },
  {
    question: "איך מכינים את הגן/בית הספר לילד אלרגי?",
    answer:
      "יש להגיש אישור רפואי מפורט, לוודא שהצוות מודרך בזיהוי תגובה אלרגית ובהזרקת אפיפן, ולהכין תוכנית חירום כתובה. להורים יש זכויות ברורות מול מערכת החינוך.",
  },
  {
    question: "האם אלרגיה תורשתית?",
    answer:
      "יש מרכיב גנטי משמעותי. ילד עם הורה אלרגי – סיכון של 30-40%. שני הורים אלרגיים – סיכון של 60-80%. הסוג הספציפי לא בהכרח עובר בתורשה.",
  },
  {
    question: "מתי עדיף אלרגולוג פרטי על פני קופת חולים?",
    answer:
      "כשצריך תור מהיר, בדיקה מקיפה, או מעקב צמוד. בפרטי הביקור ארוך יותר (30-45 דקות), יש מגוון רחב יותר של בדיקות, ותוכנית טיפול מותאמת אישית.",
  },
  {
    question: "האם חשיפה מוקדמת לאלרגנים באמת מונעת אלרגיה?",
    answer:
      "כן, מחקרים גדולים (כמו מחקר LEAP) הראו שהכנסת בוטנים לתפריט בגיל 4-6 חודשים מפחיתה את הסיכון לאלרגיה לבוטנים ב-80%. ההנחיות הישראליות והבינלאומיות תומכות בגישה זו.",
  },
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "MedicalWebPage",
  headline: "אלרגיה בילדים – מדריך מלא להורים: תסמינים, אבחון, טיפול וזכויות",
  name: TITLE,
  description:
    "מדריך רפואי מקיף על אלרגיה בילדים: סוגי אלרגיה, תסמינים, שיטות אבחון, טיפולים מתקדמים, חשיפה מוקדמת, זכויות במערכת החינוך, וניהול חיי יומיום. מאת ד״ר אנה ברמלי.",
  datePublished: "2026-02-26",
  dateModified: "2026-02-26",
  url: CANONICAL,
  inLanguage: "he-IL",
  image: OG_IMAGE,
  about: {
    "@type": "MedicalCondition",
    name: "Allergy in Children",
    alternateName: "אלרגיה בילדים",
  },
  author: {
    "@type": "Physician",
    name: "ד״ר אנה ברמלי",
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
      name: "אלרגיה בילדים – מדריך מלא",
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

export default function AllergyChildrenGuidePage() {
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
      <AllergyChildrenGuideClient />
    </>
  );
}