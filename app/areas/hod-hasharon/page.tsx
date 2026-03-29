import type { Metadata } from "next";
import Link from "next/link";
import { ChevronLeft, MapPin, Phone, Clock, Car } from "lucide-react";
import { Button } from "@/components/ui/button";

const CANONICAL = "https://seo.ihaveallergy.com/areas/hod-hasharon";
const TITLE = "רופאת אלרגיה בהוד השרון | ד״ר אנה ברמלי - קליניקה פרטית";
const DESCRIPTION =
  "ד״ר אנה ברמלי - מומחית לאלרגיה ואימונולוגיה בהוד השרון. קליניקה פרטית ברחוב טווס 3. בדיקות, אבחון וטיפול לילדים ומבוגרים. קבעו תור עכשיו.";
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
  name: "קליניקת ד״ר אנה ברמלי - אלרגיה ואימונולוגיה הוד השרון",
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
  image: OG_IMAGE,
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday"],
      opens: "09:00",
      closes: "18:00",
    },
  ],
  priceRange: "$$",
  medicalSpecialty: "AllergyAndImmunology",
  employee: {
    "@type": "Physician",
    name: "ד״ר אנה ברמלי",
    jobTitle: "מומחית לאלרגיה ואימונולוגיה",
    url: "https://seo.ihaveallergy.com/dr-anna-brameli",
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "ראשי", item: "https://seo.ihaveallergy.com/" },
    { "@type": "ListItem", position: 2, name: "אזורי שירות", item: "https://seo.ihaveallergy.com/areas" },
    { "@type": "ListItem", position: 3, name: "הוד השרון", item: CANONICAL },
  ],
};

const faqs = [
  {
    q: "היכן נמצאת קליניקת האלרגיה בהוד השרון?",
    a: "הקליניקה ממוקמת ברחוב טווס 3, הוד השרון (מיקוד 4501303). ניתן לחנות בחינם בסביבה. הקליניקה נגישה לכיסאות גלגלים.",
  },
  {
    q: "מה שעות הפעילות?",
    a: "ימים א׳-ה׳, 09:00-18:00. קביעת תורים בטלפון 054-580-8008 או דרך האתר ihaveallergy.com/book.",
  },
  {
    q: "אילו שירותים מוצעים בקליניקה?",
    a: "בדיקות עור (skin prick test), בדיקות דם IgE ספציפי, אבחון אלרגיות מזון, OIT, אימונותרפיה, טיפול באסתמה אלרגית, ניהול אטופיק דרמטיטיס.",
  },
  {
    q: "האם הקליניקה מתאימה לילדים?",
    a: "כן - ד״ר ברמלי מתמחה בילדים ובמבוגרים. קיים ניסיון רב עם תינוקות, ילדים פגי לב וילדים חרדים מהליכים. הגישה ידידותית לילד.",
  },
];

