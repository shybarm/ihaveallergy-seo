import type { Metadata } from "next";
import Link from "next/link";
import {
  ChevronLeft,
  Clock3,
  TestTube2,
  Stethoscope,
  ArrowLeft,
  CheckCircle2,
  AlertTriangle,
  HelpCircle,
  Heart,
  ShieldCheck,
  FileText,
  Phone,
} from "lucide-react";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "בדיקות אלרגיה לילדים בישראל: מדריך מלא להורים | ד״ר אנה ברמלי",
  description:
    "מדריך מקיף להורים: סוגי בדיקות אלרגיה לילדים בישראל, מתי עושים תבחיני עור, בדיקות דם או מבחן מאכל, ומה ההבדל בין פרטי לציבורי.",
  alternates: {
    canonical: "https://ihaveallergy.com/guides/בדיקות-אלרגיה-ילדים-ישראל",
  },
  openGraph: {
    type: "article",
    url: "https://ihaveallergy.com/guides/בדיקות-אלרגיה-ילדים-ישראל",
    title: "בדיקות אלרגיה לילדים בישראל: מדריך מלא להורים | ד״ר אנה ברמלי",
    description:
      "מדריך מקיף: תבחיני עור, בדיקות דם, מבחן מאכל, עלויות פרטי מול ציבורי, ומה לצפות בביקור אצל אלרגולוג.",
    locale: "he_IL",
    images: [
      {
        url: "https://ihaveallergy.com/og-logo.png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "בדיקות אלרגיה לילדים בישראל: מדריך מלא להורים | ד״ר אנה ברמלי",
    description:
      "מדריך מקיף: תבחיני עור, בדיקות דם, מבחן מאכל, עלויות פרטי מול ציבורי, ומה לצפות בביקור אצל אלרגולוג.",
    images: ["https://ihaveallergy.com/og-logo.png"],
  },
};

const testTypes = [
  {
    name: "תבחיני עור (Skin Prick Test)",
    age: "מגיל 4 חודשים",
    duration: "20-30 דקות",
    what: "טיפות של אלרגנים מונחות על העור עם דקירה קלה. תגובה מקומית מופיעה בדרך כלל תוך 15-20 דקות.",
    pros: [
      "תוצאות מיידיות",
      "מדויקות מאוד",
      "ניתן לבדוק כמה אלרגנים באותו ביקור",
    ],
    cons: [
      "דורש הפסקת אנטיהיסטמינים 5-7 ימים לפני",
      "פחות מתאים כשיש אקזמה מפושטת",
    ],
    when: "לרוב זו הבדיקה הראשונה בחשד לאלרגיה למזון, לאלרגיה נשימתית או לתגובה לא ברורה.",
  },
  {
    name: "בדיקת דם (IgE ספציפי)",
    age: "כל גיל",
    duration: "דקירה אחת, תוצאות תוך ימים",
    what: "בדיקת דם שמודדת נוגדנים לאלרגנים ספציפיים. מתבצעת במעבדה ומתאימה גם למצבים שבהם אי אפשר לבצע תבחיני עור.",
    pros: [
      "אין צורך להפסיק תרופות",
      "מתאימה לילדים עם עור רגיש או אקזמה קשה",
      "אפשר לבדוק גם רכיבים מסוימים",
    ],
    cons: [
      "התוצאות אינן מיידיות",
      "לא תמיד מספיקה בלי ההקשר הקליני",
    ],
    when: "כשלא ניתן לבצע תבחיני עור, או כהשלמה להערכה אצל אלרגולוג.",
  },
  {
    name: "מבחן מאכל (Oral Food Challenge)",
    age: "כל גיל, בליווי רפואי",
    duration: "2-4 שעות",
    what: "הילד מקבל כמויות עולות של המזון החשוד תחת השגחה רפואית צמודה. זו הבדיקה המדויקת ביותר להכרעה אם יש אלרגיה.",
    pros: [
      "נחשב לתקן הזהב",
      "מאפשר לעיתים לשלול אלרגיה ולהחזיר מזון",
    ],
    cons: [
      "דורש זמן ומקום מאובזר",
      "נעשה רק תחת פיקוח רפואי",
    ],
    when: "כאשר צריך לאשר או לשלול אלרגיה באופן סופי, או לפני החזרת מזון לתפריט.",
  },
  {
    name: "תבחיני מדבקה (Patch Test)",
    age: "כל גיל",
    duration: "48-72 שעות",
    what: "מדבקות עם חומרים מסוימים מודבקות על הגב ונבדקות לאחר יומיים-שלושה. מיועדות יותר לתגובות עור מושהות.",
    pros: ["לא כואב", "יעיל בחשד לדרמטיטיס ממגע"],
    cons: [
      "לא בודק אלרגיה מיידית למזון",
      "דורש יותר מביקור אחד",
    ],
    when: "כאשר יש חשד לתגובה עורית ממגע עם חומרים, מתכות או תכשירים.",
  },
];

const privateVsPublic = [
  {
    aspect: "זמן המתנה",
    private: "ימים עד שבועות",
    public: "חודשים ולעיתים יותר",
  },
  {
    aspect: "משך הביקור",
    private: "30-60 דקות",
    public: "לרוב קצר יותר",
  },
  {
    aspect: "בדיקות באותו ביקור",
    private: "לעיתים קרובות כן",
    public: "לא תמיד",
  },
  {
    aspect: "עלות",
    private: "בדרך כלל 300-800 ₪ לביקור",
    public: "השתתפות עצמית דרך הקופה",
  },
  {
    aspect: "גמישות",
    private: "גבוהה יותר",
    public: "לפי זמינות המערכת",
  },
];

const visitSteps = [
  {
    step: "1",
    title: "שיחה רפואית מסודרת",
    desc: "האלרגולוג שואל מה קרה, מתי, אחרי איזה מזון או חשיפה, ואיך נראתה התגובה.",
  },
  {
    step: "2",
    title: "בדיקה גופנית",
    desc: "נבדקים העור, מערכת הנשימה, והסיפור הכללי של הילד.",
  },
  {
    step: "3",
    title: "בחירת בדיקה מתאימה",
    desc: "לא כל ילד צריך אותה בדיקה. הבחירה תלויה בגיל, בתסמינים ובמצב העור.",
  },
  {
    step: "4",
    title: "פענוח והסבר",
    desc: "התוצאות נבחנות יחד עם התמונה הקלינית, ולא בנפרד ממנה.",
  },
  {
    step: "5",
    title: "תוכנית פעולה",
    desc: "בסיום מקבלים כיוון ברור: מעקב, הימנעות, בירור נוסף, ולעיתים מסמכים למוסדות חינוך.",
  },
];

const importantNotes = [
  "בדיקה חיובית לא תמיד אומרת שיש אלרגיה אמיתית.",
  "בדיקה שלילית מפחיתה את הסבירות, אבל לא תמיד מספיקה לבדה.",
  "לפעמים רק מבחן מאכל יכול לתת תשובה סופית.",
  "החלטה רפואית נכונה מבוססת על הסיפור המלא, לא רק על מספרים.",
];

const faqs = [
  {
    question: "מאיזה גיל אפשר לעשות בדיקות אלרגיה?",
    answer:
      "תבחיני עור אפשר לבצע כבר מגיל 4 חודשים, ובדיקות דם מתאימות לכל גיל. סוג הבדיקה נקבע לפי גיל הילד, סוג החשד ומצב העור.",
  },
  {
    question: "כמה עולות בדיקות אלרגיה פרטיות?",
    answer:
      "בדרך כלל ביקור פרטי עם תבחיני עור נע בין 300 ל-800 ₪, בהתאם להיקף הבדיקה. בדיקות דם עשויות להוסיף עלות נוספת.",
  },
  {
    question: "האם צריך להפסיק תרופות לפני הבדיקה?",
    answer:
      "לפני תבחיני עור לרוב צריך להפסיק אנטיהיסטמינים כמה ימים מראש. לפני בדיקות דם בדרך כלל אין צורך. חשוב לקבל הנחיה מסודרת מראש.",
  },
  {
    question: "מה ההבדל בין אלרגיה לאי-סבילות?",
    answer:
      "אלרגיה היא תגובה של מערכת החיסון ועלולה להיות מסוכנת. אי-סבילות לרוב קשורה למערכת העיכול ואינה אותה תופעה.",
  },
  {
    question: "איפה עושים בדיקות אלרגיה בישראל?",
    answer:
      "אפשר לבצע בדיקות דרך קופות החולים, בבתי חולים ובמרפאות פרטיות. מבחן מאכל מבוצע רק במסגרת רפואית מפוקחת.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "MedicalWebPage",
  headline: "בדיקות אלרגיה לילדים בישראל: מדריך מלא להורים | ד״ר אנה ברמלי",
  description:
    "מדריך מקיף להורים: סוגי בדיקות אלרגיה לילדים בישראל, מתי עושים תבחיני עור, בדיקות דם או מבחן מאכל, ומה ההבדל בין פרטי לציבורי.",
  inLanguage: "he-IL",
  datePublished: "2026-02-08",
  dateModified: "2026-02-08",
  url: "https://ihaveallergy.com/guides/בדיקות-אלרגיה-ילדים-ישראל",
  about: {
    "@type": "MedicalProcedure",
    name: "Allergy Testing",
    alternateName: "בדיקות אלרגיה",
  },
  author: {
    "@type": "Person",
    name: "ד״ר אנה ברמלי",
  },
  publisher: {
    "@type": "Organization",
    name: "I Have Allergy",
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "ראשי",
      item: "https://ihaveallergy.com/",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "מדריכים",
      item: "https://ihaveallergy.com/guides",
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "בדיקות אלרגיה לילדים בישראל",
      item: "https://ihaveallergy.com/guides/בדיקות-אלרגיה-ילדים-ישראל",
    },
  ],
};

export default function AllergyTestingGuidePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <section className="gradient-hero py-14 md:py-20">
        <div className="container-medical max-w-3xl">
          <nav
            aria-label="Breadcrumb"
            className="mb-8 flex items-center gap-2 text-sm text-muted-foreground"
          >
            <Link href="/" className="transition-colors hover:text-foreground">
              ראשי
            </Link>
            <ChevronLeft className="h-3.5 w-3.5" />
            <Link
              href="/guides"
              className="transition-colors hover:text-foreground"
            >
              מדריכים
            </Link>
            <ChevronLeft className="h-3.5 w-3.5" />
            <span className="text-foreground">בדיקות אלרגיה לילדים</span>
          </nav>

          <span className="mb-5 inline-block rounded-full bg-accent px-3 py-1 text-xs font-medium text-primary">
            מדריך בדיקות
          </span>

          <h1 className="mb-6 font-bold text-foreground text-balance">
            בדיקות אלרגיה לילדים בישראל
            <span className="mt-2 block text-primary text-[22px] md:text-[28px] lg:text-[32px]">
              איזה בדיקה מתאימה, מתי ואיפה
            </span>
          </h1>

          <div className="mb-8 flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
            <span className="flex items-center gap-1.5">
              <Clock3 className="h-4 w-4" />
              9 דקות קריאה
            </span>
            <span>עודכן: פברואר 2026</span>
          </div>

          <div className="rounded-2xl border border-border/40 bg-card p-5">
            <p className="text-sm leading-7 text-muted-foreground">
              העמוד מיועד להסברה ולהכוונה. לקביעת תור או בירור אישי יש להמשיך
              לאתר הראשי.
            </p>
          </div>
        </div>
      </section>

      <div className="container-medical max-w-3xl py-12 md:py-16">
        <section className="mb-12">
          <div className="rounded-2xl border border-border/40 bg-surface-warm p-7">
            <p className="mb-4 text-lg leading-relaxed text-foreground">
              הרבה הורים מגיעים לשלב הזה אחרי תקופה מבלבלת:
              פריחה, הקאות, שיעול, נזלת, או תגובה לא ברורה אחרי מזון.
            </p>
            <p className="mb-4 leading-relaxed text-muted-foreground">
              ואז עולה השאלה הגדולה: איזו בדיקה בכלל צריך? בדיקת דם? תבחין עור?
              מבחן מאכל? והאם כדאי לעשות את זה פרטי או דרך הקופה?
            </p>
            <p className="leading-relaxed text-muted-foreground">
              המדריך הזה עושה סדר, כדי שתבינו מה בודקים, מה לא בודקים, ומה
              באמת עוזר לקבל החלטה רפואית נכונה.
            </p>
          </div>
        </section>

        <section className="mb-12" id="test-types">
          <div className="mb-5 flex items-center gap-3">
            <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-accent">
              <TestTube2 className="h-5 w-5 text-primary" />
            </div>
            <h2 className="text-xl font-bold text-foreground md:text-2xl">
              סוגי בדיקות אלרגיה
            </h2>
          </div>

          <div className="space-y-5">
            {testTypes.map((test) => (
              <div
                key={test.name}
                className="rounded-2xl border border-border/60 bg-card p-5 md:p-6"
              >
                <h3 className="mb-3 text-lg font-semibold text-foreground">
                  {test.name}
                </h3>

                <div className="mb-4 grid grid-cols-1 gap-3 text-sm sm:grid-cols-2">
                  <div>
                    <span className="text-muted-foreground">גיל מינימלי: </span>
                    <span className="font-medium text-foreground">
                      {test.age}
                    </span>
                  </div>
                  <div>
                    <span className="text-muted-foreground">משך: </span>
                    <span className="font-medium text-foreground">
                      {test.duration}
                    </span>
                  </div>
                </div>

                <p className="mb-4 text-sm leading-relaxed text-muted-foreground">
                  {test.what}
                </p>

                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <p className="mb-2 text-xs font-medium text-foreground">
                      יתרונות
                    </p>
                    <ul className="space-y-1.5">
                      {test.pros.map((item) => (
                        <li
                          key={item}
                          className="flex items-start gap-2 text-xs text-muted-foreground"
                        >
                          <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 flex-shrink-0 text-primary" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <p className="mb-2 text-xs font-medium text-foreground">
                      מגבלות
                    </p>
                    <ul className="space-y-1.5">
                      {test.cons.map((item) => (
                        <li
                          key={item}
                          className="flex items-start gap-2 text-xs text-muted-foreground"
                        >
                          <AlertTriangle className="mt-0.5 h-3.5 w-3.5 flex-shrink-0 text-muted-foreground" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mt-4 rounded-xl bg-accent/30 px-4 py-3">
                  <p className="text-xs text-foreground">
                    <strong>מתי בוחרים בבדיקה הזו:</strong> {test.when}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="my-12 rounded-[2rem] border border-border/60 bg-card p-8 shadow-medical">
          <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-accent">
            <Phone className="h-6 w-6 text-primary" />
          </div>
          <h2 className="font-bold text-foreground">רוצים אבחון מסודר?</h2>
          <p className="mt-4 text-lg leading-8 text-muted-foreground">
            אם יש חשד לאלרגיה, תוצאות מבלבלות או צורך בבדיקות מותאמות לילד,
            אפשר לקבוע תור דרך האתר הראשי.
          </p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <Button size="lg" asChild>
              <Link href="https://ihaveallergy.com/book">
                <Phone className="ml-2 h-5 w-5" />
                קביעת תור באתר הראשי
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/services">
                לשירותים ואבחונים
                <ArrowLeft className="mr-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </section>

        <section className="mb-12" id="private-vs-public">
          <div className="mb-5 flex items-center gap-3">
            <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-accent">
              <Stethoscope className="h-5 w-5 text-primary" />
            </div>
            <h2 className="text-xl font-bold text-foreground md:text-2xl">
              פרטי מול ציבורי
            </h2>
          </div>

          <p className="mb-5 leading-relaxed text-muted-foreground">
            שני המסלולים טובים ומקצועיים. ההבדלים העיקריים הם בזמינות, בזמן
            הביקור, ובמידת הגמישות.
          </p>

          <div className="overflow-hidden rounded-2xl border border-border/60 bg-card">
            <div className="grid grid-cols-3 bg-accent/40 px-5 py-3 text-sm font-medium text-foreground">
              <span></span>
              <span>פרטי</span>
              <span>ציבורי</span>
            </div>

            {privateVsPublic.map((row, index) => (
              <div
                key={row.aspect}
                className={`grid grid-cols-3 px-5 py-3 text-sm ${
                  index % 2 === 0 ? "bg-card" : "bg-accent/10"
                }`}
              >
                <span className="font-medium text-foreground">
                  {row.aspect}
                </span>
                <span className="text-muted-foreground">{row.private}</span>
                <span className="text-muted-foreground">{row.public}</span>
              </div>
            ))}
          </div>

          <p className="mt-5 leading-relaxed text-muted-foreground">
            אין מסלול אחד שמתאים לכולם. לפעמים מה שחשוב הוא מהירות, ולפעמים
            מספיק מסלול מסודר דרך הקופה.
          </p>
        </section>

        <section className="mb-12" id="visit">
          <div className="mb-5 flex items-center gap-3">
            <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-accent">
              <HelpCircle className="h-5 w-5 text-primary" />
            </div>
            <h2 className="text-xl font-bold text-foreground md:text-2xl">
              מה קורה בביקור אצל אלרגולוג?
            </h2>
          </div>

          <div className="space-y-4">
            {visitSteps.map((item) => (
              <div key={item.step} className="flex items-start gap-4">
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-primary">
                  <span className="text-sm font-bold text-primary-foreground">
                    {item.step}
                  </span>
                </div>
                <div className="pt-1">
                  <h3 className="font-semibold text-foreground">{item.title}</h3>
                  <p className="mt-0.5 text-sm text-muted-foreground">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-12" id="important">
          <div className="mb-5 flex items-center gap-3">
            <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-accent">
              <ShieldCheck className="h-5 w-5 text-primary" />
            </div>
            <h2 className="text-xl font-bold text-foreground md:text-2xl">
              מה חשוב להבין על תוצאות
            </h2>
          </div>

          <div className="space-y-3 rounded-2xl border border-border/60 bg-card p-6">
            {importantNotes.map((item) => (
              <div key={item} className="flex items-start gap-3">
                <CheckCircle2 className="mt-1 h-4 w-4 flex-shrink-0 text-primary" />
                <p className="text-sm text-muted-foreground">{item}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-12" id="oit">
          <div className="mb-5 flex items-center gap-3">
            <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-accent">
              <Heart className="h-5 w-5 text-primary" />
            </div>
            <h2 className="text-xl font-bold text-foreground md:text-2xl">
              ומה אחרי האבחון?
            </h2>
          </div>

          <div className="space-y-4 leading-relaxed text-muted-foreground">
            <p>
              אחרי אבחון מסודר, לפעמים מספיק מעקב והימנעות, ולפעמים יש צורך
              בתוכנית פעולה, מסמכים למסגרת החינוכית, או בירור נוסף.
            </p>
            <p>
              במקרים מסוימים, בהתאם לסוג האלרגיה ולגיל הילד, אפשר גם לשקול
              טיפולים מתקדמים יותר כמו דסנסיטיזציה.
            </p>
            <p>
              ההחלטה תמיד נעשית לפי התמונה המלאה של הילד והמשפחה, ולא לפי בדיקה
              אחת בלבד.
            </p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="mb-5 text-xl font-bold text-foreground md:text-2xl">
            מדריכים נוספים
          </h2>

          <div className="grid gap-4 sm:grid-cols-2">
            {[
              {
                href: "/guides/טעימות-ראשונות-אלרגנים",
                label: "טעימות ראשונות – מדריך חשיפה לאלרגנים",
              },
              {
                href: "/guides/זכויות-ילד-אלרגי-ישראל",
                label: "זכויות של ילד אלרגי בישראל",
              },
              {
                href: "/services",
                label: "השירותים שלנו – ייעוץ, אבחון ובדיקות",
              },
              {
                href: "/about",
                label: "אודות ד״ר אנה ברמלי",
              },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="card-hover group flex items-center gap-2 rounded-xl border border-border/60 bg-card p-4 text-sm"
              >
                <ArrowLeft className="h-4 w-4 flex-shrink-0 text-primary transition-transform group-hover:-translate-x-1" />
                <span className="font-medium text-foreground transition-colors group-hover:text-primary">
                  {link.label}
                </span>
              </Link>
            ))}
          </div>
        </section>

        <section className="mb-12" id="faq">
          <h2 className="mb-6 text-xl font-bold text-foreground md:text-2xl">
            שאלות נפוצות
          </h2>

          <div className="space-y-4">
            {faqs.map((faq) => (
              <details
                key={faq.question}
                className="rounded-2xl border border-border/60 bg-card p-6"
              >
                <summary className="cursor-pointer list-none text-lg font-bold text-foreground">
                  {faq.question}
                </summary>
                <p className="mt-4 leading-7 text-muted-foreground">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>
        </section>

        <section className="rounded-[2rem] border border-border/60 bg-surface p-6 text-xs leading-relaxed text-muted-foreground">
          <div className="mb-3 flex items-center gap-2 text-foreground">
            <FileText className="h-4 w-4 text-primary" />
            <strong>הבהרה רפואית</strong>
          </div>
          <p className="mb-2">
            המידע בעמוד זה נועד לצורכי הסברה בלבד ואינו מהווה תחליף לייעוץ רפואי
            מקצועי.
          </p>
          <p>
            אם יש חשד לאלרגיה, תגובה למזון או קושי לפרש תוצאות בדיקה — יש לפנות
            לרופא או לאלרגולוג.
          </p>
        </section>
      </div>
    </>
  );
}
