import type { Metadata } from "next";
import AboutClient from "./AboutClient";

const CANONICAL = "https://seo.ihaveallergy.com/about";
const TITLE = "אודות ד״ר אנה ברמלי | רקע מקצועי, השכלה וגישה טיפולית";
const DESCRIPTION =
  "היכרות עם ד״ר אנה ברמלי, מומחית לאלרגיה ואימונולוגיה. רקע קליני, השכלה, ניסיון מקצועי וגישה טיפולית אישית לילדים ולמבוגרים.";
const OG_IMAGE = "https://ihaveallergy.com/og-logo.png";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: {
    canonical: CANONICAL,
  },
  openGraph: {
    type: "profile",
    url: CANONICAL,
    title: TITLE,
    description: DESCRIPTION,
    locale: "he_IL",
    siteName: "I Have Allergy",
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        alt: "ד״ר אנה ברמלי – מומחית לאלרגיה ואימונולוגיה",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    images: [OG_IMAGE],
  },
};

const aboutPageSchema = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  name: TITLE,
  description: DESCRIPTION,
  url: CANONICAL,
  inLanguage: "he-IL",
  mainEntity: {
    "@type": "Physician",
    name: "ד״ר אנה ברמלי",
    alternateName: "Dr. Anna Brameli",
    jobTitle: "מומחית לאלרגיה ואימונולוגיה",
    description:
      "ד״ר אנה ברמלי היא מומחית לאלרגיה ואימונולוגיה בעלת ניסיון קליני רחב. מטפלת בילדים ובמבוגרים, מתמחה באבחון אלרגיות מזון, אטופיק דרמטיטיס, אסתמה אלרגית ואימונותרפיה.",
    medicalSpecialty: ["AllergyAndImmunology", "Pediatrics"],
    url: "https://seo.ihaveallergy.com/dr-anna-brameli",
    telephone: "+972-54-580-8008",
    image: OG_IMAGE,
    worksFor: {
      "@type": "MedicalOrganization",
      name: "I Have Allergy",
      url: "https://ihaveallergy.com",
    },
    address: {
      "@type": "PostalAddress",
      streetAddress: "טווס 3",
      addressLocality: "הוד השרון",
      postalCode: "4501303",
      addressCountry: "IL",
    },
    knowsLanguage: ["he", "en"],
    availableService: [
      { "@type": "MedicalProcedure", name: "בדיקות עור (Skin Prick Tests)" },
      { "@type": "MedicalProcedure", name: "בדיקות דם IgE ספציפי" },
      { "@type": "MedicalProcedure", name: "אימונותרפיה" },
      { "@type": "MedicalProcedure", name: "אבחון אלרגיות מזון" },
      { "@type": "MedicalProcedure", name: "ניהול אטופיק דרמטיטיס" },
    ],
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
      item: "https://seo.ihaveallergy.com/",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "אודות ד״ר אנה ברמלי",
      item: CANONICAL,
    },
  ],
};

export default function AboutPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutPageSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <AboutClient />
    </>
  );
}
