import type { Metadata } from "next";
import Link from "next/link";
import { Phone, ArrowLeft, Shield, BookOpen, Stethoscope } from "lucide-react";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "ד״ר אנה ברמלי | מומחית לאלרגיה ואימונולוגיה",
  description:
    "אבחון, בירור וטיפול באלרגיה ואימונולוגיה בילדים ובמבוגרים. מידע על ד״ר אנה ברמלי, תחומי מומחיות, קביעת תור ועמודי תוכן מרכזיים.",
  alternates: {
    canonical: "https://ihaveallergy.com/",
  },
};

const quickLinks = [
  {
    href: "/about",
    title: "אודות ד״ר אנה ברמלי",
    description: "רקע מקצועי, השכלה וגישה טיפולית.",
  },
  {
    href: "/dr-anna-brameli",
    title: "הפרופיל המקצועי",
    description: "תחומי מומחיות, ניסיון קליני ותחומי טיפול.",
  },
  {
    href: "/services",
    title: "שירותים ומצבים רפואיים",
    description: "בדיקות, אבחון וטיפול באלרגיה בילדים ובמבוגרים.",
  },
  {
    href: "/contact",
    title: "יצירת קשר וקביעת תור",
    description: "פרטי קשר, כתובת ומידע לקראת פנייה למרפאה.",
  },
];

const trustItems = [
  {
    icon: Shield,
    title: "אבחון מדויק",
    description: "בירור מסודר ומותאם אישית לכל מטופל.",
  },
  {
    icon: Stethoscope,
    title: "ניסיון קליני",
    description: "טיפול באלרגיה ואימונולוגיה בילדים ובמבוגרים.",
  },
  {
    icon: BookOpen,
    title: "מידע ברור",
    description: "הסבר מקצועי בגובה העיניים וליווי לאורך התהליך.",
  },
];

export default function HomePage() {
  return (
    <>
      <section className="gradient-hero py-20 md:py-28">
        <div className="container-medical">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div className="max-w-3xl">
              <h1 className="text-balance font-bold text-foreground">
                ד״ר אנה ברמלי
              </h1>

              <p className="mt-4 text-xl text-muted-foreground">
                מומחית לאלרגיה ואימונולוגיה בילדים ובמבוגרים
              </p>

              <p className="mt-6 text-lg leading-8 text-muted-foreground">
                אבחון, בירור וטיפול במצבים אלרגיים ואימונולוגיים, עם דגש על
                התאמה אישית, הסבר ברור וליווי מקצועי לאורך התהליך.
              </p>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <Button size="lg" asChild>
                  <Link href="/contact">
                    <Phone className="ml-2 h-5 w-5" />
                    קביעת תור
                  </Link>
                </Button>

                <Button variant="outline" size="lg" asChild>
                  <Link href="/services">
                    לשירותים
                    <ArrowLeft className="mr-2 h-5 w-5" />
                  </Link>
                </Button>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
              {trustItems.map((item) => (
                <div
                  key={item.title}
                  className="bg-card rounded-2xl border border-border/60 p-6 shadow-medical"
                >
                  <div className="bg-accent mb-4 flex h-12 w-12 items-center justify-center rounded-2xl">
                    <item.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h2 className="text-lg font-semibold text-foreground">
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
      </section>

      <section className="section-spacing-lg bg-surface">
        <div className="container-medical">
          <div className="mb-12 max-w-3xl">
            <h2 className="font-bold text-foreground">
              מידע מרכזי באתר
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              עמודי המידע המרכזיים על ד״ר אנה ברמלי, תחומי הטיפול ודרכי יצירת
              קשר.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            {quickLinks.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="bg-card card-hover rounded-2xl border border-border/60 p-6"
              >
                <h3 className="text-xl font-semibold text-foreground">
                  {item.title}
                </h3>
                <p className="mt-3 leading-relaxed text-muted-foreground">
                  {item.description}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section-spacing-lg bg-surface-warm">
        <div className="container-medical">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="font-bold text-foreground">
              מתי כדאי לפנות לבדיקה?
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
              כאשר יש תגובות חוזרות כמו פריחה, נפיחות, שיעול, קוצר נשימה או
              תסמינים אחרי חשיפה למזון, תרופות, עקיצות או אלרגנים סביבתיים.
            </p>

            <div className="mt-8 flex justify-center">
              <Button size="lg" asChild>
                <Link href="/contact">
                  <Phone className="ml-2 h-5 w-5" />
                  יצירת קשר עם המרפאה
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
