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
  HeartPulse,
  ChevronLeft,
  Apple,
  Droplets,
} from "lucide-react";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "ד״ר אנה ברמלי | מומחית לאלרגיה ואימונולוגיה",
  description:
    "ד״ר אנה ברמלי – מומחית לאלרגיה ואימונולוגיה. אבחון וטיפול בילדים ובמבוגרים, בדיקות אלרגיה, מידע מקצועי, מדריכים להורים וקביעת תור באתר הראשי.",
  alternates: {
    canonical: "https://seo.ihaveallergy.com/",
  },
  openGraph: {
    type: "website",
    url: "https://seo.ihaveallergy.com/",
    title: "ד״ר אנה ברמלי | מומחית לאלרגיה ואימונולוגיה",
    description:
      "אבחון וטיפול בילדים ובמבוגרים, בדיקות אלרגיה, מידע מקצועי, מדריכים להורים וקביעת תור באתר הראשי.",
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
      "מומחית לאלרגיה ואימונולוגיה עם מידע מקצועי, מדריכים ובדיקות אלרגיה לילדים ולמבוגרים.",
    images: ["https://ihaveallergy.com/og-logo.png"],
  },
};

const whyChooseReasons = [
  "מומחיות באבחון וטיפול באלרגיות בילדים ובמבוגרים",
  "ניסיון קליני רחב מבתי חולים מובילים בארץ ובעולם",
  "גישה אנושית, רגישה וברורה למטופלים ולמשפחות",
  "התמחות נוספת באימונולוגיה ומחלות זיהומיות ילדים",
  "זמינות גבוהה והכוונה מסודרת לפי הצורך הקליני",
  "שילוב בין בירור רפואי, בדיקות והסבר פרקטי להמשך הדרך",
];

