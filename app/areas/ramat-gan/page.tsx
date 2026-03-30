import type { Metadata } from "next";
import Link from "next/link";
import { ChevronLeft, MapPin, Phone, Clock, Car } from "lucide-react";
import { Button } from "@/components/ui/button";
import { MedicalDisclaimer } from "@/components/MedicalDisclaimer";

const CANONICAL = "https://seo.ihaveallergy.com/areas/ramat-gan";
const TITLE = "אלרגולוג ברמת גן | ד״ר אנה ברמלי - מרפאת אלרגיה במרכז";
const DESCRIPTION =
  "מחפשים אלרגולוג ברמת גן? ד״ר אנה ברמלי, מומחית לאלרגיה בילדים ומבוגרים. מרפאה בהוד השרון, כ-25 דקות מרמת גן. קביעת תור: 054-580-8008";
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
    name: "קליניקת ד״ר אנה ברמלי - אלרגיה ואימונולוגיה (קרוב לרמת גן)",
    url: "https://ihaveallergy.com",
    telephone: "+972-54-580-8008",
    address: { "@type": "PostalAddress", streetAddress: "טווס 3", addressLocality: "הוד השרון", postalCode: "4501303", addressCountry: "IL" },
    areaServed: { "@type": "City", name: "רמת גן" },
    medicalSpecialty: "AllergyAndImmunology",
    employee: { "@type": "Physician", name: "ד״ר אנה ברמלי", url: "https://seo.ihaveallergy.com/dr-anna-brameli" },
  },
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "ראשי", item: "https://seo.ihaveallergy.com/" },
      { "@type": "ListItem", position: 2, name: "אזורי שירות", item: "https://seo.ihaveallergy.com/areas" },
      { "@type": "ListItem", position: 3, name: "רמת גן", item: CANONICAL },
    ],
  },
];

