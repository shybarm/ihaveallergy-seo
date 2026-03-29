import type { Metadata } from "next";
import Link from "next/link";
import { ChevronLeft, MapPin, Phone, Clock, Car } from "lucide-react";
import { Button } from "@/components/ui/button";

const CANONICAL = "https://seo.ihaveallergy.com/areas/herzliya";
const TITLE = "רופאת אלרגיה בהרצליה | ד״ר אנה ברמלי - קליניקה פרטית קרובה";
const DESCRIPTION =
  "אלרגולוגית פרטית קרובה להרצליה - ד״ר אנה ברמלי בהוד השרון, 10 דקות נסיעה. בדיקות עור, IgE, OIT ואימונותרפיה לילדים ומבוגרים. קבעו תור.";
const OG_IMAGE = "https://ihaveallergy.com/og-logo.png";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: CANONICAL },
  openGraph: {
    type: "website",
    url: CANONICAL,
    title: TITLE,
    description: DESCRIPTION,
    locale: "he_IL",
    siteName: "I Have Allergy",
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: TITLE }],
  },
  twitter: { card: "summary_large_image", title: TITLE, description: DESCRIPTION, images: [OG_IMAGE] },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "MedicalClinic",
  name: "קליניקת ד״ר אנה ברמלי - אלרגיה ואימונולוגיה (קרוב להרצליה)",
  url: "https://ihaveallergy.com",
  telephone: "+972-54-580-8008",
  address: {
    "@type": "PostalAddress",
    streetAddress: "טווס 3",
    addressLocality: "הוד השרון",
    postalCode: "4501303",
    addressCountry: "IL",
  },
  geo: { "@type": "GeoCoordinates", latitude: 32.1524, longitude: 34.8947 },
  areaServed: { "@type": "City", name: "הרצליה" },
  medicalSpecialty: "AllergyAndImmunology",
  employee: {
    "@type": "Physician",
    name: "ד״ר אנה ברמלי",
    url: "https://seo.ihaveallergy.com/dr-anna-brameli",
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "ראשי", item: "https://seo.ihaveallergy.com/" },
    { "@type": "ListItem", position: 2, name: "אזורי שירות", item: "https://seo.ihaveallergy.com/areas" },
    { "@type": "ListItem", position: 3, name: "הרצליה", item: CANONICAL },
  ],
};

