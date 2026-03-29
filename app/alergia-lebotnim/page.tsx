import type { Metadata } from "next";
import Link from "next/link";
import { ChevronLeft, Calendar, Phone, AlertTriangle, NutOff } from "lucide-react";
import { Button } from "@/components/ui/button";

const CANONICAL = "https://seo.ihaveallergy.com/alergia-lebotnim";
const TITLE = "אלרגיה לבוטנים ואגוזים בילדים – מדריך מקיף | ד״ר אנה ברמלי";
const DESCRIPTION =
  "מדריך רפואי מלא על אלרגיה לבוטנים ואגוזי עץ: תסמינים, אבחון, הימנעות ממזון, שימוש נכון באפיפן, OIT ועדכוני מחקר. נכתב על ידי ד״ר אנה ברמלי.";
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
    q: "האם אלרגיה לבוטנים עוברת עם הגיל?",
    a: "אלרגיה לבוטנים נמשכת לכל החיים אצל כ-80% מהמטופלים. רק כ-20% מהילדים מתגברים עליה לפני גיל 10. מעקב קבוע עם בדיקות IgE ואתגר מזון מבוקר יקבע אם חלה הפחתה בתגובתיות.",
  },
  {
    q: "מה ההבדל בין אלרגיה לבוטנים לאלרגיה לאגוזי עץ?",
    a: "בוטנים הם קטניות (לא אגוזים). אגוזי עץ כוללים אגוז מלך, שקד, קשיו, פקאן, פיסטוק, ברזיל ועוד. יש אנשים שאלרגיים לשניהם, אבל חלקם רגישים רק לאחד מהם. אבחון מדויק חיוני לקביעת הגבלות.",
  },
  {
    q: "האם שמן בוטנים מזיק לאלרגיים?",
    a: "שמן בוטנים מזוקק (refined) בדרך כלל בטוח כי חלבוני האלרגן מוסרים בתהליך. שמן בוטנים לא מזוקק (cold-pressed/unrefined) מסוכן ויש להימנע ממנו. תמיד בדקו תוויות ועדיף להימנע בספק.",
  },
  {
    q: "מתי להשתמש באפיפן (EpiPen)?",
    a: "מיד עם הופעת סימנים של אנפילקסיס: קשיי נשימה, בצקת גרון, ירידת לחץ דם, אובדן הכרה, חיוורון, הקאות עם פריחה מוכללת. דקירת האפיפן בירך חיצונית, קוראים 112 ונוסעים לחדר מיון גם אם הסימנים חלפו.",
  },
  {
    q: "מה הוא OIT לבוטנים ואיך זה עובד?",
    a: "OIT (Oral Immunotherapy) הוא טיפול שבו הילד מקבל כמויות קטנות ועולות של אבקת בוטנים מדי יום במשך חודשים. המטרה: העלאת סף התגובה. תרופת Palforzia (FDA-approved) מבוססת OIT. הטיפול אינו מרפא אלא מגן מפני חשיפה בשוגג.",
  },
  {
    q: "האם כל מוצרי 'עלול להכיל' מסוכנים?",
    a: "אזהרת 'עלול להכיל' (may contain) היא וולונטרית ומשקפת סיכון זיהום צולב. לאנשים עם אלרגיה קשה – יש להימנע. אנשים עם אלרגיה קלה עשויים לסבול אותם לפי הנחיית האלרגולוג. הציות קפדני מומלץ לילדים.",
  },
  {
    q: "האם תינוקות צריכים להימנע מבוטנים כדי למנוע אלרגיה?",
    a: "לא – ההפך נכון! מחקר LEAP הראה שחשיפה מוקדמת לבוטנים (4-11 חודשים) בתינוקות בסיכון גבוה מפחיתה את הסיכוי לאלרגיה ב-80%. הנחיות NIAID ממליצות על הכנסה מוקדמת של בוטנים לתינוקות בסיכון.",
  },
  {
    q: "אילו מזונות מסוכנים לאלרגיים לבוטנים בישראל?",
    a: "חמאת בוטנים, מרקות בוטנים, ממתקים (Snickers, Reese's), מרקים אסייתיים, סאטה תאילנדי, פלאפל (עלול להכיל), גרנולה, שוקולד, מאפים. חשוב לבדוק תוויות בעברית ולשאול במסעדות.",
  },
  {
    q: "כיצד מאבחנים אלרגיה לבוטנים?",
    a: "אבחון כולל: בדיקת עור (skin prick test) לבוטן ואגוזים, בדיקות IgE ספציפי כולל Ara h 2 (סמן רגישות קשה), ובמידת הצורך – אתגר מזון פתוח או כפול סמיות תחת פיקוח רפואי מלא.",
  },
  {
    q: "מה צריך לעשות לפני יציאה לבית ספר עם ילד אלרגי לבוטנים?",
    a: "הכינו תוכנית חירום חתומה על ידי רופא (AEAP), ספקו שני אפיפנים לגן/בית הספר, הדריכו צוות, הגבילו מזון מהבית, בקשו שולחן ללא בוטנים. בישראל קיים חוק המחייב גני ילדים לאפשר החזקת אפיפן.",
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
    name: "Peanut and Tree Nut Allergy",
    alternateName: "אלרגיה לבוטנים ואגוזים",
    code: { "@type": "MedicalCode", code: "Z91.010", codingSystem: "ICD-10" },
  },
  author: {
    "@type": "Physician",
    name: "ד״ר אנה ברמלי",
    jobTitle: "מומחית לאלרגיה ואימונולוגיה",
    url: "https://seo.ihaveallergy.com/dr-anna-brameli",
  },
  publisher: {
    "@type": "Organization",
    name: "I Have Allergy",
    url: "https://seo.ihaveallergy.com",
  },
  reviewedBy: {
    "@type": "Physician",
    name: "ד״ר אנה ברמלי",
    jobTitle: "מומחית לאלרגיה ואימונולוגיה",
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "ראשי", item: "https://seo.ihaveallergy.com/" },
    { "@type": "ListItem", position: 2, name: "אלרגיה לבוטנים ואגוזים", item: CANONICAL },
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

