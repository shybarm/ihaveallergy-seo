import type { Metadata } from "next";
import Link from "next/link";
import {
  ChevronLeft,
  Clock3,
  ShieldCheck,
  Heart,
  Stethoscope,
  TestTube2,
  AlertTriangle,
  CheckCircle2,
  Baby,
  School,
  FileText,
  Phone,
  ArrowLeft,
  BookOpen,
  Info,
  Activity,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const CANONICAL = "https://seo.ihaveallergy.com/alergiya-beyeladim";
const TITLE = "אלרגיה בילדים – מדריך מלא להורים | ד״ר אנה ברמלי";
const DESCRIPTION =
  "מדריך רפואי מקיף על אלרגיה בילדים: סוגי אלרגיה, תסמינים, אבחון, טיפול, מניעה, זכויות במערכת החינוך וניהול חיי יומיום.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: {
    canonical: "/alergiya-beyeladim",
  },
  openGraph: {
    type: "article",
    url: CANONICAL,
    title: TITLE,
    description: DESCRIPTION,
    locale: "he_IL",
    siteName: "I Have Allergy",
    images: [
      {
        url: "https://ihaveallergy.com/og-logo.png",
        width: 1200,
        height: 630,
        alt: TITLE,
      },
    ],
    publishedTime: "2026-02-26",
    modifiedTime: "2026-03-24",
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    images: ["https://ihaveallergy.com/og-logo.png"],
  },
};

const symptomGroups = [
  {
    title: "עור",
    items: ["חרלת", "פריחה", "גרד", "נפיחות בשפתיים או בפנים", "אקזמה שמחמירה"],
  },
  {
    title: "מערכת נשימה",
    items: ["שיעול", "צפצופים", "נזלת אלרגית", "קוצר נשימה", "תחושת חנק"],
  },
  {
    title: "מערכת עיכול",
    items: ["הקאות", "כאבי בטן", "שלשול", "אי שקט אחרי אכילה"],
  },
  {
    title: "תגובה מערכתית",
    items: ["חולשה", "חיוורון", "בלבול", "ירידה בערנות", "אנפילקסיס"],
  },
];

const allergyTypes = [
  {
    title: "אלרגיה למזון",
    desc: "אלרגיה לבוטנים, שומשום, חלב, ביצים, אגוזים, דגים ומזונות נוספים.",
  },
  {
    title: "אלרגיה נשימתית",
    desc: "אבק, קרדית אבק הבית, פריחות עונתיות, אבקנים, בעלי חיים ועובש.",
  },
  {
    title: "אלרגיה לעקיצות",
    desc: "תגובות לעקיצות דבורים או צרעות, לעיתים עד כדי תגובה מסכנת חיים.",
  },
  {
    title: "אלרגיה לתרופות",
    desc: "חשד לתגובה לאנטיביוטיקה, משככי כאבים או תרופות אחרות.",
  },
];

const diagnosisSteps = [
  "איסוף סיפור רפואי מדויק: מה קרה, מתי, אחרי איזה טריגר וכמה זמן נמשכה התגובה",
  "בדיקה גופנית מלאה והבנת הרקע של הילד",
  "בחירת בדיקה מתאימה: תבחיני עור, בדיקות דם או מבחן מאכל",
  "פענוח נכון של התוצאות בהקשר הקליני",
  "בניית תוכנית פעולה להמשך",
];

const dailyManagement = [
  "ללמוד לזהות סימנים מוקדמים לתגובה",
  "להחזיק תוכנית פעולה ברורה ומסודרת",
  "לוודא שאפיפן זמין ונגיש במקרה הצורך",
  "לעדכן גן, בית ספר, צהרון ובני משפחה",
  "לקרוא תוויות מזון ולהכיר סיכוני חשיפה",
  "להישאר במעקב רפואי מסודר",
];

