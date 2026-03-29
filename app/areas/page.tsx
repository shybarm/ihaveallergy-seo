import type { Metadata } from "next";
import Link from "next/link";
import { ChevronLeft, MapPin, Phone, Car } from "lucide-react";
import { Button } from "@/components/ui/button";

const CANONICAL = "https://seo.ihaveallergy.com/areas";
const TITLE = "אזורי שירות — קליניקת אלרגיה בהוד השרון | ד״ר אנה ברמלי";
const DESCRIPTION =
  "קליניקת ד״ר אנה ברמלי בהוד השרון משרתת מטופלים מכל מרכז הארץ: הרצליה, רמת השרון, כפר סבא, רעננה, נתניה, תל אביב ופתח תקווה.";
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

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "ראשי", item: "https://seo.ihaveallergy.com/" },
    { "@type": "ListItem", position: 2, name: "אזורי שירות", item: CANONICAL },
  ],
};

const serviceAreaSchema = {
  "@context": "https://schema.org",
  "@type": "MedicalClinic",
  name: "קליניקת ד״ר אנה ברמלי — אלרגיה ואימונולוגיה",
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
  areaServed: [
    { "@type": "City", name: "הוד השרון" },
    { "@type": "City", name: "הרצליה" },
    { "@type": "City", name: "רמת השרון" },
    { "@type": "City", name: "כפר סבא" },
    { "@type": "City", name: "רעננה" },
    { "@type": "City", name: "נתניה" },
    { "@type": "City", name: "תל אביב" },
    { "@type": "City", name: "פתח תקווה" },
  ],
  medicalSpecialty: "AllergyAndImmunology",
  employee: {
    "@type": "Physician",
    name: "ד״ר אנה ברמלי",
    jobTitle: "מומחית לאלרגיה ואימונולוגיה",
    url: "https://seo.ihaveallergy.com/dr-anna-brameli",
  },
};

const areas = [
  {
    name: "הוד השרון",
    href: "/areas/hod-hasharon",
    distance: "מיקום הקליניקה",
    driveTime: "—",
    highlight: true,
    desc: "הקליניקה ממוקמת בהוד השרון — טווס 3. תחנה מרכזית לכל השרון.",
    color: "blue",
  },
  {
    name: "הרצליה",
    href: "/areas/herzliya",
    distance: "10 ק\"מ",
    driveTime: "10 דקות",
    highlight: false,
    desc: "נגישות מהירה דרך כביש 2 צפונה.",
    color: "sky",
  },
  {
    name: "רמת השרון",
    href: "/areas/ramat-hasharon",
    distance: "12 ק\"מ",
    driveTime: "12 דקות",
    highlight: false,
    desc: "דרך כביש 20 צפונה — פחות מ-15 דקות.",
    color: "violet",
  },
  {
    name: "כפר סבא",
    href: "/areas/kfar-saba",
    distance: "14 ק\"מ",
    driveTime: "15 דקות",
    highlight: false,
    desc: "כביש 4 דרומה — גישה נוחה.",
    color: "emerald",
  },
  {
    name: "רעננה",
    href: "/areas/raanana",
    distance: "14 ק\"מ",
    driveTime: "15 דקות",
    highlight: false,
    desc: "דרך כביש 4 או כביש 444.",
    color: "orange",
  },
  {
    name: "נתניה",
    href: "/areas/netanya",
    distance: "25 ק\"מ",
    driveTime: "20 דקות",
    highlight: false,
    desc: "כביש 2 דרומה — כ-20 דקות.",
    color: "cyan",
  },
  {
    name: "תל אביב",
    href: "/areas/tel-aviv",
    distance: "22 ק\"מ",
    driveTime: "25 דקות",
    highlight: false,
    desc: "מצפון ת\"א כ-20–25 דקות בכביש 2.",
    color: "indigo",
  },
  {
    name: "פתח תקווה",
    href: "/areas/petah-tikva",
    distance: "20 ק\"מ",
    driveTime: "20 דקות",
    highlight: false,
    desc: "כביש 4 צפונה או כביש 6.",
    color: "rose",
  },
];