export default function PeanutAllergyPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <main dir="rtl" lang="he" className="min-h-screen bg-white">
        {/* Hero */}
        <section className="bg-gradient-to-br from-amber-50 to-orange-50 border-b border-amber-100 py-12 px-4">
          <div className="max-w-4xl mx-auto">
            <nav className="flex items-center gap-1 text-sm text-gray-500 mb-6">
              <Link href="/" className="hover:text-amber-700">ראשי</Link>
              <ChevronLeft className="w-4 h-4" />
              <span className="text-amber-800 font-medium">אלרגיה לבוטנים ואגוזים</span>
            </nav>
            <div className="flex items-center gap-3 mb-4">
              <span className="bg-amber-100 text-amber-800 text-xs font-semibold px-3 py-1 rounded-full">אלרגיה קשה</span>
              <span className="bg-red-100 text-red-700 text-xs font-semibold px-3 py-1 rounded-full flex items-center gap-1">
                <AlertTriangle className="w-3 h-3" /> סיכון אנפילקסיס
              </span>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              אלרגיה לבוטנים ואגוזי עץ
            </h1>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              אלרגיה לבוטנים היא אחת מהאלרגיות הקשות ביותר — מאופיינת בסיכון גבוה לאנפילקסיס, לעיתים מכמויות זעירות. מדריך זה סוקר תסמינים, אבחון, ניהול יומיומי ואפשרויות טיפול כולל OIT.
            </p>
            <div className="flex items-center gap-3 text-sm text-gray-500">
              <Calendar className="w-4 h-4" />
              <span>עודכן: מרץ 2026</span>
              <span className="mx-2">•</span>
              <span>ד״ר אנה ברמלי, מומחית לאלרגיה ואימונולוגיה</span>
            </div>
          </div>
        </section>

        {/* Warning Banner */}
        <div className="bg-red-50 border-b border-red-200 py-3 px-4">
          <div className="max-w-4xl mx-auto flex items-center gap-3 text-red-800 text-sm font-medium">
            <AlertTriangle className="w-5 h-5 flex-shrink-0 text-red-600" />
            <span>תגובה אלרגית קשה? הזריקו אפיפן מיד וחייגו 112. אל תחכו לראות אם הסימנים חולפים.</span>
          </div>
        </div>

        <div className="max-w-4xl mx-auto px-4 py-10">
          {/* TOC */}
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 mb-10">
            <h2 className="font-bold text-gray-900 mb-4 text-lg">תוכן עניינים</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm">
              {[
                "מה מייחד אלרגיה לבוטנים",
                "בוטנים לעומת אגוזי עץ",
                "תסמינים לפי חומרה",
                "אבחון: בדיקות ומרכיבים",
                "הימנעות ותיוג מזון",
                "OIT וטיפולים חדשים",
                "ניהול בבית הספר",
                "שאלות נפוצות",
              ].map((item) => (
                <div key={item} className="flex items-center gap-2 text-amber-700">
                  <span className="w-1.5 h-1.5 bg-amber-500 rounded-full flex-shrink-0" />
                  {item}
                </div>
              ))}
            </div>
          </div>

          {/* Section 1 */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-5 border-r-4 border-amber-500 pr-4">
              מה מייחד אלרגיה לבוטנים?
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              בוטנים גורמים ליותר מקרי מוות מאנפילקסיס מכל מזון אחר. זאת בגלל שלושה גורמים: (1) כמות קטנה מאוד עלולה לגרום לתגובה, (2) חלבוני הבוטן יציבים לחום ועיכול ואינם מתפרקים בבישול, (3) הבוטן נמצא במגוון עצום של מוצרים מעובדים.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              האלרגן העיקרי לתגובות קשות הוא <strong>Ara h 2</strong> — חלבון אחסון זרעים. בדיקת IgE ל-Ara h 2 (&gt;0.35 kUA/L) מנבאת סיכון גבוה לאנפילקסיס. אם Ara h 2 שלילי אבל Ara h 8 חיובי — לרוב מדובר בתסמונת אלרגיה פומית בלבד (OAS) עם פגיעה קלה יותר.
            </p>
            <div className="bg-amber-50 rounded-xl p-5 border border-amber-200">
              <h3 className="font-semibold text-amber-900 mb-3">מי בסיכון גבוה לאלרגיה לבוטנים?</h3>
              <ul className="space-y-2 text-gray-700 text-sm">
                {[
                  "תינוקות עם אגזמה בינונית עד קשה (אטופיק דרמטיטיס)",
                  "ילדים עם אלרגיה קיימת לביצה",
                  "תינוקות שלא הוכנסו לבוטנים עד גיל 12 חודשים",
                  "היסטוריה משפחתית של אלרגיה לבוטנים",
                  "ילדים עם אלרגיה לאגוזי עץ",
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
            <h2 className="text-2xl font-bold text-gray-900 mb-5 border-r-4 border-amber-500 pr-4">
              בוטנים לעומת אגוזי עץ — מה ההבדל?
            </h2>
            <p className="text-gray-700 leading-relaxed mb-5">
              בוטנים הם <strong>קטניות</strong> — גדלים באדמה ושייכים למשפחת הפרפרנים יחד עם עדשים וחומוס. אגוזי עץ הם פירות יבשים מעצים.
            </p>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr className="bg-amber-100">
                    <th className="border border-amber-200 p-3 text-right font-semibold">סוג</th>
                    <th className="border border-amber-200 p-3 text-right font-semibold">דוגמאות</th>
                    <th className="border border-amber-200 p-3 text-right font-semibold">קשר לבוטנים</th>
                    <th className="border border-amber-200 p-3 text-right font-semibold">סיכון הדדי</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["בוטן (Peanut)", "חמאת בוטנים, גרגירים", "—", "30–40% אלרגיים גם לאגוזי עץ"],
                    ["אגוז מלך (Walnut)", "אגוז מלך, פקאן", "ללא קשר ביולוגי", "קשר צולב לפקאן גבוה"],
                    ["קשיו (Cashew)", "קשיו, פיסטוק", "ללא קשר", "קשר צולב לפיסטוק גבוה"],
                    ["שקד (Almond)", "שקדים, שמן שקדים", "ללא קשר", "קשר לאפרסקים ודובדבנים"],
                    ["אגוז ברזיל", "אגוז ברזיל", "ללא קשר", "חלבון 2S albumin קשה"],
                  ].map(([type, ex, rel, risk]) => (
                    <tr key={type} className="hover:bg-amber-50">
                      <td className="border border-amber-200 p-3 font-medium">{type}</td>
                      <td className="border border-amber-200 p-3 text-gray-600">{ex}</td>
                      <td className="border border-amber-200 p-3 text-gray-600">{rel}</td>
                      <td className="border border-amber-200 p-3 text-gray-600">{risk}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* Section 3 */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-5 border-r-4 border-amber-500 pr-4">
              תסמינים לפי חומרה
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {[
                {
                  level: "קלה",
                  color: "green",
                  symptoms: ["גרד בפה ובשפתיים", "נפיחות קלה בשפתיים", "פריחה מקומית", "עיניים אדומות"],
                  action: "פנו לאלרגולוג, שקלו אנטיהיסטמין",
                },
                {
                  level: "בינונית",
                  color: "yellow",
                  symptoms: ["כוורת מוכללת (אורטיקריה)", "הקאות ובחילה", "כאבי בטן", "נזלת ועיניים"],
                  action: "אנטיהיסטמין, מעקב קפדני, שקלו אפיפן",
                },
                {
                  level: "קשה (אנפילקסיס)",
                  color: "red",
                  symptoms: ["קשיי נשימה, צפצופים", "בצקת גרון, שינוי קול", "ירידת לחץ דם, חיוורון", "אובדן הכרה"],
                  action: "אפיפן מיד + חייגו 112",
                },
              ].map((tier) => {
                const colors: Record<string, string> = {
                  green: "bg-green-50 border-green-300",
                  yellow: "bg-yellow-50 border-yellow-300",
                  red: "bg-red-50 border-red-300",
                };
                const headerColors: Record<string, string> = {
                  green: "bg-green-500",
                  yellow: "bg-yellow-500",
                  red: "bg-red-500",
                };
                return (
                  <div key={tier.level} className={`border rounded-xl overflow-hidden ${colors[tier.color]}`}>
                    <div className={`${headerColors[tier.color]} text-white p-3 text-center font-bold`}>{tier.level}</div>
                    <div className="p-4">
                      <ul className="space-y-1 text-sm text-gray-700 mb-3">
                        {tier.symptoms.map((s) => (
                          <li key={s} className="flex items-center gap-2">
                            <span className="w-1.5 h-1.5 bg-gray-400 rounded-full" />
                            {s}
                          </li>
                        ))}
                      </ul>
                      <p className="text-xs font-semibold text-gray-800 bg-white rounded p-2 border">{tier.action}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </section>

          {/* Section 4 */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-5 border-r-4 border-amber-500 pr-4">
              אבחון — בדיקות ומרכיבי אלרגן
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              האבחון כולל קומבינציה של היסטוריה קלינית, בדיקות מעבדה ולעיתים אתגר מזון מבוקר. בדיקה יחידה אינה מספיקה — נדרשת תמונה קלינית שלמה.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                {
                  title: "Skin Prick Test לבוטן",
                  desc: "סנסיטיביות גבוהה, זמינות קלינית מיידית. פפולה ≥8 מ\"מ מנבאת אלרגיה קלינית. מבוצעת לרוב ביחד עם פנל אגוזים.",
                },
                {
                  title: "IgE ספציפי לבוטן (f13)",
                  desc: "רמה ≥15 kUA/L — סיכון גבוה לתגובה קשה. שימושי לכימות הסיכון ומעקב שנתי על ירידה בסנסיטיזציה.",
                },
                {
                  title: "Ara h 2 (Component Testing)",
                  desc: "הסמן החשוב ביותר לאנפילקסיס. חיובי = סיכון גבוה לתגובה מערכתית. שלילי עם Ara h 8 חיובי = OAS בלבד בדרך כלל.",
                },
                {
                  title: "אתגר מזון מבוקר (OFC)",
                  desc: "הסטנדרט הזהב לאבחון. מבוצע בקליניקה עם מוכנות לטיפול בחירום. מאפשר קביעת סף תגובה ומעקב אחרי ירידה בסנסיטיזציה.",
                },
              ].map((item) => (
                <div key={item.title} className="bg-gray-50 border border-gray-200 rounded-xl p-4">
                  <h3 className="font-semibold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-600">{item.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Section 5 */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-5 border-r-4 border-amber-500 pr-4">
              הימנעות ותיוג מזון בישראל
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              בישראל, בוטנים הם אלרגן מחייב תיוג על פי חוק. יש לחפש כינויים בתוויות: בוטן, בוטנים, אגוז אדמה, groundnut, peanut, Arachis hypogaea.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-5">
              <div className="bg-red-50 border border-red-200 rounded-xl p-4">
                <h3 className="font-semibold text-red-900 mb-3">מזונות עם סיכון גבוה</h3>
                <ul className="space-y-1 text-sm text-gray-700">
                  {["חמאת בוטנים וממרחים", "ממתקים: Snickers, Reese's, M&Ms", "קינוחים אסייתיים, pad thai, satay", "שוקולד ובאר שוקולד", "גרנולה, חטיפי אנרגיה", "פלאפל מסחרי (זיהום צולב)"].map((i) => (
                    <li key={i} className="flex items-start gap-2"><span className="text-red-500 mt-1">•</span>{i}</li>
                  ))}
                </ul>
              </div>
              <div className="bg-green-50 border border-green-200 rounded-xl p-4">
                <h3 className="font-semibold text-green-900 mb-3">חלופות בטוחות לרוב</h3>
                <ul className="space-y-1 text-sm text-gray-700">
                  {["חמאת שקדים (אם לא אלרגי לשקדים)", "ממרח חמניות (SunButter)", "חמאת קשיו (אם בטוח)", "גרעיני חמניות", "אבוקדו, חומוס (בדיקה!)", "פירות ירקות טריים"].map((i) => (
                    <li key={i} className="flex items-start gap-2"><span className="text-green-500 mt-1">•</span>{i}</li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          {/* Section 6 — OIT */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-5 border-r-4 border-amber-500 pr-4">
              OIT (Oral Immunotherapy) — הפחתת רגישות פומית
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              OIT לבוטנים הוא הטיפול המתקדם ביותר כיום. הוא מבוסס על חשיפה יומיומית לכמויות הולכות וגדלות של בוטן — בצורת אבקה, ממרח או תרופה (Palforzia, מאושרת FDA 2020).
            </p>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-3 mb-4">
              {[
                { phase: "שלב 1", title: "התחלה", desc: "מינון זעיר (0.5–3 מ\"ג) בקליניקה, 2 שבועות" },
                { phase: "שלב 2", title: "עלייה הדרגתית", desc: "הכפלת מינון כל 2 שבועות, 4–6 חודשים" },
                { phase: "שלב 3", title: "תחזוקה", desc: "מינון יומי קבוע (300 מ\"ג) לאורך חיים" },
                { phase: "תוצאה", title: "הגנה", desc: "רוב המטופלים עמידים ל-1000–4000 מ\"ג בוטן" },
              ].map((s) => (
                <div key={s.phase} className="bg-amber-50 border border-amber-200 rounded-xl p-4 text-center">
                  <div className="text-xs font-bold text-amber-600 mb-1">{s.phase}</div>
                  <div className="font-semibold text-gray-900 mb-2">{s.title}</div>
                  <p className="text-xs text-gray-600">{s.desc}</p>
                </div>
              ))}
            </div>
            <p className="text-sm text-gray-500 bg-gray-50 border rounded p-3">
              <strong>חשוב:</strong> OIT אינו מרפא אלרגיה — הוא מגדיל את סף התגובה. יש להמשיך מינון תחזוקה יומי. רוב תופעות הלוואי: גרד בפה, בטן, קלות. תגובות חמורות נדירות (1–5%).
            </p>
          </section>

          {/* Section 7 — School */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-5 border-r-4 border-amber-500 pr-4">
              ניהול בבית הספר ובגן
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                {
                  title: "תוכנית חירום (AEAP)",
                  items: ["חתומה על ידי רופא מדי שנה", "מפרטת: תסמינים, סף לאפיפן, מי מטפל", "עותק לגן/כיתה, לתיק, לבית הורים", "עדכון אם חל שינוי בסנסיטיזציה"],
                },
                {
                  title: "אפיפן בגן/בית ספר",
                  items: ["2 אפיפנים זמינים בכל עת", "המורה יודעת היכן ואיך להשתמש", "אחסון בטמפרטורה חדרית, ללא הקפאה", "בדיקת תוקף כל 3 חודשים"],
                },
                {
                  title: "סביבה בטוחה",
                  items: ["שולחן ללא בוטנים", "שטיפת ידיים לפני ואחרי אוכל", "תקשורת עם הורי הכיתה", "הכשרת כוח האדם פעם בשנה"],
                },
                {
                  title: "הכנת הילד",
                  items: ["הילד יודע מה לאכול ומה לא", "יודע להגיד 'יש לי אלרגיה'", "יודע לפנות לצוות בתגובה", "מגיל 8-9: יכול להזריק אפיפן עצמאית"],
                },
              ].map((section) => (
                <div key={section.title} className="bg-blue-50 border border-blue-200 rounded-xl p-4">
                  <h3 className="font-semibold text-blue-900 mb-2">{section.title}</h3>
                  <ul className="space-y-1 text-sm text-gray-700">
                    {section.items.map((item) => (
                      <li key={item} className="flex items-start gap-2"><span className="text-blue-400 mt-1">•</span>{item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          {/* FAQ */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">שאלות נפוצות על אלרגיה לבוטנים ואגוזים</h2>
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
                { href: "/anaphylaxis", text: "אנפילקסיס — מדריך שלם לשימוש באפיפן" },
                { href: "/alergia-lemazon", text: "אלרגיות מזון — מדריך כללי" },
                { href: "/alergia-lechalav", text: "אלרגיה לחלב בתינוקות" },
                { href: "/alergia-lesumsum", text: "אלרגיה לשומשום" },
                { href: "/alergiya-beyeladim", text: "אלרגיה בילדים — מדריך הורים" },
                { href: "/immunotherapy", text: "אימונותרפיה לאלרגיה" },
              ].map((l) => (
                <Link key={l.href} href={l.href} className="flex items-center gap-2 text-amber-700 hover:text-amber-900">
                  <ChevronLeft className="w-4 h-4" />
                  {l.text}
                </Link>
              ))}
            </div>
          </section>

          {/* CTA */}
          <section className="bg-gradient-to-br from-amber-600 to-orange-600 text-white rounded-2xl p-8 text-center">
            <NutOff className="w-10 h-10 mx-auto mb-4 opacity-90" />
            <h2 className="text-2xl font-bold mb-3">יש חשד לאלרגיה לבוטנים?</h2>
            <p className="text-amber-100 mb-6 max-w-xl mx-auto">
              אבחון מדויק כולל component testing (Ara h 2) ותוכנית חירום אישית. ד״ר אנה ברמלי מתמחה באבחון וניהול אלרגיות בוטנים ואגוזים בילדים.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button asChild size="lg" className="bg-white text-amber-700 hover:bg-amber-50 font-bold">
                <a href="https://ihaveallergy.com/book" target="_blank" rel="noopener noreferrer">קביעת תור לאבחון</a>
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
