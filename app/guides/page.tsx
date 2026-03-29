import type { Metadata } from "next";
import Link from "next/link";
import {
  BookOpen,
  Baby,
  TestTube2,
  School,
  ArrowLeft,
  Clock3,
  ShieldCheck,
  CheckCircle2,
  FileText,
  ChevronLeft,
  Stethoscope,
} from "lucide-react";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "מדריכי אלרגיה",
  description:
    "מדריכי אלרגיה מקיפים להורים ולמשפחות: טעימות ראשונות, בדיקות אלרגיה לילדים, זכויות במערכת החינוך ומידע חשוב נוסף.",
  alternates: {
    canonical: "/guides",
  },
  openGraph: {
    type: "website",
    url: "https://seo.ihaveallergy.com/guides",
    title: "מדריכי אלרגיה | ד״ר אנה ברמלי",
    description:
      "מדריכי אלרגיה מקיפים להורים ולמשפחות: טעימות ראשונות, בדיקות אלרגיה לילדים, זכויות במערכת החינוך ומידע חשוב נוסף.",
    locale: "he_IL",
    images: [
      {
        url: "https://ihaveallergy.com/og-logo.png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "מדריכי אלרגיה | ד״ר אנה ברמלי",
    description:
      "מדריכי אלרגיה מקיפים להורים ולמשפחות: טעימות ראשונות, בדיקות אלרגיה לילדים, זכויות במערכת החינוך ומידע חשוב נוסף.",
    images: ["https://ihaveallergy.com/og-logo.png"],
  },
};

const guides = [
  {
    icon: Baby,
    title: "טעימות ראשונות - מדריך חשיפה לאלרגנים",
    description:
      "מדריך מסודר להורים שמתחילים טעימות: מתי להתחיל, איך לחשוף לאלרגנים, ומה עושים אם מופיעה תגובה.",
    href: "/guides/טעימות-ראשונות-אלרגנים",
    readTime: "8 דקות קריאה",
    badge: "מדריך להורים לתינוקות",
  },
  {
    icon: TestTube2,
    title: "בדיקות אלרגיה לילדים בישראל",
    description:
      "איזה בדיקה מתאימה, מאיזה גיל, מה ההבדל בין תבחיני עור לבדיקות דם, ומה חשוב לדעת לפני הביקור.",
    href: "/guides/בדיקות-אלרגיה-ילדים-ישראל",
    readTime: "9 דקות קריאה",
    badge: "מדריך בדיקות",
  },
  {
    icon: School,
    title: "זכויות של ילד אלרגי בישראל",
    description:
      "מהן הזכויות בגן, בבית הספר ובצהרון, איך דורשים התאמות, ומה חשוב להכין לתחילת השנה.",
    href: "/guides/זכויות-ילד-אלרגי-ישראל",
    readTime: "7 דקות קריאה",
    badge: "מדריך זכויות",
  },
];

const topics = [
  "חשיפה מוקדמת לאלרגנים",
  "בדיקות אלרגיה ותבחיני עור",
  "אפיפן ותוכנית פעולה",
  "זכויות בגן ובבית הספר",
  "בירור אצל אלרגולוג ילדים",
  "מידע ברור להורים ולמשפחות",
];

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
  ],
};

const collectionSchema = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: "מדריכי אלרגיה",
  url: "https://seo.ihaveallergy.com/guides",
  inLanguage: "he-IL",
  hasPart: guides.map((guide) => ({
    "@type": "Article",
    headline: guide.title,
    url: `https://seo.ihaveallergy.com${guide.href}`,
  })),
};

