import type { Metadata } from "next";
import Link from "next/link";
import { ChevronLeft, Calendar, Phone, AlertTriangle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { MedicalDisclaimer } from "@/components/MedicalDisclaimer";

const CANONICAL = "https://seo.ihaveallergy.com/alergia-lesumsum";
const TITLE = "אלרגיה לשומשום בילדים ובמבוגרים - מדריך מקיף | ד״ר אנה ברמלי";
const DESCRIPTION =
  "מדריך רפואי על אלרגיה לשומשום: תסמינים, אבחון, מזונות להימנע, תיוג בישראל ואנפילקסיס. שומשום הוא האלרגן ה-9 בישראל. נכתב על ידי ד״ר אנה ברמלי.";
const OG_IMAGE = "https://ihaveallergy.com/og-logo.png";
const DATE = "2026-03-29";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: CANONICAL },
  openGraph: {
    type: "article",
    url: CANONICAL,
    title: TITLE,
    description: DESCRIPTION,
    locale: "he_IL",
    siteName: "I Have Allergy",
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: TITLE }],
    publishedTime: DATE,
    modifiedTime: DATE,
  },
  twitter: { card: "summary_large_image", title: TITLE, description: DESCRIPTION, images: [OG_IMAGE] },
};

const faqs = [
  {
    q: "האם אלרגיה לשומשום שכיחה בישראל?",
    a: "כן - שומשום הוא אחד מ-9 האלרגנים המחייבים תיוג בישראל. בשל השימוש הנרחב בטחינה, חלות שומשום ומוצרי מזרח תיכון, ישראל מדווחת על אחת מהשכיחויות הגבוהות בעולם לאלרגיה לשומשום - כ-0.1-0.2% מהאוכלוסייה.",
  },
  {
    q: "האם אלרגיה לשומשום מסוכנת כמו בוטנים?",
    a: "שומשום יכול לגרום לאנפילקסיס בדיוק כמו בוטנים. חלבוני ה-2S albumin בשומשום (Ses i 1) יציבים לחום ולעיכול ואינם מתפרקים בבישול. בישראל, שומשום אחראי לחלק ניכר מתגובות אנפילקסיס ממזון.",
  },
  {
    q: "האם אפשר לאכול טחינה אם יש אלרגיה לשומשום?",
    a: "לא. טחינה עשויה אך ורק משומשום טחון ומרוכז - היא מכילה ריכוז גבוה מאוד של אלרגני שומשום ומסוכנת מאוד לאלרגיים. גם חומוס מסחרי עשוי להכיל טחינה - חשוב לבדוק.",
  },
  {
    q: "אילו תוויות מעידות על שומשום?",
    a: "בעברית: שומשום, טחינה, שמן שומשום, שמן סומסום. באנגלית: sesame, sesame seed, sesame oil, tahini, tahina, gingelly. בחוק הישראלי, שומשום חייב לרשום בתיבה בולטת או בהטעמה.",
  },
  {
    q: "האם שמן שומשום בטוח לאלרגיים?",
    a: "לא. שמן שומשום - גם מזוקק - עלול להכיל עקבות של חלבוני אלרגן. שמן שומשום קר (cold-pressed) בעל ריכוז אלרגן גבוה. בניגוד לשמן בוטנים מזוקק (שלעתים בטוח), שמן שומשום אינו בטוח לאלרגיים.",
  },
  {
    q: "האם ילדים יכולים להתגבר על אלרגיה לשומשום?",
    a: "פחות נפוץ מאשר אלרגיה לחלב. מחקרים מראים ש-20-30% בלבד מתגברים על אלרגיה לשומשום עד גיל 5-7. לרוב היא נמשכת לאורך החיים. מעקב שנתי עם בדיקות IgE ואתגר מזון יקבעו אם חלה ירידה.",
  },
  {
    q: "מה הם מזונות ישראליים עם שומשום נסתר?",
    a: "חלה עם שומשום, פלאפל (ציפוי), בורקס ומאפים שמן שומשום, חומוס עם טחינה, אחינה, פסטות שומשום, ממתקי חלבה, גלידות מזרח תיכוניות, לחם אחיד מפעלי, עוגיות שומשום, קרקרים.",
  },
  {
    q: "מה לעשות בתגובה אלרגית לשומשום?",
    a: "תגובה קלה: אנטיהיסטמין ומעקב. תגובה בינונית-קשה (קשיי נשימה, בצקת, ירידת לחץ דם): אפיפן מיד ו-112. לאחר כל תגובה קשה - הגעה לחדר מיון גם אם הסימנים נעלמו, בגלל תגובה דו-פאזית.",
  },
  {
    q: "האם אלרגיה לשומשום קשורה לאלרגיות אחרות?",
    a: "שומשום שייך למשפחת הצמחים Pedaliaceae. יש קשר צולב אפשרי עם זרעי פשתן, פרג וקנבוס. קשר עם בוטנים ואגוזים שכיח - 30-40% מאלרגיים לשומשום אלרגיים גם לבוטנים. אבחון ספציפי חיוני.",
  },
  {
    q: "כיצד מאבחנים אלרגיה לשומשום?",
    a: "בדיקת skin prick test לשומשום, IgE ספציפי לשומשום (f10), ו-Ses i 1 (2S albumin). ערך IgE גבוה עם Ses i 1 חיובי מנבא סיכון גבוה לאנפילקסיס. אתגר מזון מבוקר - הסטנדרט הזהב לאבחון.",
  },
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "MedicalWebPage",
  name: TITLE,
  description: DESCRIPTION,
  url: CANONICAL,
  inLanguage: "he-IL",
  datePublished: DATE,
  dateModified: DATE,
  about: {
    "@type": "MedicalCondition",
    name: "Sesame Allergy",
    alternateName: "אלרגיה לשומשום",
    code: { "@type": "MedicalCode", code: "Z91.018", codingSystem: "ICD-10" },
  },
  author: {
    "@type": "Physician",
    name: "ד״ר אנה ברמלי",
    jobTitle: "מומחית לאלרגיה ואימונולוגיה",
    url: "https://seo.ihaveallergy.com/dr-anna-brameli",
  },
  publisher: { "@type": "Organization", name: "I Have Allergy", url: "https://seo.ihaveallergy.com" },
  reviewedBy: { "@type": "Physician", name: "ד״ר אנה ברמלי", jobTitle: "מומחית לאלרגיה ואימונולוגיה" },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "ראשי", item: "https://seo.ihaveallergy.com/" },
    { "@type": "ListItem", position: 2, name: "אלרגיה לשומשום", item: CANONICAL },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

