"use client";

import Link from "next/link";
import { Phone, Mail, MapPin, Clock, ArrowUpLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

const quickLinks = [
  { href: "/", label: "ראשי" },
  { href: "/about", label: "אודות" },
  { href: "/services", label: "שירותים" },
  { href: "/blog", label: "מאמרים" },
  { href: "/faq", label: "שאלות ותשובות" },
  { href: "/contact", label: "יצירת קשר" },
];

const guideLinks = [
  { href: "/guides/טעימות-ראשונות-אלרגנים", label: "טעימות ראשונות" },
  { href: "/guides/בדיקות-אלרגיה-ילדים-ישראל", label: "בדיקות אלרגיה" },
  { href: "/guides/זכויות-ילד-אלרגי-ישראל", label: "זכויות ילד אלרגי" },
];

export function Footer() {
  return (
    <footer className="border-t border-border/50 bg-surface">
      <div className="container-medical py-14">
        <div className="grid gap-10 lg:grid-cols-4">
          <div className="lg:col-span-1">
            <Link href="/" className="group flex items-center gap-3">
              <div className="gradient-teal shadow-teal flex h-10 w-10 items-center justify-center rounded-xl transition-transform duration-200 group-hover:scale-105">
                <span className="text-lg font-bold text-primary-foreground">א</span>
              </div>
              <div>
                <div className="text-base font-bold leading-tight text-foreground">
                  ד״ר אנה ברמלי
                </div>
                <div className="text-[11px] leading-tight text-muted-foreground">
                  אלרגיה ואימונולוגיה
                </div>
              </div>
            </Link>

            <p className="mt-5 max-w-sm text-sm leading-7 text-muted-foreground">
              מידע מקצועי, מדריכים ועמודי SEO בנושא אלרגיה, אבחון, בדיקות וטיפול
              בילדים ובמבוגרים.
            </p>

            <div className="mt-6">
              <Button asChild>
                <Link href="https://ihaveallergy.com/book">
                  <Phone className="ml-2 h-4 w-4" />
                  קביעת תור באתר הראשי
                </Link>
              </Button>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-bold text-foreground">ניווט מהיר</h3>
            <ul className="mt-4 space-y-3">
              {quickLinks.map((link) => (
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
            <h3 className="text-sm font-bold text-foreground">מדריכים מרכזיים</h3>
            <ul className="mt-4 space-y-3">
              {guideLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-primary"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/guides"
                  className="inline-flex items-center text-sm text-primary transition-opacity hover:opacity-80"
                >
                  לכל המדריכים
                  <ArrowUpLeft className="mr-1 h-4 w-4" />
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-bold text-foreground">יצירת קשר</h3>
            <ul className="mt-4 space-y-4">
              <li className="flex items-start gap-3 text-sm text-muted-foreground">
                <Phone className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary" />
                <span>לקביעת תור יש להמשיך לאתר הראשי</span>
              </li>

              <li className="flex items-start gap-3 text-sm text-muted-foreground">
                <Mail className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary" />
                <span>עמודי ה-SEO מיועדים למידע, מדריכים ותוכן מקצועי</span>
              </li>

              <li className="flex items-start gap-3 text-sm text-muted-foreground">
                <MapPin className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary" />
                <span>האתר הראשי: ihaveallergy.com</span>
              </li>

              <li className="flex items-start gap-3 text-sm text-muted-foreground">
                <Clock className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary" />
                <span>עמודי SEO זמינים 24/7 לקריאה ומידע</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-4 border-t border-border/50 pt-6 text-sm text-muted-foreground md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} ד״ר אנה ברמלי. כל הזכויות שמורות.</p>

          <div className="flex flex-wrap items-center gap-4">
            <Link href="/privacy-policy" className="transition-colors hover:text-primary">
              מדיניות פרטיות
            </Link>
            <Link href="/terms" className="transition-colors hover:text-primary">
              תנאי שימוש
            </Link>
            <Link
              href="https://ihaveallergy.com/book"
              className="font-medium text-primary transition-opacity hover:opacity-80"
            >
              קביעת תור באתר הראשי
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