export default function GuidesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionSchema) }}
      />

      <section className="relative overflow-hidden gradient-hero">
        <div className="container-medical py-18 md:py-24 lg:py-28">
          <div className="mx-auto max-w-5xl text-center">
            <div className="mb-5 inline-flex items-center rounded-full bg-accent px-4 py-2 text-sm font-medium text-primary">
              <BookOpen className="ml-2 h-4 w-4" />
              מרכז המדריכים
            </div>

            <h1 className="mb-6 font-bold text-foreground">
              מדריכי אלרגיה להורים,
              <span className="mt-3 block text-primary">לילדים ולמשפחות</span>
            </h1>

            <p className="mx-auto max-w-3xl text-lg leading-8 text-muted-foreground md:text-xl">
              כאן תמצאו את המדריכים המרכזיים של ד״ר אנה ברמלי בנושא אלרגיה:
              טעימות ראשונות, בדיקות אלרגיה, זכויות במערכת החינוך ומידע מעשי
              שיעזור לכם להבין מה צריך לעשות, מתי, ואיך לפעול נכון.
            </p>

            <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              <Button size="lg" asChild className="w-full">
                <Link href="/guides/טעימות-ראשונות-אלרגנים">
                  מדריך טעימות ראשונות
                  <ArrowLeft className="mr-2 h-4 w-4" />
                </Link>
              </Button>

              <Button size="lg" variant="outline" asChild className="w-full">
                <Link href="/guides/בדיקות-אלרגיה-ילדים-ישראל">
                  מדריך בדיקות אלרגיה
                  <ArrowLeft className="mr-2 h-4 w-4" />
                </Link>
              </Button>

              <Button size="lg" variant="outline" asChild className="w-full">
                <Link href="/guides/זכויות-ילד-אלרגי-ישראל">
                  מדריך זכויות ילד אלרגי
                  <ArrowLeft className="mr-2 h-4 w-4" />
                </Link>
              </Button>
            </div>

            <div className="mt-4 flex justify-center">
              <Button size="lg" variant="outline" asChild>
                <Link href="https://ihaveallergy.com/book">
                  קביעת תור באתר הראשי
                  <ArrowLeft className="mr-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-surface section-spacing-lg">
        <div className="container-medical">
          <div className="mb-14 text-center">
            <h2 className="mb-4 font-bold text-foreground">המדריכים המרכזיים</h2>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
              שלושה עמודי בסיס שעוזרים להורים להבין את התמונה הגדולה: התחלה
              נכונה, אבחון נכון, והתנהלות בטוחה ביום־יום.
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            {guides.map((guide) => (
              <Link
                key={guide.href}
                href={guide.href}
                className="card-hover group rounded-[2rem] border border-border/60 bg-card p-7 shadow-medical"
              >
                <div className="mb-5 flex items-center justify-between gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-accent">
                    <guide.icon className="h-6 w-6 text-primary" />
                  </div>
                  <span className="rounded-full bg-surface-warm px-3 py-1 text-xs font-medium text-primary">
                    {guide.badge}
                  </span>
                </div>

                <h3 className="text-2xl font-bold leading-snug text-foreground">
                  {guide.title}
                </h3>

                <p className="mt-4 leading-7 text-muted-foreground">
                  {guide.description}
                </p>

                <div className="mt-6 flex items-center justify-between">
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Clock3 className="ml-1.5 h-4 w-4" />
                    {guide.readTime}
                  </div>

                  <span className="inline-flex items-center text-sm font-medium text-primary">
                    לקריאה
                    <ArrowLeft className="mr-1.5 h-4 w-4 transition-transform group-hover:-translate-x-1" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section-spacing-lg">
        <div className="container-medical">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
            <div>
              <h2 className="mb-5 font-bold text-foreground">מה תמצאו במדריכים?</h2>
              <p className="text-lg leading-8 text-muted-foreground">
                כל מדריך נכתב כדי לעזור להורים לקבל תמונה ברורה יותר: מה נחשב
                תקין, מתי כדאי להיבדק, איך לפעול מול מוסדות, ואילו צעדים יכולים
                לחסוך בלבול ולתת יותר ביטחון.
              </p>

              <div className="mt-8 space-y-4">
                {topics.map((topic) => (
                  <div
                    key={topic}
                    className="flex items-start gap-3 rounded-2xl border border-border/50 bg-card px-5 py-4"
                  >
                    <div className="mt-0.5 flex h-8 w-8 items-center justify-center rounded-xl bg-accent">
                      <CheckCircle2 className="h-4 w-4 text-primary" />
                    </div>
                    <p className="text-sm font-medium text-foreground">{topic}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[2rem] border border-border/60 bg-card p-8 shadow-medical">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-accent">
                <ShieldCheck className="h-6 w-6 text-primary" />
              </div>

              <h2 className="font-bold text-foreground">לא בטוחים מאיפה להתחיל?</h2>

              <p className="mt-4 text-lg leading-8 text-muted-foreground">
                אם יש חשד לאלרגיה, תגובות חוזרות, צורך בבדיקות או שאלות לגבי
                בטיחות בגן ובבית הספר - אפשר להתחיל מהמדריכים, ואז לעבור
                לקביעת תור באתר הראשי.
              </p>

              <div className="mt-8 flex flex-col gap-4">
                <Button size="lg" asChild>
                  <Link href="https://ihaveallergy.com/book">
                    קביעת תור באתר הראשי
                    <ArrowLeft className="mr-2 h-4 w-4" />
                  </Link>
                </Button>

                <Button size="lg" variant="outline" asChild>
                  <Link href="/services">
                    לשירותים ואבחונים
                    <ArrowLeft className="mr-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>

              <div className="mt-8 rounded-2xl bg-surface p-5">
                <div className="flex items-start gap-3">
                  <div className="mt-0.5 flex h-10 w-10 items-center justify-center rounded-xl bg-accent">
                    <FileText className="h-5 w-5 text-primary" />
                  </div>
                  <p className="text-sm leading-7 text-muted-foreground">
                    עמוד זה הוא עמוד SEO והכוונה. פעולות כמו קביעת תור מתבצעות
                    באתר הראשי של הקליניקה.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-surface-warm section-spacing-lg">
        <div className="container-medical">
          <div className="mb-14 text-center">
            <h2 className="mb-4 font-bold text-foreground">
              מסלולי קריאה מומלצים
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
              מרכז המדריכים בנוי כעמוד האב של התוכן. מכאן אפשר להתקדם לפי הצורך
              של ההורה או המשפחה.
            </p>
          </div>

          <div className="grid gap-5 lg:grid-cols-3">
            <Link
              href="/guides/טעימות-ראשונות-אלרגנים"
              className="card-hover rounded-3xl border border-border/60 bg-card p-6 shadow-medical"
            >
              <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-2xl bg-accent">
                <Baby className="h-5 w-5 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-foreground">
                מתחילים טעימות ראשונות
              </h3>
              <p className="mt-3 leading-7 text-muted-foreground">
                למסלול חשיפה לאלרגנים אצל תינוקות: מתי להתחיל, איך להתחיל ומה
                לעשות אם מופיעה תגובה.
              </p>
              <span className="mt-5 inline-flex items-center text-sm font-medium text-primary">
                למדריך
                <ChevronLeft className="mr-1.5 h-4 w-4" />
              </span>
            </Link>

            <Link
              href="/guides/בדיקות-אלרגיה-ילדים-ישראל"
              className="card-hover rounded-3xl border border-border/60 bg-card p-6 shadow-medical"
            >
              <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-2xl bg-accent">
                <TestTube2 className="h-5 w-5 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-foreground">
                חושדים באלרגיה וצריכים בדיקה
              </h3>
              <p className="mt-3 leading-7 text-muted-foreground">
                למסלול בדיקות אלרגיה: תבחיני עור, בדיקות דם, מבחן מאכל ומה ההבדל
                בין מסלול פרטי לציבורי.
              </p>
              <span className="mt-5 inline-flex items-center text-sm font-medium text-primary">
                למדריך
                <ChevronLeft className="mr-1.5 h-4 w-4" />
              </span>
            </Link>

            <Link
              href="/services"
              className="card-hover rounded-3xl border border-border/60 bg-card p-6 shadow-medical"
            >
              <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-2xl bg-accent">
                <Stethoscope className="h-5 w-5 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-foreground">
                רוצים לעבור לאבחון או ייעוץ
              </h3>
              <p className="mt-3 leading-7 text-muted-foreground">
                למסלול השירותים והאבחונים של הקליניקה, ומשם לקביעת תור באתר
                הראשי.
              </p>
              <span className="mt-5 inline-flex items-center text-sm font-medium text-primary">
                לשירותים
                <ChevronLeft className="mr-1.5 h-4 w-4" />
              </span>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
