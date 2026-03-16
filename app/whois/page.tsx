import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "מי היא ד״ר אנה ברמלי? | מומחית לאלרגיה ואימונולוגיה",
  description:
    "היכרות קצרה עם ד״ר אנה ברמלי, תחומי ההתמחות, הניסיון הקליני והגישה הטיפולית בתחום האלרגיה והאימונולוגיה.",
  alternates: {
    canonical: "https://ihaveallergy.com/whois",
  },
};

export default function WhoIsPage() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <div className="mx-auto max-w-4xl px-6 py-16">
        <h1 className="text-4xl font-bold tracking-tight">
          מי היא ד״ר אנה ברמלי?
        </h1>

        <p className="mt-4 text-xl text-slate-600">
          מומחית לאלרגיה ואימונולוגיה בילדים ובמבוגרים
        </p>

        <div className="mt-10 space-y-6 text-lg leading-8 text-slate-700">
          <p>
            ד״ר אנה ברמלי היא רופאה מומחית בתחום האלרגיה והאימונולוגיה, עם ניסיון
            באבחון, בירור וטיפול במצבים אלרגיים ואימונולוגיים בילדים ובמבוגרים.
          </p>

          <p>
            מטופלים פונים אליה לצורך בירור של תסמינים אלרגיים, תגובות למזון או
            לתרופות, נזלת אלרגית, אסתמה, אורטיקריה ומצבים נוספים הקשורים למערכת
            החיסון.
          </p>

          <p>
            הדגש במרפאה הוא על אבחון מדויק, הסבר ברור, ותוכנית טיפול מותאמת אישית
            לכל מטופל ומטופלת.
          </p>
        </div>

        <section className="mt-14">
          <h2 className="text-2xl font-semibold">שאלות נפוצות</h2>

          <div className="mt-6 space-y-6">
            <div>
              <h3 className="text-xl font-medium">באילו תחומים ד״ר ברמלי מטפלת?</h3>
              <p className="mt-2 text-lg leading-8 text-slate-700">
                אלרגיה למזון, אלרגיה לתרופות, אסתמה, נזלת אלרגית, אורטיקריה
                ומצבים אימונולוגיים נוספים.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-medium">האם היא מטפלת בילדים וגם במבוגרים?</h3>
              <p className="mt-2 text-lg leading-8 text-slate-700">
                כן. המרפאה נותנת מענה לילדים ולמבוגרים בהתאם לסוג התסמינים והבירור
                הנדרש.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-medium">מתי פונים לבדיקה אצל מומחית לאלרגיה?</h3>
              <p className="mt-2 text-lg leading-8 text-slate-700">
                כאשר יש חשד לתגובה אלרגית, תסמינים חוזרים, תגובות למזון או תרופות,
                קשיי נשימה, נזלת אלרגית, פריחה או צורך בבירור אימונולוגי.
              </p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}