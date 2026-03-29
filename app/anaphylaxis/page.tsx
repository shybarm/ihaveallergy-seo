import type { Metadata } from "next";
import Link from "next/link";
import { ChevronLeft, Calendar, Phone, AlertTriangle, Syringe } from "lucide-react";
import { Button } from "@/components/ui/button";

const CANONICAL = "https://seo.ihaveallergy.com/anaphylaxis";
const TITLE = "אנפילקסיס ואפיפן — מדריך שלם לניהול חירום | ד״ר אנה ברמלי";
const DESCRIPTION =
  "מדריך רפואי מקיף על אנפילקסיס: זיהוי תסמינים, שימוש נכון באפיפן, פרוטוקול חירום, תוכנית AEAP ומניעה. נכתב על ידי ד״ר אנה ברמלי, מומחית לאלרגיה.";
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
    q: "מהו אנפילקסיס?",
    a: "אנפילקסיס הוא תגובה אלרגית מערכתית חמורה ומסכנת חיים. היא כוללת שתי מערכות איברים לפחות (עור + נשימה, או עור + לב-כלי דם) או לחץ דם נמוך לאחר חשיפה לאלרגן. ללא טיפול מהיר, עלולה להגיע למוות תוך דקות.",
  },
  {
    q: "מה גורם לאנפילקסיס?",
    a: "הגורמים הנפוצים: מזון (בוטנים, אגוזים, שומשום, חלב, ביצה, דגים), עקיצות חרקים (דבורים, צרעות), תרופות (פניצילין, NSAIDs, ניגוד CT), ולעיתים מאמץ גופני אחרי חשיפה לאלרגן (exercise-induced). 20–30% מהמקרים — סיבה לא ידועה (idiopathic).",
  },
  {
    q: "מתי להשתמש באפיפן ולא לחכות?",
    a: "השתמשו באפיפן מיד אם יש: קשיי נשימה, צפצופים, נחירה, שינוי קול (בצקת גרון), בצקת בשפתיים/לשון/גרון, ירידת לחץ דם, חיוורון, אובדן הכרה, פריחה מוכללת עם הקאה חזקה. אל תחכו לראות אם הסימנים 'עוברים לבד'.",
  },
  {
    q: "איך מזריקים אפיפן נכון?",
    a: "1. הסירו מכסה כחול. 2. אחזו באגרוף עם האגרוף הדומיננטי. 3. הניחו (לא תקעו) את קצה כתום לירך חיצונית (אפשר דרך בגד). 4. דחפו עד שמרגישים 'קליק'. 5. החזיקו 10 שניות. 6. הסירו ועסו קלות. 7. חייגו 112 מיד.",
  },
  {
    q: "האם צריך לחדר מיון אחרי אפיפן גם אם הסימנים חלפו?",
    a: "כן — תמיד. תגובה דו-פאזית (biphasic) מתרחשת ב-5–20% מהמקרים: הסימנים חוזרים 1–8 שעות לאחר התגובה הראשונה. חדר מיון מחזיקים למעקב 4–8 שעות. עם שחרור, מקבלים מרשם לאפיפן חדש וסטרואידים פומיים.",
  },
  {
    q: "מה ההבדל בין EpiPen, Jext ו-Emerade?",
    a: "כולם מכשירי מזרק אוטומטי לאדרנלין 0.3 מ\"ג למבוגרים ו-0.15 מ\"ג לילדים (15–30 ק\"ג). ההבדל בעיקר בעיצוב ושיטת השימוש. כל המכשירים מאושרים ושקולים בבטיחות. בישראל EpiPen הנפוץ ביותר — תרגלו תמיד את המכשיר שלכם.",
  },
  {
    q: "כמה אפיפנים צריך להחזיק?",
    a: "תמיד לפחות שני אפיפנים — בגלל אפשרות לתגובה דו-פאזית, כשל מכשיר, או מינון לא מספיק. אחד על הגוף, אחד בתיק. אפיפן נוסף בגן/בית ספר. בדקו תוקף כל 3 חודשים. אחסנו בטמפרטורה חדרית, הרחק מחום וקור קיצוניים.",
  },
  {
    q: "מה זה תוכנית AEAP ואיך מכינים אותה?",
    a: "AEAP (Allergy Emergency Action Plan) היא תוכנית חירום חתומה על ידי רופא המפרטת: אלרגנים מוכרים, תסמינים קלים/בינוניים/קשים, תרופות ומינונים, מי מתקשר למי. מגישים לגן/בית ספר/פעילויות. מחודשת מדי שנה. קיימים תבניות AEAP ישראליות מארגוני האלרגיה.",
  },
  {
    q: "האם ילדים יכולים להשתמש באפיפן עצמאית?",
    a: "מגיל 8–10 ילדים מסוגלים ללמוד לדקור אפיפן עצמאית. מומלץ להתאמן עם auto-injector מדומה (trainer). הילד צריך לדעת: מתי להשתמש, איפה האפיפן, איך לדקור, ולמי לפנות. הורים ומורים תמיד נשארים אחראיים עיקריים.",
  },
  {
    q: "מה לעשות אחרי תגובה אנפילקטית — לטווח ארוך?",
    a: "לאחר תגובה: 1) זיהוי הגורם המסוים — אתגר מזון מבוקר, בדיקות מעבדה. 2) הדרכה על הימנעות. 3) קביעת תוכנית AEAP מעודכנת. 4) שקילת OIT אם רלוונטי. 5) מעקב שנתי עם אלרגולוג. 6) שקילת צמיד זיהוי (מדיקאלרט).",
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
    name: "Anaphylaxis",
    alternateName: "אנפילקסיס",
    code: { "@type": "MedicalCode", code: "T78.2", codingSystem: "ICD-10" },
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
    { "@type": "ListItem", position: 2, name: "אנפילקסיס ואפיפן", item: CANONICAL },
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

export default function AnaphylaxisPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <main dir="rtl" lang="he" className="min-h-screen bg-white">
        {/* Hero */}
        <section className="bg-gradient-to-br from-red-50 to-rose-50 border-b border-red-200 py-12 px-4">
          <div className="max-w-4xl mx-auto">
            <nav className="flex items-center gap-1 text-sm text-gray-500 mb-6">
              <Link href="/" className="hover:text-red-700">ראשי</Link>
              <ChevronLeft className="w-4 h-4" />
              <span className="text-red-800 font-medium">אנפילקסיס ואפיפן</span>
            </nav>
            <div className="flex items-center gap-3 mb-4">
              <span className="bg-red-100 text-red-800 text-xs font-semibold px-3 py-1 rounded-full flex items-center gap-1">
                <AlertTriangle className="w-3 h-3" /> מסכן חיים
              </span>
              <span className="bg-rose-100 text-rose-700 text-xs font-semibold px-3 py-1 rounded-full">מדריך חירום</span>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              אנפילקסיס ואפיפן — מדריך שלם
            </h1>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              אנפילקסיס הוא מצב חירום רפואי המחייב טיפול מיידי. מדריך זה עוזר לזהות תגובה, להשתמש נכון באפיפן ולהכין תוכנית חירום — כי ידע מציל חיים.
            </p>
            <div className="flex items-center gap-3 text-sm text-gray-500">
              <Calendar className="w-4 h-4" />
              <span>עודכן: מרץ 2026</span>
              <span className="mx-2">•</span>
              <span>ד״ר אנה ברמלי, מומחית לאלרגיה ואימונולוגיה</span>
            </div>
          </div>
        </section>

        {/* Emergency Banner */}
        <div className="bg-red-600 py-4 px-4">
          <div className="max-w-4xl mx-auto text-center text-white">
            <p className="font-bold text-lg">חשד לאנפילקסיס? דקרו אפיפן מיד וחייגו <strong>112</strong></p>
            <p className="text-red-200 text-sm mt-1">אל תחכו — טיפול תוך דקות קריטי להצלת חיים</p>
          </div>
        </div>

        <div className="max-w-4xl mx-auto px-4 py-10">
          {/* TOC */}
          <div className="bg-red-50 border border-red-200 rounded-xl p-6 mb-10">
            <h2 className="font-bold text-gray-900 mb-4 text-lg">תוכן עניינים</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm">
              {[
                "מהו אנפילקסיס",
                "תסמינים — זיהוי מהיר",
                "כיצד להשתמש באפיפן",
                "פרוטוקול חירום שלב אחר שלב",
                "תוכנית AEAP",
                "גורמים ומניעה",
                "שאלות נפוצות",
              ].map((item) => (
                <div key={item} className="flex items-center gap-2 text-red-700">
                  <span className="w-1.5 h-1.5 bg-red-500 rounded-full flex-shrink-0" />
                  {item}
                </div>
              ))}
            </div>
          </div>

          {/* Section 1 */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-5 border-r-4 border-red-500 pr-4">
              מהו אנפילקסיס?
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              אנפילקסיס הוא תגובה אלרגית מערכתית חמורה שמתחילה במהירות ומערבת מספר מערכות גוף. בניגוד לתגובה אלרגית רגילה (פריחה מקומית, גרד), אנפילקסיס פוגע בנשימה, בלחץ הדם, בהכרה — ועלול להיות קטלני.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
              <div className="bg-red-50 border border-red-200 rounded-xl p-5">
                <h3 className="font-semibold text-red-900 mb-3">קריטריוני אבחון (NIAID/FAAN)</h3>
                <p className="text-sm text-gray-700 mb-2">אנפילקסיס מוגדר כאשר מתקיים אחד מהבאים:</p>
                <ol className="space-y-2 text-sm text-gray-700 list-decimal list-inside">
                  <li>פריחה/כוורת/גרד + קשיי נשימה או לחץ דם נמוך</li>
                  <li>שני תסמינים נשימתיים/קרדיו/GI/עור אחרי חשיפה לאלרגן</li>
                  <li>לחץ דם נמוך לבד לאחר חשיפה לאלרגן ידוע</li>
                </ol>
              </div>
              <div className="bg-gray-50 border border-gray-200 rounded-xl p-5">
                <h3 className="font-semibold text-gray-900 mb-3">גורמים נפוצים</h3>
                <ul className="space-y-1 text-sm text-gray-700">
                  {[
                    "מזון: בוטנים, אגוזים, שומשום, חלב, ביצה, חיטה",
                    "עקיצות: דבורה, צרעה, יתוש (נדיר)",
                    "תרופות: פניצילין, אספירין, ניגוד CT",
                    "לטקס",
                    "מאמץ גופני (exercise-induced)",
                    "Idiopathic (ללא גורם מזוהה) — 20%",
                  ].map((i) => (
                    <li key={i} className="flex items-start gap-2"><span className="text-red-400 mt-1">•</span>{i}</li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          {/* Section 2 — Symptoms */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-5 border-r-4 border-red-500 pr-4">
              תסמינים — זיהוי מהיר
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-3">
                {[
                  { icon: "🫁", system: "נשימה", warning: true, symptoms: "צפצופים, נחירה, קשיי נשימה, חנק, שינוי קול" },
                  { icon: "❤️", system: "לב-כלי דם", warning: true, symptoms: "דופק חלש/מהיר, ירידת לחץ דם, חיוורון, עלפון" },
                  { icon: "🧠", system: "נוירולוגי", warning: true, symptoms: "סחרחורת, ערפול, אובדן הכרה, תחושת 'גורל קרוב'" },
                  { icon: "👄", system: "פה/גרון", warning: true, symptoms: "בצקת לשון/שפתיים/גרון, קשיי בליעה, שינוי קול" },
                  { icon: "🔴", system: "עור", warning: false, symptoms: "כוורת מוכללת, אנגיואדמה, גרד, אדמומיות" },
                  { icon: "🤢", system: "מעיים", warning: false, symptoms: "הקאות, בחילה, כאבי בטן, שלשול" },
                ].map((row) => (
                  <div key={row.system} className={`flex items-start gap-3 p-3 rounded-lg ${row.warning ? "bg-red-50 border border-red-200" : "bg-gray-50 border border-gray-200"}`}>
                    <span className="text-xl">{row.icon}</span>
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <span className="font-semibold text-gray-900 text-sm">{row.system}</span>
                        {row.warning && <span className="text-xs bg-red-600 text-white px-2 rounded">קריטי</span>}
                      </div>
                      <p className="text-sm text-gray-600">{row.symptoms}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="bg-red-600 text-white rounded-xl p-5">
                <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
                  <AlertTriangle className="w-5 h-5" /> השתמשו באפיפן אם:
                </h3>
                <ul className="space-y-3 text-sm">
                  {[
                    "קשיי נשימה, צפצופים, נחירה",
                    "בצקת גרון / שינוי קול",
                    "ירידת לחץ דם, חיוורון, עלפון",
                    "כוורת מוכללת + הקאה/בטן",
                    "פריחה + קשיי נשימה",
                    "תינוק שפסק לנשום נורמלית",
                    "ספק? — עדיף לדקור מאשר לחכות",
                  ].map((s) => (
                    <li key={s} className="flex items-start gap-2">
                      <span className="text-red-200 mt-0.5">✓</span>
                      <span>{s}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          {/* Section 3 — EpiPen Instructions */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-5 border-r-4 border-red-500 pr-4">
              שימוש נכון באפיפן — שלב אחר שלב
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-5">
              {[
                { step: "1", title: "הסר מכסה כחול", desc: "משוך ישר מעלה. אל תכסה עם האגודל.", color: "blue" },
                { step: "2", title: "אחוז באגרוף", desc: "הקצה הכתום מטה. אל תגע בקצה הכתום.", color: "orange" },
                { step: "3", title: "ירך חיצונית", desc: "אפשר דרך בגד. לחץ עם כוח.", color: "green" },
                { step: "4", title: "קליק!", desc: "לחץ עד שמרגיש 'קליק'. החזק 10 שניות.", color: "purple" },
                { step: "5", title: "הסר ועסה", desc: "הסר בתנועה ישרה. עסה קלות 10 שניות.", color: "gray" },
                { step: "6", title: "112 מיד", desc: "חייג 112 אחרי הדקירה. אל תחכה.", color: "red" },
              ].map((s) => {
                const colors: Record<string, string> = {
                  blue: "bg-blue-50 border-blue-300", orange: "bg-orange-50 border-orange-300",
                  green: "bg-green-50 border-green-300", purple: "bg-purple-50 border-purple-300",
                  gray: "bg-gray-50 border-gray-300", red: "bg-red-50 border-red-300",
                };
                return (
                  <div key={s.step} className={`border rounded-xl p-4 ${colors[s.color]}`}>
                    <div className="text-2xl font-bold text-gray-400 mb-2">{s.step}</div>
                    <div className="font-semibold text-gray-900 mb-1 text-sm">{s.title}</div>
                    <p className="text-xs text-gray-600">{s.desc}</p>
                  </div>
                );
              })}
            </div>
            <div className="bg-yellow-50 border border-yellow-300 rounded-xl p-4 text-sm">
              <strong>אחרי האפיפן:</strong> שכבו (אל תקומו!) עם רגליים מורמות אם אין קשיי נשימה. אם קשיי נשימה — שבו. ממתינים ל-112. אם אין שיפור תוך 5–10 דקות — מזריקים אפיפן שני.
            </div>
          </section>

          {/* Section 4 — AEAP */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-5 border-r-4 border-red-500 pr-4">
              תוכנית AEAP — תוכנית חירום אלרגיה
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              AEAP (Allergy Emergency Action Plan) היא מסמך חתום על ידי רופא המפרט מה לעשות בתגובה אלרגית. זוהי רשת הביטחון של ילדים עם אלרגיות חמורות בגן ובבית הספר.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                {
                  title: "מה כוללת AEAP",
                  items: ["שם הילד ותמונה", "האלרגנים המסוכנים", "תסמינים קלים — מה לתת", "תסמינים קשים — מתי אפיפן", "מספרי חירום: הורים, רופא, 112", "שם וחתימת הרופא"],
                },
                {
                  title: "איפה לשמור עותקים",
                  items: ["גן/כיתה — גלוי לצוות", "תיק הגב של הילד", "אצל המטפלת/סבא-סבתא", "בבית — קבוע על המקרר", "משפחה חד-הורית: שתי מסגרות שונות", "עדכון שנתי — תמיד!"],
                },
              ].map((section) => (
                <div key={section.title} className="bg-blue-50 border border-blue-200 rounded-xl p-4">
                  <h3 className="font-semibold text-blue-900 mb-3">{section.title}</h3>
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
            <h2 className="text-2xl font-bold text-gray-900 mb-6">שאלות נפוצות על אנפילקסיס ואפיפן</h2>
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
                { href: "/alergia-lebotnim", text: "אלרגיה לבוטנים ואגוזים" },
                { href: "/alergia-lesumsum", text: "אלרגיה לשומשום" },
                { href: "/alergia-lemazon", text: "אלרגיות מזון — מדריך כללי" },
                { href: "/alergiya-beyeladim", text: "אלרגיה בילדים — מדריך הורים" },
                { href: "/immunotherapy", text: "אימונותרפיה לאלרגיה" },
              ].map((l) => (
                <Link key={l.href} href={l.href} className="flex items-center gap-2 text-red-700 hover:text-red-900">
                  <ChevronLeft className="w-4 h-4" />
                  {l.text}
                </Link>
              ))}
            </div>
          </section>

          {/* CTA */}
          <section className="bg-gradient-to-br from-red-600 to-rose-700 text-white rounded-2xl p-8 text-center">
            <Syringe className="w-10 h-10 mx-auto mb-4 opacity-90" />
            <h2 className="text-2xl font-bold mb-3">יש לכם אפיפן — אתם מוגנים?</h2>
            <p className="text-red-100 mb-6 max-w-xl mx-auto">
              תוכנית AEAP, מרשם אפיפן ולמידת שימוש נכון הם שלושת הצעדים הבסיסיים. ד״ר אנה ברמלי מכינה תוכנית חירום מותאמת לכל ילד.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button asChild size="lg" className="bg-white text-red-700 hover:bg-red-50 font-bold">
                <a href="https://ihaveallergy.com/book" target="_blank" rel="noopener noreferrer">קביעת תור לאבחון ותכנית חירום</a>
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
