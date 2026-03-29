import type { Metadata } from "next";
import Link from "next/link";
import { ChevronLeft, MapPin, Phone, Clock, Car } from "lucide-react";
import { Button } from "@/components/ui/button";

const CANONICAL = "https://seo.ihaveallergy.com/areas/raanana";
const TITLE = "רופאת אלרגיה ברעננה | ד״ר אנה ברמלי - קליניקה פרטית קרובה";
const DESCRIPTION =
  "אלרגולוגית פרטית קרובה לרעננה - ד״ר אנה ברמלי בהוד השרון, 15 דקות נסיעה. מומחית לאלרגיה לילדים ומבוגרים. בדיקות, אבחון וטיפול.";
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
    "@context": "https://schema.org",
    "@type": "MedicalClinic",
    name: "קליניקת ד״ר אנה ברמלי - אלרגיה ואימונולוגיה (קרוב לרעננה)",
    url: "https://ihaveallergy.com",
    telephone: "+972-54-580-8008",
    address: { "@type": "PostalAddress", streetAddress: "טווס 3", addressLocality: "הוד השרון", postalCode: "4501303", addressCountry: "IL" },
    areaServed: { "@type": "City", name: "רעננה" },
    medicalSpecialty: "AllergyAndImmunology",
    employee: { "@type": "Physician", name: "ד״ר אנה ברמלי", url: "https://seo.ihaveallergy.com/dr-anna-brameli" },
  },
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "ראשי", item: "https://seo.ihaveallergy.com/" },
      { "@type": "ListItem", position: 2, name: "אזורי שירות", item: "https://seo.ihaveallergy.com/areas" },
      { "@type": "ListItem", position: 3, name: "רעננה", item: CANONICAL },
    ],
  },
];

export default function RaananaPage() {
  return (
    <>
      {schemas.map((s, i) => (
        <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(s) }} />
      ))}
      <main dir="rtl" lang="he" className="min-h-screen bg-white">
        <section className="bg-gradient-to-br from-orange-50 to-amber-50 border-b border-orange-100 py-12 px-4">
          <div className="max-w-4xl mx-auto">
            <nav className="flex items-center gap-1 text-sm text-gray-500 mb-6 flex-wrap">
              <Link href="/" className="hover:text-orange-700">ראשי</Link>
              <ChevronLeft className="w-4 h-4" />
              <Link href="/areas" className="hover:text-orange-700">אזורי שירות</Link>
              <ChevronLeft className="w-4 h-4" />
              <span className="text-orange-800 font-medium">רעננה</span>
            </nav>
            <div className="flex items-center gap-2 mb-4">
              <Car className="w-5 h-5 text-orange-600" />
              <span className="bg-orange-100 text-orange-800 text-xs font-semibold px-3 py-1 rounded-full">15 דקות נסיעה</span>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              רופאת אלרגיה קרובה לרעננה
            </h1>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              קליניקת ד״ר אנה ברמלי בהוד השרון נמצאת כ-15 דקות מרעננה - דרך כביש 4 או כביש 444. שירות מהיר ומקצועי לתושבי רעננה.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Button asChild size="lg" className="bg-orange-600 hover:bg-orange-700 text-white">
                <a href="https://ihaveallergy.com/book" target="_blank" rel="noopener noreferrer">קביעת תור</a>
              </Button>
              <Button asChild variant="outline" size="lg">
                <a href="tel:+972545808008"><Phone className="w-4 h-4 ml-2" />054-580-8008</a>
              </Button>
            </div>
          </div>
        </section>

        <div className="max-w-4xl mx-auto px-4 py-10">
          <div className="bg-orange-50 border border-orange-200 rounded-xl p-6 mb-8">
            <h2 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
              <Car className="w-5 h-5 text-orange-600" /> הגעה מרעננה
            </h2>
            <p className="text-sm text-gray-700">כביש 4 דרומה יציאת הוד השרון, או דרך כביש 444 עד הוד השרון → טווס 3. כ-15 דקות ללא פקק.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
            <div className="bg-gray-50 border border-gray-200 rounded-xl p-5">
              <h2 className="font-bold text-gray-900 mb-3">שירותים</h2>
              <ul className="space-y-2 text-sm text-gray-700">
                {["בדיקות עור ודם לאלרגנים", "אבחון אלרגיות מזון לילדים", "OIT לבוטנים", "SLIT לאבקנים וקרדית", "טיפול באסתמה", "הכנת תוכנית חירום"].map((s) => (
                  <li key={s} className="flex items-start gap-2"><span className="text-orange-500">✓</span>{s}</li>
                ))}
              </ul>
            </div>
            <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm">
              <h2 className="font-bold text-gray-900 mb-3">פרטי הקליניקה</h2>
              <div className="space-y-3 text-sm">
                <div className="flex items-start gap-2"><MapPin className="w-4 h-4 text-orange-600 mt-0.5" /><div><div className="font-medium">כתובת</div><div className="text-gray-600">טווס 3, הוד השרון</div></div></div>
                <div className="flex items-start gap-2"><Phone className="w-4 h-4 text-orange-600 mt-0.5" /><div><div className="font-medium">טלפון</div><a href="tel:+972545808008" className="text-orange-600">054-580-8008</a></div></div>
                <div className="flex items-start gap-2"><Clock className="w-4 h-4 text-orange-600 mt-0.5" /><div><div className="font-medium">שעות</div><div className="text-gray-600">א׳-ה׳: 09:00-18:00</div></div></div>
              </div>
            </div>
          </div>

          <div className="mb-8">
            <h2 className="font-semibold text-gray-900 mb-3">אזורים נוספים</h2>
            <div className="flex flex-wrap gap-2">
              {[["הוד השרון", "/areas/hod-hasharon"], ["הרצליה", "/areas/herzliya"], ["כפר סבא", "/areas/kfar-saba"], ["נתניה", "/areas/netanya"], ["תל אביב", "/areas/tel-aviv"], ["פתח תקווה", "/areas/petah-tikva"]].map(([name, link]) => (
                <Link key={name} href={link} className="bg-gray-100 hover:bg-orange-100 text-gray-700 text-sm px-3 py-1.5 rounded-lg">{name}</Link>
              ))}
            </div>
          </div>

          <section className="bg-gradient-to-br from-orange-600 to-amber-700 text-white rounded-2xl p-8 text-center">
            <h2 className="text-2xl font-bold mb-3">מרעננה לקליניקה - 15 דקות</h2>
            <p className="text-orange-100 mb-6">פנו לד״ר אנה ברמלי לקביעת תור.</p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button asChild size="lg" className="bg-white text-orange-700 hover:bg-orange-50 font-bold">
                <a href="https://ihaveallergy.com/book" target="_blank" rel="noopener noreferrer">קביעת תור אונליין</a>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white/10">
                <a href="tel:+972545808008"><Phone className="w-4 h-4 ml-2" />054-580-8008</a>
              </Button>
            </div>
          </section>
        </div>
      </main>
    </>
  );
}
