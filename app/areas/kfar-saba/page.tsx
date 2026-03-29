import type { Metadata } from "next";
import Link from "next/link";
import { ChevronLeft, MapPin, Phone, Clock, Car } from "lucide-react";
import { Button } from "@/components/ui/button";

const CANONICAL = "https://seo.ihaveallergy.com/areas/kfar-saba";
const TITLE = "רופאת אלרגיה בכפר סבא | ד״ר אנה ברמלי - קליניקה פרטית קרובה";
const DESCRIPTION =
  "אלרגולוגית פרטית קרובה לכפר סבא - ד״ר אנה ברמלי בהוד השרון, 15 דקות נסיעה. מומחית לאלרגיה ואימונולוגיה לילדים ומבוגרים. קבעו תור.";
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
    name: "קליניקת ד״ר אנה ברמלי - אלרגיה ואימונולוגיה (קרוב לכפר סבא)",
    url: "https://ihaveallergy.com",
    telephone: "+972-54-580-8008",
    address: { "@type": "PostalAddress", streetAddress: "טווס 3", addressLocality: "הוד השרון", postalCode: "4501303", addressCountry: "IL" },
    areaServed: { "@type": "City", name: "כפר סבא" },
    medicalSpecialty: "AllergyAndImmunology",
    employee: { "@type": "Physician", name: "ד״ר אנה ברמלי", url: "https://seo.ihaveallergy.com/dr-anna-brameli" },
  },
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "ראשי", item: "https://seo.ihaveallergy.com/" },
      { "@type": "ListItem", position: 2, name: "אזורי שירות", item: "https://seo.ihaveallergy.com/areas" },
      { "@type": "ListItem", position: 3, name: "כפר סבא", item: CANONICAL },
    ],
  },
];

export default function KfarSabaPage() {
  return (
    <>
      {schemas.map((s, i) => (
        <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(s) }} />
      ))}
      <main dir="rtl" lang="he" className="min-h-screen bg-white">
        <section className="bg-gradient-to-br from-emerald-50 to-green-50 border-b border-emerald-100 py-12 px-4">
          <div className="max-w-4xl mx-auto">
            <nav className="flex items-center gap-1 text-sm text-gray-500 mb-6 flex-wrap">
              <Link href="/" className="hover:text-emerald-700">ראשי</Link>
              <ChevronLeft className="w-4 h-4" />
              <Link href="/areas" className="hover:text-emerald-700">אזורי שירות</Link>
              <ChevronLeft className="w-4 h-4" />
              <span className="text-emerald-800 font-medium">כפר סבא</span>
            </nav>
            <div className="flex items-center gap-2 mb-4">
              <Car className="w-5 h-5 text-emerald-600" />
              <span className="bg-emerald-100 text-emerald-800 text-xs font-semibold px-3 py-1 rounded-full">15 דקות נסיעה</span>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              רופאת אלרגיה קרובה לכפר סבא
            </h1>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              תושבי כפר סבא ממשיכים לקליניקת ד״ר ברמלי בהוד השרון - כ-15 דקות בכביש 4 דרומה. תורים פנויים לילדים ומבוגרים.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Button asChild size="lg" className="bg-emerald-600 hover:bg-emerald-700 text-white">
                <a href="https://ihaveallergy.com/book" target="_blank" rel="noopener noreferrer">קביעת תור</a>
              </Button>
              <Button asChild variant="outline" size="lg">
                <a href="tel:+972545808008"><Phone className="w-4 h-4 ml-2" />054-580-8008</a>
              </Button>
            </div>
          </div>
        </section>

        <div className="max-w-4xl mx-auto px-4 py-10">
          <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-6 mb-8">
            <h2 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
              <Car className="w-5 h-5 text-emerald-600" /> הגעה מכפר סבא
            </h2>
            <p className="text-sm text-gray-700">כביש 4 דרומה → צומת הוד השרון → רחוב טווס 3. כ-15 דקות ללא פקק. ניתן גם בכביש 444 או דרך רעננה.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
            <div className="bg-gray-50 border border-gray-200 rounded-xl p-5">
              <h2 className="font-bold text-gray-900 mb-3">שירותים</h2>
              <ul className="space-y-2 text-sm text-gray-700">
                {["בדיקות עור (SPT)", "IgE ספציפי + component testing", "OIT לבוטנים", "אימונותרפיה לאבקנים", "ניהול אסתמה ואגזמה", "תוכנית חירום AEAP"].map((s) => (
                  <li key={s} className="flex items-start gap-2"><span className="text-emerald-500">✓</span>{s}</li>
                ))}
              </ul>
            </div>
            <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm">
              <h2 className="font-bold text-gray-900 mb-3">פרטי הקליניקה</h2>
              <div className="space-y-3 text-sm">
                <div className="flex items-start gap-2"><MapPin className="w-4 h-4 text-emerald-600 mt-0.5" /><div><div className="font-medium">כתובת</div><div className="text-gray-600">טווס 3, הוד השרון</div></div></div>
                <div className="flex items-start gap-2"><Phone className="w-4 h-4 text-emerald-600 mt-0.5" /><div><div className="font-medium">טלפון</div><a href="tel:+972545808008" className="text-emerald-600">054-580-8008</a></div></div>
                <div className="flex items-start gap-2"><Clock className="w-4 h-4 text-emerald-600 mt-0.5" /><div><div className="font-medium">שעות</div><div className="text-gray-600">א׳-ה׳: 09:00-18:00</div></div></div>
              </div>
            </div>
          </div>

          <div className="mb-8">
            <h2 className="font-semibold text-gray-900 mb-3">אזורים נוספים</h2>
            <div className="flex flex-wrap gap-2">
              {[["הוד השרון", "/areas/hod-hasharon"], ["הרצליה", "/areas/herzliya"], ["רמת השרון", "/areas/ramat-hasharon"], ["רעננה", "/areas/raanana"], ["נתניה", "/areas/netanya"], ["תל אביב", "/areas/tel-aviv"]].map(([name, link]) => (
                <Link key={name} href={link} className="bg-gray-100 hover:bg-emerald-100 text-gray-700 text-sm px-3 py-1.5 rounded-lg">{name}</Link>
              ))}
            </div>
          </div>

          <section className="bg-gradient-to-br from-emerald-600 to-green-700 text-white rounded-2xl p-8 text-center">
            <h2 className="text-2xl font-bold mb-3">מכפר סבא לקליניקה - 15 דקות</h2>
            <p className="text-emerald-100 mb-6">קבעו תור עם ד״ר אנה ברמלי - מומחית מהמרכז.</p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button asChild size="lg" className="bg-white text-emerald-700 hover:bg-emerald-50 font-bold">
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