const faqs = [
  {
    question: "מאיזה גיל אפשר לבצע בדיקות אלרגיה?",
    answer:
      "בדיקות דם אפשריות בכל גיל, ותבחיני עור מבוצעים לעיתים כבר מגיל כמה חודשים, בהתאם למצב הקליני ולהחלטת האלרגולוג.",
  },
  {
    question: "האם ילד יכול להתגבר על אלרגיה למזון?",
    answer:
      "כן. חלק מהאלרגיות חולפות עם השנים, במיוחד חלב וביצים, אך הדבר משתנה מילד לילד ודורש מעקב רפואי.",
  },
  {
    question: "מה ההבדל בין אלרגיה לרגישות?",
    answer:
      "אלרגיה מערבת את מערכת החיסון ועלולה להיות מסוכנת. רגישות או אי־סבילות בדרך כלל אינה תגובה חיסונית ואינה אותה תופעה רפואית.",
  },
  {
    question: "מתי צריך אפיפן?",
    answer:
      "כאשר יש סיכון לתגובה אלרגית משמעותית או אנפילקסיס. ההחלטה מתקבלת על ידי רופא או אלרגולוג בהתאם לאבחון.",
  },
  {
    question: "איך מכינים את המסגרת החינוכית לילד אלרגי?",
    answer:
      "עם מסמכים רפואיים, תוכנית פעולה, אפיפן זמין, והדרכה מסודרת לצוות החינוכי. כדאי גם לעבור על זה עם ההורים והצוות יחד.",
  },
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "MedicalWebPage",
  headline: "אלרגיה בילדים – מדריך מלא להורים: תסמינים, אבחון, טיפול וזכויות",
  name: TITLE,
  description: DESCRIPTION,
  datePublished: "2026-02-26",
  dateModified: "2026-03-24",
  url: CANONICAL,
  inLanguage: "he-IL",
  image: "https://ihaveallergy.com/og-logo.png",
  about: {
    "@type": "MedicalCondition",
    name: "Allergy in Children",
    alternateName: "אלרגיה בילדים",
  },
  author: {
    "@type": "Physician",
    name: "ד״ר אנה ברמלי",
  },
  reviewedBy: {
    "@type": "Physician",
    name: "ד״ר אנה ברמלי",
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
      item: "https://seo.ihaveallergy.com/",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "אלרגיה בילדים – מדריך מלא",
      item: CANONICAL,
    },
  ],
};

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

