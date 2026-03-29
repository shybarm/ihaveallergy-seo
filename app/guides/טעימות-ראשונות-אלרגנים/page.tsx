import type { Metadata } from "next";
import Link from "next/link";
import {
  ChevronLeft,
  AlertTriangle,
  CheckCircle2,
  Clock3,
  Phone,
  MessageCircle,
  Baby,
  ShieldCheck,
  Heart,
  ArrowLeft,
  Info,
  FileText,
  BookOpen,
  TestTube2,
  School,
} from "lucide-react";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "טעימות ראשונות לתינוקות: מדריך חשיפה לאלרגנים בישראל",
  description:
    "מדריך רפואי מקיף להורים: איך לחשוף תינוק לבמבה, טחינה, ביצים וחלב בבטחה. מתי להתחיל, איך לזהות אלרגיה, ומתי לפנות לרופא.",
  alternates: {
    canonical: "/guides/טעימות-ראשונות-אלרגנים",
  },
  openGraph: {
    type: "article",
    url: "https://seo.ihaveallergy.com/guides/טעימות-ראשונות-אלרגנים",
    title: "טעימות ראשונות לתינוקות: מדריך חשיפה לאלרגנים בישראל | ד״ר אנה ברמלי",
    description:
      "מדריך רפואי מקיף להורים: איך לחשוף תינוק לבמבה, טחינה, ביצים וחלב בבטחה.",
    locale: "he_IL",
    images: [
      {
        url: "https://ihaveallergy.com/og-logo.png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "טעימות ראשונות לתינוקות: מדריך חשיפה לאלרגנים בישראל | ד״ר אנה ברמלי",
    description:
      "מדריך רפואי מקיף להורים: איך לחשוף תינוק לבמבה, טחינה, ביצים וחלב בבטחה.",
    images: ["https://ihaveallergy.com/og-logo.png"],
  },
};

const allergenTable = [
  {
    name: "במבה (בוטנים)",
    startAge: "4-6 חודשים",
    howToStart: 'מחית במבה ברוטב / במבה ממוסמסת בחלב אם / תמ"ל',
    firstAmount: "½ כפית",
    frequency: "3 פעמים בשבוע, באופן קבוע",
    notes: "מחקר LEAP הוכיח הפחתה משמעותית באלרגיה לבוטנים בחשיפה מוקדמת.",
  },
  {
    name: "טחינה (שומשום)",
    startAge: "4-6 חודשים",
    howToStart: "טחינה גולמית מדוללת עם מים / מעורבת במחית",
    firstAmount: "¼ כפית",
    frequency: "3 פעמים בשבוע",
    notes: "מומלץ להתחיל בכמות קטנה מאוד ובהדרגה.",
  },
  {
    name: "ביצה",
    startAge: "4-6 חודשים",
    howToStart: "ביצה קשה מרוסקת, מעורבת במחית ירקות",
    firstAmount: "¼ כפית חלמון מבושל",
    frequency: "2-3 פעמים בשבוע",
    notes: "להתחיל בצורה מבושלת היטב ובכמות קטנה.",
  },
  {
    name: "חלב פרה",
    startAge: "לאחר גיל שנה כמשקה",
    howToStart: "מוצרי חלב מבושלים או יוגורט - בהתאם להנחיה רפואית",
    firstAmount: "כפית יוגורט",
    frequency: "לאחר חשיפה מוצלחת ובהדרגה",
    notes: "חלב פרה כמשקה אינו מומלץ לפני גיל שנה.",
  },
];

const normalReactions = [
  "סומק קל סביב הפה שחולף תוך 30-60 דקות",
  "יריקה או סלידה מהטעם החדש",
  "אי נוחות קלה או הבעה מופתעת מהמזון החדש",
  "כתם קל באזור המגע שנעלם במהירות",
];

const alarmSigns = [
  "פריחה מפושטת או חרלת",
  "נפיחות בשפתיים, בלשון, בעיניים או בפנים",
  "הקאות חוזרות אחרי החשיפה",
  "שיעול פתאומי, צפצופים או קושי נשימתי",
  "חיוורון קיצוני, רפיון או ישנוניות חריגה",
  "תגובה שמחמירה במהירות",
];

const emergencySteps = [
  {
    step: "1",
    title: "להפסיק מיד את החשיפה",
    desc: "לא לתת עוד מהמזון ולנקות את אזור הפה והידיים.",
  },
  {
    step: "2",
    title: "להסתכל על הילד ולא רק על העור",
    desc: "לבדוק נשימה, עירנות, נפיחות, הקאות או שינוי בהתנהגות.",
  },
  {
    step: "3",
    title: "במצב חמור - להתקשר מיד ל-101",
    desc: "אם יש קושי נשימתי, הקאות משמעותיות, נפיחות או חולשה קיצונית.",
  },
  {
    step: "4",
    title: "במצב קל - לדבר עם רופא",
    desc: "לתעד איזה מזון ניתן, כמה ניתן, ומה קרה בפועל.",
  },
  {
    step: "5",
    title: "לא לנסות שוב לבד",
    desc: "עד לקבלת הנחיה מסודרת מרופא או מאלרגולוג.",
  },
];

const dontStartAloneCriteria = [
  "לתינוק יש אטופיק דרמטיטיס בינונית או קשה",
  "הייתה תגובה קודמת למזון כלשהו",
  "יש אח או אחות עם אלרגיה למזון",
  "יש חשש גדול של ההורים ואין תחושת ביטחון",
  "הרופא כבר המליץ על בירור אלרגי לפני טעימות",
];

const faqs = [
  {
    question: "האם מותר לתת במבה בגיל 4 חודשים?",
    answer:
      "במקרים רבים כן, אם התינוק מוכן התפתחותית למוצקים. חשוב להתחיל בכמות קטנה ובצורה בטוחה, ולהתייעץ מראש אם מדובר בתינוק בסיכון.",
  },
  {
    question: "מה ההבדל בין תגובה רגילה לאלרגיה?",
    answer:
      "תגובה רגילה לרוב תהיה מקומית, קלה וחולפת. אלרגיה נוטה להיות משמעותית יותר ועלולה לכלול פריחה מפושטת, נפיחות, הקאות או קושי נשימתי.",
  },
  {
    question: "מתי כדאי לפנות לאלרגולוג לפני טעימות ראשונות?",
    answer:
      "אם יש אטופיק דרמטיטיס משמעותית, תגובה קודמת למזון, היסטוריה משפחתית בולטת או פשוט חוסר ביטחון ממשי של ההורים.",
  },
  {
    question: "האם אפשר לחשוף לכמה אלרגנים באותו יום?",
    answer:
      "עדיף להתחיל אלרגן חדש אחד בכל פעם, כדי שיהיה קל להבין אם הופיעה תגובה ולמה היא קשורה.",
  },
  {
    question: "מה לעשות אם התינוק מסרב לטעום?",
    answer:
      "לא להכריח. אפשר לנסות שוב בהמשך, במרקם אחר או בכמות קטנה יותר. סירוב ראשון אינו סימן לאלרגיה.",
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
  headline:
    "טעימות ראשונות לתינוקות: מדריך חשיפה לאלרגנים בישראל | ד״ר אנה ברמלי",
  description:
    "מדריך רפואי מקיף להורים: איך לחשוף תינוק לבמבה, טחינה, ביצים וחלב בבטחה. מתי להתחיל, איך לזהות אלרגיה, ומתי לפנות לרופא.",
  inLanguage: "he-IL",
  datePublished: "2026-02-08",
  dateModified: "2026-03-24",
  url: "https://seo.ihaveallergy.com/guides/טעימות-ראשונות-אלרגנים",
  about: {
    "@type": "MedicalCondition",
    name: "Food Allergy in Infants",
    alternateName: "אלרגיה למזון בתינוקות",
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
      item: "https://seo.ihaveallergy.com/",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "מדריכים",
      item: "https://seo.ihaveallergy.com/guides",
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "טעימות ראשונות - מדריך אלרגנים לתינוקות",
      item: "https://seo.ihaveallergy.com/guides/טעימות-ראשונות-אלרגנים",
    },
  ],
};

export default function FirstTastesGuidePage() {
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
            <span className="text-foreground">מדריך טעימות ראשונות</span>
          </nav>

          <span className="mb-5 inline-block rounded-full bg-accent px-3 py-1 text-xs font-medium text-primary">
            מדריך מקיף
          </span>

          <h1 className="mb-6 font-bold text-balance text-foreground">
            טעימות ראשונות בישראל: איך לחשוף תינוק לאלרגנים
            <span className="mt-2 block text-[22px] text-primary md:text-[28px] lg:text-[32px]">
              במבה, טחינה, ביצים וחלב
            </span>
          </h1>

          <div className="mb-8 flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
            <span className="flex items-center gap-1.5">
              <Clock3 className="h-4 w-4" />8 דקות קריאה
            </span>
            <span>עודכן: מרץ 2026</span>
          </div>

          <div className="rounded-2xl border border-border/40 bg-card p-5">
            <p className="text-sm leading-7 text-muted-foreground">
              נכתב לצורכי הסברה והכוונה. לקביעת תור או בירור אישי יש להמשיך
              לאתר הראשי.
            </p>
          </div>
        </div>
      </section>

      <div className="container-medical max-w-3xl py-12 md:py-16">
        <section className="mb-12">
          <div className="mb-8 rounded-2xl border border-border/40 bg-surface-warm p-7">
            <p className="mb-4 text-lg leading-relaxed text-foreground">
              הרגע הזה מוכר להרבה הורים. התינוק כבר מוכן למוצקים, ופתאום מגיע
              הרגע שבו צריך לחשוף גם למזונות שכולם קצת מפחדים מהם.
            </p>
            <p className="mb-4 leading-relaxed text-muted-foreground">
              במבה, טחינה, ביצה, חלב - מתי מתחילים, באיזו כמות, ומה נחשב תקין
              לעומת תגובה שדורשת תשומת לב?
            </p>
            <p className="leading-relaxed text-muted-foreground">
              המדריך הזה נועד לעשות סדר, להוריד לחץ, ולתת לכם מסלול ברור, בטוח
              ומעשי.
            </p>
          </div>
        </section>

        <section className="mb-12 rounded-[2rem] border border-border/60 bg-card p-6 shadow-medical">
          <div className="mb-4 flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent">
              <BookOpen className="h-5 w-5 text-primary" />
            </div>
            <h2 className="text-xl font-bold text-foreground">בעמוד הזה תמצאו</h2>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            {[
              { href: "#early-exposure", label: "למה להתחיל מוקדם" },
              { href: "#allergen-table", label: "טבלת אלרגנים" },
              { href: "#reactions", label: "תגובה רגילה מול אלרגיה" },
              { href: "#what-to-do", label: "מה עושים אם יש תגובה" },
              { href: "#when-not-alone", label: "מתי לא להתחיל לבד" },
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

        <section className="mb-12" id="early-exposure">
          <div className="mb-5 flex items-center gap-3">
            <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-accent">
              <ShieldCheck className="h-5 w-5 text-primary" />
            </div>
            <h2 className="text-xl font-bold text-foreground md:text-2xl">
              למה דווקא מוקדם?
            </h2>
          </div>

          <div className="space-y-4 leading-relaxed text-muted-foreground">
            <p>
              ההנחיות העדכניות תומכות בחשיפה מוקדמת ומבוקרת לאלרגנים נפוצים,
              במקום לדחות אותם ללא צורך.
            </p>
            <p>
              הרעיון הוא לא "להעמיס", אלא להתחיל נכון: כמות קטנה, זמן רגוע,
              ומעקב אחרי התגובה של התינוק.
            </p>
            <p>
              ברוב המקרים, חשיפה מסודרת מוקדם יותר יכולה להיות חלק מהתנהלות
              נכונה ובטוחה יותר.
            </p>
            <p>
              אם יש כבר חשד לאלרגיה או אם המשפחה נמצאת בשלב של בירור רפואי,
              שווה לקרוא גם את המדריך על
              {" "}
              <Link
                href="/guides/בדיקות-אלרגיה-ילדים-ישראל"
                className="font-medium text-primary hover:opacity-80"
              >
                בדיקות אלרגיה לילדים בישראל
              </Link>
              .
            </p>
          </div>
        </section>

        <section className="mb-12" id="allergen-table">
          <div className="mb-5 flex items-center gap-3">
            <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-accent">
              <Baby className="h-5 w-5 text-primary" />
            </div>
            <h2 className="text-xl font-bold text-foreground md:text-2xl">
              טבלת אלרגנים: מה, מתי ואיך
            </h2>
          </div>

          <div className="space-y-4">
            {allergenTable.map((item) => (
              <div
                key={item.name}
                className="rounded-2xl border border-border/60 bg-card p-5 md:p-6"
              >
                <h3 className="mb-3 text-lg font-semibold text-foreground">
                  {item.name}
                </h3>
                <div className="grid grid-cols-1 gap-3 text-sm sm:grid-cols-2">
                  <div>
                    <span className="text-muted-foreground">גיל התחלה: </span>
                    <span className="font-medium text-foreground">
                      {item.startAge}
                    </span>
                  </div>
                  <div>
                    <span className="text-muted-foreground">כמות ראשונה: </span>
                    <span className="font-medium text-foreground">
                      {item.firstAmount}
                    </span>
                  </div>
                  <div className="sm:col-span-2">
                    <span className="text-muted-foreground">איך להתחיל: </span>
                    <span className="text-foreground">{item.howToStart}</span>
                  </div>
                  <div>
                    <span className="text-muted-foreground">תדירות: </span>
                    <span className="text-foreground">{item.frequency}</span>
                  </div>
                  <div className="sm:col-span-2">
                    <span className="text-muted-foreground">הערה: </span>
                    <span className="italic text-foreground">{item.notes}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-12" id="reactions">
          <h2 className="mb-6 text-xl font-bold text-foreground md:text-2xl">
            תגובה רגילה מול אלרגיה
          </h2>

          <div className="grid gap-5 md:grid-cols-2">
            <div className="rounded-2xl border border-border/60 bg-card p-6">
              <div className="mb-4 flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-primary" />
                <h3 className="font-semibold text-foreground">תגובה רגילה</h3>
              </div>
              <ul className="space-y-2.5">
                {normalReactions.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2 text-sm text-muted-foreground"
                  >
                    <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-2xl border border-destructive/20 bg-destructive/5 p-6">
              <div className="mb-4 flex items-center gap-2">
                <AlertTriangle className="h-5 w-5 text-destructive" />
                <h3 className="font-semibold text-foreground">סימני אזהרה</h3>
              </div>
              <ul className="space-y-2.5">
                {alarmSigns.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2 text-sm text-muted-foreground"
                  >
                    <AlertTriangle className="mt-0.5 h-4 w-4 flex-shrink-0 text-destructive" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section className="my-12 rounded-[2rem] border border-border/60 bg-card p-8 shadow-medical">
          <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-accent">
            <MessageCircle className="h-6 w-6 text-primary" />
          </div>
          <h2 className="font-bold text-foreground">צריכים הכוונה?</h2>
          <p className="mt-4 text-lg leading-8 text-muted-foreground">
            אם יש חשש לתגובה, היסטוריה משפחתית או חוסר ביטחון לפני התחלת החשיפה,
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

        <section className="mb-12" id="what-to-do">
          <h2 className="mb-6 text-xl font-bold text-foreground md:text-2xl">
            מה עושים אם יש תגובה?
          </h2>

          <div className="space-y-4">
            {emergencySteps.map((item) => (
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

        <section className="mb-12" id="when-not-alone">
          <div className="mb-5 flex items-center gap-3">
            <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-accent">
              <Heart className="h-5 w-5 text-primary" />
            </div>
            <h2 className="text-xl font-bold text-foreground md:text-2xl">
              מתי לא להתחיל לבד
            </h2>
          </div>

          <p className="mb-5 leading-relaxed text-muted-foreground">
            ברוב המקרים אפשר להתחיל טעימות ראשונות בבית. אבל יש מצבים שבהם עדיף
            לקבל הכוונה מסודרת לפני כן.
          </p>

          <div className="space-y-3 rounded-2xl border border-border/60 bg-card p-6">
            {dontStartAloneCriteria.map((item) => (
              <div key={item} className="flex items-start gap-3">
                <Info className="mt-1 h-4 w-4 flex-shrink-0 text-primary" />
                <p className="text-sm text-muted-foreground">{item}</p>
              </div>
            ))}
          </div>

          <p className="mt-5 leading-8 text-muted-foreground">
            כאשר יש צורך בבירור נוסף לפני החשיפה, השלב הבא הוא לעבור למדריך על
            {" "}
            <Link
              href="/guides/בדיקות-אלרגיה-ילדים-ישראל"
              className="font-medium text-primary hover:opacity-80"
            >
              בדיקות אלרגיה לילדים בישראל
            </Link>
            {" "}
            ולהבין אילו אפשרויות עומדות בפני המשפחה.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="mb-5 text-xl font-bold text-foreground md:text-2xl">
            קריאה נוספת
          </h2>

          <div className="grid gap-4 sm:grid-cols-2">
            {[
              {
                href: "/guides/בדיקות-אלרגיה-ילדים-ישראל",
                label: "בדיקות אלרגיה לילדים - מדריך מלא",
                icon: TestTube2,
              },
              {
                href: "/guides/זכויות-ילד-אלרגי-ישראל",
                label: "זכויות של ילד אלרגי בישראל",
                icon: School,
              },
              {
                href: "/guides",
                label: "מרכז המדריכים המלא",
                icon: BookOpen,
              },
              {
                href: "/services",
                label: "השירותים שלנו - ייעוץ, אבחון ובדיקות",
                icon: MessageCircle,
              },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="card-hover group flex items-center gap-3 rounded-xl border border-border/60 bg-card p-4 text-sm"
              >
                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-accent">
                  <link.icon className="h-4 w-4 text-primary" />
                </div>
                <span className="font-medium text-foreground transition-colors group-hover:text-primary">
                  {link.label}
                </span>
                <ArrowLeft className="mr-auto h-4 w-4 flex-shrink-0 text-primary transition-transform group-hover:-translate-x-1" />
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
            אם הייתה תגובה למזון, אם יש חשש לאלרגיה, או אם אתם לא בטוחים איך
            להתחיל - יש לפנות לרופא או לאלרגולוג.
          </p>
        </section>
      </div>
    </>
  );
}
