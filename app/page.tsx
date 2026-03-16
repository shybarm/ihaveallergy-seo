import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "ד״ר אנה ברמלי | מומחית לאלרגיה ואימונולוגיה",
  description:
    "אבחון, בירור וטיפול באלרגיה ואימונולוגיה בילדים ובמבוגרים. מידע על ד״ר אנה ברמלי, תחומי מומחיות, קביעת תור ועמודי תוכן מרכזיים.",
  alternates: {
    canonical: "https://ihaveallergy.com/",
  },
};

export default function HomePage() {
  return (
    <main className="gradient-hero min-h-screen">
      <div className="container-medical section-spacing-lg">

        <header className="max-w-3xl">
          <h1 className="text-balance">
            ד״ר אנה ברמלי
          </h1>

          <p className="mt-4 text-xl text-muted-foreground">
            מומחית לאלרגיה ואימונולוגיה בילדים ובמבוגרים
          </p>

          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            אבחון, בירור וטיפול במצבים אלרגיים ואימונולוגיים עם דגש על התאמה
            אישית, הסבר ברור וליווי מקצועי לאורך התהליך.
          </p>
        </header>

        <section className="mt-14 grid gap-6 sm:grid-cols-2">

          <Link
            href="/about"
            className="gradient-card card-hover shadow-medical rounded-2xl p-6"
          >
            <h2 className="text-xl font-semibold">
              אודות ד״ר אנה ברמלי
            </h2>
            <p className="mt-2 text-muted-foreground">
              רקע מקצועי, השכלה וגישה טיפולית.
            </p>
          </Link>

          <Link
            href="/dr-anna-brameli"
            className="gradient-card card-hover shadow-medical rounded-2xl p-6"
          >
            <h2 className="text-xl font-semibold">
              הפרופיל המקצועי
            </h2>
            <p className="mt-2 text-muted-foreground">
              תחומי מומחיות, ניסיון קליני ותחומי טיפול.
            </p>
          </Link>

          <Link
            href="/whois"
            className="gradient-card card-hover shadow-medical rounded-2xl p-6"
          >
            <h2 className="text-xl font-semibold">
              מי היא ד״ר אנה ברמלי?
            </h2>
            <p className="mt-2 text-muted-foreground">
              FAQ והיכרות קצרה עם תחומי הפעילות.
            </p>
          </Link>

          <Link
            href="/contact"
            className="gradient-card card-hover shadow-medical rounded-2xl p-6"
          >
            <h2 className="text-xl font-semibold">
              יצירת קשר וקביעת תור
            </h2>
            <p className="mt-2 text-muted-foreground">
              פרטי קשר, כתובת ומידע לקראת פנייה למרפאה.
            </p>
          </Link>

        </section>

      </div>
    </main>
  );
}