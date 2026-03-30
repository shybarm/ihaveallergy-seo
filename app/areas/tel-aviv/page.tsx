import type { Metadata } from "next";
import Link from "next/link";
import { ChevronLeft, MapPin, Phone, Clock, Car } from "lucide-react";
import { Button } from "@/components/ui/button";
import { MedicalDisclaimer } from "@/components/MedicalDisclaimer";

const CANONICAL = "https://seo.ihaveallergy.com/areas/tel-aviv";
const TITLE = "רופאת אלרגיה קרובה לתל אביב | ד״ר אנה ברמלי - קליניקה פרטית";
const DESCRIPTION =
  "אלרגולוגית פרטית קרובה לתל אביב - ד״ר אנה ברמלי בהוד השרון, 25 דקות נסיעה. מומחית לאלרגיה לילדים ומבוגרים. בדיקות, OIT ואימונותרפיה.";
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
    name: "קליניקת ד״ר אנה ברמלי - אלרגיה (קרוב לתל אביב)",
    url: "https://ihaveallergy.com", telephone: "+972-54-580-8008",
    address: { "@type": "PostalAddress", streetAddress: "טווס 3", addressLocality: "הוד השרון", postalCode: "4501303", addressCountry: "IL" },
    areaServed: { "@type": "City", name: "תל אביב" },
    medicalSpecialty: "AllergyAndImmunology",
    employee: { "@type": "Physician", name: "ד״ר אנה ברמלי", url: "https://seo.ihaveallergy.com/dr-anna-brameli" },
  },
  {
    "@context": "https://schema.org", "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "ראשי", item: "https://seo.ihaveallergy.com/" },
      { "@type": "ListItem", position: 2, name: "אזורי שירות", item: "https://seo.ihaveallergy.com/areas" },
      { "@type": "ListItem", position: 3, name: "תל אביב", item: CANONICAL },
    ],
  },
];

