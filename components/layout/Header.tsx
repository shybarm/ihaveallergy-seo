"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, Phone, BookOpen, ShieldCheck, Baby, Stethoscope, Apple, Droplets } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";

const navigation = [
  { href: "/", label: "ראשי" },
  { href: "/about", label: "אודות" },
  { href: "/services", label: "שירותים" },
  { href: "/guides", label: "מדריכים" },
  { href: "/blog", label: "בלוג" },
  { href: "/faq", label: "שאלות ותשובות" },
  { href: "/areas", label: "אזורי שירות" },
  { href: "/contact", label: "יצירת קשר" },
];

const featuredLinks = [
  {
    href: "/guides/בדיקות-אלרגיה-ילדים-ישראל",
    label: "בדיקות אלרגיה לילדים",
    icon: Stethoscope,
  },
  {
    href: "/guides/טעימות-ראשונות-אלרגנים",
    label: "טעימות ראשונות",
    icon: Baby,
  },
  {
    href: "/guides/זכויות-ילד-אלרגי-ישראל",
    label: "זכויות ילד אלרגי",
    icon: ShieldCheck,
  },
  {
    href: "/alergiya-beyeladim",
    label: "אלרגיה בילדים",
    icon: BookOpen,
  },
  {
    href: "/alergia-lemazon",
    label: "אלרגיה למזון",
    icon: Apple,
  },
  {
    href: "/atopic-dermatitis",
    label: "אטופיק דרמטיטיס",
    icon: Droplets,
  },
];

function isActive(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/85">
      <div className="container-medical">
        <div className="flex h-20 items-center justify-between gap-4">
          <Link href="/" className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-accent">
              <ShieldCheck className="h-6 w-6 text-primary" />
            </div>
            <div className="leading-tight">
              <div className="text-base font-bold text-foreground md:text-lg">
                I Have Allergy
              </div>
              <div className="text-xs text-muted-foreground md:text-sm">
                ד״ר אנה ברמלי
              </div>
            </div>
          </Link>

          <nav className="hidden items-center gap-1 lg:flex">
            {navigation.map((item) => {
              const active = isActive(pathname, item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`rounded-xl px-4 py-2 text-sm font-medium transition-colors ${
                    active
                      ? "bg-accent text-primary"
                      : "text-foreground hover:bg-accent/60 hover:text-primary"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <div className="hidden items-center gap-3 lg:flex">
            <Button variant="outline" asChild>
              <Link href="/guides">
                <BookOpen className="ml-2 h-4 w-4" />
                מרכז המדריכים
              </Link>
            </Button>

            <Button asChild>
              <Link href="https://ihaveallergy.com/book">
                <Phone className="ml-2 h-4 w-4" />
                קביעת תור
              </Link>
            </Button>
          </div>

          <button
            type="button"
            aria-label="פתח תפריט"
            onClick={() => setOpen((prev) => !prev)}
            className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-border/60 bg-card text-foreground lg:hidden"
          >
            <Menu className="h-5 w-5" />
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-border/60 bg-background lg:hidden">
          <div className="container-medical py-5">
            <div className="grid gap-2">
              {navigation.map((item) => {
                const active = isActive(pathname, item.href);
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className={`rounded-2xl px-4 py-3 text-sm font-medium transition-colors ${
                      active
                        ? "bg-accent text-primary"
                        : "bg-card text-foreground hover:bg-accent/60 hover:text-primary"
                    }`}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </div>

            <div className="mt-6">
              <p className="mb-3 text-xs font-medium uppercase tracking-wide text-muted-foreground">
                קישורים חשובים
              </p>

              <div className="grid gap-2">
                {featuredLinks.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="flex items-center gap-3 rounded-2xl border border-border/60 bg-card px-4 py-3 text-sm font-medium text-foreground transition-colors hover:border-primary/30 hover:text-primary"
                  >
                    <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-accent">
                      <item.icon className="h-4 w-4 text-primary" />
                    </div>
                    <span>{item.label}</span>
                  </Link>
                ))}
              </div>
            </div>

            <div className="mt-6 grid gap-3">
              <Button asChild className="w-full">
                <Link href="https://ihaveallergy.com/book" onClick={() => setOpen(false)}>
                  <Phone className="ml-2 h-4 w-4" />
                  קביעת תור באתר הראשי
                </Link>
              </Button>

              <Button variant="outline" asChild className="w-full">
                <Link href="/guides" onClick={() => setOpen(false)}>
                  <BookOpen className="ml-2 h-4 w-4" />
                  לכל המדריכים
                </Link>
              </Button>
            </div>
          </div>
        </div>
      )}

      <div className="hidden border-t border-border/50 bg-surface/70 lg:block">
        <div className="container-medical py-3">
          <div className="flex flex-wrap items-center gap-2">
            {featuredLinks.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="inline-flex items-center gap-2 rounded-full border border-border/60 bg-card px-4 py-2 text-xs font-medium text-foreground transition-colors hover:border-primary/30 hover:text-primary"
              >
                <item.icon className="h-3.5 w-3.5 text-primary" />
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
}
