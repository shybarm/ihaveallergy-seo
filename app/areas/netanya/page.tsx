import type { Metadata } from "next";
import Link from "next/link";
import { ChevronLeft, MapPin, Phone, Clock, Car } from "lucide-react";
import { Button } from "@/components/ui/button";
import { MedicalDisclaimer } from "@/components/MedicalDisclaimer";

const CANONICAL = "https://seo.ihaveallergy.com/areas/netanya";
const TITLE = "רופאת אלרגיה בנתניה | ד״ר אנה ברמלי - קליניקה פרטית קרובה";
const DESCRIPTION =
  "אלרגולוגית פרטית קרובה לנתניה - ד״ר אנה ברמלי בהוד השרון, 20 דקות נסיעה. מומחית לאלרגיה לילדים ומבוגרים בשרון.";
const OG_IMAGE = "https://ihaveallergy.com/og-logo.png";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: CANONICAL },
  openGraph: {
    type: "website", url: CANONICAL, title: TITLE, description: DESCRIPTION,
    locale: "he_IL", siteName: "I Have Allergy",
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: TITLE }],
  },
  twitter: { card: "summary_large_image", title: TITLE, description: DESCRIPTION, images: [OG_IMAGE] },
};

const schemas = [
  {
    "@context": "https://schema.org", "@type": "MedicalClinic",
    name: "קליניקת ד״ר אנה ברמלי - אלרגיה (קרוב לנתניה)",
    url: "https://ihaveallergy.com", telephone: "+972-54-580-8008",
    address: { "@type": "PostalAddress", streetAddress: "טווס 3", addressLocality: "הוד השרון", postalCode: "4501303", addressCountry: "IL" },
    areaServed: { "@type": "City", name: "נתניה" },
    medicalSpecialty: "AllergyAndImmunology",
    employee: { "@type": "Physician", name: "ד״ר אנה ברמלי", url: "https://seo.ihaveallergy.com/dr-anna-brameli" },
  },
  {
    "@context": "https://schema.org", "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "ראשי", item: "https://seo.ihaveallergy.com/" },
      { "@type": "ListItem", position: 2, name: "אזורי שירות", item: "https://seo.ihaveallergy.com/areas" },
      { "@type": "ListItem", position: 3, name: "נתניה", item: CANONICAL },
    ],
  },
];

export default function NetanyaPage() {
  return (
    <>
      {schemas.map((s, i) => <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(s) }} />)}
      <main dir="rtl" lang="he" className="min-h-screen bg-white">
        <section className="bg-gradient-to-br from-cyan-50 to-teal-50 border-b border-cyan-100 py-12 px-4">
          <div className="max-w-4xl mx-auto">
            <nav className="flex items-center gap-1 text-sm text-gray-500 mb-6 flex-wrap">
              <Link href="/" className="hover:text-cyan-700">ראשי</Link>
              <ChevronLeft className="w-4 h-4" />
              <Link href="/areas" className="hover:text-cyan-700">אזורי שירות</Link>
              <ChevronLeft className="w-4 h-4" />
              <span className="text-cyan-800 font-medium">נתניה</span>
            </nav>
            <div className="flex items-center gap-2 mb-4">
              <Car className="w-5 h-5 text-cyan-600" />
              <span className="bg-cyan-100 text-cyan-800 text-xs font-semibold px-3 py-1 rounded-full">20 דקות נסיעה</span>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">רופאת אלרגיה קרובה לנתניה</h1>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              ד״ר אנה ברמלי בהוד השרון - כ-20 דקות מנתניה בכביש 2 דרומה. מומחית לאלרגיה ואימונולוגיה עם ניסיון רב בשרון.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Button asChild size="lg" className="bg-cyan-600 hover:bg-cyan-700 text-white">
                <a href="https://ihaveallergy.com/book" target="_blank" rel="noopener noreferrer">קביעת תור</a>
              </Button>
              <Button asChild variant="outline" size="lg">
                <a href="tel:+972545808008"><Phone className="w-4 h-4 ml-2" />054-580-8008</a>
              </Button>
            </div>
          </div>
        </section>

        <div className="max-w-4xl mx-auto px-4 py-10">
          <div className="bg-cyan-50 border border-cyan-200 rounded-xl p-5 mb-8">
            <h2 className="font-bold text-gray-900 mb-2 flex items-center gap-2"><Car className="w-4 h-4 text-cyan-600" />הגעה מנתניה</h2>
            <p className="text-sm text-gray-700">כביש 2 דרומה → יציאה הוד השרון → רחוב טווס 3. כ-20 דקות ללא פקק.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
            <div className="bg-gray-50 border border-gray-200 rounded-xl p-5">
              <h2 className="font-bold text-gray-900 mb-3">שירותים</h2>
              <ul className="space-y-1 text-sm text-gray-700">
                {["בדיקות עור ודם לאלרגנים", "אבחון אלרגיות מזון", "OIT לבוטנים", "אימונותרפיה", "ניהול אסתמה ואגזמה", "תוכנית חירום AEAP"].map((s) => (
                  <li key={s} className="flex items-start gap-2"><span className="text-cyan-500">✓</span>{s}</li>
                ))}
              </ul>
            </div>
            <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm">
              <h2 className="font-bold text-gray-900 mb-3">פרטי הקליניקה</h2>
              <div className="space-y-2 text-sm">
                <div className="flex gap-2"><MapPin className="w-4 h-4 text-cyan-600 mt-0.5 flex-shrink-0" /><span>טווס 3, הוד השרון</span></div>
                <div className="flex gap-2"><Phone className="w-4 h-4 text-cyan-600 mt-0.5 flex-shrink-0" /><a href="tel:+972545808008" className="text-cyan-600">054-580-8008</a></div>
                <div className="flex gap-2"><Clock className="w-4 h-4 text-cyan-600 mt-0.5 flex-shrink-0" /><span className="text-gray-600">א׳-ה׳: 09:00-18:00</span></div>
              </div>
            </div>
          </div>
          <div className="mb-8">
            <h2 className="font-semibold text-gray-900 mb-3">אזורים נוספים</h2>
            <div className="flex flex-wrap gap-2">
              {[["הוד השרון", "/areas/hod-hasharon"], ["הרצליה", "/areas/herzliya"], ["כפר סבא", "/areas/kfar-saba"], ["רעננה", "/areas/raanana"], ["תל אביב", "/areas/tel-aviv"], ["פתח תקווה", "/areas/petah-tikva"]].map(([name, link]) => (
                <Link key={name} href={link} className="bg-gray-100 hover:bg-cyan-100 text-gray-700 text-sm px-3 py-1.5 rounded-lg">{name}</Link>
              ))}
            </div>
          </div>
          <section className="bg-gradient-to-br from-cyan-600 to-teal-700 text-white rounded-2xl p-8 text-center">
            <h2 className="text-2xl font-bold mb-3">מנתניה לקליניקה - 20 דקות</h2>
            <p className="text-cyan-100 mb-6">פנו לד״ר אנה ברמלי לקביעת תור.</p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button asChild size="lg" className="bg-white text-cyan-700 hover:bg-cyan-50 font-bold">
                <a href="https://ihaveallergy.com/book" target="_blank" rel="noopener noreferrer">קביעת תור אונליין</a>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white/10">
                <a href="tel:+972545808008"><Phone className="w-4 h-4 ml-2" />054-580-8008</a>
              </Button>
            </div>
          </section>
        </div>
        <MedicalDisclaimer />
      </main>
    </>
  );
}