export default function TelAvivPage() {
  return (
    <>
      {schemas.map((s, i) => <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(s) }} />)}
      <main dir="rtl" lang="he" className="min-h-screen bg-white">
        <section className="bg-gradient-to-br from-indigo-50 to-blue-50 border-b border-indigo-100 py-12 px-4">
          <div className="max-w-4xl mx-auto">
            <nav className="flex items-center gap-1 text-sm text-gray-500 mb-6 flex-wrap">
              <Link href="/" className="hover:text-indigo-700">ראשי</Link>
              <ChevronLeft className="w-4 h-4" />
              <Link href="/areas" className="hover:text-indigo-700">אזורי שירות</Link>
              <ChevronLeft className="w-4 h-4" />
              <span className="text-indigo-800 font-medium">תל אביב</span>
            </nav>
            <div className="flex items-center gap-2 mb-4">
              <Car className="w-5 h-5 text-indigo-600" />
              <span className="bg-indigo-100 text-indigo-800 text-xs font-semibold px-3 py-1 rounded-full">25 דקות נסיעה</span>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              רופאת אלרגיה קרובה לתל אביב
            </h1>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              ד״ר אנה ברמלי - מומחית לאלרגיה ואימונולוגיה בהוד השרון. כ-25 דקות מצפון תל אביב בכביש 2. מטפלת במטופלים רבים מגוש דן.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Button asChild size="lg" className="bg-indigo-600 hover:bg-indigo-700 text-white">
                <a href="https://ihaveallergy.com/book" target="_blank" rel="noopener noreferrer">קביעת תור</a>
              </Button>
              <Button asChild variant="outline" size="lg">
                <a href="tel:+972545808008"><Phone className="w-4 h-4 ml-2" />054-580-8008</a>
              </Button>
            </div>
          </div>
        </section>

        <div className="max-w-4xl mx-auto px-4 py-10">
          <div className="bg-indigo-50 border border-indigo-200 rounded-xl p-5 mb-8">
            <h2 className="font-bold text-gray-900 mb-2 flex items-center gap-2"><Car className="w-4 h-4 text-indigo-600" />הגעה מתל אביב</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
              <div><strong>ברכב:</strong> כביש 2 צפונה → יציאה הוד השרון. כ-25 דקות מדרום ת&quot;א, 20 דקות מצפון.</div>
              <div><strong>בתחבורה:</strong> רכבת לרמת השרון + אוטובוס, או קווים ישירים. כ-40-50 דקות.</div>
            </div>
          </div>

          <div className="mb-8">
            <h2 className="text-xl font-bold text-gray-900 mb-4">למה כדאי לנסוע להוד השרון?</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {[
                { title: "תורים מהירים", desc: "זמן המתנה קצר לעומת קופות חולים בת\"א" },
                { title: "מומחית בלעדית", desc: "ד״ר ברמלי - אלרגולוגית ייעודית, לא רופא כללי" },
                { title: "OIT ואימונותרפיה", desc: "שירותים מתקדמים שאינם זמינים בכל קליניקה" },
              ].map((s) => (
                <div key={s.title} className="bg-gray-50 border border-gray-200 rounded-xl p-4">
                  <div className="font-semibold text-gray-900 mb-1 text-sm">{s.title}</div>
                  <p className="text-xs text-gray-600">{s.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
            <div className="bg-gray-50 border border-gray-200 rounded-xl p-5">
              <h2 className="font-bold text-gray-900 mb-3">שירותים</h2>
              <ul className="space-y-1 text-sm text-gray-700">
                {["בדיקות עור ודם מקיפות", "component testing (Ara h 2, Ses i 1)", "OIT לבוטנים וחלב", "SLIT/SCIT לאבקנים", "ניהול אסתמה ואגזמה", "ייעוץ תזונתי לאלרגיות מזון"].map((s) => (
                  <li key={s} className="flex items-start gap-2"><span className="text-indigo-500">✓</span>{s}</li>
                ))}
              </ul>
            </div>
            <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm">
              <h2 className="font-bold text-gray-900 mb-3">פרטי הקליניקה</h2>
              <div className="space-y-2 text-sm">
                <div className="flex gap-2"><MapPin className="w-4 h-4 text-indigo-600 mt-0.5 flex-shrink-0" /><span>טווס 3, הוד השרון</span></div>
                <div className="flex gap-2"><Phone className="w-4 h-4 text-indigo-600 mt-0.5 flex-shrink-0" /><a href="tel:+972545808008" className="text-indigo-600">054-580-8008</a></div>
                <div className="flex gap-2"><Clock className="w-4 h-4 text-indigo-600 mt-0.5 flex-shrink-0" /><span className="text-gray-600">א׳-ה׳: 09:00-18:00</span></div>
              </div>
            </div>
          </div>

          <div className="mb-8">
            <h2 className="font-semibold text-gray-900 mb-3">אזורים נוספים</h2>
            <div className="flex flex-wrap gap-2">
              {[["הוד השרון", "/areas/hod-hasharon"], ["הרצליה", "/areas/herzliya"], ["רמת השרון", "/areas/ramat-hasharon"], ["פתח תקווה", "/areas/petah-tikva"], ["כפר סבא", "/areas/kfar-saba"], ["נתניה", "/areas/netanya"]].map(([name, link]) => (
                <Link key={name} href={link} className="bg-gray-100 hover:bg-indigo-100 text-gray-700 text-sm px-3 py-1.5 rounded-lg">{name}</Link>
              ))}
            </div>
          </div>

          <section className="bg-gradient-to-br from-indigo-600 to-blue-700 text-white rounded-2xl p-8 text-center">
            <h2 className="text-2xl font-bold mb-3">מתל אביב לקליניקה - 25 דקות</h2>
            <p className="text-indigo-100 mb-6">מומחית לאלרגיה זמינה. פנו לקביעת תור.</p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button asChild size="lg" className="bg-white text-indigo-700 hover:bg-indigo-50 font-bold">
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
