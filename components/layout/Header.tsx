"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { href: "/", label: "ראשי" },
  { href: "/about", label: "אודות" },
  { href: "/services", label: "שירותים" },
  { href: "/guides", label: "מדריכים", matchPrefix: "/guides" },
  { href: "/blog", label: "מאמרים", matchPrefix: "/blog" },
  { href: "/faq", label: "שאלות ותשובות" },
  { href: "/contact", label: "פנייה וקביעת תור" },
];

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "border-b border-border/50 bg-background/90 shadow-md backdrop-blur-xl"
          : "bg-transparent"
      }`}
    >
      <nav className="container-medical">
        <div className="flex h-[72px] items-center justify-between">
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

          <div className="hidden items-center gap-0.5 lg:flex">
            {navLinks.map((link) => {
              const isActive =
                pathname === link.href ||
                (link.matchPrefix && pathname.startsWith(link.matchPrefix));

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative rounded-full px-4 py-2 text-sm font-medium transition-all duration-200 ${
                    isActive
                      ? "bg-accent text-primary"
                      : "text-muted-foreground hover:bg-muted hover:text-foreground"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>

          <div className="hidden items-center gap-3 lg:flex">
            <Button size="sm" asChild>
              <Link href="https://ihaveallergy.com/book">
                <Phone className="ml-1.5 h-4 w-4" />
                קביעת תור
              </Link>
            </Button>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="rounded-xl p-2.5 transition-colors hover:bg-muted lg:hidden"
            aria-label="תפריט"
            type="button"
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="overflow-hidden lg:hidden"
            >
              <div className="space-y-1 border-t border-border/50 py-4">
                {navLinks.map((link) => {
                  const isActive =
                    pathname === link.href ||
                    (link.matchPrefix && pathname.startsWith(link.matchPrefix));

                  return (
                    <Link
                      key={link.href}
                      href={link.href}
                      className={`block rounded-xl px-4 py-3 text-base font-medium transition-colors ${
                        isActive
                          ? "bg-accent text-accent-foreground"
                          : "text-muted-foreground hover:bg-muted hover:text-foreground"
                      }`}
                    >
                      {link.label}
                    </Link>
                  );
                })}

                <div className="space-y-3 px-4 pt-4">
                  <Button className="w-full" asChild>
                    <Link href="https://ihaveallergy.com/book">
                      <Phone className="ml-1.5 h-4 w-4" />
                      קביעת תור
                    </Link>
                  </Button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}