export default function RamatGanPage() {
  return (
    <>
      {schemas.map((s, i) => (
        <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(s) }} />
      ))}
      <main dir="rtl" lang="he" className="min-h-screen bg-white">
        <section className="bg-gradient-to-br from-purple-50 to-violet-50 border-b border-purple-100 py-12 px-4">
          <div className="max-w-4xl mx-auto">
            <nav className="flex items-center gap-1 text-sm text-gray-500 mb-6 flex-wrap">
              <Link href="/" className="hover:text-purple-700">ראשי</Link>
              <ChevronLeft className="w-4 h-4" />
              <Link href="/areas" className="hover:text-purple-700">אזורי שירות</Link>
              <ChevronLeft className="w-4 h-4" />
              <span className="text-purple-800 font-medium">רמת גן</span>
            </nav>
            <div className="flex items-center gap-2 mb-4">
              <Car className="w-5 h-5 text-purple-600" />
              <span className="bg-purple-100 text-purple-800 text-xs font-semibold px-3 py-1 rounded-full">25 דקות נסיעה</span>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              אלרגולוג ברמת גן
            </h1>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              ד״ר אנה ברמלי בהוד השרון מטפלת במטופלים רבים מרמת גן. הגישה מהירה בכביש 4 צפונה - כ-25 דקות. שירות מקצועי עם תורים פנויים לילדים ומבוגרים.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Button asChild size="lg" className="bg-purple-600 hover:bg-purple-700 text-white">
                <a href="https://ihaveallergy.com/book" target="_blank" rel="noopener noreferrer">קביעת תור</a>
              </Button>
              <Button asChild variant="outline" size="lg">
                <a href="tel:+972545808008"><Phone className="w-4 h-4 ml-2" />054-580-8008</a>
              </Button>
            </div>
          </div>
        </section>

        <div className="max-w-4xl mx-auto px-4 py-10">
          <div className="bg-purple-50 border border-purple-200 rounded-xl p-6 mb-8">
            <h2 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
              <Car className="w-5 h-5 text-purple-600" /> הגעה מרמת גן
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
              <div>
                <div className="font-semibold text-gray-800 mb-1">ברכב</div>
                <p className="text-gray-600">כביש 4 צפונה → כביש 40 → הוד השרון → רחוב טווס 3. כ-25 דקות ללא פקק.</p>
              </div>
              <div>
                <div className="font-semibold text-gray-800 mb-1">בתחבורה ציבורית</div>
                <p className="text-gray-600">קווי אוטובוס ישירים לתל אביב ומשם לכיוון הוד השרון. כ-45-55 דקות.</p>
              </div>
            </div>
          </div>

          <div className="mb-8">
            <h2 className="text-xl font-bold text-gray-900 mb-4">למה לבחור בד״ר אנה ברמלי?</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {[
                { title: "אלרגולוגית מומחית", desc: "התמחות בלעדית באלרגיה ואימונולוגיה - אבחון מדויק ומקיף." },
                { title: "זמן המתנה קצר", desc: "תורים פנויים בתוך ימים, לא חודשים - שלא כמו בקופות חולים." },
                { title: "שירות לכל המשפחה", desc: "מטפלת בילדים מגיל 0 ובמבוגרים - ביקור משפחתי אחד לכולם." },
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
                {["בדיקות עור (SPT) ודם לאלרגנים", "IgE ספציפי + component testing", "OIT לבוטנים וחלב", "SLIT/SCIT לאבקנים וקרדית", "ניהול אסתמה ואגזמה", "תוכנית חירום AEAP"].map((s) => (
                  <li key={s} className="flex items-start gap-2"><span className="text-purple-500">✓</span>{s}</li>
                ))}
              </ul>
            </div>
            <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm">
              <h2 className="font-bold text-gray-900 mb-3">פרטי המרפאה</h2>
              <div className="space-y-3 text-sm">
                <div className="flex items-start gap-2"><MapPin className="w-4 h-4 text-purple-600 mt-0.5" /><div><div className="font-medium">כתובת</div><div className="text-gray-600">טווס 3, הוד השרון</div></div></div>
                <div className="flex items-start gap-2"><Phone className="w-4 h-4 text-purple-600 mt-0.5" /><div><div className="font-medium">טלפון</div><a href="tel:+972545808008" className="text-purple-600">054-580-8008</a></div></div>
                <div className="flex items-start gap-2"><Clock className="w-4 h-4 text-purple-600 mt-0.5" /><div><div className="font-medium">שעות</div><div className="text-gray-600">א׳-ה׳: 09:00-18:00</div></div></div>
              </div>
            </div>
          </div>

          <div className="mb-8">
            <h2 className="text-xl font-bold text-gray-900 mb-4">שאלות נפוצות - אלרגולוג לתושבי רמת גן</h2>
            <div className="space-y-3">
              {[
                { q: "האם יש אלרגולוג טוב ברמת גן עצמה?", a: "ישנם אלרגולוגים בגוש דן, אך רבים מתושבי רמת גן מגיעים לד״ר ברמלי בשל המומחיות הייעודית, זמני ההמתנה הקצרים ושירותים כמו OIT שאינם זמינים בכל מקום." },
                { q: "כמה עולה ביקור אצל אלרגולוגית פרטית?", a: "עלות הביקור הפרטי משתנה. ניתן לברר מחירים ואפשרויות החזר מקופת חולים בעת קביעת התור." },
                { q: "האם ניתן לקבל הפנייה מרופא המשפחה לאלרגולוג?", a: "כן, הפנייה מרופא המשפחה עשויה לאפשר החזר חלקי מקופת החולים. ניתן גם לפנות ישירות ללא הפנייה." },
                { q: "כמה זמן לוקח לנסוע מרמת גן להוד השרון?", a: "בדרך כלל 20-30 דקות בכביש 4 צפונה. בשעות עומס יתכן עיכוב קל." },
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
              {[["הוד השרון", "/areas/hod-hasharon"], ["תל אביב", "/areas/tel-aviv"], ["גבעתיים", "/areas/givatayim"], ["פתח תקווה", "/areas/petah-tikva"], ["הרצליה", "/areas/herzliya"], ["כפר סבא", "/areas/kfar-saba"]].map(([name, link]) => (
                <Link key={name} href={link} className="bg-gray-100 hover:bg-purple-100 text-gray-700 text-sm px-3 py-1.5 rounded-lg">{name}</Link>
              ))}
            </div>
          </div>

          <section className="bg-gradient-to-br from-purple-600 to-violet-700 text-white rounded-2xl p-8 text-center">
            <h2 className="text-2xl font-bold mb-3">מרמת גן לקליניקה - 25 דקות</h2>
            <p className="text-purple-100 mb-6">פנו לד״ר אנה ברמלי לקביעת תור.</p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button asChild size="lg" className="bg-white text-purple-700 hover:bg-purple-50 font-bold">
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
