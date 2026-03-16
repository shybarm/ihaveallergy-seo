import type { Metadata } from "next";
import Link from "next/link";
import {
  Phone,
  MessageCircle,
  BookOpen,
  Baby,
  CheckCircle2,
  Stethoscope,
  TestTube2,
  School,
  ArrowLeft,
  HelpCircle,
  FileText,
  ShieldCheck,
} from "lucide-react";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "ד״ר אנה ברמלי | מומחית לאלרגיה ואימונולוגיה",
  description:
    "ד״ר אנה ברמלי – מומחית לאלרגיה ואימונולוגיה | אבחון וטיפול בילדים ובמבוגרים. קביעת תור מהירה, מידע מקצועי, ומדריכים שיעזרו לכם להבין ולנהל אלרגיות בצורה בטוחה.",
  alternates: {
    canonical: "https://ihaveallergy.com/",
  },
  openGraph: {
    type: "website",
    url: "https://ihaveallergy.com/",
    title: "ד״ר אנה ברמלי | מומחית לאלרגיה ואימונולוגיה",
    description:
      "ד״ר אנה ברמלי – מומחית לאלרגיה ואימונולוגיה | אבחון וטיפול בילדים ובמבוגרים. קביעת תור מהירה, מידע מקצועי, ומדריכים.",
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
      "מומחית לאלרגיה ואימונולוגיה עם ניסיון רב באבחון וטיפול באלרגיות בילדים ומבוגרים.",
    images: ["https://ihaveallergy.com/og-logo.png"],
  },
};

const whyChooseReasons = [
  "מומחיות באבחון וטיפול באלרגיות בילדים ובמבוגרים",
  "ניסיון קליני רחב מבתי חולים מובילים בארץ ובעולם",
  "גישה אנושית ורגישה למטופלים ולמשפחות",
  "התמחות נוספת באימונולוגיה ומחלות זיהומיות ילדים",
  "זמינות גבוהה וקשר ישיר עם הרופאה",
];

const services = [
  {
    icon: Stethoscope,
    title: "אבחון אלרגיה",
    description: "בירור מסודר של תגובות אלרגיות, תסמינים חוזרים וטריגרים אפשריים.",
    href: "/services",
  },
  {
    icon: TestTube2,
    title: "בדיקות אלרגיה",
    description: "הכוונה לבדיקות המתאימות לפי גיל, היסטוריה רפואית וסוג החשד.",
    href: "/services",
  },
  {
    icon: ShieldCheck,
    title: "תוכנית טיפול",
    description: "התאמת טיפול ומעקב להורים, לילדים ולמבוגרים לפי הצורך הקליני.",
    href: "/services",
  },
];

const guides = [
  {
    icon: Baby,
    title: "טעימות ראשונות",
    description: "מדריך חשיפה לאלרגנים לתינוקות ולהורים בתחילת הדרך.",
    href: "/guides/טעימות-ראשונות-אלרגנים",
  },
  {
    icon: TestTube2,
    title: "בדיקות אלרגיה",
    description: "מתי צריך בדיקה, איזה סוג מתאים, ומה חשוב לדעת מראש.",
    href: "/guides/בדיקות-אלרגיה-ילדים-ישראל",
  },
  {
    icon: School,
    title: "זכויות ילד אלרגי",
    description: "מידע חשוב על גן, בית ספר, צהרון והתאמות שמגיעות לכם.",
    href: "/guides/זכויות-ילד-אלרגי-ישראל",
  },
];

const faqItems = [
  {
    question: "מתי כדאי לקחת ילד לבדיקת אלרגיה?",
    answer:
      "מומלץ לקבוע תור ברגע שעולה חשד לתגובה אלרגית למזון, עקיצה או פריחה לא מוסברת.",
  },
  {
    question: "מה ההבדל בין אלרגיה לרגישות למזון?",
    answer:
      "אלרגיה היא תגובה של מערכת החיסון, בעוד רגישות לרוב קשורה למערכת העיכול ואינה בהכרח מסכנת חיים.",
  },
  {
    question: "איך מתבצעת בדיקת אלרגיה?",
    answer:
      "לרוב באמצעות תבחיני עור או בדיקות דם, בהתאם לסוג החשד ולהמלצה הרפואית.",
  },
];