export default function HodHasharonPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <main dir="rtl" lang="he" className="min-h-screen bg-white">
        <section className="bg-gradient-to-br from-blue-50 to-indigo-50 border-b border-blue-100 py-12 px-4">
          <div className="max-w-4xl mx-auto">
            <nav className="flex items-center gap-1 text-sm text-gray-500 mb-6 flex-wrap">
              <Link href="/" className="hover:text-blue-700">ראשי</Link>
              <ChevronLeft className="w-4 h-4" />
              <Link href="/areas" className="hover:text-blue-700">אזורי שירות</Link>
              <ChevronLeft className="w-4 h-4" />
              <span className="text-blue-800 font-medium">הוד השרון</span>
            </nav>
            <div className="flex items-center gap-2 mb-4">
              <MapPin className="w-5 h-5 text-blue-600" />
              <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-3 py-1 rounded-full">מיקום הקליניקה</span>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              רופאת אלרגיה בהוד השרון
            </h1>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              ד״ר אנה ברמלי מנהלת קליניקת אלרגיה ואימונולוגיה פרטית בהוד השרון - מרכז השרון. בדיקות, אבחון וטיפול מותאם לכל גיל.
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
          {/* Clinic Info */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-10">
            <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm">
              <h2 className="font-bold text-gray-900 mb-4">פרטי הקליניקה</h2>
              <div className="space-y-3 text-sm">
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <div className="font-medium">כתובת</div>
                    <div className="text-gray-600">טווס 3, הוד השרון 4501303</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Phone className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <div className="font-medium">טלפון</div>
                    <a href="tel:+972545808008" className="text-blue-600 hover:underline">054-580-8008</a>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Clock className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <div className="font-medium">שעות פעילות</div>
                    <div className="text-gray-600">א׳-ה׳: 09:00-18:00</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-blue-50 border border-blue-200 rounded-xl p-5">
              <h2 className="font-bold text-gray-900 mb-4">שירותים בקליניקה</h2>
              <ul className="space-y-2 text-sm text-gray-700">
                {[
                  "בדיקות עור - Skin Prick Test",
                  "בדיקות דם IgE ספציפי",
                  "אבחון אלרגיות מזון",
                  "אימונותרפיה (SLIT/OIT)",
                  "טיפול באסתמה אלרגית",
                  "ניהול אטופיק דרמטיטיס",
                  "תוכנית חירום (AEAP) ואפיפן",
                ].map((s) => (
                  <li key={s} className="flex items-start gap-2">
                    <span className="text-blue-500 mt-1">✓</span>
                    <span>{s}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Map */}
          <div className="mb-10">
            <h2 className="text-xl font-bold text-gray-900 mb-4">מפה והגעה לקליניקה</h2>
            <div className="rounded-xl overflow-hidden border border-gray-200 h-64">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3392.5!2d34.8947!3d32.1524!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzLCsDA5JzA4LjYiTiAzNMKwNTMnNDAuOSJF!5e0!3m2!1siw!2sil!4v1"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="מפת קליניקת ד״ר אנה ברמלי הוד השרון"
              />
            </div>
          </div>

          {/* Nearby cities */}
          <div className="mb-10">
            <h2 className="text-xl font-bold text-gray-900 mb-5">ערים קרובות לקליניקה</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {[
                { city: "הרצליה", distance: "10 דקות", link: "/areas/herzliya" },
                { city: "רמת השרון", distance: "12 דקות", link: "/areas/ramat-hasharon" },
                { city: "כפר סבא", distance: "15 דקות", link: "/areas/kfar-saba" },
                { city: "רעננה", distance: "15 דקות", link: "/areas/raanana" },
                { city: "נתניה", distance: "20 דקות", link: "/areas/netanya" },
                { city: "תל אביב", distance: "25 דקות", link: "/areas/tel-aviv" },
                { city: "פתח תקווה", distance: "20 דקות", link: "/areas/petah-tikva" },
              ].map((item) => (
                <Link
                  key={item.city}
                  href={item.link}
                  className="bg-gray-50 border border-gray-200 rounded-xl p-3 text-center hover:border-blue-300 hover:bg-blue-50 transition-colors"
                >
                  <div className="flex items-center justify-center gap-1 mb-1">
                    <Car className="w-3 h-3 text-gray-500" />
                    <span className="text-xs text-gray-500">{item.distance}</span>
                  </div>
                  <div className="font-medium text-sm text-gray-900">{item.city}</div>
                </Link>
              ))}
            </div>
          </div>

          {/* FAQ */}
          <section className="mb-10">
            <h2 className="text-xl font-bold text-gray-900 mb-5">שאלות נפוצות</h2>
            <div className="space-y-4">
              {faqs.map((faq, i) => (
                <div key={i} className="border border-gray-200 rounded-xl overflow-hidden">
                  <div className="bg-gray-50 px-5 py-4">
                    <h3 className="font-semibold text-gray-900 text-sm">{faq.q}</h3>
                  </div>
                  <div className="px-5 py-4">
                    <p className="text-gray-700 text-sm leading-relaxed">{faq.a}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* CTA */}
          <section className="bg-gradient-to-br from-blue-600 to-indigo-700 text-white rounded-2xl p-8 text-center">
            <h2 className="text-2xl font-bold mb-3">קבעו תור בקליניקה בהוד השרון</h2>
            <p className="text-blue-100 mb-6">תורים זמינים בימים א׳-ה׳. ניתן לפנות בטלפון או דרך האתר.</p>
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