const services = [
  {
    icon: Stethoscope,
    title: "אבחון אלרגיה",
    description:
      "בירור מסודר של תגובות אלרגיות, תסמינים חוזרים וטריגרים אפשריים.",
    href: "/services",
  },
  {
    icon: TestTube2,
    title: "בדיקות אלרגיה",
    description:
      "הכוונה לבדיקות המתאימות לפי גיל, היסטוריה רפואית וסוג החשד.",
    href: "/guides/בדיקות-אלרגיה-ילדים-ישראל",
  },
  {
    icon: ShieldCheck,
    title: "תוכנית טיפול",
    description:
      "התאמת טיפול ומעקב להורים, לילדים ולמבוגרים לפי הצורך הקליני.",
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
  {
    icon: Apple,
    title: "אלרגיה למזון",
    description: "מדריך מקיף: אלרגנים, תסמינים, אבחון, טיפול ואימונותרפיה.",
    href: "/alergia-lemazon",
  },
  {
    icon: Droplets,
    title: "אטופיק דרמטיטיס",
    description: "מדריך מקיף: תסמינים לפי גיל, 6 שלבי טיפול וניהול יומיומי.",
    href: "/atopic-dermatitis",
  },
  {
    icon: BookOpen,
    title: "בלוג אלרגיה",
    description: "מאמרים רפואיים מבוססי ראיות על תסמינים, אבחון וטיפול.",
    href: "/blog",
  },
  {
    icon: HelpCircle,
    title: "שאלות ותשובות",
    description: "תשובות לשאלות הנפוצות ביותר על אלרגיה ואימונולוגיה.",
    href: "/faq",
  },
];

const faqItems = [
  {
    question: "מתי כדאי לקחת ילד לבדיקת אלרגיה?",
    answer:
      "מומלץ לקבוע תור ברגע שעולה חשד לתגובה אלרגית למזון, עקיצה, פריחה לא מוסברת או תסמינים חוזרים שדורשים בירור מסודר.",
  },
  {
    question: "מה ההבדל בין אלרגיה לרגישות למזון?",
    answer:
      "אלרגיה היא תגובה של מערכת החיסון ועלולה להיות משמעותית ואף מסוכנת. רגישות או אי-סבילות קשורה לרוב למערכת העיכול ואינה אותה תופעה רפואית.",
  },
  {
    question: "איך מתבצעת בדיקת אלרגיה?",
    answer:
      "בהתאם לסוג החשד, באמצעות תבחיני עור, בדיקות דם או מבחן מאכל מפוקח. הבחירה נעשית לפי גיל, היסטוריה רפואית וסוג התסמינים.",
  },
];

const quickPaths = [
  {
    title: "חושדים באלרגיה למזון?",
    description:
      "התחילו ממדריך בדיקות אלרגיה כדי להבין אילו בדיקות קיימות, מתי עושים אותן ומה ההבדל בין תבחיני עור, בדיקות דם ומבחן מאכל.",
    href: "/guides/בדיקות-אלרגיה-ילדים-ישראל",
    icon: TestTube2,
  },
  {
    title: "מתחילים טעימות ראשונות?",
    description:
      "עברו למדריך החשיפה לאלרגנים לתינוקות כדי להבין איך לחשוף בצורה רגועה, מדורגת ובטוחה לבמבה, טחינה, ביצים וחלב.",
    href: "/guides/טעימות-ראשונות-אלרגנים",
    icon: Baby,
  },
  {
    title: "צריכים מסגרת חינוכית בטוחה?",
    description:
      "מדריך זכויות ילד אלרגי בישראל מרכז את עיקרי ההתנהלות מול גן, בית ספר, צהרון ומוסדות חינוך.",
    href: "/guides/זכויות-ילד-אלרגי-ישראל",
    icon: School,
  },
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
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqItems.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.answer,
    },
  })),
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "MedicalWebSite",
  name: "I Have Allergy",
  url: "https://seo.ihaveallergy.com/",
  inLanguage: "he-IL",
  about: {
    "@type": "MedicalSpecialty",
    name: "Allergy and Immunology",
  },
  publisher: {
    "@type": "Organization",
    name: "I Have Allergy",
    url: "https://ihaveallergy.com/",
  },
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />

      <section className="relative gradient-hero overflow-hidden">
        <div className="container-medical py-20 md:py-28 lg:py-36">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
            <div className="order-2 lg:order-1">
              <div className="mb-5 inline-flex items-center rounded-full bg-accent px-4 py-2 text-sm font-medium text-primary">
                <HeartPulse className="ml-2 h-4 w-4" />
                אלרגיה, אימונולוגיה והכוונה למשפחות
              </div>

              <h1 className="mb-6 font-bold leading-[1.1] text-foreground">
                ד״ר אנה ברמלי
                <span className="mt-3 block text-[26px] text-primary md:text-[34px] lg:text-[40px]">
                  מומחית לאלרגיה ואימונולוגיה
                </span>
              </h1>

              <p className="mb-10 max-w-lg text-lg leading-relaxed text-muted-foreground md:text-xl">
                אבחון וטיפול לילדים ולמבוגרים, בגישה מקצועית, רגישה ומבוססת ידע
                רפואי עדכני. כאן תמצאו מידע ברור, מדריכים מעשיים ועמודי תוכן
                שיעזרו לכם להבין מה לבדוק, מתי לפנות לרופא ואיך לפעול נכון.
              </p>

              <div className="flex flex-col gap-3 sm:flex-row">
                <Button size="lg" asChild>
                  <Link href="https://ihaveallergy.com/book">
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
                  <Link href="/guides">
                    <BookOpen className="ml-2 h-5 w-5" />
                    מדריכי אלרגיה
                  </Link>
                </Button>
              </div>
            </div>

            <div className="order-1 flex justify-center lg:order-2">
              <div className="relative">
                <div className="absolute inset-0 rotate-3 rounded-3xl gradient-teal opacity-15 blur-sm" />
                <img
                  src="/images/dr-anna-brameli.jpeg"
                  alt="ד״ר אנה ברמלי - מומחית לאלרגיה ואימונולוגיה"
                  className="relative h-72 w-72 rounded-3xl object-cover shadow-xl sm:h-80 sm:w-80 md:h-96 md:w-96"
                />
                <div className="absolute -bottom-5 -right-5 rounded-2xl border border-border/60 bg-card p-4 shadow-lg">
                  <div className="flex items-center gap-3">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent">
                      <Baby className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-foreground">
                        מומחית בילדים
                      </p>
                      <p className="text-xs text-muted-foreground">וגם במבוגרים</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-surface section-spacing-lg">
        <div className="container-medical">
          <div className="mb-14 text-center">
            <h2 className="mb-4 font-bold text-foreground">איך מתחילים נכון?</h2>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
              בנינו כאן שלושה מסלולי התחלה ברורים, כדי לא להשאיר את הגולש לבד
              מול החשד, הבדיקה או ההתנהלות היום־יומית.
            </p>
          </div>

          <div className="grid gap-5 lg:grid-cols-3">
            {quickPaths.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="card-hover rounded-[2rem] border border-border/60 bg-card p-7 shadow-medical"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-accent">
                  <item.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground">{item.title}</h3>
                <p className="mt-4 leading-7 text-muted-foreground">
                  {item.description}
                </p>
                <span className="mt-6 inline-flex items-center text-sm font-medium text-primary">
                  לעמוד המלא
                  <ArrowLeft className="mr-2 h-4 w-4" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section-spacing-lg">
        <div className="container-medical">
          <div className="mb-14 text-center">
            <h2 className="mb-4 font-bold text-foreground">
              מדוע לבחור בד״ר אנה ברמלי?
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
              שילוב של מומחיות רפואית, ניסיון קליני וליווי ברור למשפחות שצריכות
              תשובות מדויקות ולא רק מידע כללי.
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
                <p className="text-sm font-medium leading-relaxed text-foreground">
                  {reason}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-spacing-lg">
        <div className="container-medical">
          <div className="mb-14 text-center">
            <h2 className="mb-4 font-bold text-foreground">שירותים ואבחונים</h2>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
              מגוון רחב של שירותי אבחון וטיפול באלרגיות, בהתאמה אישית למטופל,
              למשפחה ולסוג החשד הקליני.
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
                <p className="mt-3 leading-7 text-muted-foreground">
                  {service.description}
                </p>
              </Link>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Button variant="outline" size="lg" asChild>
              <Link href="/services">
                לכל השירותים
                <ArrowLeft className="mr-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="bg-surface-warm section-spacing-lg">
        <div className="container-medical">
          <div className="mb-14 text-center">
            <h2 className="mb-4 font-bold text-foreground">מדריכים מרכזיים</h2>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
              עמודי תוכן אסטרטגיים להורים ולמשפחות שרוצות להבין, להתכונן ולפעול
              נכון מהרגע הראשון.
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
                <p className="mt-3 leading-7 text-muted-foreground">
                  {guide.description}
                </p>
              </Link>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Button variant="outline" size="lg" asChild>
              <Link href="/guides">
                לכל המדריכים
                <ArrowLeft className="mr-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="bg-surface section-spacing-lg">
        <div className="container-medical">
          <div className="mb-14 text-center">
            <h2 className="mb-4 font-bold text-foreground">שאלות נפוצות</h2>
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
                    <h3 className="text-lg font-bold text-foreground">
                      {item.question}
                    </h3>
                    <p className="mt-3 leading-7 text-muted-foreground">
                      {item.answer}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
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
          <div className="rounded-[2rem] border border-border/60 bg-card p-8 shadow-medical md:p-12">
            <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
              <div>
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-accent">
                  <FileText className="h-6 w-6 text-primary" />
                </div>
                <h2 className="font-bold text-foreground">
                  מחפשים את העמוד הנכון להתחיל ממנו?
                </h2>
                <p className="mt-4 text-lg leading-8 text-muted-foreground">
                  אפשר להתחיל ממדריך
                  {" "}
                  <Link
                    href="/guides/בדיקות-אלרגיה-ילדים-ישראל"
                    className="font-medium text-primary hover:opacity-80"
                  >
                    בדיקות אלרגיה לילדים
                  </Link>
                  , לעבור למדריך
                  {" "}
                  <Link
                    href="/guides/טעימות-ראשונות-אלרגנים"
                    className="font-medium text-primary hover:opacity-80"
                  >
                    טעימות ראשונות וחשיפה לאלרגנים
                  </Link>
                  {" "}
                  או להיכנס לעמוד
                  {" "}
                  <Link
                    href="/guides"
                    className="font-medium text-primary hover:opacity-80"
                  >
                    מרכז המדריכים
                  </Link>
                  {" "}
                  כדי לקבל תמונה מלאה.
                </p>
              </div>

              <div className="rounded-3xl bg-surface p-6">
                <h3 className="mb-4 text-lg font-bold text-foreground">
                  ניווט מהיר
                </h3>
                <div className="space-y-3">
                  {[
                    {
                      href: "/guides/בדיקות-אלרגיה-ילדים-ישראל",
                      label: "בדיקות אלרגיה לילדים בישראל",
                    },
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
                      label: "שירותים ואבחונים",
                    },
                  ].map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="group flex items-center gap-2 rounded-2xl border border-border/60 bg-card p-4 text-sm transition-colors hover:border-primary/30"
                    >
                      <ChevronLeft className="h-4 w-4 flex-shrink-0 text-primary transition-transform group-hover:-translate-x-1" />
                      <span className="font-medium text-foreground">
                        {item.label}
                      </span>
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
              <Button size="lg" asChild>
                <Link href="https://ihaveallergy.com/book">
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
