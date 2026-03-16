import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "ד״ר אנה ברמלי – פרופיל מקצועי | רופאת אלרגיה ואימונולוגיה",
  description:
    "הפרופיל המקצועי של ד״ר אנה ברמלי: תחומי מומחיות, ניסיון קליני, אבחון וטיפול באלרגיה ואימונולוגיה.",
  alternates: {
    canonical: "https://ihaveallergy.com/dr-anna-brameli",
  },
};

export default function DrAnnaBrameliPage() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <div className="mx-auto max-w-4xl px-6 py-16">
        <h1 className="text-4xl font-bold tracking-tight">
          הפרופיל המקצועי של ד״ר אנה ברמלי
        </h1>

        <p className="mt-4 text-xl text-slate-600">
          רופאת אלרגיה ואימונולוגיה לילדים ולמבוגרים
        </p>

        <div className="mt-10 space-y-6 text-lg leading-8 text-slate-700">
          <p>
            ד״ר אנה ברמלי עוסקת באבחון, בירור וטיפול במגוון מצבים בתחום האלרגיה
            והאימונולוגיה, בילדים ובמבוגרים.
          </p>

          <p>
            תחומי העניין כוללים אלרגיה למזון, אלרגיה לתרופות, נזלת אלרגית,
            אסתמה, אורטיקריה ומצבים נוספים הקשורים לתגובות חיסוניות.
          </p>

          <p>
            המטרה היא להעניק למטופלים אבחון מדויק, הסבר ברור, ותוכנית טיפול
            מותאמת אישית.
          </p>
        </div>

        <section className="mt-14">
          <h2 className="text-2xl font-semibold">תחומי מומחיות</h2>
          <ul className="mt-4 list-disc space-y-2 pr-6 text-slate-700">
            <li>אלרגיה למזון</li>
            <li>אלרגיה לתרופות</li>
            <li>אסתמה ורגישות נשימתית</li>
            <li>נזלת אלרגית</li>
            <li>אורטיקריה ותגובות עור</li>
            <li>בירור מצבים אימונולוגיים</li>
          </ul>
        </section>

        <section className="mt-14">
          <h2 className="text-2xl font-semibold">גישה טיפולית</h2>
          <p className="mt-4 text-lg leading-8 text-slate-700">
            השילוב בין דיוק רפואי, ניסיון קליני וליווי אנושי מאפשר התאמה של
            תהליך בירור וטיפול לצרכים של כל מטופל ומטופלת.
          </p>
        </section>
      </div>
    </main>
  );
}