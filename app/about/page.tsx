import type { Metadata } from "next";
import AboutContent from "@/components/about/AboutContent";

export const metadata: Metadata = {
  title: "אודות ד״ר אנה ברמלי | רקע מקצועי, השכלה וגישה טיפולית",
  description:
    "היכרות עם ד״ר אנה ברמלי, רופאה מומחית לאלרגיה ואימונולוגיה בעלת ניסיון קליני רחב. מידע על השכלה, ניסיון מקצועי, והגישה הטיפולית.",
  alternates: {
    canonical: "https://ihaveallergy.com/about",
  },
};

const schema = {
  "@context": "https://schema.org",
  "@type": "MedicalWebPage",
  name: "אודות ד״ר אנה ברמלי",
  description:
    "היכרות עם ד״ר אנה ברמלי, רופאה מומחית לאלרגיה ואימונולוגיה בעלת ניסיון קליני רחב. מידע על השכלה, ניסיון מקצועי, והגישה הטיפולית.",
  url: "https://ihaveallergy.com/about",
  mainEntity: {
    "@type": "Physician",
    name: "ד״ר אנה ברמלי",
    medicalSpecialty: "AllergyAndImmunology",
  },
};

export default function AboutPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <AboutContent />
    </>
  );
}