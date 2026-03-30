import type { Metadata } from "next";
import Link from "next/link";
import { ChevronLeft, MapPin, Phone, Clock, Car } from "lucide-react";
import { Button } from "@/components/ui/button";
import { MedicalDisclaimer } from "@/components/MedicalDisclaimer";

const CANONICAL = "https://seo.ihaveallergy.com/areas/hadera";
const TITLE = "אלרגולוג בחדרה | ד״ר אנה ברמלי - מרפאת אלרגיה קרובה";
const DESCRIPTION =
  "מחפשים אלרגולוג בחדרה? ד״ר אנה ברמלי, מומחית לאלרגיה בילדים ומבוגרים. מרפאה בהוד השרון, כ-30 דקות מחדרה. קביעת תור: 054-580-8008";
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
    name: "קליניקת ד״ר אנה ברמלי - אלרגיה ואימונולוגיה (קרוב לחדרה)",
    url: "https://ihaveallergy.com",
    telephone: "+972-54-580-8008",
    address: { "@type": "PostalAddress", streetAddress: "טווס 3", addressLocality: "הוד השרון", postalCode: "4501303", addressCountry: "IL" },
    areaServed: { "@type": "City", name: "חדרה" },
    medicalSpecialty: "AllergyAndImmunology",
    employee: { "@type": "Physician", name: "ד״ר אנה ברמלי", url: "https://seo.ihaveallergy.com/dr-anna-brameli" },
  },
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "ראשי", item: "https://seo.ihaveallergy.com/" },
      { "@type": "ListItem", position: 2, name: "אזורי שירות", item: "https://seo.ihaveallergy.com/areas" },
      { "@type": "ListItem", position: 3, name: "חדרה", item: CANONICAL },
    ],
  },
];

