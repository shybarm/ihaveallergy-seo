import type { Metadata } from "next";
import Link from "next/link";
import { ChevronLeft, Calendar, Phone, AlertTriangle } from "lucide-react";
import { Button } from "@/components/ui/button";

const CANONICAL = "https://seo.ihaveallergy.com/alergia-lechalav";
const TITLE = "אלרגיה לחלב בתינוקות וילדים – מדריך מקיף | ד״ר אנה ברמלי";
const DESCRIPTION =
  "מדריך רפואי מלא על אלרגיה לחלב פרה בתינוקות וילדים: הבדל מלאקטוז, תסמינים, פורמולות היפואלרגניות, אבחון, טיפול ומתי האלרגיה עוברת. נכתב על ידי ד״ר אנה ברמלי.";
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
    q: "מה ההבדל בין אלרגיה לחלב לאי-סבילות ללקטוז?",
    a: "אלרגיה לחלב היא תגובה חיסונית לחלבוני החלב (קזאין, whey) ועלולה לגרום לאנפילקסיס. אי-סבילות ללקטוז היא חוסר יכולת לעכל את סוכר החלב וגורמת לכאבי בטן וגזים בלבד. האבחנה ביניהן קריטית לניהול הנכון.",
  },
  {
    q: "אילו פורמולות מתאימות לתינוק עם אלרגיה לחלב?",
    a: "קיימות שלוש אפשרויות: (1) פורמולה מפורקת חלקית (pHF) – מתאימה לרגישות קלה; (2) פורמולה מפורקת מלאה (eHF) כמו Nutramigen, Alimentum – קו ראשון לאלרגיה; (3) פורמולה על בסיס חומצות אמינו (AAF) כמו Neocate – למקרים חמורים. פורמולת סויה אינה מומלצת מתחת לגיל 6 חודשים.",
  },
  {
    q: "מתי תינוק עם אלרגיה לחלב יכול לחזור לשתות חלב רגיל?",
    a: "כ-50% מהילדים מתגברים על אלרגיה לחלב עד גיל 1, ו-80% עד גיל 5-6. מעקב שנתי עם בדיקות IgE ואתגר מזון מבוקר יקבעו מתי ניתן להחזיר חלב לתפריט.",
  },
  {
    q: "האם ילד עם אלרגיה לחלב יכול לאכול גבינה קשה?",
    a: "בחלק מהמקרים – כן. חלבוני חלב מפורקים בחום ובתהליך ייצור הגבינה. חלק מהילדים (Milk Ladder) מגיבים רק לחלב גולמי ויכולים לסבול מוצרים אפויים. זה חייב להיבדק באופן פרטני תחת פיקוח רפואי.",
  },
  {
    q: "מה סימני אלרגיה לחלב בתינוק יונק?",
    a: "אם האמא שותה חלב, רכיבי חלבון חלב עוברים לחלב האם. תסמינים אפשריים בתינוק: דם/ריר בצואה, בכי מוגזם, גזים, אגזמה בפנים, פריחה אחרי הנקה. מומלץ להתייעץ עם אלרגולוג לפני הפסקת הנקה.",
  },
  {
    q: "האם פורמולת סויה מתאימה לתינוק אלרגי לחלב?",
    a: "לא מומלצת כקו ראשון, במיוחד מתחת לגיל 6 חודשים. כ-20-30% מהתינוקות עם אלרגיה לחלב אלרגיים גם לסויה. יש להתייעץ עם אלרגולוג לבחירת הפורמולה המתאימה.",
  },
  {
    q: "איך מאבחנים אלרגיה לחלב?",
    a: "אבחון כולל: היסטוריה קלינית, תבחין עור לחלבוני חלב (קזאין, ביתא-לקטוגלובולין), בדיקת IgE ספציפי בדם, ובמקרים מסוימים אתגר מזון מבוקר. FPIES (תגובה מאוחרת) מאובחנת בעיקר קלינית.",
  },
  {
    q: "מה לגבי מוצרי חלב אפויים – לחם, עוגות, ביסקוויטים?",
    a: "המיתוג 'Milk Ladder' מגדיר רצף חשיפה: מוצרים אפויים עם חלב → יוגורט → גבינות רכות → חלב גולמי. ילדים רבים מתחילים לסבול מוצרים אפויים לפני חלב גולמי. ההחלטה מתקבלת עם האלרגולוג.",
  },
  {
    q: "האם קלציום מספיק ללא חלב?",
    a: "כן, אם מתכננים נכון. מקורות טובים: ירקות עלים ירוקים (בייבי קייל, ברוקולי), טחינה, גרעיני שומשום, דגים עם עצמות, מוצרי סויה מועשרים, ושקדים. פורמולות היפואלרגניות מכילות קלציום מוסף.",
  },
  {
    q: "מתי חייבים לפנות לרופא/מיון בגלל אלרגיה לחלב?",
    a: "פנו מיידית: קשיי נשימה, נפיחות בשפתיים/לשון/גרון, עור חיוור/כחלחל, עלפון, ירידת לחץ דם אחרי חשיפה לחלב. אלה סימני אנפילקסיס הדורשים אפינפרין ואמבולנס מיידית.",
  },
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "MedicalWebPage",
  headline: TITLE,
  name: TITLE,
  description: DESCRIPTION,
  url: CANONICAL,
  datePublished: DATE,
  dateModified: DATE,
  inLanguage: "he-IL",
  image: OG_IMAGE,
  about: { "@type": "MedicalCondition", name: "Cow's Milk Allergy", alternateName: "אלרגיה לחלב פרה", code: { "@type": "MedicalCode", code: "L27.2", codingSystem: "ICD-10" } },
  author: { "@type": "Physician", name: "ד״ר אנה ברמלי", jobTitle: "מומחית לאלרגיה ואימונולוגיה", url: "https://seo.ihaveallergy.com/dr-anna-brameli" },
  reviewedBy: { "@type": "Physician", name: "ד״ר אנה ברמלי" },
  publisher: { "@type": "Organization", name: "I Have Allergy", url: "https://seo.ihaveallergy.com" },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "ראשי", item: "https://seo.ihaveallergy.com/" },
    { "@type": "ListItem", position: 2, name: "אלרגיה לחלב – מדריך מקיף", item: CANONICAL },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
};