export default function HerzliyaPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <main dir="rtl" lang="he" className="min-h-screen bg-white">
        <section className="bg-gradient-to-br from-sky-50 to-blue-50 border-b border-sky-100 py-12 px-4">
          <div className="max-w-4xl mx-auto">
            <nav className="flex items-center gap-1 text-sm text-gray-500 mb-6 flex-wrap">
              <Link href="/" className="hover:text-sky-700">ראשי</Link>
              <ChevronLeft className="w-4 h-4" />
              <Link href="/areas" className="hover:text-sky-700">אזורי שירות</Link>
              <ChevronLeft className="w-4 h-4" />
              <span className="text-sky-800 font-medium">הרצליה</span>
            </nav>
            <div className="flex items-center gap-2 mb-4">
              <Car className="w-5 h-5 text-sky-600" />
              <span className="bg-sky-100 text-sky-800 text-xs font-semibold px-3 py-1 rounded-full">10 דקות נסיעה</span>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              רופאת אלרגיה קרובה להרצליה
            </h1>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              ד״ר אנה ברמלי מטפלת במטופלים רבים מהרצליה בקליניקה בהוד השרון - כ-10 דקות נסיעה בכביש 2. מומחית לאלרגיה ואימונולוגיה עם ניסיון רב בילדים ובמבוגרים.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Button asChild size="lg" className="bg-sky-600 hover:bg-sky-700 text-white">
                <a href="https://ihaveallergy.com/book" target="_blank" rel="noopener noreferrer">קביעת תור</a>
              </Button>
              <Button asChild variant="outline" size="lg">
                <a href="tel:+972545808008"><Phone className="w-4 h-4 ml-2" />054-580-8008</a>
              </Button>
            </div>
          </div>
        </section>

        <div className="max-w-4xl mx-auto px-4 py-10">
          {/* How to get there */}
          <div className="bg-sky-50 border border-sky-200 rounded-xl p-6 mb-8">
            <h2 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
              <Car className="w-5 h-5 text-sky-600" /> הגעה מהרצליה לקליניקה
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
              <div>
                <div className="font-semibold text-gray-800 mb-1">ברכב (מומלץ)</div>
                <p className="text-gray-600">כביש 2 צפונה → יציאה הוד השרון → רחוב טווס 3. כ-10 דקות ללא פקק.</p>
              </div>
              <div>
                <div className="font-semibold text-gray-800 mb-1">בתחבורה ציבורית</div>
                <p className="text-gray-600">אוטובוס קו 55 או 56 מהרצליה להוד השרון. כ-20-25 דקות.</p>
              </div>
            </div>
          </div>

          {/* Services */}
          <div className="mb-8">
            <h2 className="text-xl font-bold text-gray-900 mb-4">שירותים לתושבי הרצליה</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                { title: "בדיקות עור (Skin Prick Test)", desc: "אבחון מהיר לאלרגנים: מזון, אבקנים, בעלי חיים, קרדית" },
                { title: "בדיקות דם IgE ספציפי", desc: "פנל אלרגנים כולל component testing (Ara h 2, Ses i 1)" },
                { title: "OIT לבוטנים וחלב", desc: "פרוטוקול הפחתת רגישות מבוקר בקליניקה" },
                { title: "אימונותרפיה (SLIT/SCIT)", desc: "לריניטיס אלרגי, אסתמה אלרגית ועקיצות" },
                { title: "ייעוץ לילדים עם אגזמה", desc: "ניהול אטופיק דרמטיטיס ואלרגיות מזון" },
                { title: "תוכנית חירום AEAP", desc: "הכנת תוכנית חירום ומרשם אפיפן" },
              ].map((s) => (
                <div key={s.title} className="bg-gray-50 border border-gray-200 rounded-xl p-4">
                  <div className="font-semibold text-gray-900 text-sm mb-1">{s.title}</div>
                  <p className="text-xs text-gray-600">{s.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Clinic details */}
          <div className="bg-white border border-gray-200 rounded-xl p-5 mb-8 shadow-sm">
            <h2 className="font-bold text-gray-900 mb-4">פרטי הקליניקה</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-sky-600 mt-0.5" />
                <div><div className="font-medium">כתובת</div><div className="text-gray-600">טווס 3, הוד השרון</div></div>
              </div>
              <div className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-sky-600 mt-0.5" />
                <div><div className="font-medium">טלפון</div><a href="tel:+972545808008" className="text-sky-600">054-580-8008</a></div>
              </div>
              <div className="flex items-start gap-3">
                <Clock className="w-4 h-4 text-sky-600 mt-0.5" />
                <div><div className="font-medium">שעות</div><div className="text-gray-600">א׳-ה׳: 09:00-18:00</div></div>
              </div>
            </div>
          </div>

          {/* Other areas */}
          <div className="mb-8">
            <h2 className="font-semibold text-gray-900 mb-3">אזורים נוספים שאנו משרתים</h2>
            <div className="flex flex-wrap gap-2">
              {[
                { name: "הוד השרון", link: "/areas/hod-hasharon" },
                { name: "רמת השרון", link: "/areas/ramat-hasharon" },
                { name: "כפר סבא", link: "/areas/kfar-saba" },
                { name: "רעננה", link: "/areas/raanana" },
                { name: "נתניה", link: "/areas/netanya" },
                { name: "תל אביב", link: "/areas/tel-aviv" },
                { name: "פתח תקווה", link: "/areas/petah-tikva" },
              ].map((a) => (
                <Link key={a.name} href={a.link} className="bg-gray-100 hover:bg-sky-100 text-gray-700 hover:text-sky-800 text-sm px-3 py-1.5 rounded-lg transition-colors">
                  {a.name}
                </Link>
              ))}
            </div>
          </div>

          {/* CTA */}
          <section className="bg-gradient-to-br from-sky-600 to-blue-700 text-white rounded-2xl p-8 text-center">
            <h2 className="text-2xl font-bold mb-3">מהרצליה לקליניקה - 10 דקות בלבד</h2>
            <p className="text-sky-100 mb-6">תורים פנויים לתושבי הרצליה וסביבתה. פנו עכשיו לקביעת תור.</p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button asChild size="lg" className="bg-white text-sky-700 hover:bg-sky-50 font-bold">
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
