import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "אלרגיה בילדים | תסמינים, אבחון וטיפול",
  description:
    "מדריך על אלרגיה בילדים: תסמינים נפוצים, מצבים שדורשים בירור, אפשרויות אבחון וטיפול, ומתי לפנות למומחית לאלרגיה ואימונולוגיה.",
  alternates: {
    canonical: "https://ihaveallergy.com/alergiya-beyeladim",
  },
};

export default function AllergyChildrenPage() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <div className="mx-auto max-w-4xl px-6 py-16">
        <h1 className="text-4xl font-bold tracking-tight">
          אלרגיה בילדים
        </h1>

        <p className="mt-4 text-xl text-slate-600">
          תסמינים, אבחון, טיפול ומתי כדאי לפנות לבירור
        </p>

        <div className="mt-10 space-y-6 text-lg leading-8 text-slate-700">
          <p>
            אלרגיה בילדים יכולה להופיע בצורות שונות, החל מתסמינים נשימתיים,
            דרך תגובות עור, ועד תגובות למזון או לתרופות. לעיתים מדובר בתסמינים
            קלים וחולפים, ולעיתים יש צורך בבירור מסודר כדי להבין את מקור הבעיה
            ולהתאים טיפול נכון.
          </p>

          <p>
            כאשר התסמינים חוזרים, מחמירים, או משפיעים על איכות החיים של הילד
            והמשפחה, חשוב לשקול פנייה למומחית לאלרגיה ואימונולוגיה לצורך אבחון
            מדויק ותוכנית טיפול מסודרת.
          </p>
        </div>

        <section className="mt-14">
          <h2 className="text-2xl font-semibold">תסמינים נפוצים</h2>
          <ul className="mt-4 list-disc space-y-2 pr-6 text-slate-700">
            <li>נזלת אלרגית, גודש או עיטושים חוזרים</li>
            <li>שיעול, קוצר נשימה או החמרה נשימתית</li>
            <li>פריחות, גרד, אורטיקריה או תגובות עור</li>
            <li>תגובה לאחר אכילת מזון מסוים</li>
            <li>תגובה לאחר נטילת תרופה</li>
            <li>נפיחות, אי נוחות או תסמינים חוזרים ללא הסבר ברור</li>
          </ul>
        </section>

        <section className="mt-14">
          <h2 className="text-2xl font-semibold">מתי כדאי לפנות לבירור?</h2>
          <div className="mt-4 space-y-4 text-lg leading-8 text-slate-700">
            <p>
              כדאי לפנות לבדיקה כאשר יש חשד לאלרגיה למזון, תגובות נשנות,
              תסמינים שמופיעים בעונות מסוימות, בעיות נשימה חוזרות, או תגובות
              שמעלות שאלה האם מדובר באלרגיה אמיתית או ברגישות אחרת.
            </p>

            <p>
              בירור מוקדם יכול לעזור להבין ממה להימנע, אילו בדיקות באמת דרושות,
              ומהו הטיפול הנכון לכל ילד או ילדה.
            </p>
          </div>
        </section>

        <section className="mt-14">
          <h2 className="text-2xl font-semibold">איך נראה תהליך האבחון?</h2>
          <div className="mt-4 space-y-4 text-lg leading-8 text-slate-700">
            <p>
              האבחון כולל תשאול רפואי מסודר, הבנת אופי התסמינים, סקירת רקע
              רפואי ומשפחתי, ובמידת הצורך גם בדיקות משלימות בהתאם למקרה.
            </p>

            <p>
              המטרה היא להגיע לאבחנה מדויקת, להימנע מבדיקות מיותרות, ולהתאים
              תוכנית טיפול או מעקב לפי הצורך.
            </p>
          </div>
        </section>

        <section className="mt-14">
          <h2 className="text-2xl font-semibold">מה כולל הטיפול?</h2>
          <div className="mt-4 space-y-4 text-lg leading-8 text-slate-700">
            <p>
              הטיפול תלוי בסוג האלרגיה ובחומרת התסמינים. לעיתים הדגש הוא על
              הימנעות מגורם מעורר, ולעיתים על טיפול תרופתי, תוכנית מעקב, או
              הדרכה מסודרת להורים ולמשפחה.
            </p>

            <p>
              בכל מקרה, חשוב שהטיפול יתבסס על אבחון נכון ולא על השערות בלבד.
            </p>
          </div>
        </section>

        <section className="mt-14 rounded-2xl border border-slate-200 p-6">
          <h2 className="text-2xl font-semibold">רוצה לקרוא עוד?</h2>
          <div className="mt-4 space-y-3 text-lg text-slate-700">
            <p>
              אפשר להמשיך אל{" "}
              <Link
                href="/dr-anna-brameli"
                className="font-medium text-blue-700 underline underline-offset-4"
              >
                הפרופיל המקצועי של ד״ר אנה ברמלי
              </Link>
              {" "}או אל{" "}
              <Link
                href="/contact"
                className="font-medium text-blue-700 underline underline-offset-4"
              >
                עמוד יצירת הקשר
              </Link>
              .
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}