export default function MilkAllergyPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <div dir="rtl">
        {/* Hero */}
        <section className="gradient-hero py-12 md:py-16">
          <div className="container-medical max-w-3xl">
            <nav aria-label="Breadcrumb" className="mb-8 flex items-center gap-2 text-sm text-muted-foreground">
              <Link href="/" className="hover:text-foreground transition-colors">ראשי</Link>
              <ChevronLeft className="h-3.5 w-3.5" />
              <span className="text-foreground">אלרגיה לחלב – מדריך מקיף</span>
            </nav>
            <span className="mb-4 inline-block rounded-full bg-accent px-3 py-1 text-xs font-medium text-primary">מדריך מקיף</span>
            <h1 className="text-balance mb-6 font-bold text-foreground">
              אלרגיה לחלב בתינוקות וילדים – מדריך מלא להורים
            </h1>
            <p className="mb-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
              אלרגיה לחלב פרה היא האלרגיה למזון הנפוצה ביותר בתינוקות בישראל. מדריך זה מסביר איך לזהות אותה, להבדיל אותה מאי-סבילות ללקטוז, לבחור פורמולה נכונה, ולנהל את המצב בצורה בטוחה.
            </p>
            <div className="inline-flex items-center gap-3 rounded-2xl border border-border/60 bg-card p-4">
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-accent font-bold text-primary">א</div>
              <div>
                <p className="font-semibold text-foreground">ד״ר אנה ברמלי</p>
                <p className="text-sm text-muted-foreground">מומחית לאלרגיה ואימונולוגיה</p>
              </div>
            </div>
          </div>
        </section>

        {/* TOC */}
        <div className="container-medical max-w-3xl py-8">
          <nav className="rounded-2xl border border-border/60 bg-card p-6">
            <h2 className="mb-4 text-base font-bold text-foreground">תוכן עניינים</h2>
            <ol className="grid gap-2 sm:grid-cols-2 text-sm">
              {["מהי אלרגיה לחלב?","הבדל מאי-סבילות ללקטוז","תסמינים ואיך לזהות","סוגי תגובות: IgE ו-FPIES","פורמולות היפואלרגניות","אבחון","ניהול התזונה","Milk Ladder – חזרה לחלב","שאלות נפוצות"].map((item, i) => (
                <li key={i}><span className="text-primary">{i + 1}. {item}</span></li>
              ))}
            </ol>
          </nav>
        </div>

        <div className="container-medical max-w-3xl space-y-12 pb-16">

          <section id="what-is">
            <h2 className="mb-4 text-xl font-bold text-foreground md:text-2xl">מהי אלרגיה לחלב פרה?</h2>
            <div className="space-y-4 leading-relaxed text-muted-foreground">
              <p>אלרגיה לחלב פרה (Cow's Milk Allergy – CMA) היא תגובה של מערכת החיסון לחלבוני החלב – בעיקר <strong className="text-foreground">קזאין</strong> ו-<strong className="text-foreground">whey (ביתא-לקטוגלובולין, אלפא-לקטואלבומין)</strong>. היא האלרגיה למזון הנפוצה ביותר בתינוקות, ופוגעת בכ-2-3% מהם בישראל.</p>
              <p>בניגוד לאי-סבילות ללקטוז (שהיא בעיית עיכול), אלרגיה לחלב היא תגובה חיסונית אמיתית שיכולה לנוע בין פריחה קלה לתגובה אנפילקטית מסכנת חיים. ההבחנה ביניהן קריטית לניהול הנכון.</p>
              <p>הבשורה הטובה: כ-80% מהילדים מתגברים על אלרגיה לחלב עד גיל 5-6. עם ניהול נכון בתינוקות ובפעוטות, רוב הילדים יכולים לחזור לשתות חלב רגיל.</p>
            </div>
          </section>

          <section id="difference">
            <h2 className="mb-4 text-xl font-bold text-foreground md:text-2xl">הבדל בין אלרגיה לחלב לאי-סבילות ללקטוז</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border-collapse">
                <thead><tr className="bg-accent">
                  <th className="p-3 text-right font-semibold text-foreground">מאפיין</th>
                  <th className="p-3 text-right font-semibold text-foreground">אלרגיה לחלב</th>
                  <th className="p-3 text-right font-semibold text-foreground">אי-סבילות ללקטוז</th>
                </tr></thead>
                <tbody className="text-muted-foreground">
                  {[["מנגנון","תגובה חיסונית (IgE/non-IgE)","חוסר אנזים לקטאז"],["גיל הופעה","תינוקות ופעוטות","ילדים מבוגרים ומבוגרים"],["סכנה","כן – אנפילקסיס אפשרי","לא"],["תסמינים","פריחה, נפיחות, קשיי נשימה","גזים, כאבי בטן, שלשול"],["בדיקה","SPT, IgE ספציפי","ייל נשיפה לאחר לקטוז"],["טיפול","הימנעות מחלבון חלב","אנזים לקטאז / הגבלת לקטוז"]].map(([f,a,b], i) => (
                    <tr key={i} className={i % 2 === 0 ? "bg-card" : ""}><td className="p-3 font-medium text-foreground">{f}</td><td className="p-3">{a}</td><td className="p-3">{b}</td></tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          <section id="symptoms">
            <h2 className="mb-4 text-xl font-bold text-foreground md:text-2xl">תסמינים – איך לזהות אלרגיה לחלב בתינוק</h2>
            <div className="space-y-4 leading-relaxed text-muted-foreground">
              <p>תסמינים יכולים להופיע בכל מערכת גוף:</p>
              <div className="grid gap-4 sm:grid-cols-2">
                {[["עור","פריחה (אורטיקריה), אדמומיות, אגזמה, נפיחות"],["מערכת עיכול","הקאות, בכי מתמשך, דם/ריר בצואה, GERD"],["נשימה","שיעול, נזלת, צפצופים"],["חמור","אנפילקסיס – ירידת לחץ דם, חיוורון, עלפון"]].map(([sys, sym]) => (
                  <div key={sys} className="rounded-xl border border-border/60 bg-card p-4">
                    <p className="font-semibold text-foreground mb-1">{sys}</p>
                    <p className="text-sm">{sym}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section id="types">
            <h2 className="mb-4 text-xl font-bold text-foreground md:text-2xl">סוגי תגובות: IgE נמדי ו-FPIES</h2>
            <div className="space-y-4 leading-relaxed text-muted-foreground">
              <div>
                <h3 className="font-semibold text-foreground mb-2">תגובה IgE-נמדית (מיידית)</h3>
                <p>מופיעה תוך דקות עד שעתיים. כוללת פריחה, נפיחות, הקאות ואפשרות לאנפילקסיס. ניתנת לאבחון בבדיקת עור ודם.</p>
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-2">FPIES – Food Protein-Induced Enterocolitis Syndrome</h3>
                <p>תגובה מאוחרת (1-4 שעות) שמתבטאת בהקאות ספרטיות חוזרות, חיוורון קיצוני ורדימות. נפוצה בתינוקות. לא מלווה בפריחה ולא ניתנת לאבחון בבדיקות IgE. אבחון קליני. מרוב המקרים נעלמת עד גיל 3-5.</p>
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-2">Allergic Proctocolitis</h3>
                <p>דם בצואה בתינוק יונק בריא שאמו שותה חלב. קל יחסית – נעלם לרוב מעצמו. חלבון חלב עובר בחלב אם.</p>
              </div>
            </div>
          </section>

          {/* Inline CTA */}
          <div className="rounded-2xl border border-border/60 bg-card p-6">
            <h3 className="mb-2 text-lg font-bold text-foreground">חשד לאלרגיה לחלב בתינוק?</h3>
            <p className="mb-5 leading-relaxed text-muted-foreground">ייעוץ מוקדם עם אלרגולוג ילדים מונע הימנעות מיותרת ומבטיח ניהול בטוח ומדויק.</p>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Button asChild><Link href="/contact"><Calendar className="ml-2 h-4 w-4" />קביעת תור</Link></Button>
              <Button variant="outline" asChild><a href="tel:+972545808008"><Phone className="ml-2 h-4 w-4" />054-580-8008</a></Button>
            </div>
          </div>

          <section id="formulas">
            <h2 className="mb-4 text-xl font-bold text-foreground md:text-2xl">פורמולות היפואלרגניות – איך לבחור</h2>
            <div className="space-y-4 leading-relaxed text-muted-foreground">
              <p>בחירת הפורמולה תלויה בחומרת האלרגיה ובגיל התינוק:</p>
              <div className="space-y-3">
                {[["pHF – מפורקת חלקית (כמו Nan HA)","לתינוקות עם סיכון גבוה לאלרגיה (מניעה), לא לאלרגיה מוכחת"],["eHF – מפורקת מלאה (Nutramigen, Alimentum)","קו ראשון לאלרגיה לחלב IgE-נמדית ו-FPIES. 90% מהתינוקות מסתדרים"],["AAF – חומצות אמינו (Neocate, EleCare)","לתינוקות שלא מגיבים ל-eHF, FPIES חמור, ואנפילקסיס"],["פורמולת סויה","לא מומלצת מתחת לגיל 6 חודשים; 20-30% אלרגיים גם לסויה"]].map(([name, desc]) => (
                  <div key={name} className="flex gap-3 rounded-xl border border-border/60 bg-card p-4">
                    <div className="w-2 h-2 mt-2 rounded-full bg-primary flex-shrink-0" />
                    <div><p className="font-semibold text-foreground text-sm">{name}</p><p className="text-sm text-muted-foreground">{desc}</p></div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section id="diagnosis">
            <h2 className="mb-4 text-xl font-bold text-foreground md:text-2xl">אבחון אלרגיה לחלב</h2>
            <div className="space-y-4 leading-relaxed text-muted-foreground">
              <p>האבחון משלב היסטוריה קלינית עם בדיקות:</p>
              <ul className="list-disc list-inside space-y-2">
                <li><strong className="text-foreground">תבחין עור (SPT)</strong> – לחלבוני קזאין, ביתא-לקטוגלובולין ואלפא-לקטואלבומין. מהיר וזמין.</li>
                <li><strong className="text-foreground">IgE ספציפי בדם (ImmunoCAP)</strong> – מדידת רמת נוגדנים. שימושי במיוחד לתינוקות עם אגזמה פעילה.</li>
                <li><strong className="text-foreground">Component testing</strong> – בדיקת קזאין (nBos d 8) מנבאת חומרת תגובה ואפשרות לסבול מוצרים אפויים.</li>
                <li><strong className="text-foreground">אתגר מזון מבוקר (OFC)</strong> – הסטנדרט הזהב. מתבצע במרפאה תחת פיקוח רפואי.</li>
                <li><strong className="text-foreground">דיאטת אלימינציה</strong> – לתינוקות יונקים: הוצאת חלב מתפריט האמא ל-2-4 שבועות כאבחון ראשוני.</li>
              </ul>
            </div>
          </section>

          <section id="milk-ladder">
            <h2 className="mb-4 text-xl font-bold text-foreground md:text-2xl">Milk Ladder – החזרה ההדרגתית לחלב</h2>
            <div className="space-y-4 leading-relaxed text-muted-foreground">
              <p>פרוטוקול ה-Milk Ladder מאפשר לילדים שהתגברו על אלרגיה לחזור לחלב בהדרגה, תוך מעקב קפדני. השלבים:</p>
              <ol className="list-decimal list-inside space-y-2">
                <li>עוגיות/ביסקוויטים עם אבקת חלב אפויים בחום גבוה (180°C, 30 דקות)</li>
                <li>לחם עם חלב (מוצר אפוי)</li>
                <li>פנקייק/וואפל עם חלב</li>
                <li>גבינה קשה מחוממת</li>
                <li>יוגורט</li>
                <li>גבינה רכה (cottage, גבינה לבנה)</li>
                <li>חלב גולמי</li>
              </ol>
              <p>כל שלב מתבצע תחת הנחיית האלרגולוג. אתגר מזון מאשר אם ניתן לעלות שלב.</p>
            </div>
          </section>

          {/* FAQ */}
          <section id="faq">
            <h2 className="mb-6 text-xl font-bold text-foreground md:text-2xl">שאלות נפוצות על אלרגיה לחלב</h2>
            <div className="space-y-4">
              {faqs.map((faq, i) => (
                <div key={i} className="rounded-2xl border border-border/60 bg-card p-5">
                  <h3 className="font-semibold text-foreground mb-2">{faq.q}</h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">{faq.a}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Related */}
          <div className="rounded-2xl border border-border/60 bg-card p-6">
            <h2 className="mb-4 text-lg font-bold text-foreground">מידע קשור</h2>
            <ul className="space-y-2">
              {[{href:"/alergia-lemazon",label:"אלרגיה למזון – מדריך מקיף"},{href:"/alergia-lebotnim",label:"אלרגיה לבוטנים ואגוזים"},{href:"/anaphylaxis",label:"אנפילקסיס ואפיפן – מדריך חירום"},{href:"/immunotherapy",label:"אימונותרפיה וטיפול חיסוני"},{href:"/alergiya-beyeladim",label:"אלרגיה בילדים – מדריך מלא"},{href:"/blog/פריחה-אחרי-במבה-לתינוק",label:"פריחה אחרי במבה – מתי זו אלרגיה?"}].map(l => (
                <li key={l.href}><Link href={l.href} className="flex items-center gap-2 text-sm text-primary hover:underline"><ChevronLeft className="h-3.5 w-3.5" />{l.label}</Link></li>
              ))}
            </ul>
          </div>

          {/* CTA Section */}
          <section className="gradient-teal rounded-3xl p-8 text-center">
            <h2 className="mb-3 text-2xl font-bold text-foreground md:text-3xl">צריכים ייעוץ לאלרגיה לחלב?</h2>
            <p className="mx-auto mb-6 max-w-2xl leading-relaxed text-muted-foreground">אבחון מדויק, בחירת פורמולה נכונה, מעקב אחר ה-Milk Ladder וקביעת תוכנית מעבר בטוחה לחלב.</p>
            <div className="flex flex-col justify-center gap-3 sm:flex-row">
              <Button asChild><Link href="https://ihaveallergy.com/book"><Calendar className="ml-2 h-4 w-4" />קביעת תור באתר הראשי</Link></Button>
              <Button variant="outline" asChild><a href="tel:+972545808008"><Phone className="ml-2 h-4 w-4" />054-580-8008</a></Button>
            </div>
          </section>

          {/* Author */}
          <div className="rounded-2xl border border-border/60 bg-card p-5">
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-accent font-bold text-primary">א</div>
              <div><p className="font-semibold text-foreground">ד״ר אנה ברמלי</p><p className="text-sm text-muted-foreground">מומחית לאלרגיה ואימונולוגיה | עודכן {DATE}</p></div>
            </div>
          </div>

        </div>
      </div>
    </>
  );
}
