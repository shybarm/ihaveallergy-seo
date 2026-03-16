import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "יצירת קשר וקביעת תור | ד״ר אנה ברמלי – מרפאת אלרגיה",
  description:
    "יצירת קשר עם מרפאת האלרגיה של ד״ר אנה ברמלי. קביעת תור, פרטי קשר, כתובת ופרטים ליצירת קשר מהירה.",
  alternates: {
    canonical: "https://ihaveallergy.com/contact",
  },
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <div className="mx-auto max-w-4xl px-6 py-16">
        <h1 className="text-4xl font-bold tracking-tight">
          יצירת קשר וקביעת תור
        </h1>

        <p className="mt-4 text-xl text-slate-600">
          פרטי קשר למרפאת האלרגיה של ד״ר אנה ברמלי
        </p>

        <div className="mt-10 space-y-6 text-lg leading-8 text-slate-700">
          <p>
            ניתן ליצור קשר עם המרפאה לצורך קביעת תור, בירור ראשוני, וקבלת מידע
            נוסף על תהליך האבחון והטיפול.
          </p>

          <p>
            מומלץ לפנות עם מידע בסיסי על הסיבה לפנייה, גיל המטופל או המטופלת,
            ותיאור קצר של התסמינים או הבירור המבוקש.
          </p>
        </div>

        <section className="mt-14 space-y-6 rounded-2xl border border-slate-200 p-6">
          <div>
            <h2 className="text-2xl font-semibold">טלפון</h2>
            <p className="mt-2 text-lg text-slate-700">054-580-8008</p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold">כתובת</h2>
            <p className="mt-2 text-lg text-slate-700">השלום 17ב, הוד השרון</p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold">שעות פעילות</h2>
            <p className="mt-2 text-lg text-slate-700">
              בתיאום מראש ובהתאם לזמינות המרפאה
            </p>
          </div>
        </section>

        <section className="mt-14">
          <h2 className="text-2xl font-semibold">לפני הפנייה</h2>
          <p className="mt-4 text-lg leading-8 text-slate-700">
            אם קיימים סיכומי ביקור, בדיקות קודמות, רשימת תרופות, או תיעוד של
            תגובה אלרגית — כדאי להכין אותם מראש כדי לייעל את תהליך הבירור.
          </p>
        </section>
      </div>
    </main>
  );
}