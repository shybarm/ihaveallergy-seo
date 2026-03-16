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
    <main className="min-h-screen bg-white text-slate-900">
      <div className="mx-auto max-w-5xl px-6 py-16">
        <h1 className="text-4xl font-bold tracking-tight">
          ד״ר אנה ברמלי
        </h1>

        <p className="mt-4 text-xl text-slate-600">
          מומחית לאלרגיה ואימונולוגיה בילדים ובמבוגרים
        </p>

        <div className="mt-10 space-y-6 text-lg leading-8 text-slate-700">
          <p>
            אבחון, בירור וטיפול במצבים אלרגיים ואימונולוגיים, עם דגש על התאמה
            אישית, הסבר ברור וליווי מקצועי לאורך התהליך.
          </p>

          <p>
            האתר מרכז מידע על הרקע המקצועי של ד״ר אנה ברמלי, תחומי הטיפול,
            דרכי יצירת קשר ועמודי תוכן מרכזיים בתחום האלרגיה והאימונולוגיה.
          </p>
        </div>

        <section className="mt-12 grid gap-4 sm:grid-cols-2">
          <Link
            href="/about"
            className="rounded-2xl border border-slate-200 p-5 hover:bg-slate-50"
          >
            <h2 className="text-xl font-semibold">אודות ד״ר אנה ברמלי</h2>
            <p className="mt-2 text-slate-600">
              רקע מקצועי, השכלה וגישה טיפולית.
            </p>
          </Link>

          <Link
            href="/dr-anna-brameli"
            className="rounded-2xl border border-slate-200 p-5 hover:bg-slate-50"
          >
            <h2 className="text-xl font-semibold">הפרופיל המקצועי</h2>
            <p className="mt-2 text-slate-600">
              תחומי מומחיות, ניסיון קליני ותחומי טיפול.
            </p>
          </Link>

          <Link
            href="/whois"
            className="rounded-2xl border border-slate-200 p-5 hover:bg-slate-50"
          >
            <h2 className="text-xl font-semibold">מי היא ד״ר אנה ברמלי?</h2>
            <p className="mt-2 text-slate-600">
              עמוד FAQ והיכרות קצרה עם תחומי הפעילות.
            </p>
          </Link>

          <Link
            href="/contact"
            className="rounded-2xl border border-slate-200 p-5 hover:bg-slate-50"
          >
            <h2 className="text-xl font-semibold">יצירת קשר וקביעת תור</h2>
            <p className="mt-2 text-slate-600">
              פרטי קשר, כתובת ומידע לקראת פנייה למרפאה.
            </p>
          </Link>
        </section>
      </div>
    </main>
  );
}