import type { Metadata } from "next";
import Link from "next/link";
import { ChevronLeft, MapPin, Phone, Clock, Car } from "lucide-react";
import { Button } from "@/components/ui/button";

const CANONICAL = "https://seo.ihaveallergy.com/areas/ramat-hasharon";
const TITLE = "רופאת אלרגיה ברמת השרון | ד״ר אנה ברמלי — קליניקה פרטית קרובה";
const DESCRIPTION =
  "אלרגולוגית פרטית קרובה לרמת השרון — ד״ר אנה ברמלי בהוד השרון, 12 דקות נסיעה. אבחון וטיפול לילדים ומבוגרים. בדיקות עור, IgE ואימונותרפיה.";
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
  name: "קליניקת ד״ר אנה ברמלי — אלרגיה ואימונולוגיה (קרוב לרמת השרון)",
  url: "https://ihaveallergy.com",
  telephone: "+972-54-580-8008",
  address: { "@type": "PostalAddress", streetAddress: "טווס 3", addressLocality: "הוד השרון", postalCode: "4501303", addressCountry: "IL" },
  geo: { "@type": "GeoCoordinates", latitude: 32.1524, longitude: 34.8947 },
  areaServed: { "@type": "City", name: "רמת השרון" },
  medicalSpecialty: "AllergyAndImmunology",
  employee: { "@type": "Physician", name: "ד״ר אנה ברמלי", url: "https://seo.ihaveallergy.com/dr-anna-brameli" },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "ראשי", item: "https://seo.ihaveallergy.com/" },
    { "@type": "ListItem", position: 2, name: "אזורי שירות", item: "https://seo.ihaveallergy.com/areas" },
    { "@type": "ListItem", position: 3, name: "רמת השרון", item: CANONICAL },
  ],
};

export default function RamatHasharonPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <main dir="rtl" lang="he" className="min-h-screen bg-white">
        <section className="bg-gradient-to-br from-violet-50 to-purple-50 border-b border-violet-100 py-12 px-4">
          <div className="max-w-4xl mx-auto">
            <nav className="flex items-center gap-1 text-sm text-gray-500 mb-6 flex-wrap">
              <Link href="/" className="hover:text-violet-700">ראשי</Link>
              <ChevronLeft className="w-4 h-4" />
              <Link href="/areas" className="hover:text-violet-700">אזורי שירות</Link>
              <ChevronLeft className="w-4 h-4" />
              <span className="text-violet-800 font-medium">רמת השרון</span>
            </nav>
            <div className="flex items-center gap-2 mb-4">
              <Car className="w-5 h-5 text-violet-600" />
              <span className="bg-violet-100 text-violet-800 text-xs font-semibold px-3 py-1 rounded-full">12 דקות נסיעה</span>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              רופאת אלרגיה קרובה לרמת השרון
            </h1>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              ד״ר אנה ברמלי בהוד השרון משרתת מטופלים רבים מרמת השרון. הקליניקה נמצאת כ-12 דקות נסיעה — נגישה בכביש 20 צפונה.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Button asChild size="lg" className="bg-violet-600 hover:bg-violet-700 text-white">
                <a href="https://ihaveallergy.com/book" target="_blank" rel="noopener noreferrer">קביעת תור</a>
              </Button>
              <Button asChild variant="outline" size="lg">
                <a href="tel:+972545808008"><Phone className="w-4 h-4 ml-2" />054-580-8008</a>
              </Button>
            </div>
          </div>
        </section>

        <div className="max-w-4xl mx-auto px-4 py-10">
          <div className="bg-violet-50 border border-violet-200 rounded-xl p-6 mb-8">
            <h2 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
              <Car className="w-5 h-5 text-violet-600" /> הגעה מרמת השרון לקליניקה
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
              <div>
                <div className="font-semibold text-gray-800 mb-1">ברכב</div>
                <p className="text-gray-600">כביש 20 צפונה או כביש 4 → הוד השרון → רחוב טווס 3. כ-12 דקות.</p>
              </div>
              <div>
                <div className="font-semibold text-gray-800 mb-1">בתחבורה ציבורית</div>
                <p className="text-gray-600">קווי אוטובוס ישירים בין רמת השרון להוד השרון. כ-20 דקות.</p>
              </div>
            </div>
          </div>

          <div className="mb-8">
            <h2 className="text-xl font-bold text-gray-900 mb-4">שירותים לתושבי רמת השרון</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                "אבחון אלרגיות מזון לילדים",
                "בדיקות עור ו-IgE ספציפי",
                "OIT לבוטנים וחלב",
                "אימונותרפיה לאבקנים וקרדית",
                "ניהול אסתמה אלרגית",
                "ייעוץ לאטופיק דרמטיטיס",
              ].map((s) => (
                <div key={s} className="flex items-center gap-2 bg-gray-50 border border-gray-200 rounded-lg p-3 text-sm">
                  <span className="text-violet-500">✓</span>
                  <span>{s}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white border border-gray-200 rounded-xl p-5 mb-8 shadow-sm">
            <h2 className="font-bold text-gray-900 mb-4">פרטי הקליניקה</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-violet-600 mt-0.5" />
                <div><div className="font-medium">כתובת</div><div className="text-gray-600">טווס 3, הוד השרון</div></div>
              </div>
              <div className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-violet-600 mt-0.5" />
                <div><div className="font-medium">טלפון</div><a href="tel:+972545808008" className="text-violet-600">054-580-8008</a></div>
              </div>
              <div className="flex items-start gap-3">
                <Clock className="w-4 h-4 text-violet-600 mt-0.5" />
                <div><div className="font-medium">שעות</div><div className="text-gray-600">א׳–ה׳: 09:00–18:00</div></div>
              </div>
            </div>
          </div>

          <div className="mb-8">
            <h2 className="font-semibold text-gray-900 mb-3">אזורים נוספים</h2>
            <div className="flex flex-wrap gap-2">
              {[["הוד השרון", "/areas/hod-hasharon"], ["הרצליה", "/areas/herzliya"], ["כפר סבא", "/areas/kfar-saba"], ["רעננה", "/areas/raanana"], ["נתניה", "/areas/netanya"], ["תל אביב", "/areas/tel-aviv"]].map(([name, link]) => (
                <Link key={name} href={link} className="bg-gray-100 hover:bg-violet-100 text-gray-700 text-sm px-3 py-1.5 rounded-lg">{name}</Link>
              ))}
            </div>
          </div>

          <section className="bg-gradient-to-br from-violet-600 to-purple-700 text-white rounded-2xl p-8 text-center">
            <h2 className="text-2xl font-bold mb-3">מרמת השרון לקליניקה — 12 דקות</h2>
            <p className="text-violet-100 mb-6">פנו עכשיו לקביעת תור עם ד״ר אנה ברמלי.</p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button asChild size="lg" className="bg-white text-violet-700 hover:bg-violet-50 font-bold">
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
