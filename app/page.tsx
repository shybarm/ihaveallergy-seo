import type { Metadata } from "next";
import Link from "next/link";
import {
  Phone,
  MessageCircle,
  BookOpen,
  Shield,
  Stethoscope,
  ChevronLeft,
  HeartPulse,
} from "lucide-react";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "ד״ר אנה ברמלי | מומחית לאלרגיה ואימונולוגיה",
  description:
    "אבחון, בירור וטיפול באלרגיה ואימונולוגיה בילדים ובמבוגרים. מידע על ד״ר אנה ברמלי, תחומי מומחיות, קביעת תור ועמודי תוכן מרכזיים.",
  alternates: {
    canonical: "https://ihaveallergy.com/",
  },
  openGraph: {
    type: "website",
    url: "https://ihaveallergy.com/",
    title: "ד״ר אנה ברמלי | מומחית לאלרגיה ואימונולוגיה",
    description:
      "אבחון, בירור וטיפול באלרגיה ואימונולוגיה בילדים ובמבוגרים.",
    locale: "he_IL",
    images: [
      {
        url: "https://ihaveallergy.com/og-logo.png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ד״ר אנה ברמלי | מומחית לאלרגיה ואימונולוגיה",
    description:
      "אבחון, בירור וטיפול באלרגיה ואימונולוגיה בילדים ובמבוגרים.",
    images: ["https://ihaveallergy.com/og-logo.png"],
  },
};

const trustItems = [
  {
    icon: Shield,
    title: "אבחון מדויק",
    description: "בירור אלרגי ואימונולוגי מסודר, מותאם אישית לכל מטופל.",
  },
  {
    icon: Stethoscope,
    title: "גישה מקצועית",
    description: "שילוב בין ניסיון קליני, הסבר ברור וליווי רפואי רציף.",
  },
  {
    icon: HeartPulse,
    title: "טיפול בילדים ובמבוגרים",
    description: "התאמת טיפול לגיל, לרקע הרפואי ולשגרת החיים בבית.",
  },
];

const quickLinks = [
  {
    href: "/services",
    title: "שירותים",
    description: "אבחון, בדיקות, מצבים רפואיים ותחומי טיפול מרכזיים.",
  },
  {
    href: "/blog",
    title: "מאמרים",
    description: "תוכן רפואי מקצועי על אלרגיה בילדים, אבחון, טיפול וזכויות.",
  },
  {
    href: "/faq",
    title: "שאלות ותשובות",
    description: "תשובות קצרות וברורות לשאלות הנפוצות ביותר של הורים.",
  },
  {
    href: "/contact",
    title: "יצירת קשר",
    description: "קביעת תור, פרטי התקשרות ומידע לקראת פנייה למרפאה.",
  },
];

export default function HomePage() {
  return (
    <>
      <section className="gradient-hero py-16 md:py-24 lg:py-28">
        <div className="container-medical">
          <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
            <div className="order-2 lg:order-1">
              <div className="relative mx-auto max-w-md lg:max-w-none">
                <div className="shadow-medical overflow-hidden rounded-[2rem] border border-border/60 bg-card">
                  <div className="aspect-[4/4.2] bg-[linear-gradient(145deg,hsl(205_45%_90%)_0%,hsl(215_30%_97%)_45%,hsl(0_0%_100%)_100%)] p-8 md:p-10">
                    <div className="flex h-full items-end justify-between">
                      <div className="max-w-[220px] rounded-2xl border border-white/60 bg-white/85 p-4 backdrop-blur-sm">
                        <p className="text-base font-semibold text-foreground">
                          מומחית לילדים
                        </p>
                        <p className="mt-1 text-sm text-muted-foreground">
                          ומבוגרים
                        </p>
                      </div>

                      <div className="gradient-teal shadow-teal flex h-24 w-24 items-center justify-center rounded-[1.75rem] text-4xl font-bold text-primary-foreground md:h-28 md:w-28 md:text-5xl">
                        א
                      </div>
                    </div>
                  </div>
                </div>

                <div className="shadow-medical absolute -bottom-5 left-4 rounded-2xl border border-border/60 bg-card px-4 py-3 md:left-6">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent">
                      <Shield className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-foreground">
                        רפואת אלרגיה
                      </p>
                      <p className="text-xs text-muted-foreground">
                        בגישה בהירה ומדויקת
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <div className="max-w-2xl">
                <h1 className="text-balance font-bold text-foreground">
                  ד״ר אנה ברמלי
                </h1>

                <p className="mt-4 text-2xl font-semibold text-primary md:text-3xl">
                  מומחית לאלרגיה ואימונולוגיה
                </p>

                <p className="mt-6 text-lg leading-8 text-muted-foreground md:text-xl">
                  אבחון וטיפול באלרגיות בילדים ומבוגרים, בגישה מקצועית, רגישה
                  ומבוססת ידע רפואי עדכני.
                </p>

                <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                  <Button size="lg" asChild>
                    <Link href="/contact">
                      <Phone className="ml-2 h-5 w-5" />
                      קביעת תור
                    </Link>
                  </Button>

                  <Button size="lg" variant="outline" asChild>
                    <Link href="/faq">
                      <MessageCircle className="ml-2 h-5 w-5" />
                      שאלות ותשובות
                    </Link>
                  </Button>

                  <Button size="lg" variant="outline" asChild>
                    <Link href="/blog">
                      <BookOpen className="ml-2 h-5 w-5" />
                      מאמרים
                    </Link>
                  </Button>
                </div>

                <div className="mt-10 grid gap-4 sm:grid-cols-3">
                  {trustItems.map((item) => (
                    <div
                      key={item.title}
                      className="rounded-2xl border border-border/60 bg-card/85 p-5 shadow-medical backdrop-blur-sm"
                    >
                      <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-2xl bg-accent">
                        <item.icon className="h-5 w-5 text-primary" />
                      </div>
                      <h2 className="text-base font-semibold text-foreground">
                        {item.title}
                      </h2>
                      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                        {item.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-spacing-lg bg-surface">
        <div className="container-medical">
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <h2 className="font-bold text-foreground">מדוע לבחור בד״ר אנה ברמלי?</h2>
            <p className="mt-4 text-lg leading-8 text-muted-foreground">
              ד״ר אנה ברמלי היא רופאה בכירה לאלרגיה ואימונולוגיה, בעלת ניסיון רב
              בליווי מטופלים במצבים חריפים וכרוניים, מתוך מטרה לייצר ודאות,
              סדר ותוכנית טיפול ברורה.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            <div className="card-hover rounded-3xl border border-border/60 bg-card p-7 shadow-medical">
              <h3 className="text-xl font-bold text-foreground">בירור קליני מסודר</h3>
              <p className="mt-3 leading-7 text-muted-foreground">
                בניית תמונה רפואית מלאה, הבנת דפוסי תגובה, ותעדוף הבדיקות
                הרלוונטיות בלבד.
              </p>
            </div>

            <div className="card-hover rounded-3xl border border-border/60 bg-card p-7 shadow-medical">
              <h3 className="text-xl font-bold text-foreground">הסבר ברור להורים</h3>
              <p className="mt-3 leading-7 text-muted-foreground">
                תרגום של מידע רפואי מורכב להחלטות פרקטיות וברורות לשגרה בבית,
                בגן ובבית הספר.
              </p>
            </div>

            <div className="card-hover rounded-3xl border border-border/60 bg-card p-7 shadow-medical">
              <h3 className="text-xl font-bold text-foreground">חיבור לטיפול נכון</h3>
              <p className="mt-3 leading-7 text-muted-foreground">
                התאמת טיפול, מעקב והכוונה להמשך — לפי גיל, חומרת התסמינים
                והטריגרים הספציפיים.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-spacing-lg bg-surface-warm">
        <div className="container-medical">
          <div className="mb-10 flex items-end justify-between gap-6">
            <div className="max-w-2xl">
              <h2 className="font-bold text-foreground">עמודים מרכזיים באתר</h2>
              <p className="mt-4 text-lg leading-8 text-muted-foreground">
                גישה מהירה לעמודי ה־SEO המרכזיים, בלי לשנות את ההיגיון של האתר
                המקורי.
              </p>
            </div>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            {quickLinks.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="card-hover rounded-3xl border border-border/60 bg-card p-6 shadow-medical"
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="text-xl font-bold text-foreground">
                      {item.title}
                    </h3>
                    <p className="mt-3 leading-7 text-muted-foreground">
                      {item.description}
                    </p>
                  </div>

                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-accent">
                    <ChevronLeft className="h-5 w-5 text-primary" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
