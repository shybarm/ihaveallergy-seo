import Link from "next/link";
import { Phone, Mail, MapPin, BookOpen, ShieldCheck, Baby, Stethoscope, School, Apple, Droplets } from "lucide-react";

const guideLinks = [
  {
    href: "/guides/בדיקות-אלרגיה-ילדים-ישראל",
    label: "בדיקות אלרגיה לילדים בישראל",
    icon: Stethoscope,
  },
  {
    href: "/guides/טעימות-ראשונות-אלרגנים",
    label: "טעימות ראשונות - חשיפה לאלרגנים",
    icon: Baby,
  },
  {
    href: "/guides/זכויות-ילד-אלרגי-ישראל",
    label: "זכויות של ילד אלרגי בישראל",
    icon: School,
  },
  {
    href: "/alergiya-beyeladim",
    label: "אלרגיה בילדים - מדריך מלא",
    icon: ShieldCheck,
  },
  {
    href: "/alergia-lemazon",
    label: "אלרגיה למזון - מדריך מקיף",
    icon: Apple,
  },
  {
    href: "/atopic-dermatitis",
    label: "אטופיק דרמטיטיס - מדריך מקיף",
    icon: Droplets,
  },
];

const quickLinks = [
  { href: "/", label: "ראשי" },
  { href: "/about", label: "אודות" },
  { href: "/services", label: "שירותים ואבחונים" },
  { href: "/guides", label: "מרכז המדריכים" },
  { href: "/faq", label: "שאלות ותשובות" },
  { href: "/areas", label: "אזורי שירות" },
  { href: "/contact", label: "יצירת קשר" },
];

export function Footer() {
  return (
    <footer className="border-t border-border/60 bg-surface-warm">
      <div className="container-medical py-14">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_1fr_1fr]">
          <div>
            <div className="mb-5 flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-accent">
                <ShieldCheck className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-foreground">I Have Allergy</h3>
                <p className="text-sm text-muted-foreground">ד״ר אנה ברמלי</p>
              </div>
            </div>

            <p className="max-w-xl text-sm leading-7 text-muted-foreground">
              אתר תוכן והכוונה בתחום האלרגיה, עם מדריכים מקצועיים להורים ולמשפחות,
              מידע על בדיקות אלרגיה, חשיפה לאלרגנים, זכויות במערכת החינוך, ואפשרות
              מעבר לקביעת תור באתר הראשי של הקליניקה.
            </p>

            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              <Link
                href="https://ihaveallergy.com/book"
                className="inline-flex items-center justify-center rounded-2xl bg-primary px-5 py-3 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
              >
                <Phone className="ml-2 h-4 w-4" />
                קביעת תור באתר הראשי
              </Link>

              <Link
                href="/guides"
                className="inline-flex items-center justify-center rounded-2xl border border-border/60 bg-card px-5 py-3 text-sm font-medium text-foreground transition-colors hover:border-primary/30 hover:text-primary"
              >
                <BookOpen className="ml-2 h-4 w-4" />
                לכל המדריכים
              </Link>
            </div>
          </div>

          <div>
            <h3 className="mb-5 text-base font-bold text-foreground">עמודים מרכזיים</h3>
            <div className="grid gap-2">
              {quickLinks.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="rounded-xl px-3 py-2 text-sm text-muted-foreground transition-colors hover:bg-card hover:text-primary"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h3 className="mb-5 text-base font-bold text-foreground">מדריכים חשובים</h3>
            <div className="grid gap-2">
              {guideLinks.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="group flex items-center gap-3 rounded-2xl border border-border/60 bg-card px-4 py-3 text-sm text-foreground transition-colors hover:border-primary/30 hover:text-primary"
                >
                  <div className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-xl bg-accent">
                    <item.icon className="h-4 w-4 text-primary" />
                  </div>
                  <span className="leading-6">{item.label}</span>
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 grid gap-6 rounded-[2rem] border border-border/60 bg-card p-6 md:grid-cols-3">
          <div className="flex items-start gap-3">
            <div className="mt-0.5 flex h-10 w-10 items-center justify-center rounded-xl bg-accent">
              <Phone className="h-4 w-4 text-primary" />
            </div>
            <div>
              <p className="text-sm font-semibold text-foreground">קביעת תור</p>
              <p className="mt-1 text-sm text-muted-foreground">
                דרך האתר הראשי של הקליניקה
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="mt-0.5 flex h-10 w-10 items-center justify-center rounded-xl bg-accent">
              <Mail className="h-4 w-4 text-primary" />
            </div>
            <div>
              <p className="text-sm font-semibold text-foreground">מידע והכוונה</p>
              <p className="mt-1 text-sm text-muted-foreground">
                האתר נועד לספק מידע מסודר, ברור ונגיש
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="mt-0.5 flex h-10 w-10 items-center justify-center rounded-xl bg-accent">
              <MapPin className="h-4 w-4 text-primary" />
            </div>
            <div>
              <p className="text-sm font-semibold text-foreground">חשוב לדעת</p>
              <p className="mt-1 text-sm text-muted-foreground">
                המידע באתר אינו מחליף ייעוץ רפואי אישי
              </p>
            </div>
          </div>
        </div>

        <div className="mt-8 rounded-2xl border border-border/60 bg-background/70 p-5">
          <p className="text-xs leading-7 text-muted-foreground">
            המידע באתר להעשרה בלבד ואינו מחליף ייעוץ רפואי. אין לפעול על פי מידע זה ללא התייעצות עם רופא מוסמך. בכל מקרה חירום רפואי יש לפנות ל-101 (מד&quot;א) או לחדר מיון. ד&quot;ר אנה ברמלי והאתר אינם אחראים לכל נזק שייגרם משימוש במידע המופיע באתר.
          </p>
        </div>

        <div className="mt-8 flex flex-col gap-3 border-t border-border/60 pt-6 text-xs text-muted-foreground md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} I Have Allergy. כל הזכויות שמורות.</p>
          <div className="flex flex-wrap items-center gap-4">
            <Link href="/robots.txt" className="hover:text-primary">
              robots
            </Link>
            <Link href="/sitemap.xml" className="hover:text-primary">
              sitemap
            </Link>
            <Link href="/contact" className="hover:text-primary">
              יצירת קשר
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