export default function AreasPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceAreaSchema) }} />

      <main dir="rtl" lang="he" className="min-h-screen bg-white">
        <section className="bg-gradient-to-br from-blue-50 to-indigo-50 border-b border-blue-100 py-12 px-4">
          <div className="max-w-4xl mx-auto">
            <nav className="flex items-center gap-1 text-sm text-gray-500 mb-6">
              <Link href="/" className="hover:text-blue-700">ראשי</Link>
              <ChevronLeft className="w-4 h-4" />
              <span className="text-blue-800 font-medium">אזורי שירות</span>
            </nav>
            <div className="flex items-center gap-2 mb-4">
              <MapPin className="w-5 h-5 text-blue-600" />
              <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-3 py-1 rounded-full">מרכז הארץ</span>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              אזורי שירות — קליניקת אלרגיה בהוד השרון
            </h1>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              קליניקת ד״ר אנה ברמלי ממוקמת בהוד השרון — לב מרכז הארץ. מטופלים מגיעים מכל ערי השרון, גוש דן וצפון תל אביב.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
                <a href="https://ihaveallergy.com/book" target="_blank" rel="noopener noreferrer">קביעת תור</a>
              </Button>
              <Button asChild variant="outline" size="lg">
                <a href="tel:+972545808008"><Phone className="w-4 h-4 ml-2" />054-580-8008</a>
              </Button>
            </div>
          </div>
        </section>

        <div className="max-w-4xl mx-auto px-4 py-10">
          {/* Clinic Location */}
          <div className="bg-blue-600 text-white rounded-xl p-6 mb-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <div className="text-blue-200 text-sm mb-1">מיקום הקליניקה</div>
              <h2 className="text-xl font-bold mb-1">הוד השרון — טווס 3</h2>
              <p className="text-blue-200 text-sm">מיקוד 4501303 | א׳–ה׳ 09:00–18:00</p>
            </div>
            <div className="flex flex-col gap-2">
              <a href="tel:+972545808008" className="flex items-center gap-2 bg-white/20 hover:bg-white/30 text-white px-4 py-2 rounded-lg text-sm font-medium">
                <Phone className="w-4 h-4" />054-580-8008
              </a>
            </div>
          </div>

          {/* Areas Grid */}
          <h2 className="text-2xl font-bold text-gray-900 mb-6">ערים שאנו משרתים</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
            {areas.map((area) => (
              <Link
                key={area.name}
                href={area.href}
                className={`block border rounded-xl p-5 hover:shadow-md transition-all ${
                  area.highlight
                    ? "border-blue-300 bg-blue-50 hover:border-blue-400"
                    : "border-gray-200 bg-white hover:border-gray-300"
                }`}
              >
                <div className="flex items-start justify-between mb-3">
                  <h3 className={`font-bold text-lg ${area.highlight ? "text-blue-900" : "text-gray-900"}`}>
                    {area.name}
                    {area.highlight && <span className="mr-2 text-xs bg-blue-600 text-white px-2 py-0.5 rounded-full">מיקום הקליניקה</span>}
                  </h3>
                  {!area.highlight && (
                    <div className="flex items-center gap-1 text-gray-500 text-sm">
                      <Car className="w-4 h-4" />
                      <span>{area.driveTime}</span>
                    </div>
                  )}
                </div>
                <p className="text-sm text-gray-600 mb-3">{area.desc}</p>
                <div className="flex items-center gap-1 text-blue-600 text-sm font-medium">
                  <span>פרטים נוספים</span>
                  <ChevronLeft className="w-4 h-4" />
                </div>
              </Link>
            ))}
          </div>

          {/* Map */}
          <div className="mb-10">
            <h2 className="text-xl font-bold text-gray-900 mb-4">מפת הקליניקה</h2>
            <div className="rounded-xl overflow-hidden border border-gray-200 h-72">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3392.5!2d34.8947!3d32.1524!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzLCsDA5JzA4LjYiTiAzNMKwNTMnNDAuOSJF!5e0!3m2!1siw!2sil!4v1"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="מפת קליניקת ד״ר אנה ברמלי"
              />
            </div>
          </div>

          {/* Why us */}
          <div className="mb-10">
            <h2 className="text-xl font-bold text-gray-900 mb-5">למה לנסוע לקליניקה בהוד השרון?</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {[
                { icon: "🏥", title: "מומחית בלעדית", desc: "ד״ר ברמלי אלרגולוגית ייעודית — לא מרפאת ילדים כללית" },
                { icon: "⏰", title: "תורים מהירים", desc: "זמן המתנה קצר לעומת קופות חולים וקליניקות עמוסות" },
                { icon: "🔬", title: "בדיקות מתקדמות", desc: "Component testing, OIT, SLIT — שירותים שאינם בכל מקום" },
              ].map((item) => (
                <div key={item.title} className="bg-gray-50 border border-gray-200 rounded-xl p-5 text-center">
                  <div className="text-3xl mb-3">{item.icon}</div>
                  <div className="font-semibold text-gray-900 mb-2">{item.title}</div>
                  <p className="text-sm text-gray-600">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <section className="bg-gradient-to-br from-blue-600 to-indigo-700 text-white rounded-2xl p-8 text-center">
            <h2 className="text-2xl font-bold mb-3">קבעו תור — פנויים לכל מרכז הארץ</h2>
            <p className="text-blue-100 mb-6 max-w-xl mx-auto">
              ד״ר אנה ברמלי מקבלת מטופלים מהשרון, גוש דן וצפון. פנו לקביעת תור בטלפון או אונליין.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button asChild size="lg" className="bg-white text-blue-700 hover:bg-blue-50 font-bold">
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
