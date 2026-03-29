import type { Metadata } from "next";
import ContactClient from "./ContactClient";

const title = "יצירת קשר וקביעת תור | ד״ר אנה ברמלי - מרפאת אלרגיה בהוד השרון";
const description =
  "קביעת תור במרפאת אלרגיה של ד״ר אנה ברמלי, מומחית לאלרגיה ואימונולוגיה. טלפון: 054-580-8008, כתובת: טבס 3, הוד השרון. ייעוץ אלרגיה פרטי.";
const canonical = "https://seo.ihaveallergy.com/contact";
const ogImage = "https://seo.ihaveallergy.com/og-logo.png";

export const metadata: Metadata = {
  title,
  description,
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

const contactPageSchema = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  name: title,
  description,
  url: canonical,
  mainEntity: {
    "@type": "MedicalBusiness",
    name: "ד״ר אנה ברמלי - מרפאת אלרגיה",
    telephone: "+972-54-580-8008",
    email: "info@drbrameli.co.il",
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
        opens: "08:00",
        closes: "19:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Friday",
        opens: "08:00",
        closes: "13:00",
      },
    ],
  },
};

export default function ContactPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactPageSchema) }}
      />
      <ContactClient />
    </>
  );
}