export default function AllergyChildrenGuidePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <section className="gradient-hero py-14 md:py-20">
        <div className="container-medical max-w-4xl">
          <nav
            aria-label="Breadcrumb"
            className="mb-8 flex items-center gap-2 text-sm text-muted-foreground"
          >
            <Link href="/" className="transition-colors hover:text-foreground">
              ראשי
            </Link>
            <ChevronLeft className="h-3.5 w-3.5" />
            <span className="text-foreground">אלרגיה בילדים</span>
          </nav>

          <span className="mb-5 inline-block rounded-full bg-accent px-3 py-1 text-xs font-medium text-primary">
            מדריך יסוד
          </span>

          <h1 className="mb-6 font-bold text-balance text-foreground">
            אלרגיה בילדים
            <span className="mt-2 block text-[22px] text-primary md:text-[28px] lg:text-[34px]">
              מדריך מלא להורים: תסמינים, אבחון, טיפול וזכויות
            </span>
          </h1>

          <div className="mb-8 flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
            <span className="flex items-center gap-1.5">
              <Clock3 className="h-4 w-4" />
              10 דקות קריאה
            </span>
            <span>עודכן: מרץ 2026</span>
          </div>

          <div className="rounded-2xl border border-border/40 bg-card p-5">
            <p className="text-sm leading-7 text-muted-foreground">
              עמוד זה מרכז את התמונה הרחבה של אלרגיה בילדים, ומקשר גם לעמודי
              עומק על בדיקות, טעימות ראשונות וזכויות מול מערכת החינוך.
            </p>
          </div>
        </div>
      </section>

      <div className="container-medical max-w-4xl py-12 md:py-16">
        <section className="mb-12">
          <div className="rounded-2xl border border-border/40 bg-surface-warm p-7">
            <p className="mb-4 text-lg leading-relaxed text-foreground">
              אלרגיה בילדים יכולה להופיע בדרכים שונות מאוד: פריחה אחרי מזון,
              שיעול או צפצופים, תגובה לעקיצה, אקזמה שמחמירה, או אירוע חד שנראה
              כמו "משהו לא טוב" אבל לא תמיד ברור מה גרם לו.
            </p>
            <p className="mb-4 leading-relaxed text-muted-foreground">
              עבור הורים, האתגר הוא לא רק להבין מה קרה — אלא גם לדעת מה לעשות
              הלאה: האם צריך בדיקות, האם יש צורך באפיפן, איך מתנהלים בבית, ומה
              חשוב לעדכן בגן או בבית הספר.
            </p>
            <p className="leading-relaxed text-muted-foreground">
              המדריך הזה נועד לתת תמונה מסודרת, ברורה ומעשית.
            </p>
          </div>
        </section>

        <section className="mb-12 rounded-[2rem] border border-border/60 bg-card p-6 shadow-medical">
          <div className="mb-4 flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent">
              <BookOpen className="h-5 w-5 text-primary" />
            </div>
            <h2 className="text-xl font-bold text-foreground">מה תמצאו בעמוד</h2>
          </div>

          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { href: "#types", label: "סוגי אלרגיה בילדים" },
              { href: "#symptoms", label: "תסמינים נפוצים" },
              { href: "#diagnosis", label: "איך מאבחנים" },
              { href: "#management", label: "ניהול יומיומי" },
              { href: "#important-pages", label: "עמודים חשובים" },
              { href: "#faq", label: "שאלות נפוצות" },
            ].map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="rounded-2xl border border-border/60 bg-surface px-4 py-3 text-sm font-medium text-foreground transition-colors hover:border-primary/30 hover:text-primary"
              >
                {item.label}
              </a>
            ))}
          </div>
        </section>

        <section className="mb-12" id="types">
          <div className="mb-5 flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent">
              <ShieldCheck className="h-5 w-5 text-primary" />
            </div>
            <h2 className="text-xl font-bold text-foreground md:text-2xl">
              סוגי אלרגיה בילדים
            </h2>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            {allergyTypes.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-border/60 bg-card p-6"
              >
                <h3 className="text-lg font-semibold text-foreground">{item.title}</h3>
                <p className="mt-3 leading-7 text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-12" id="symptoms">
          <div className="mb-5 flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent">
              <Activity className="h-5 w-5 text-primary" />
            </div>
            <h2 className="text-xl font-bold text-foreground md:text-2xl">
              תסמינים שכדאי להכיר
            </h2>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            {symptomGroups.map((group) => (
              <div
                key={group.title}
                className="rounded-2xl border border-border/60 bg-card p-6"
              >
                <h3 className="mb-4 text-lg font-semibold text-foreground">
                  {group.title}
                </h3>
                <div className="space-y-2">
                  {group.items.map((item) => (
                    <div key={item} className="flex items-start gap-3">
                      <CheckCircle2 className="mt-1 h-4 w-4 flex-shrink-0 text-primary" />
                      <p className="text-sm text-muted-foreground">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-5 rounded-2xl border border-destructive/20 bg-destructive/5 p-5">
            <div className="mb-2 flex items-center gap-2">
              <AlertTriangle className="h-4 w-4 text-destructive" />
              <strong className="text-sm text-foreground">חשוב</strong>
            </div>
            <p className="text-sm leading-7 text-muted-foreground">
              אם יש קושי נשימתי, נפיחות משמעותית, הקאות חוזרות, חולשה קיצונית או
              חשד לאנפילקסיס — יש לפעול מיד לפי תוכנית החירום ולפנות לעזרה רפואית
              דחופה.
            </p>
          </div>
        </section>

        <section className="mb-12" id="diagnosis">
          <div className="mb-5 flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent">
              <TestTube2 className="h-5 w-5 text-primary" />
            </div>
            <h2 className="text-xl font-bold text-foreground md:text-2xl">
              איך מאבחנים אלרגיה בילדים
            </h2>
          </div>

          <div className="space-y-4 rounded-2xl border border-border/60 bg-card p-6">
            {diagnosisSteps.map((item, index) => (
              <div key={item} className="flex items-start gap-4">
                <div className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full bg-primary">
                  <span className="text-sm font-bold text-primary-foreground">
                    {index + 1}
                  </span>
                </div>
                <p className="pt-1 text-sm leading-7 text-muted-foreground">{item}</p>
              </div>
            ))}
          </div>

          <p className="mt-5 leading-8 text-muted-foreground">
            אם אתם צריכים להבין לעומק אילו בדיקות קיימות ומה ההבדל ביניהן,
            עברו גם למדריך
            {" "}
            <Link
              href="/guides/בדיקות-אלרגיה-ילדים-ישראל"
              className="font-medium text-primary hover:opacity-80"
            >
              בדיקות אלרגיה לילדים בישראל
            </Link>
            .
          </p>
        </section>

        <section className="my-12 rounded-[2rem] border border-border/60 bg-card p-8 shadow-medical">
          <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-accent">
            <Phone className="h-6 w-6 text-primary" />
          </div>
          <h2 className="font-bold text-foreground">רוצים אבחון מסודר לילד?</h2>
          <p className="mt-4 text-lg leading-8 text-muted-foreground">
            אם יש חשד לאלרגיה, תסמינים חוזרים, או צורך בתוכנית פעולה ברורה,
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

        <section className="mb-12" id="management">
          <div className="mb-5 flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent">
              <Heart className="h-5 w-5 text-primary" />
            </div>
            <h2 className="text-xl font-bold text-foreground md:text-2xl">
              ניהול נכון של חיי היומיום
            </h2>
          </div>

          <div className="grid gap-3">
            {dailyManagement.map((item) => (
              <div
                key={item}
                className="flex items-start gap-3 rounded-xl border border-border/60 bg-card px-5 py-4"
              >
                <CheckCircle2 className="mt-1 h-4 w-4 flex-shrink-0 text-primary" />
                <p className="text-sm leading-7 text-muted-foreground">{item}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-12" id="important-pages">
          <div className="mb-5 flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent">
              <Info className="h-5 w-5 text-primary" />
            </div>
            <h2 className="text-xl font-bold text-foreground md:text-2xl">
              עמודים חשובים להמשך
            </h2>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            {[
              {
                href: "/guides/בדיקות-אלרגיה-ילדים-ישראל",
                label: "בדיקות אלרגיה לילדים בישראל",
                desc: "כדי להבין איזה בדיקה מתאימה ומתי.",
                icon: Stethoscope,
              },
              {
                href: "/guides/טעימות-ראשונות-אלרגנים",
                label: "טעימות ראשונות – חשיפה לאלרגנים",
                desc: "להורים לתינוקות בתחילת הדרך.",
                icon: Baby,
              },
              {
                href: "/guides/זכויות-ילד-אלרגי-ישראל",
                label: "זכויות של ילד אלרגי בישראל",
                desc: "להתנהלות בטוחה מול גן, בית ספר וצוות חינוכי.",
                icon: School,
              },
              {
                href: "/guides",
                label: "מרכז המדריכים",
                desc: "לכל עמודי התוכן והניווט המרכזיים.",
                icon: BookOpen,
              },
            ].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="card-hover rounded-2xl border border-border/60 bg-card p-6"
              >
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-2xl bg-accent">
                  <item.icon className="h-5 w-5 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground">{item.label}</h3>
                <p className="mt-3 text-sm leading-7 text-muted-foreground">
                  {item.desc}
                </p>
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
            המידע בעמוד זה נועד לצורכי הסברה בלבד ואינו מחליף אבחון או ייעוץ רפואי.
          </p>
          <p>
            במקרה של חשד לאלרגיה, תגובה משמעותית, צורך באפיפן או שאלות על בדיקות
            וטיפול — יש לפנות לרופא או לאלרגולוג.
          </p>
        </section>
      </div>
    </>
  );
}
