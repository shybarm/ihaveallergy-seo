import Link from "next/link";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-muted/60">
      <div className="container-medical py-14">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="mb-5 flex items-center gap-3">
              <div className="gradient-teal shadow-teal flex h-10 w-10 items-center justify-center rounded-xl">
                <span className="text-lg font-bold text-primary-foreground">א</span>
              </div>
              <div>
                <h3 className="text-base font-bold text-foreground">ד״ר אנה ברמלי</h3>
                <p className="text-xs text-muted-foreground">אלרגיה ואימונולוגיה</p>
              </div>
            </div>
            <p className="text-sm leading-relaxed text-muted-foreground">
              מומחית לאלרגיה ואימונולוגיה עם ניסיון רב באבחון וטיפול באלרגיות בילדים ומבוגרים.
            </p>
          </div>

          <div>
            <h4 className="mb-5 text-sm font-semibold uppercase tracking-wider text-foreground">
              ניווט מהיר
            </h4>
            <ul className="space-y-2.5">
              {[
                { href: "/about", label: "אודות" },
                { href: "/dr-anna-brameli", label: "ד״ר אנה ברמלי – פרופיל מקצועי" },
                { href: "/services", label: "שירותים" },
                { href: "/guides/טעימות-ראשונות-אלרגנים", label: "מדריך טעימות ראשונות" },
                { href: "/guides/בדיקות-אלרגיה-ילדים-ישראל", label: "מדריך בדיקות אלרגיה" },
                { href: "/guides/זכויות-ילד-אלרגי-ישראל", label: "זכויות ילד אלרגי" },
                { href: "/faq", label: "שאלות ותשובות" },
                { href: "/contact", label: "יצירת קשר" },
                { href: "/book", label: "קביעת תור" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-primary"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-5 text-sm font-semibold uppercase tracking-wider text-foreground">
              פרטי התקשרות
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <div className="mt-0.5 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg bg-accent">
                  <Phone className="h-4 w-4 text-primary" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">טלפון</p>
                  <a
                    href="tel:0545808008"
                    className="text-sm text-foreground transition-colors hover:text-primary"
                  >
                    054-580-8008
                  </a>
                </div>
              </li>

              <li className="flex items-start gap-3">
                <div className="mt-0.5 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg bg-accent">
                  <Mail className="h-4 w-4 text-primary" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">דוא״ל</p>
                  <a
                    href="mailto:info@drbrameli.co.il"
                    className="text-sm text-foreground transition-colors hover:text-primary"
                  >
                    info@drbrameli.co.il
                  </a>
                </div>
              </li>

              <li className="flex items-start gap-3">
                <div className="mt-0.5 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg bg-accent">
                  <MapPin className="h-4 w-4 text-primary" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">כתובת</p>
                  <p className="text-sm text-foreground">טבס 3, הוד השרון</p>
                </div>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="mb-5 text-sm font-semibold uppercase tracking-wider text-foreground">
              שעות פעילות
            </h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-2.5">
                <Clock className="h-4 w-4 flex-shrink-0 text-primary" />
                <div>
                  <p className="text-sm text-foreground">ראשון - חמישי</p>
                  <p className="text-xs text-muted-foreground">08:00 - 19:00</p>
                </div>
              </li>
              <li className="flex items-center gap-2.5">
                <Clock className="h-4 w-4 flex-shrink-0 text-primary" />
                <div>
                  <p className="text-sm text-foreground">שישי</p>
                  <p className="text-xs text-muted-foreground">08:00 - 13:00</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-border pt-8">
          <p className="mx-auto max-w-2xl text-center text-xs leading-relaxed text-muted-foreground">
            מרפאת האלרגיה של ד״ר אנה ברמלי ממוקמת בהוד השרון ומספקת שירות לתושבי כפר סבא, רעננה, פתח תקווה, הרצליה ואזור השרון.
          </p>
        </div>

        <div className="mt-10 border-t border-border pt-8">
          <div className="mb-5 flex flex-wrap justify-center gap-6">
            <Link href="/privacy" className="text-xs text-muted-foreground transition-colors hover:text-primary">
              מדיניות פרטיות
            </Link>
            <Link href="/accessibility" className="text-xs text-muted-foreground transition-colors hover:text-primary">
              הצהרת נגישות
            </Link>
            <Link href="/security" className="text-xs text-muted-foreground transition-colors hover:text-primary">
              אבטחת מידע
            </Link>
            <Link href="/blog" className="text-xs text-muted-foreground transition-colors hover:text-primary">
              מאמרים ומשאבים
            </Link>
          </div>

          <div className="flex flex-col items-center justify-between gap-3 md:flex-row">
            <p className="text-xs text-muted-foreground">
              © {currentYear} ד״ר אנה ברמלי. כל הזכויות שמורות.
            </p>
            <p className="text-[11px] text-muted-foreground/70">
              המידע באתר זה אינו מהווה תחליף לייעוץ רפואי מקצועי.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
