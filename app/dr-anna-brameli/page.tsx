import type { Metadata } from "next";
import DrAnnaBrameliClient from "./DrAnnaBrameliClient";
import { MedicalDisclaimer } from "@/components/MedicalDisclaimer";

export const metadata: Metadata = {
  title: "ד״ר אנה ברמלי - רופאת אלרגיה ואלרגולוגית | קליניקה פרטית בישראל",
  description:
    "ד״ר אנה ברמלי - רופאת אלרגיה פרטית בישראל. אבחון, בדיקות וטיפול מותאם. קבעו תור ב-ihaveallergy.com.",
  alternates: {
    canonical: "https://seo.ihaveallergy.com/dr-anna-brameli",
  },
  openGraph: {
    type: "profile",
    url: "https://seo.ihaveallergy.com/dr-anna-brameli",
    title: "ד״ר אנה ברמלי - רופאת אלרגיה ואלרגולוגית | קליניקה פרטית בישראל",
    description:
      "ד״ר אנה ברמלי - רופאת אלרגיה פרטית בישראל. אבחון, בדיקות וטיפול מותאם. קבעו תור ב-ihaveallergy.com.",
    locale: "he_IL",
    siteName: "I Have Allergy",
    images: [
      {
        url: "https://ihaveallergy.com/og-logo.png",
        width: 1200,
        height: 630,
        alt: "ד״ר אנה ברמלי - מומחית לאלרגיה ואימונולוגיה",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ד״ר אנה ברמלי - רופאת אלרגיה ואלרגולוגית | קליניקה פרטית בישראל",
    description:
      "ד״ר אנה ברמלי - רופאת אלרגיה פרטית בישראל. אבחון, בדיקות וטיפול מותאם.",
    images: ["https://ihaveallergy.com/og-logo.png"],
  },
};

const physicianSchema = {
  "@context": "https://schema.org",
  "@type": "Physician",
  name: "ד״ר אנה ברמלי",
  alternateName: "Dr. Anna Brameli",
  description:
    "ד״ר אנה ברמלי היא רופאת אלרגיה ואלרגולוגית בקליניקה פרטית בישראל. מומחית באבחון וטיפול באלרגיות מזון ועונתיות, בדיקות IgE ואימונותרפיה.",
  medicalSpecialty: ["Allergy and Immunology", "Pediatrics"],
  url: "https://seo.ihaveallergy.com/dr-anna-brameli",
  telephone: "+972-54-580-8008",
  address: {
    "@type": "PostalAddress",
    streetAddress: "טווס 3",
    addressLocality: "הוד השרון",
    postalCode: "4501303",
    addressCountry: "IL",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 32.1524,
    longitude: 34.8947,
  },
  image: "https://ihaveallergy.com/og-logo.png",
  sameAs: [],
  knowsLanguage: ["he", "en"],
  availableService: [
    { "@type": "MedicalProcedure", name: "בדיקות עור (Skin Prick Tests)" },
    { "@type": "MedicalProcedure", name: "בדיקות דם IgE" },
    { "@type": "MedicalProcedure", name: "אימונותרפיה" },
    { "@type": "MedicalProcedure", name: "אבחון אלרגיות מזון" },
    { "@type": "MedicalProcedure", name: "טיפול באסתמה אלרגית" },
  ],
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "MedicalBusiness",
  name: "קליניקת ד״ר אנה ברמלי - אלרגיה ואימונולוגיה",
  url: "https://ihaveallergy.com",
  telephone: "+972-54-580-8008",
  address: {
    "@type": "PostalAddress",
    streetAddress: "טבס 3",
    addressLocality: "הוד השרון",
    addressCountry: "IL",
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday"],
      opens: "09:00",
      closes: "18:00",
    },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "מתי כדאי לפנות לרופא אלרגיה?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "כאשר תסמינים חוזרים (עקיצות, פריחות, נשימה צפופה), תגובות לאחר מזון/תרופות או בילדים עם בעיות עור/נשימה.",
      },
    },
    {
      "@type": "Question",
      name: "אילו בדיקות מבוצעות בקליניקה הפרטית?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "בדיקות עור (skin prick), בדיקות דם ל-IgE, בדיקות אתגר למזון לפי צורך.",
      },
    },
    {
      "@type": "Question",
      name: "מה ההבדל בין טיפול פרטי לציבורי?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "זמינות תורים מהירה יותר, זמן שיחה ארוך יותר, טיפול מותאם אישית ומעקב צמוד.",
      },
    },
    {
      "@type": "Question",
      name: "האם מטופלים ילדים מקבלים טיפול בקליניקה?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "כן - יש ניסיון רב בטיפול אלרגיות מזון ואטופיק דרמטיטיס אצל תינוקות וילדים.",
      },
    },
    {
      "@type": "Question",
      name: "איך מתבצעת אימונותרפיה ומה מתאים לה?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "מתן חשיפה מבוקרת לאלרגנים מתאים למטופלים עם ריניטיס אלרגי או אלרגיה לאבקנים/קרדית אבק הבית לפי הערכת מומחה.",
      },
    },
  ],
};

export default function DrAnnaBrameliPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(physicianSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <DrAnnaBrameliClient />
      <MedicalDisclaimer />
    </>
  );
}