export default function HomePage() {
  return (
    <>
      <section className="relative gradient-hero overflow-hidden">
        <div className="container-medical py-20 md:py-28 lg:py-36">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
            <div className="order-2 lg:order-1">
              <h1 className="font-bold text-foreground leading-[1.1] mb-6">
                ד״ר אנה ברמלי
                <span className="block text-primary mt-3 text-[26px] md:text-[34px] lg:text-[40px]">
                  מומחית לאלרגיה ואימונולוגיה
                </span>
              </h1>

              <p className="max-w-lg text-lg leading-relaxed text-muted-foreground md:text-xl mb-10">
                אבחון וטיפול לילדים ולמבוגרים, בגישה מקצועית, רגישה ומבוססת ידע רפואי עדכני.
              </p>

              <div className="flex flex-col gap-3 sm:flex-row">
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

                <Button size="lg" variant="secondary" asChild>
                  <Link href="/services">
                    <BookOpen className="ml-2 h-5 w-5" />
                    מידע להורים
                  </Link>
                </Button>
              </div>
            </div>

            <div className="order-1 lg:order-2 flex justify-center">
              <div className="relative">
                <div className="absolute inset-0 gradient-teal rounded-3xl rotate-3 opacity-15 blur-sm" />
                <img
                  src="/images/dr-anna-brameli.jpg"
                  alt="ד״ר אנה ברמלי - מומחית לאלרגיה ואימונולוגיה"
                  className="relative h-72 w-72 rounded-3xl object-cover shadow-xl sm:h-80 sm:w-80 md:h-96 md:w-96"
                />
                <div className="absolute -bottom-5 -right-5 rounded-2xl border border-border/60 bg-card p-4 shadow-lg">
                  <div className="flex items-center gap-3">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent">
                      <Baby className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-foreground">מומחית בילדים</p>
                      <p className="text-xs text-muted-foreground">ומבוגרים</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-spacing-lg bg-surface">
        <div className="container-medical">
          <div className="text-center mb-14">
            <h2 className="font-bold text-foreground mb-4">מדוע לבחור בד״ר אנה ברמלי?</h2>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
              ד״ר ברמלי היא רופאה בכירה לאלרגיה ואימונולוגיה, בעלת ניסיון רב בליווי מטופלים במצבים חריפים וכרוניים.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {whyChooseReasons.map((reason) => (
              <div
                key={reason}
                className="card-hover flex items-start gap-4 rounded-2xl border border-border/60 bg-card p-5"
              >
                <div className="mt-0.5 flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-xl bg-accent">
                  <CheckCircle2 className="h-5 w-5 text-primary" />
                </div>
                <p className="text-sm font-medium leading-relaxed text-foreground">{reason}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-spacing-lg">
        <div className="container-medical">
          <div className="text-center mb-14">
            <h2 className="font-bold text-foreground mb-4">שירותים ואבחונים</h2>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
              מגוון רחב של שירותי אבחון וטיפול באלרגיות, מותאמים אישית לכל מטופל.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <Link
                key={service.title}
                href={service.href}
                className="card-hover rounded-3xl border border-border/60 bg-card p-6 shadow-medical"
              >
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-2xl bg-accent">
                  <service.icon className="h-5 w-5 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground">{service.title}</h3>
                <p className="mt-3 leading-7 text-muted-foreground">{service.description}</p>
              </Link>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button variant="outline" size="lg" asChild>
              <Link href="/services">
                לכל השירותים
                <ArrowLeft className="mr-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="section-spacing-lg bg-surface-warm">
        <div className="container-medical">
          <div className="text-center mb-14">
            <h2 className="font-bold text-foreground mb-4">מדריכים מרכזיים</h2>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
              עמודי תוכן חשובים להורים ולמשפחות שרוצות להבין, להתכונן ולפעול נכון.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {guides.map((guide) => (
              <Link
                key={guide.title}
                href={guide.href}
                className="card-hover rounded-3xl border border-border/60 bg-card p-6 shadow-medical"
              >
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-2xl bg-accent">
                  <guide.icon className="h-5 w-5 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground">{guide.title}</h3>
                <p className="mt-3 leading-7 text-muted-foreground">{guide.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section-spacing-lg bg-surface">
        <div className="container-medical">
          <div className="text-center mb-14">
            <h2 className="font-bold text-foreground mb-4">שאלות נפוצות</h2>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
              תשובות קצרות וברורות לשאלות הנפוצות ביותר של הורים ומטופלים.
            </p>
          </div>

          <div className="mx-auto grid max-w-4xl gap-5">
            {faqItems.map((item) => (
              <div
                key={item.question}
                className="rounded-3xl border border-border/60 bg-card p-6 shadow-medical"
              >
                <div className="flex items-start gap-3">
                  <div className="mt-1 flex h-9 w-9 items-center justify-center rounded-xl bg-accent">
                    <HelpCircle className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-foreground">{item.question}</h3>
                    <p className="mt-3 leading-7 text-muted-foreground">{item.answer}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button variant="outline" size="lg" asChild>
              <Link href="/faq">
                לכל השאלות והתשובות
                <ArrowLeft className="mr-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="section-spacing-lg">
        <div className="container-medical">
          <div className="rounded-[2rem] border border-border/60 bg-card p-8 text-center shadow-medical md:p-12">
            <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-accent">
              <FileText className="h-6 w-6 text-primary" />
            </div>
            <h2 className="font-bold text-foreground">צריכים הכוונה או קביעת תור?</h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg leading-8 text-muted-foreground">
              אפשר להתחיל כאן, לקרוא, להבין, ואז ליצור קשר בצורה מסודרת וברורה.
            </p>

            <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
              <Button size="lg" asChild>
                <Link href="/contact">
                  <Phone className="ml-2 h-5 w-5" />
                  קביעת תור
                </Link>
              </Button>

              <Button size="lg" variant="outline" asChild>
                <Link href="/blog">
                  <BookOpen className="ml-2 h-5 w-5" />
                  למאמרים
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
