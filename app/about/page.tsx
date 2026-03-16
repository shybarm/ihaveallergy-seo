import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "אודות ד״ר אנה ברמלי | רקע מקצועי, השכלה וגישה טיפולית",
  description:
    "היכרות עם ד״ר אנה ברמלי, רופאה מומחית לאלרגיה ואימונולוגיה בעלת ניסיון קליני רחב. מידע על השכלה, ניסיון מקצועי, והגישה הטיפולית.",
  alternates: {
    canonical: "https://ihaveallergy.com/about",
  },
};

const education = [
  {
    period: "2006-2013",
    title: "לימודי רפואה M.D.",
    institution: "אוניברסיטת בן גוריון בנגב, הפקולטה למדעי הבריאות",
    details: "תוכנית משולבת לימודים ורפואה",
  },
  {
    period: "2015-2020",
    title: "התמחות ברפואת ילדים",
    institution: "מרכז שניידר לרפואת ילדים, פתח תקווה",
    details: "מחלקת ילדים ב'",
  },
  {
    period: "2022-2024",
    title: "תת-התמחות באלרגיה ואימונולוגיה",
    institution: "Vanderbilt University Medical Center, Nashville, TN",
    details: "Allergy, Pulmonary, and Critical Care Medicine",
  },
  {
    period: "2024-2025",
    title: "תת-התמחות במחלות זיהומיות ילדים",
    institution: "Vanderbilt University Medical Center, Nashville, TN",
    details: "Division of Pediatric Infectious Diseases",
  },
];

const achievements = [
  {
    title: "פרס המדריך המצטיין",
    description: "פרס המדריך המצטיין לשנת 2019-2020, אוניברסיטת תל אביב",
  },
  {
    title: "מרצה בכירה",
    description: "מרצה בקורסי הכנה לבחינות רישוי ברפואה וקורסי אחיות",
  },
  {
    title: "פעילות התנדבותית",
    description: "רופאה מתנדבת במחנה כפר הירדן לילדים עם מחלות כרוניות",
  },
];

const schema = {
  "@context": "https://schema.org",
  "@type": "MedicalWebPage",
  name: "אודות ד״ר אנה ברמלי",
  description:
    "היכרות עם ד״ר אנה ברמלי, רופאה מומחית לאלרגיה ואימונולוגיה בעלת ניסיון קליני רחב. מידע על השכלה, ניסיון מקצועי, והגישה הטיפולית.",
  url: "https://ihaveallergy.com/about",
  mainEntity: {
    "@type": "Physician",
    name: "ד״ר אנה ברמלי",
    medicalSpecialty: "AllergyAndImmunology",
  },
};

export default function AboutPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      <section className="gradient-hero py-20 md:py-28">
        <div className="container-medical">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-bold text-foreground mb-6">
              אודות ד״ר אנה ברמלי
              <span className="block text-primary mt-3 text-[22px] md:text-[28px] lg:text-[32px]">
                רקע מקצועי, השכלה וגישה טיפולית
              </span>
            </h1>

            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              ד״ר ברמלי היא רופאה בכירה לאלרגיה ואימונולוגיה, בעלת ניסיון של שנים
              באבחון, טיפול ומניעה של מגוון רחב של אלרגיות בילדים ובמבוגרים.
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed">
              עבודתה משלבת מחקר קליני, גישה אנושית והבנה עמוקה של מערכת החיסון.
              הגישה הטיפולית מבוססת על הקשבה, התאמה אישית והעברת ידע למטופלים
              ולמשפחותיהם.
            </p>
          </div>
        </div>
      </section>

      <section className="section-spacing-lg bg-surface">
        <div className="container-medical max-w-4xl">
          <h2 className="font-bold text-foreground mb-6 text-center">
            הגישה המקצועית
          </h2>

          <div className="space-y-6 text-lg text-muted-foreground leading-relaxed text-center">
            <p>
              טיפול באלרגיה מתחיל בהקשבה. כל מטופל מביא איתו סיפור רפואי אחר,
              ולכן האבחון והטיפול מותאמים אישית בהתאם לתסמינים, ההיסטוריה
              והצרכים של המשפחה.
            </p>
            <p>
              אני מאמינה בשיתוף מלא של ההורים והמטופלים בתהליך הטיפולי, ובהעברת
              ידע שמאפשר להתמודד עם האלרגיה בביטחון ובשגרה יומיומית תקינה.
            </p>
          </div>
        </div>
      </section>

      <section className="section-spacing-lg">
        <div className="container-medical max-w-4xl">
          <h2 className="font-bold text-foreground mb-10 text-center">
            השכלה והתמחות
          </h2>

          <div className="space-y-6">
            {education.map((item, index) => (
              <div
                key={index}
                className="bg-card rounded-2xl p-6 border border-border/60 card-hover"
              >
                <div className="text-sm text-primary font-medium">
                  {item.period}
                </div>
                <h3 className="text-lg font-semibold text-foreground mt-2">
                  {item.title}
                </h3>
                <p className="text-muted-foreground mt-1">{item.institution}</p>
                <p className="text-sm text-muted-foreground/80 mt-1">
                  {item.details}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-spacing-lg bg-surface-warm">
        <div className="container-medical max-w-4xl">
          <h2 className="font-bold text-foreground mb-10 text-center">
            הישגים ופעילות
          </h2>

          <div className="grid md:grid-cols-3 gap-5">
            {achievements.map((item, index) => (
              <div
                key={index}
                className="bg-card rounded-2xl p-7 border border-border/60 text-center card-hover"
              >
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-spacing-lg">
        <div className="container-medical max-w-4xl">
          <h2 className="font-bold text-foreground mb-8 text-center">
            הסמכות ורישיונות
          </h2>

          <div className="bg-card rounded-2xl p-7 border border-border/60 space-y-4">
            <div className="flex items-center justify-between py-3 border-b border-border last:border-b-0">
              <span className="text-foreground font-medium">
                רישיון רפואה ישראלי
              </span>
              <span className="text-muted-foreground text-sm">מס׳ 132226</span>
            </div>

            <div className="flex items-center justify-between py-3 border-b border-border last:border-b-0">
              <span className="text-foreground font-medium">
                ECFMG Certification
              </span>
              <span className="text-muted-foreground text-sm">
                מס׳ 0-829-xxx-8
              </span>
            </div>

            <div className="flex items-center justify-between py-3">
              <span className="text-foreground font-medium">
                מומחית ברפואת ילדים
              </span>
              <span className="text-muted-foreground text-sm">
                משרד הבריאות
              </span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}