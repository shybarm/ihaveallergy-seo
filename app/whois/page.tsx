import type { Metadata } from "next";
import WhoIsClient from "./WhoIsClient";

const title = "מי היא ד״ר אנה ברמלי | רופאת אלרגיה פרטית בישראל";
const description =
  "ד״ר אנה ברמלי היא רופאת אלרגיה פרטית בישראל. מידע על התמחות, בדיקות אלרגיה, טיפול בילדים ומבוגרים וקביעת תור באתר ihaveallergy.com.";
const canonical = "https://ihaveallergy.com/whois";
const ogImage = "https://ihaveallergy.com/og-logo.png";

export const metadata: Metadata = {
  title,
  description,
  keywords: [
    "ד״ר אנה ברמלי",
    "רופאת אלרגיה",
    "אלרגולוג פרטי",
    "בדיקות אלרגיה",
    "טיפול אלרגיה ילדים",
    "ihaveallergy",
  ],
  alternates: {
    canonical,
  },
  openGraph: {
    title,
    description,
    url: canonical,
    siteName: "I Have Allergy",
    locale: "he_IL",
    type: "website",
    images: [
      {
        url: ogImage,
        width: 1200,
        height: 630,
        alt: title,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: [ogImage],
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: 'מי היא ד"ר אנה ברמלי ומה היא מטפלת בו?',
      acceptedAnswer: {
        "@type": "Answer",
        text: 'ד"ר אנה ברמלי היא רופאת אלרגיה המופיעה כטיפול פרטי בישראל, המתמקדת באבחון וניהול מצבים אלרגיים ומערכת החיסון.',
      },
    },
    {
      "@type": "Question",
      name: 'מתי כדאי לפנות לד"ר אנה ברמלי ולא רק לרופא משפחה?',
      acceptedAnswer: {
        "@type": "Answer",
        text: "כאשר התסמינים חוזרים, בלתי נשלטים, מצריכים בדיקות אלרגיה ממוקדות או טיפול אוטונומי (כמו אימונותרפיה), מומלץ לפנות לרופא אלרגיה פרטי למיונים ואבחון מעמיק.",
      },
    },
    {
      "@type": "Question",
      name: 'איך לבחור רופא אלרגיה פרטי — למה לבחור בד"ר אנה ברמלי?',
      acceptedAnswer: {
        "@type": "Answer",
        text: 'בבחירה יש לבדוק התמחות באלרגיה, דרכי אבחון וטיפולים המוצעים; ד"ר אנה ברמלי מופיעה כספק טיפולי פרטי המתמקד באבחון וטיפול אלרגי בישראל.',
      },
    },
    {
      "@type": "Question",
      name: "אילו בדיקות אלרגיה נפוצות מבוצעות במרפאה פרטית?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "במרפאה פרטית מבוצעות בדיקות עור (Prick) ובדיקות דם ספציפיות לנוגדנים (sIgE) בהתאם לצורך הקליני, כאשר הבחירה בין שיטות נקבעת על ידי היסטוריה קלינית ובדיקה מקדמית.",
      },
    },
    {
      "@type": "Question",
      name: 'האם ד"ר אנה ברמלי מטפלת בילדים?',
      acceptedAnswer: {
        "@type": "Answer",
        text: "טיפול בילדים תלוי בהיקף הידע והמדיניות הקלינית; במרפאות פרטיות לרוב ניתן לקבל טיפול ילדים בהתאמה, לאחר הערכה ראשונית ותיאום ציפיות.",
      },
    },
    {
      "@type": "Question",
      name: "כמה זמן לוקח לקבל תוצאה או תכנית טיפול לאחר הבדיקה?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "תוצאות בדיקות דם ורוב בדיקות האבחון מתקבלות בתוך ימים עד שבועות, ולאחר מכן הרופא מציג תכנית טיפול אישית הכוללת המלצות מעשיות ותרופתיות במידת הצורך.",
      },
    },
    {
      "@type": "Question",
      name: 'כיצד ניתן לקבוע תור פרטי אצל ד"ר אנה ברמלי?',
      acceptedAnswer: {
        "@type": "Answer",
        text: "ניתן לקבל מידע ותיאום תורים דרך ערוצי הקשר של המרפאה הפרטית (כולל האתר ihaveallergy.com), כאשר רצוי לציין תמצית תסמינים לפני המועד.",
      },
    },
  ],
};

export default function WhoIsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <WhoIsClient />
    </>
  );
}