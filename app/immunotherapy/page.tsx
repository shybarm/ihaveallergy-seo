import type { Metadata } from "next";
import Link from "next/link";
import { ChevronLeft, Calendar, Phone, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";

const CANONICAL = "https://seo.ihaveallergy.com/immunotherapy";
const TITLE = "אימונותרפיה לאלרגיה — OIT, SLIT ואימונותרפיה לעקיצות | ד״ר אנה ברמלי";
const DESCRIPTION =
  "מדריך רפואי מקיף על אימונותרפיה לאלרגיה: OIT לבוטנים וחלב, SLIT לאבקנים, אימונותרפיה לעקיצות חרקים — מי מתאים, כיצד זה עובד ומה לצפות. נכתב על ידי ד״ר אנה ברמלי.";
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
    q: "מהי אימונותרפיה לאלרגיה?",
    a: "אימונותרפיה (desensitization) היא הדרך הקרובה ביותר ל'ריפוי' של אלרגיה. היא מבוססת על חשיפה מדורגת לאלרגן במינונים קטנים ועולים, עד שמערכת החיסון מפתחת סבילות. זוהי הטיפול היחיד שמשנה את מנגנון האלרגיה — לא רק מסתיר תסמינים.",
  },
  {
    q: "מה ההבדל בין OIT ל-SLIT?",
    a: "OIT (Oral Immunotherapy) — בליעה של אלרגן (אבקה/טיפות) מדי יום. גבוה יותר בסיכון תופעות לוואי אבל יעיל יותר. SLIT (Sublingual Immunotherapy) — טיפות/טבליות מתחת ללשון. בטוח יותר, נוח יותר, אך פחות יעיל לאלרגיות מזון. SLIT מועיל מאוד לריניטיס אלרגי.",
  },
  {
    q: "למי מתאימה אימונותרפיה?",
    a: "לאנשים עם: ריניטיס אלרגי (אבקנים/קרדית אבק) שאינו נשלט בטיפול תרופתי, אלרגיה לעקיצות חרקים עם תגובה מערכתית, אלרגיה למזון (בוטנים, חלב, ביצה) עם תגובה חמורה. לא מתאים: מחלת לב, גרסאות מסוימות של אסתמה חמורה, הריון.",
  },
  {
    q: "כמה זמן לוקחת אימונותרפיה?",
    a: "פרוטוקול סטנדרטי: שלב עלייה 6–12 חודשים + שלב תחזוקה 3–5 שנים. SLIT לאבקנים: 3–5 שנות טיפול ואז הפסקה. OIT למזון: ייתכן שנדרש טיפול תחזוקה לכל החיים. פרוטוקולים מהירים (rush) קיימים עבור מקרים מסוימים.",
  },
  {
    q: "מה הסיכויים להצלחה?",
    a: "SLIT לאבקנים: 80–90% שיפור בתסמינים. OIT לבוטנים: 70–80% מהילדים מגיעים לסבילות ל-1000+ מ\"ג. OIT לחלב: 70% מגיעים לסבילות. אימונותרפיה לעקיצות: 90–95% הגנה מלאה מאנפילקסיס. תוצאות תלויות בגיל, חומרת האלרגיה, ועמידה בפרוטוקול.",
  },
  {
    q: "מה תופעות הלוואי של OIT?",
    a: "תופעות נפוצות (50–70%): גרד בפה, בטן, כאבי בטן, בחילה — בדרך כלל קלות ועוברות. תופעות בינוניות (10–20%): עקיצות בפה, פריחה, הקאות. תגובות חמורות (1–5%): אנפילקסיס — לכן כל מינון ראשוני בקליניקה. EoE (דלקת eosinophilic) ב-2–3% — מצריכה הפסקה.",
  },
  {
    q: "האם אימונותרפיה מרפאה אלרגיה לצמיתות?",
    a: "לא תמיד. SLIT לאבקנים לאחר 3–5 שנות טיפול — רבים נשארים עם הפחתה משמעותית גם אחרי הפסקה. OIT למזון — ייתכן 'tolerance' מתמשכת או ש'desensitization' בלבד (צריך להמשיך לאכול). אימונותרפיה לעקיצות — מגנה 3–5 שנים אחרי הפסקה.",
  },
  {
    q: "האם ילדים יכולים לעשות OIT?",
    a: "כן — OIT בטוח ויעיל לגיל 4 ומעלה. מחקרים מראים שהתחלה בגיל צעיר (4–7) מגדילה את סיכויי ה-sustained unresponsiveness — כלומר, סבילות גם ללא טיפול תחזוקה. אבל גם מבוגרים יכולים להפיק תועלת.",
  },
  {
    q: "מה ההבדל בין OIT לבין 'להרגיל' את הילד לאכול קצת בוטנים?",
    a: "OIT הוא פרוטוקול רפואי מבוקר: מינון מוגדר, עלייה מדורגת, מעקב בקליניקה, מוכנות לאנפילקסיס. 'להרגיל בבית' ללא פיקוח רפואי מסוכן מאוד — הסיכון לתגובה חמורה גבוה. אין לנסות OIT ביתי ללא אישור רופא.",
  },
  {
    q: "האם יש OIT לשומשום?",
    a: "כרגע אין OIT מאושר לשומשום (בניגוד לבוטנים שיש Palforzia FDA-approved). מחקרים קליניים פעילים — הצלחות ראשוניות מבטיחות אך אין פרוטוקול סטנדרטי. מומלץ לעדכן מצב המחקר עם האלרגולוג מדי שנה.",
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
    "@type": "MedicalTherapy",
    name: "Allergen Immunotherapy",
    alternateName: "אימונותרפיה לאלרגיה",
    code: { "@type": "MedicalCode", code: "Z51.89", codingSystem: "ICD-10" },
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
    { "@type": "ListItem", position: 2, name: "אימונותרפיה לאלרגיה", item: CANONICAL },
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

export default function ImmunotherapyPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <main dir="rtl" lang="he" className="min-h-screen bg-white">
        {/* Hero */}
        <section className="bg-gradient-to-br from-teal-50 to-cyan-50 border-b border-teal-200 py-12 px-4">
          <div className="max-w-4xl mx-auto">
            <nav className="flex items-center gap-1 text-sm text-gray-500 mb-6">
              <Link href="/" className="hover:text-teal-700">ראשי</Link>
              <ChevronLeft className="w-4 h-4" />
              <span className="text-teal-800 font-medium">אימונותרפיה לאלרגיה</span>
            </nav>
            <div className="flex items-center gap-3 mb-4">
              <span className="bg-teal-100 text-teal-800 text-xs font-semibold px-3 py-1 rounded-full">טיפול מתקדם</span>
              <span className="bg-green-100 text-green-700 text-xs font-semibold px-3 py-1 rounded-full">שינוי מנגנון האלרגיה</span>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              אימונותרפיה לאלרגיה
            </h1>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              אימונותרפיה היא הטיפול הקרוב ביותר ל&quot;ריפוי&quot; אלרגיה — היא משנה את תגובת מערכת החיסון ולא רק מסתירה תסמינים. מדריך זה מסביר מה הוא OIT, SLIT, אימונותרפיה לעקיצות, מי מתאים ומה לצפות.
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
          <div className="bg-teal-50 border border-teal-200 rounded-xl p-6 mb-10">
            <h2 className="font-bold text-gray-900 mb-4 text-lg">תוכן עניינים</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm">
              {[
                "כיצד עובדת אימונותרפיה",
                "סוגי אימונותרפיה: OIT, SLIT, SCIT",
                "OIT לבוטנים וחלב",
                "SLIT לאבקנים וקרדית",
                "אימונותרפיה לעקיצות חרקים",
                "מי מתאים? מי לא?",
                "תופעות לוואי ובטיחות",
                "שאלות נפוצות",
              ].map((item) => (
                <div key={item} className="flex items-center gap-2 text-teal-700">
                  <span className="w-1.5 h-1.5 bg-teal-500 rounded-full flex-shrink-0" />
                  {item}
                </div>
              ))}
            </div>
          </div>

          {/* Section 1 */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-5 border-r-4 border-teal-500 pr-4">
              כיצד עובדת אימונותרפיה?
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              באלרגיה, מערכת החיסון &quot;טועה&quot; ומסווגת חלבונים תמימים (בוטן, אבקן) כאויבים. היא מייצרת נוגדני IgE שגורמים להפרשת היסטמין — ותסמיני האלרגיה.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              אימונותרפיה מלמדת את מערכת החיסון &quot;להתעלם&quot; מהאלרגן — על ידי חשיפה חוזרת ומינונים עולים. בתהליך נוצרים תאי T-reg ונוגדני IgG4 שחוסמים תגובת IgE. זהו שינוי מנגנוני, לא רק סימפטומטי.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {[
                { phase: "חשיפה ראשונית", icon: "🔬", desc: "מינון זעיר — רק מספיק לגרות את מערכת החיסון ללא תגובה" },
                { phase: "עלייה הדרגתית", icon: "📈", desc: "מינון מוכפל כל 1-2 שבועות — מערכת החיסון מתרגלת" },
                { phase: "תחזוקה", icon: "🛡️", desc: "מינון יציב לאורך זמן — סבילות מתמשכת" },
              ].map((p) => (
                <div key={p.phase} className="bg-teal-50 border border-teal-200 rounded-xl p-4 text-center">
                  <div className="text-3xl mb-2">{p.icon}</div>
                  <div className="font-semibold text-gray-900 mb-2 text-sm">{p.phase}</div>
                  <p className="text-xs text-gray-600">{p.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Section 2 — Types */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-5 border-r-4 border-teal-500 pr-4">
              סוגי אימונותרפיה
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr className="bg-teal-100">
                    <th className="border border-teal-200 p-3 text-right font-semibold">סוג</th>
                    <th className="border border-teal-200 p-3 text-right font-semibold">שיטה</th>
                    <th className="border border-teal-200 p-3 text-right font-semibold">מתאים ל</th>
                    <th className="border border-teal-200 p-3 text-right font-semibold">יעילות</th>
                    <th className="border border-teal-200 p-3 text-right font-semibold">בטיחות</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["OIT", "בליעה יומית", "מזון (בוטנים, חלב, ביצה)", "גבוהה מאוד", "תופעות לוואי קלות נפוצות"],
                    ["SLIT", "טיפות/טבליות מתחת ללשון", "אבקנים, קרדית, מזון (קלה)", "גבוהה לאבקנים", "בטוח מאוד, תגובות נדירות"],
                    ["SCIT", "זריקות תת-עוריות", "אבקנים, קרדית, עובש", "גבוהה", "דורש מעקב בקליניקה"],
                    ["Venom IT", "זריקות ארס", "דבורה, צרעה", "95% הגנה מאנפילקסיס", "תגובות ב-5–15%"],
                  ].map(([type, method, for_, eff, safety]) => (
                    <tr key={type} className="hover:bg-teal-50">
                      <td className="border border-teal-200 p-3 font-semibold">{type}</td>
                      <td className="border border-teal-200 p-3 text-gray-600">{method}</td>
                      <td className="border border-teal-200 p-3 text-gray-600">{for_}</td>
                      <td className="border border-teal-200 p-3 text-gray-600">{eff}</td>
                      <td className="border border-teal-200 p-3 text-gray-600">{safety}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* Section 3 — OIT */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-5 border-r-4 border-teal-500 pr-4">
              OIT לבוטנים וחלב — מה לצפות
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div>
                <h3 className="font-semibold text-gray-900 mb-3">OIT לבוטנים (Palforzia)</h3>
                <ul className="space-y-2 text-sm text-gray-700">
                  {[
                    "מאושר FDA מגיל 4+",
                    "שלב התחלה: 0.5 מ\"ג בוטן",
                    "שלב עלייה: 11 שלבים עד 300 מ\"ג",
                    "תחזוקה: 300 מ\"ג ביום לאורך חיים",
                    "יעד: סבילות ל-1000–4000 מ\"ג",
                    "70–80% מגיעים לסבילות מלאה",
                  ].map((i) => <li key={i} className="flex items-start gap-2"><span className="text-teal-500 mt-1">•</span>{i}</li>)}
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-3">OIT לחלב</h3>
                <ul className="space-y-2 text-sm text-gray-700">
                  {[
                    "אין תרופה מאושרת — פרוטוקולים קליניים",
                    "בדרך כלל: אבקת חלב בכמויות עולות",
                    "שלב עלייה: 6–12 חודשים",
                    "65–75% מגיעים לסבילות",
                    "יעיל במיוחד לגיל 6–12",
                    "Milk Ladder — גרסה שמרנית יותר",
                  ].map((i) => <li key={i} className="flex items-start gap-2"><span className="text-teal-500 mt-1">•</span>{i}</li>)}
                </ul>
              </div>
            </div>
            <div className="mt-4 bg-yellow-50 border border-yellow-200 rounded-xl p-4 text-sm">
              <strong>חשוב:</strong> אין לנסות OIT ביתי ללא פיקוח רפואי. כל עלייה במינון נעשית בקליניקה עם מעקב 1–2 שעות. ניתן להמשיך טיפול בבית לאחר אישור האלרגולוג.
            </div>
          </section>

          {/* Section 4 — Venom */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-5 border-r-4 border-teal-500 pr-4">
              אימונותרפיה לעקיצות חרקים (VIT)
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              אימונותרפיה לארס דבורות וצרעות היא הטיפול היעיל ביותר הקיים — 95% הגנה מפני אנפילקסיס בעקיצות עתידיות. מיועד לאנשים שחוו תגובה מערכתית לעקיצה (קשיי נשימה, לחץ דם, כוורת מוכללת).
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {[
                { title: "מי מועמד?", items: ["תגובה מערכתית לעקיצה בעבר", "IgE חיובי לארס", "סיכון גבוה לחשיפה (גינה, כוורה)", "אנשים עם לב/ריאה שלא יכולים לסבול אנפילקסיס"] },
                { title: "פרוטוקול", items: ["שלב עלייה: 15–20 זריקות שבועיות", "מינון מלא: 100 מק\"ג ארס", "שלב תחזוקה: זריקה כל 4–8 שבועות", "משך: 3–5 שנים"] },
                { title: "תוצאות", items: ["95% הגנה מלאה מאנפילקסיס", "70% שמירה 3–5 שנות אחרי הפסקה", "תופעות קלות ב-5–15%", "תגובות חמורות נדירות (<1%)"] },
              ].map((col) => (
                <div key={col.title} className="bg-teal-50 border border-teal-200 rounded-xl p-4">
                  <h3 className="font-semibold text-teal-900 mb-3 text-sm">{col.title}</h3>
                  <ul className="space-y-1 text-sm text-gray-700">
                    {col.items.map((i) => <li key={i} className="flex items-start gap-2"><span className="text-teal-400 mt-1">•</span>{i}</li>)}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          {/* Section 5 — Who qualifies */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-5 border-r-4 border-teal-500 pr-4">
              מי מתאים לאימונותרפיה?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div className="bg-green-50 border border-green-200 rounded-xl p-5">
                <h3 className="font-semibold text-green-900 mb-3">מועמדים מתאימים</h3>
                <ul className="space-y-2 text-sm text-gray-700">
                  {[
                    "ריניטיס אלרגי לא נשלט בטיפול תרופתי",
                    "אלרגיה לבוטנים/חלב/ביצה עם רצון לחופש תזונתי",
                    "עקיצת דבורה/צרעה עם אנפילקסיס בעבר",
                    "ילד 4+ עם אלרגיה למזון ומוטיבציה",
                    "אסתמה אלרגית קלה-בינונית",
                    "אגזמה קשה עם אלרגן מוגדר",
                  ].map((i) => <li key={i} className="flex items-start gap-2"><span className="text-green-500 mt-1">✓</span>{i}</li>)}
                </ul>
              </div>
              <div className="bg-red-50 border border-red-200 rounded-xl p-5">
                <h3 className="font-semibold text-red-900 mb-3">התוויות נגד</h3>
                <ul className="space-y-2 text-sm text-gray-700">
                  {[
                    "אסתמה קשה לא נשלטת (FEV1 < 70%)",
                    "מחלת לב לא יציבה",
                    "הריון (התחלת טיפול חדש)",
                    "שימוש בבטא-חוסמים (מחלת לב)",
                    "EoE פעיל",
                    "אי-ציות צפוי לפרוטוקול",
                  ].map((i) => <li key={i} className="flex items-start gap-2"><span className="text-red-500 mt-1">✗</span>{i}</li>)}
                </ul>
              </div>
            </div>
          </section>

          {/* FAQ */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">שאלות נפוצות על אימונותרפיה</h2>
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

          {/* Related */}
          <section className="mb-10 bg-gray-50 border border-gray-200 rounded-xl p-6">
            <h2 className="font-bold text-gray-900 mb-4">קריאה נוספת</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
              {[
                { href: "/alergia-lebotnim", text: "אלרגיה לבוטנים — מדריך מלא" },
                { href: "/alergia-lechalav", text: "אלרגיה לחלב בתינוקות" },
                { href: "/anaphylaxis", text: "אנפילקסיס ושימוש באפיפן" },
                { href: "/alergia-lemazon", text: "אלרגיות מזון — מדריך כללי" },
                { href: "/alergiya-beyeladim", text: "אלרגיה בילדים — מדריך הורים" },
              ].map((l) => (
                <Link key={l.href} href={l.href} className="flex items-center gap-2 text-teal-700 hover:text-teal-900">
                  <ChevronLeft className="w-4 h-4" />
                  {l.text}
                </Link>
              ))}
            </div>
          </section>

          {/* CTA */}
          <section className="bg-gradient-to-br from-teal-600 to-cyan-700 text-white rounded-2xl p-8 text-center">
            <Shield className="w-10 h-10 mx-auto mb-4 opacity-90" />
            <h2 className="text-2xl font-bold mb-3">האם אימונותרפיה מתאימה לכם?</h2>
            <p className="text-teal-100 mb-6 max-w-xl mx-auto">
              ד״ר אנה ברמלי מעריכה כל מקרה לגופו — בדיקות מקדימות, התאמת פרוטוקול ומעקב צמוד לאורך הטיפול.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button asChild size="lg" className="bg-white text-teal-700 hover:bg-teal-50 font-bold">
                <a href="https://ihaveallergy.com/book" target="_blank" rel="noopener noreferrer">קביעת תור להערכה</a>
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