export default function SesameAllergyPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <main dir="rtl" lang="he" className="min-h-screen bg-white">
        {/* Hero */}
        <section className="bg-gradient-to-br from-stone-50 to-amber-50 border-b border-stone-200 py-12 px-4">
          <div className="max-w-4xl mx-auto">
            <nav className="flex items-center gap-1 text-sm text-gray-500 mb-6">
              <Link href="/" className="hover:text-stone-700">ראשי</Link>
              <ChevronLeft className="w-4 h-4" />
              <span className="text-stone-800 font-medium">אלרגיה לשומשום</span>
            </nav>
            <div className="flex items-center gap-3 mb-4">
              <span className="bg-stone-100 text-stone-800 text-xs font-semibold px-3 py-1 rounded-full">אלרגן #9 בישראל</span>
              <span className="bg-red-100 text-red-700 text-xs font-semibold px-3 py-1 rounded-full flex items-center gap-1">
                <AlertTriangle className="w-3 h-3" /> סיכון אנפילקסיס
              </span>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              אלרגיה לשומשום
            </h1>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              שומשום הוא אחד האלרגנים הנפוצים ביותר בישראל ובמזרח התיכון ועלול לגרום לתגובה אלרגית חמורה (אנפילקסיס). שומשום מופיע במזונות רבים בישראל ולא תמיד מסומן בבירור, מה שמקשה על הימנעות.
            </p>
            <div className="flex items-center gap-3 text-sm text-gray-500">
              <Calendar className="w-4 h-4" />
              <span>עודכן: מרץ 2026</span>
              <span className="mx-2">•</span>
              <span>ד״ר אנה ברמלי, מומחית לאלרגיה ואימונולוגיה</span>
            </div>
          </div>
        </section>

        <div className="max-w-4xl mx-auto px-4 py-10">
          {/* TOC */}
          <div className="bg-stone-50 border border-stone-200 rounded-xl p-6 mb-10">
            <h2 className="font-bold text-gray-900 mb-4 text-lg">תוכן עניינים</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm">
              {[
                "שומשום בישראל - הרקע",
                "חלבוני אלרגן בשומשום",
                "תסמינים ואנפילקסיס",
                "אבחון - בדיקות",
                "מזונות ישראליים עם שומשום",
                "ניהול וחיים עם האלרגיה",
                "שאלות נפוצות",
              ].map((item) => (
                <div key={item} className="flex items-center gap-2 text-stone-700">
                  <span className="w-1.5 h-1.5 bg-stone-500 rounded-full flex-shrink-0" />
                  {item}
                </div>
              ))}
            </div>
          </div>

          {/* Section 1 */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-5 border-r-4 border-stone-500 pr-4">
              שומשום בישראל - הרקע
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              בניגוד למדינות אחרות שבהן שומשום הוא תוספת אקזוטית, בישראל הוא חלק בלתי נפרד מהמטבח: חלה עם שומשום, טחינה על כל שולחן, חומוס עם טחינה, פלאפל - כמעט כל ארוחה ישראלית מסורתית כוללת שומשום. זה מה שהופך את ניהול האלרגיה לאתגר ייחודי.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              בשנת 2023, ה-FDA הוסיף שומשום לרשימת 9 האלרגנים המחייבים תיוג בארה&quot;ב. בישראל, שומשום מחויב בתיוג כבר שנים. עם זאת, מחקרים מראים שאנשים רבים מפספסים שומשום נסתר - במיוחד בתפריטים של מסעדות ואוכל מוכן.
            </p>
            <div className="bg-amber-50 border border-amber-200 rounded-xl p-5">
              <h3 className="font-semibold text-amber-900 mb-2">עובדות מפתח</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                {[
                  "שכיחות: ~0.1-0.2% מהאוכלוסייה הכללית, גבוהה יותר בילדים",
                  "אנפילקסיס מדווח ב-25-30% מהמקרים",
                  "שומשום הוא אלרגן יציב לחום - לא מתפרק בבישול",
                  "אין OIT מאושר לשומשום (בניגוד לבוטנים)",
                  "רק 20-30% מהילדים מתגברים על האלרגיה",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="text-amber-500 mt-1">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {/* Section 2 */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-5 border-r-4 border-stone-500 pr-4">
              חלבוני אלרגן בשומשום
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { name: "Ses i 1 (2S albumin)", importance: "מרכזי", desc: "הסמן החשוב לאנפילקסיס. עמיד לחום ועיכול. חיובי = סיכון גבוה לתגובה מערכתית." },
                { name: "Ses i 2, 4, 5", importance: "משני", desc: "חלבוני אחסון נוספים. תורמים לתגובות מוכללות. חשיפה לחלבונים אלה מנבאת תגובה קשה." },
                { name: "Ses i 3 (7S globulin)", importance: "משני", desc: "חלבון אחסון. קשר צולב לקטניות ואגוזים. חיובי לרוב בסנסיטיזציה מוכללת לזרעים." },
                { name: "Ses i 6, 7", importance: "נמוך", desc: "חלבוני מבנה. פחות יציבים לחום. קשר עם תסמינים קלים בעיקר." },
              ].map((protein) => (
                <div key={protein.name} className="bg-gray-50 border border-gray-200 rounded-xl p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="font-semibold text-gray-900 text-sm">{protein.name}</span>
                    <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${
                      protein.importance === "מרכזי" ? "bg-red-100 text-red-700" :
                      protein.importance === "משני" ? "bg-yellow-100 text-yellow-700" :
                      "bg-gray-100 text-gray-600"
                    }`}>{protein.importance}</span>
                  </div>
                  <p className="text-sm text-gray-600">{protein.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Section 3 */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-5 border-r-4 border-stone-500 pr-4">
              תסמינים ואנפילקסיס
            </h2>
            <p className="text-gray-700 leading-relaxed mb-5">
              תסמינים מופיעים בדרך כלל תוך 30 דקות עד שעתיים לאחר אכילה. כ-25-30% מהתגובות מגיעות לרמה של אנפילקסיס.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div>
                <h3 className="font-semibold text-gray-900 mb-3">תסמינים לפי מערכת</h3>
                <div className="space-y-3">
                  {[
                    { system: "עור", symptoms: "כוורת, אנגיואדמה, פריחה אדומה, גרד" },
                    { system: "מעיים", symptoms: "הקאות, בחילה, כאבי בטן, שלשול" },
                    { system: "נשימה", symptoms: "צפצופים, קשיי נשימה, נחירה, עצבות בחזה" },
                    { system: "לב-כלי דם", symptoms: "ירידת לחץ דם, דופק מהיר, חיוורון" },
                    { system: "נוירולוגי", symptoms: "סחרחורת, ערפול, אובדן הכרה" },
                  ].map((row) => (
                    <div key={row.system} className="flex gap-3 text-sm">
                      <span className="font-semibold text-stone-700 w-20 flex-shrink-0">{row.system}:</span>
                      <span className="text-gray-600">{row.symptoms}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-red-50 border border-red-200 rounded-xl p-5">
                <h3 className="font-semibold text-red-900 mb-3 flex items-center gap-2">
                  <AlertTriangle className="w-4 h-4" /> אנפילקסיס - פעלו מיד
                </h3>
                <ol className="space-y-2 text-sm text-red-800 list-decimal list-inside">
                  <li>דקרו אפיפן בירך חיצונית</li>
                  <li>חייגו 112 מיד</li>
                  <li>שכבו עם רגליים מורמות (אם אין קשיי נשימה)</li>
                  <li>אל תתנו לאדם לקום</li>
                  <li>חדר מיון גם אם הסימנים חלפו</li>
                </ol>
              </div>
            </div>
          </section>

          {/* Section 4 - Israeli foods */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-5 border-r-4 border-stone-500 pr-4">
              מזונות ישראליים עם שומשום - מלא ונסתר
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {[
                {
                  category: "ברור - מכיל שומשום",
                  color: "red",
                  items: ["חלה עם שומשום", "טחינה (כל סוג)", "חלבה", "בורגר שומשום", "עוגיות שומשום", "לחם שומשום"],
                },
                {
                  category: "נסתר - בדקו תווית",
                  color: "yellow",
                  items: ["חומוס מסחרי", "פלאפל מוכן", "מרקות מזרח תיכוניות", "שניצל תעשייתי", "רטבים וטחינה מדוללת", "מאפים ממסעדות"],
                },
                {
                  category: "עלול - זיהום צולב",
                  color: "orange",
                  items: ["לחם מפעלי", "קרקרים ופיתות", "שוקולד ממתקים", "אורז מוכן", "ירקות עם רוטב", "מוצרים ללא תיוג ברור"],
                },
              ].map((col) => {
                const bg: Record<string, string> = { red: "bg-red-50 border-red-200", yellow: "bg-yellow-50 border-yellow-200", orange: "bg-orange-50 border-orange-200" };
                const hdr: Record<string, string> = { red: "text-red-800", yellow: "text-yellow-800", orange: "text-orange-800" };
                return (
                  <div key={col.category} className={`border rounded-xl p-4 ${bg[col.color]}`}>
                    <h3 className={`font-semibold text-sm mb-3 ${hdr[col.color]}`}>{col.category}</h3>
                    <ul className="space-y-1 text-sm text-gray-700">
                      {col.items.map((i) => <li key={i} className="flex items-start gap-2"><span className="mt-1">•</span>{i}</li>)}
                    </ul>
                  </div>
                );
              })}
            </div>
          </section>

          {/* FAQ */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">שאלות נפוצות על אלרגיה לשומשום</h2>
            <div className="space-y-4">
              {faqs.map((faq, i) => (
                <div key={i} className="border border-gray-200 rounded-xl overflow-hidden">
                  <div className="bg-gray-50 px-5 py-4">
                    <h3 className="font-semibold text-gray-900">{faq.q}</h3>
                  </div>
                  <div className="px-5 py-4">
                    <p className="text-gray-700 text-sm leading-relaxed">{faq.a}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Related links */}
          <section className="mb-10 bg-gray-50 border border-gray-200 rounded-xl p-6">
            <h2 className="font-bold text-gray-900 mb-4">קריאה נוספת</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
              {[
                { href: "/anaphylaxis", text: "אנפילקסיס - מדריך שלם לשימוש באפיפן" },
                { href: "/alergia-lebotnim", text: "אלרגיה לבוטנים ואגוזים" },
                { href: "/alergia-lemazon", text: "אלרגיות מזון - מדריך כללי" },
                { href: "/alergiya-beyeladim", text: "אלרגיה בילדים - מדריך הורים" },
              ].map((l) => (
                <Link key={l.href} href={l.href} className="flex items-center gap-2 text-stone-700 hover:text-stone-900">
                  <ChevronLeft className="w-4 h-4" />
                  {l.text}
                </Link>
              ))}
            </div>
          </section>

          {/* CTA */}
          <section className="bg-gradient-to-br from-stone-700 to-stone-900 text-white rounded-2xl p-8 text-center">
            <h2 className="text-2xl font-bold mb-3">יש חשד לאלרגיה לשומשום?</h2>
            <p className="text-stone-300 mb-6 max-w-xl mx-auto">
              אבחון מדויק כולל component testing (Ses i 1) ותוכנית חירום אישית. ד״ר אנה ברמלי מתמחה בניהול אלרגיות מזון בילדים ובמבוגרים.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button asChild size="lg" className="bg-white text-stone-800 hover:bg-stone-100 font-bold">
                <a href="https://ihaveallergy.com/book" target="_blank" rel="noopener noreferrer">קביעת תור לאבחון</a>
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