export default function HaderaPage() {
  return (
    <>
      {schemas.map((s, i) => (
        <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(s) }} />
      ))}
      <main dir="rtl" lang="he" className="min-h-screen bg-white">
        <section className="bg-gradient-to-br from-teal-50 to-cyan-50 border-b border-teal-100 py-12 px-4">
          <div className="max-w-4xl mx-auto">
            <nav className="flex items-center gap-1 text-sm text-gray-500 mb-6 flex-wrap">
              <Link href="/" className="hover:text-teal-700">ראשי</Link>
              <ChevronLeft className="w-4 h-4" />
              <Link href="/areas" className="hover:text-teal-700">אזורי שירות</Link>
              <ChevronLeft className="w-4 h-4" />
              <span className="text-teal-800 font-medium">חדרה</span>
            </nav>
            <div className="flex items-center gap-2 mb-4">
              <Car className="w-5 h-5 text-teal-600" />
              <span className="bg-teal-100 text-teal-800 text-xs font-semibold px-3 py-1 rounded-full">30 דקות נסיעה</span>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              אלרגולוג בחדרה
            </h1>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              תושבי חדרה מגיעים לקליניקת ד״ר אנה ברמלי בהוד השרון - כ-30 דקות בכביש 2 דרומה. מומחית לאלרגיה לילדים ומבוגרים, עם זמני המתנה קצרים לעומת מרפאות ממשלתיות.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Button asChild size="lg" className="bg-teal-600 hover:bg-teal-700 text-white">
                <a href="https://ihaveallergy.com/book" target="_blank" rel="noopener noreferrer">קביעת תור</a>
              </Button>
              <Button asChild variant="outline" size="lg">
                <a href="tel:+972545808008"><Phone className="w-4 h-4 ml-2" />054-580-8008</a>
              </Button>
            </div>
          </div>
        </section>

        <div className="max-w-4xl mx-auto px-4 py-10">
          <div className="bg-teal-50 border border-teal-200 rounded-xl p-6 mb-8">
            <h2 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
              <Car className="w-5 h-5 text-teal-600" /> הגעה מחדרה
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
              <div>
                <div className="font-semibold text-gray-800 mb-1">ברכב</div>
                <p className="text-gray-600">כביש 2 דרומה → יציאת הוד השרון → רחוב טווס 3. כ-30 דקות ללא פקק.</p>
              </div>
              <div>
                <div className="font-semibold text-gray-800 mb-1">בתחבורה ציבורית</div>
                <p className="text-gray-600">רכבת חדרה-בנימינה לרמת השרון ואוטובוס להוד השרון. כ-50-60 דקות.</p>
              </div>
            </div>
          </div>

          <div className="mb-8">
            <h2 className="text-xl font-bold text-gray-900 mb-4">למה לבחור בד״ר אנה ברמלי?</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {[
                { title: "מומחית לאלרגיה", desc: "אלרגולוגית מוסמכת - לא רופאה כללית. אבחון מדויק ומעמיק." },
                { title: "תורים מהירים", desc: "המתנה קצרה לעומת קופות חולים וקליניקות ממשלתיות." },
                { title: "OIT ואימונותרפיה", desc: "טיפולים מתקדמים לאלרגיות מזון ואבקנים שאינם בכל מקום." },
              ].map((card) => (
                <div key={card.title} className="bg-gray-50 border border-gray-200 rounded-xl p-4">
                  <div className="font-semibold text-gray-900 mb-2 text-sm">{card.title}</div>
                  <p className="text-xs text-gray-600 leading-relaxed">{card.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
            <div className="bg-gray-50 border border-gray-200 rounded-xl p-5">
              <h2 className="font-bold text-gray-900 mb-3">שירותי המרפאה</h2>
              <ul className="space-y-2 text-sm text-gray-700">
                {["בדיקות עור (SPT) ודם לאלרגנים", "IgE ספציפי + component testing", "OIT לבוטנים וחלב", "SLIT/SCIT לאבקנים וקרדית", "ניהול אסתמה אלרגית", "תוכנית חירום AEAP"].map((s) => (
                  <li key={s} className="flex items-start gap-2"><span className="text-teal-500">✓</span>{s}</li>
                ))}
              </ul>
            </div>
            <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm">
              <h2 className="font-bold text-gray-900 mb-3">פרטי המרפאה</h2>
              <div className="space-y-3 text-sm">
                <div className="flex items-start gap-2"><MapPin className="w-4 h-4 text-teal-600 mt-0.5" /><div><div className="font-medium">כתובת</div><div className="text-gray-600">טווס 3, הוד השרון</div></div></div>
                <div className="flex items-start gap-2"><Phone className="w-4 h-4 text-teal-600 mt-0.5" /><div><div className="font-medium">טלפון</div><a href="tel:+972545808008" className="text-teal-600">054-580-8008</a></div></div>
                <div className="flex items-start gap-2"><Clock className="w-4 h-4 text-teal-600 mt-0.5" /><div><div className="font-medium">שעות</div><div className="text-gray-600">א׳-ה׳: 09:00-18:00</div></div></div>
              </div>
            </div>
          </div>

          <div className="mb-8">
            <h2 className="text-xl font-bold text-gray-900 mb-4">שאלות נפוצות - אלרגולוג לתושבי חדרה</h2>
            <div className="space-y-3">
              {[
                { q: "האם שווה לנסוע מחדרה להוד השרון לאלרגולוג?", a: "רבים מתושבי חדרה בוחרים לנסוע כי מדובר במומחית ייעודית עם זמני המתנה קצרים ושירותים מתקדמים שאינם זמינים קרוב לחדרה." },
                { q: "כמה זמן לוקח לנסוע מחדרה להוד השרון?", a: "בדרך כלל 25-35 דקות בכביש 2 דרומה. בשעות עומס כ-40 דקות." },
                { q: "האם יש חנייה ליד המרפאה?", a: "כן, חנייה חינמית זמינה ליד הכתובת ברחוב טווס 3 בהוד השרון." },
                { q: "האם המרפאה מטפלת בילדים מחדרה?", a: "כן, ד״ר ברמלי מתמחה בילדים ומבוגרים כאחד. ילדים מחדרה מטופלים באופן שוטף." },
              ].map((faq, i) => (
                <div key={i} className="border border-gray-200 rounded-xl overflow-hidden">
                  <div className="bg-gray-50 px-4 py-3"><p className="font-semibold text-gray-900 text-sm">{faq.q}</p></div>
                  <div className="px-4 py-3"><p className="text-gray-600 text-sm leading-relaxed">{faq.a}</p></div>
                </div>
              ))}
            </div>
          </div>

          <div className="mb-8">
            <h2 className="font-semibold text-gray-900 mb-3">אזורים נוספים</h2>
            <div className="flex flex-wrap gap-2">
              {[["הוד השרון", "/areas/hod-hasharon"], ["נתניה", "/areas/netanya"], ["כפר סבא", "/areas/kfar-saba"], ["רעננה", "/areas/raanana"], ["הרצליה", "/areas/herzliya"], ["תל אביב", "/areas/tel-aviv"]].map(([name, link]) => (
                <Link key={name} href={link} className="bg-gray-100 hover:bg-teal-100 text-gray-700 text-sm px-3 py-1.5 rounded-lg">{name}</Link>
              ))}
            </div>
          </div>

          <section className="bg-gradient-to-br from-teal-600 to-cyan-700 text-white rounded-2xl p-8 text-center">
            <h2 className="text-2xl font-bold mb-3">מחדרה לקליניקה - 30 דקות</h2>
            <p className="text-teal-100 mb-6">ד״ר אנה ברמלי - מומחית לאלרגיה. קבעו תור עכשיו.</p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button asChild size="lg" className="bg-white text-teal-700 hover:bg-teal-50 font-bold">
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
