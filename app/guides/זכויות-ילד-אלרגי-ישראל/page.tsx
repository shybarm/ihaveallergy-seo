import type { Metadata } from "next";
import Link from "next/link";
import {
  ChevronLeft,
  Clock3,
  School,
  ShieldCheck,
  AlertTriangle,
  CheckCircle2,
  FileText,
  Phone,
  ArrowLeft,
  Heart,
  Info,
  ClipboardList,
  BookOpen,
  Baby,
  Stethoscope,
} from "lucide-react";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "זכויות של ילד אלרגי בישראל: מדריך להורים | ד״ר אנה ברמלי",
  description:
    "מדריך מקיף להורים: זכויות של ילד אלרגי בגן, בבית הספר ובצהרון, אפיפן, נוהל חירום, מסמכים חשובים והתנהלות מול הצוות החינוכי.",
  alternates: {
    canonical: "/guides/זכויות-ילד-אלרגי-ישראל",
  },
  openGraph: {
    type: "article",
    url: "https://seo.ihaveallergy.com/guides/זכויות-ילד-אלרגי-ישראל",
    title: "זכויות של ילד אלרגי בישראל: מדריך להורים | ד״ר אנה ברמלי",
    description:
      "מדריך מקיף להורים: זכויות של ילד אלרגי בגן, בבית הספר ובצהרון, אפיפן, נוהל חירום, מסמכים חשובים והתנהלות מול הצוות החינוכי.",
    locale: "he_IL",
    images: [
      {
        url: "https://ihaveallergy.com/og-logo.png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "זכויות של ילד אלרגי בישראל: מדריך להורים | ד״ר אנה ברמלי",
    description:
      "מדריך מקיף להורים: זכויות של ילד אלרגי בגן, בבית הספר ובצהרון, אפיפן, נוהל חירום, מסמכים חשובים והתנהלות מול הצוות החינוכי.",
    images: ["https://ihaveallergy.com/og-logo.png"],
  },
};

const coreRights = [
  "סביבת לימודים בטוחה ומותאמת למצב הרפואי של הילד",
  "תוכנית פעולה ברורה במקרה של חשיפה או תגובה אלרגית",
  "נגישות לאפיפן ולתרופות החירום בזמן אמת",
  "הדרכת צוות חינוכי על סימני אזהרה ותגובה נכונה",
  "שיח מסודר עם ההורים לגבי תפריט, אירועים ופעילויות מיוחדות",
  "התאמות סבירות במסגרת החינוכית לשמירה על בטיחות הילד",
];

const documentsNeeded = [
  "סיכום רפואי או מכתב מאלרגולוג / רופא מטפל",
  "תוכנית פעולה כתובה למקרה חירום",
  "מרשם בתוקף לאפיפן, אם נדרש",
  "אפיפן זמין במסגרת, לפי ההנחיה הרפואית",
  "רשימת מזונות / טריגרים שיש להימנע מהם",
  "פרטי קשר זמינים של ההורים ושל גורם רפואי במידת הצורך",
];

const schoolChecklist = [
  {
    title: "פגישה בתחילת שנה",
    desc: "לקבוע פגישה עם הגננת, המחנכת או הנהלת המסגרת ולוודא שכולם מכירים את המצב הרפואי.",
  },
  {
    title: "העברת מסמכים",
    desc: "למסור מסמכים רפואיים עדכניים, תוכנית פעולה ופרטי קשר ברורים.",
  },
  {
    title: "בדיקת נגישות לאפיפן",
    desc: "לוודא שהאפיפן זמין, נגיש, ושהצוות יודע היכן הוא נמצא ואיך משתמשים בו.",
  },
  {
    title: "תיאום מול הזנה ופעילויות",
    desc: "לעדכן על ימי הולדת, טיולים, קייטנות, סדנאות אוכל וכל פעילות עם סיכון לחשיפה.",
  },
  {
    title: "הדרכת הצוות",
    desc: "לוודא שמי שנמצא עם הילד בפועל יודע לזהות תגובה אלרגית ולפעול מיד.",
  },
];

const warningPoints = [
  "לא להסתפק רק באמירה כללית של 'הילד אלרגי'",
  "לא להניח שכל אנשי הצוות כבר יודעים מה לעשות",
  "לא לשלוח אפיפן בלי לוודא שהוא בתוקף ונגיש",
  "לא לדחות שיחה עם המסגרת לרגע האחרון",
  "לא לסמוך על הסבר בעל פה בלבד בלי מסמך כתוב",
];

const faqs = [
  {
    question: "האם גן או בית ספר חייבים לדעת שלילד יש אלרגיה?",
    answer:
      "כן. כדי לשמור על בטיחות הילד, חשוב מאוד לעדכן את המסגרת בצורה מסודרת, בכתב ובעל פה, ולהעביר מסמכים רפואיים מתאימים.",
  },
  {
    question: "מי צריך להחזיק את האפיפן במסגרת?",
    answer:
      "זה תלוי בגיל הילד, במדיניות המסגרת ובהנחיה הרפואית, אבל העיקרון הוא שהאפיפן צריך להיות זמין ונגיש באופן מיידי לצוות.",
  },
  {
    question: "מה צריך לתת לצוות בתחילת השנה?",
    answer:
      "סיכום רפואי, תוכנית פעולה, פרטי קשר, פירוט אלרגנים רלוונטיים ולעיתים גם הדרכה מסודרת על שימוש באפיפן.",
  },
  {
    question: "מה עושים לפני טיול, יום הולדת או פעילות מיוחדת?",
    answer:
      "חשוב לעדכן מראש, לבדוק אילו מזונות יהיו במקום, לוודא מי אחראי על הילד, ולוודא שהאפיפן נגיש גם מחוץ לכיתה או לגן.",
  },
  {
    question: "האם מותר לבקש התאמות מיוחדות במסגרת?",
    answer:
      "כן. כאשר יש מצב רפואי משמעותי כמו אלרגיה למזון, מקובל ואף חשוב לבקש התאמות סבירות שיקטינו סיכון ויאפשרו השתתפות בטוחה.",
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
  headline: "זכויות של ילד אלרגי בישראל: מדריך להורים | ד״ר אנה ברמלי",
  description:
    "מדריך מקיף להורים: זכויות של ילד אלרגי בגן, בבית הספר ובצהרון, אפיפן, נוהל חירום, מסמכים חשובים והתנהלות מול הצוות החינוכי.",
  inLanguage: "he-IL",
  datePublished: "2026-02-08",
  dateModified: "2026-03-24",
  url: "https://seo.ihaveallergy.com/guides/זכויות-ילד-אלרגי-ישראל",
  about: {
    "@type": "MedicalCondition",
    name: "Food Allergy in Children",
    alternateName: "אלרגיה למזון בילדים",
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
      name: "זכויות של ילד אלרגי בישראל",
      item: "https://seo.ihaveallergy.com/guides/זכויות-ילד-אלרגי-ישראל",
    },
  ],
};

export default function AllergyRightsGuidePage() {
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
            <span className="text-foreground">זכויות ילד אלרגי</span>
          </nav>

          <span className="mb-5 inline-block rounded-full bg-accent px-3 py-1 text-xs font-medium text-primary">
            מדריך זכויות
          </span>

          <h1 className="mb-6 font-bold text-balance text-foreground">
            זכויות של ילד אלרגי בישראל
            <span className="mt-2 block text-[22px] text-primary md:text-[28px] lg:text-[32px]">
              מדריך להורים מול גן, בית ספר וצוות חינוכי
            </span>
          </h1>

          <div className="mb-8 flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
            <span className="flex items-center gap-1.5">
              <Clock3 className="h-4 w-4" />
              7 דקות קריאה
            </span>
            <span>עודכן: מרץ 2026</span>
          </div>

          <div className="rounded-2xl border border-border/40 bg-card p-5">
            <p className="text-sm leading-7 text-muted-foreground">
              מדריך זה נועד להסברה ולהכוונה, ובנוי גם כעמוד מרכזי שמקשר לעמודי
              עומק על בדיקות אלרגיה, אלרגיה בילדים וטעימות ראשונות.
            </p>
          </div>
        </div>
      </section>

      <div className="container-medical max-w-3xl py-12 md:py-16">
        <section className="mb-12">
          <div className="rounded-2xl border border-border/40 bg-surface-warm p-7">
            <p className="mb-4 text-lg leading-relaxed text-foreground">
              כשילד אלרגי נכנס לגן, לבית הספר או לצהרון, ההורים צריכים לא רק
              לדאוג לבריאות שלו — אלא גם לוודא שהמערכת שסביבו ערוכה באמת.
            </p>
            <p className="mb-4 leading-relaxed text-muted-foreground">
              זה לא רק עניין של "לעדכן את הצוות". צריך לוודא שיש מסמכים,
              תוכנית פעולה, נגישות לתרופות, ואנשים שיודעים להגיב נכון בזמן אמת.
            </p>
            <p className="leading-relaxed text-muted-foreground">
              המדריך הזה מרכז את העקרונות החשובים שיעזרו לכם להתנהל בצורה יותר
              בטוחה, מסודרת ורגועה.
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
              { href: "#core-rights", label: "הזכויות והעקרונות המרכזיים" },
              { href: "#documents", label: "אילו מסמכים צריך" },
              { href: "#school-checklist", label: "צ׳ק ליסט למסגרת" },
              { href: "#epipen", label: "אפיפן ותוכנית פעולה" },
              { href: "#related-guides", label: "עמודים חשובים להמשך" },
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

        <section className="mb-12" id="core-rights">
          <div className="mb-5 flex items-center gap-3">
            <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-accent">
              <ShieldCheck className="h-5 w-5 text-primary" />
            </div>
            <h2 className="text-xl font-bold text-foreground md:text-2xl">
              הזכויות והעקרונות המרכזיים
            </h2>
          </div>

          <div className="space-y-3 rounded-2xl border border-border/60 bg-card p-6">
            {coreRights.map((item) => (
              <div key={item} className="flex items-start gap-3">
                <CheckCircle2 className="mt-1 h-4 w-4 flex-shrink-0 text-primary" />
                <p className="text-sm leading-7 text-muted-foreground">{item}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-12" id="documents">
          <div className="mb-5 flex items-center gap-3">
            <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-accent">
              <FileText className="h-5 w-5 text-primary" />
            </div>
            <h2 className="text-xl font-bold text-foreground md:text-2xl">
              אילו מסמכים חשוב להביא למסגרת
            </h2>
          </div>

          <p className="mb-5 leading-relaxed text-muted-foreground">
            ככל שהמידע מסודר יותר, כך קל יותר לצוות לפעול נכון במקרה חירום
            ולמנוע מצבים מבלבלים.
          </p>

          <div className="grid gap-3">
            {documentsNeeded.map((item) => (
              <div
                key={item}
                className="rounded-xl border border-border/60 bg-card px-5 py-4"
              >
                <p className="text-sm leading-7 text-muted-foreground">{item}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="my-12 rounded-[2rem] border border-border/60 bg-card p-8 shadow-medical">
          <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-accent">
            <Phone className="h-6 w-6 text-primary" />
          </div>
          <h2 className="font-bold text-foreground">צריכים ליווי מסודר?</h2>
          <p className="mt-4 text-lg leading-8 text-muted-foreground">
            אם יש חוסר ודאות לגבי המסגרת, מסמכים נדרשים, אפיפן או התנהלות מול
            הצוות — אפשר לקבוע תור דרך האתר הראשי.
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

        <section className="mb-12" id="school-checklist">
          <div className="mb-5 flex items-center gap-3">
            <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-accent">
              <School className="h-5 w-5 text-primary" />
            </div>
            <h2 className="text-xl font-bold text-foreground md:text-2xl">
              צ׳ק ליסט לתחילת שנה או כניסה למסגרת
            </h2>
          </div>

          <div className="space-y-4">
            {schoolChecklist.map((item, index) => (
              <div
                key={item.title}
                className="flex items-start gap-4 rounded-2xl border border-border/60 bg-card p-5"
              >
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-primary">
                  <span className="text-sm font-bold text-primary-foreground">
                    {index + 1}
                  </span>
                </div>
                <div className="pt-1">
                  <h3 className="font-semibold text-foreground">{item.title}</h3>
                  <p className="mt-1 text-sm leading-7 text-muted-foreground">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-12" id="epipen">
          <div className="mb-5 flex items-center gap-3">
            <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-accent">
              <ClipboardList className="h-5 w-5 text-primary" />
            </div>
            <h2 className="text-xl font-bold text-foreground md:text-2xl">
              אפיפן ותוכנית פעולה
            </h2>
          </div>

          <div className="space-y-4 leading-relaxed text-muted-foreground">
            <p>
              עבור ילדים מסוימים, נשיאת אפיפן היא חלק בלתי נפרד מההתנהלות
              היומיומית. אבל עצם זה שהעט נמצא בתיק לא מספיק.
            </p>
            <p>
              מה שחשוב באמת הוא שהצוות ידע לזהות תגובה אלרגית, להבין איפה
              האפיפן נמצא, ולפעול מיד לפי תוכנית פעולה ברורה.
            </p>
            <p>
              ככל שיש יותר בהירות מראש, כך קטן הסיכון לעיכוב בזמן חירום.
            </p>
          </div>
        </section>

        <section className="mb-12" id="warning-points">
          <div className="mb-5 flex items-center gap-3">
            <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-accent">
              <AlertTriangle className="h-5 w-5 text-primary" />
            </div>
            <h2 className="text-xl font-bold text-foreground md:text-2xl">
              נקודות שאסור לפספס
            </h2>
          </div>

          <div className="space-y-3 rounded-2xl border border-border/60 bg-card p-6">
            {warningPoints.map((item) => (
              <div key={item} className="flex items-start gap-3">
                <AlertTriangle className="mt-1 h-4 w-4 flex-shrink-0 text-primary" />
                <p className="text-sm leading-7 text-muted-foreground">{item}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-12" id="cooperation">
          <div className="mb-5 flex items-center gap-3">
            <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-accent">
              <Heart className="h-5 w-5 text-primary" />
            </div>
            <h2 className="text-xl font-bold text-foreground md:text-2xl">
              עבודה טובה עם המסגרת
            </h2>
          </div>

          <div className="space-y-4 leading-relaxed text-muted-foreground">
            <p>
              ברוב המקרים, גן או בית ספר רוצים לעזור — אבל הם צריכים מידע ברור,
              מסודר וישים.
            </p>
            <p>
              שיח פתוח, מסמכים מסודרים ותיאום מראש סביב אירועים מיוחדים יכולים
              להפוך את ההתנהלות לקלה ובטוחה יותר לכולם.
            </p>
            <p>
              המטרה היא לא לייצר פחד, אלא מערכת עבודה שמאפשרת לילד להיות חלק
              מהמסגרת בביטחון.
            </p>
          </div>
        </section>

        <section className="mb-12" id="related-guides">
          <div className="mb-5 flex items-center gap-3">
            <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-accent">
              <Info className="h-5 w-5 text-primary" />
            </div>
            <h2 className="text-xl font-bold text-foreground md:text-2xl">
              עמודים חשובים להמשך
            </h2>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {[
              {
                href: "/alergiya-beyeladim",
                label: "אלרגיה בילדים – מדריך מלא",
                icon: BookOpen,
              },
              {
                href: "/guides/בדיקות-אלרגיה-ילדים-ישראל",
                label: "בדיקות אלרגיה לילדים בישראל",
                icon: Stethoscope,
              },
              {
                href: "/guides/טעימות-ראשונות-אלרגנים",
                label: "טעימות ראשונות – חשיפה לאלרגנים",
                icon: Baby,
              },
              {
                href: "/services",
                label: "השירותים שלנו – ייעוץ, אבחון ובדיקות",
                icon: ClipboardList,
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
            אם יש שאלות לגבי חומרת האלרגיה, אפיפן, תוכנית פעולה או מסמכים רפואיים
            למסגרת — יש לפנות לרופא או לאלרגולוג.
          </p>
        </section>
      </div>
    </>
  );
}
