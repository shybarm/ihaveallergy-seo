import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "אודות ד״ר אנה ברמלי | רקע מקצועי, השכלה וגישה טיפולית",
  description:
    "רקע מקצועי, השכלה, ניסיון קליני והגישה הטיפולית של ד״ר אנה ברמלי, מומחית לאלרגיה ואימונולוגיה.",
  alternates: {
    canonical: "https://ihaveallergy.com/about",
  },
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <div className="mx-auto max-w-4xl px-6 py-16">
        <h1 className="text-4xl font-bold tracking-tight">
          אודות ד״ר אנה ברמלי
        </h1>

        <p className="mt-4 text-xl text-slate-600">
          רקע מקצועי, השכלה וגישה טיפולית
        </p>

        <div className="mt-10 space-y-6 text-lg leading-8 text-slate-700">
          <p>
            ד״ר אנה ברמלי היא מומחית לאלרגיה ואימונולוגיה בילדים ובמבוגרים.
            עבודתה משלבת ניסיון קליני, גישה אנושית, והבנה עמוקה של מערכת החיסון.
          </p>

          <p>
            הגישה הטיפולית מבוססת על הקשבה, התאמה אישית, אבחון יסודי והעברת ידע
            למטופלים ולמשפחותיהם.
          </p>

          <p>
            למידע נוסף על הרקע המקצועי, תחומי ההתמחות והפעילות הקלינית של ד״ר
            ברמלי, אפשר לעבור אל{" "}
            <Link
              href="/dr-anna-brameli"
              className="font-medium text-blue-700 underline underline-offset-4"
            >
              הפרופיל המקצועי של ד״ר אנה ברמלי
            </Link>
            .
          </p>
        </div>

        <section className="mt-14">
          <h2 className="text-2xl font-semibold">השכלה והתמחות</h2>
          <ul className="mt-4 list-disc space-y-2 pr-6 text-slate-700">
            <li>לימודי רפואה והכשרה קלינית מתקדמת</li>
            <li>התמחות ברפואת אלרגיה ואימונולוגיה</li>
            <li>ניסיון באבחון וטיפול באלרגיות בילדים ובמבוגרים</li>
          </ul>
        </section>

        <section className="mt-14">
          <h2 className="text-2xl font-semibold">הגישה המקצועית</h2>
          <p className="mt-4 text-lg leading-8 text-slate-700">
            המטרה היא לשלב דיוק רפואי עם ליווי ברור ונגיש, כדי לאפשר למטופלים
            להבין את המצב הרפואי שלהם ולקבל החלטות טיפוליות בביטחון.
          </p>
        </section>
      </div>
    </main>
  );
}