"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  Apple,
  Milk,
  Cookie,
  Pill,
  Bug,
  Flower2,
  Sparkles,
  Wind,
  AlertTriangle,
  Baby,
  Syringe,
  TestTube,
  Cat,
  Home,
  Droplets,
  Shield,
} from "lucide-react";

const conditions = [
  {
    id: "food-allergy",
    icon: Apple,
    title: "אלרגיה למזון",
    description:
      "אלרגיה למזון היא תגובה של מערכת החיסון לרכיב במזון הנחשב לגוף כ״איום״. התגובה יכולה להופיע בדקות או שעות לאחר האכילה.",
    symptoms: [
      "פריחה, נפיחות, גרד",
      "הקאות או כאבי בטן",
      "קוצר נשימה",
      "ירידת לחץ דם (במצבים קשים)",
    ],
    treatment: "הימנעות מהמזון, תכנון תזונתי, ולעיתים טיפול מונע.",
  },
  {
    id: "milk-allergy",
    icon: Milk,
    title: "אלרגיה לחלב",
    description:
      "תגובה חיסונית לחלבון חלב, נפוצה בעיקר בתינוקות וילדים צעירים. חשוב להבדיל בין אלרגיה לחלב לבין אי-סבילות ללקטוז.",
    symptoms: ["שלשולים", "פריחה", "כאבי בטן", "קוצר נשימה (במקרים חמורים)"],
    treatment: "הימנעות מוחלטת מחלב ומוצריו, מעקב תזונתי, בדיקות תקופתיות.",
  },
  {
    id: "peanut-allergy",
    icon: Cookie,
    title: "אלרגיה לבוטנים",
    description:
      "אלרגיה משמעותית שעלולה לגרום לתגובה חמורה. דורשת התנהלות קפדנית ומודעות גבוהה.",
    symptoms: ["נפיחות", "הקאות", "שיעול", "ירידת לחץ דם"],
    treatment: "הימנעות מוחלטת + נשיאת מזרק אדרנלין לפי הצורך.",
  },
  {
    id: "drug-allergy",
    icon: Pill,
    title: "אלרגיה לתרופות",
    description:
      "תגובה אלרגית המופיעה לאחר מתן תרופה מסוימת, לעיתים גם לאחר שנים של שימוש בטוח.",
    symptoms: [
      "פריחה או שלפוחיות",
      "נפיחות בפנים",
      "קוצר נשימה",
      "חום",
      "תגובה אנפילקטית",
    ],
    treatment: "אבחון מדויק כולל תשאול, בדיקות דם, ולעיתים תגר תרופתי מבוקר.",
  },
  {
    id: "insect-allergy",
    icon: Bug,
    title: "אלרגיה לדבורים ועקיצות חרקים",
    description:
      "אלרגיה לעקיצת דבורה או צרעה יכולה להיות קלה - או מסכנת חיים. חשוב לאבחן ולהיערך מראש.",
    symptoms: ["נפיחות משמעותית", "גרד מפושט", "סחרחורת", "קשיי נשימה"],
    treatment: "אדרנלין במקרים חמורים, טיפול מונע (אימונותרפיה).",
  },
  {
    id: "seasonal-allergy",
    icon: Flower2,
    title: "אלרגיה לאבקנים (עונתיות)",
    description:
      "תגובה עונתית לחלקיקי צמחים באוויר, מופיעה בעיקר באביב ובסתיו.",
    symptoms: ["עיטושים", "נזלת", "גירוי עיניים", "שיעול"],
    treatment: "תרופות אנטי-היסטמיניות, תרסיסים, ולעיתים חיסונים.",
  },
  {
    id: "urticaria",
    icon: Sparkles,
    title: "אורטיקריה (חרלת)",
    description:
      "פריחה אלרגית המתבטאת בגירוד חזק ונפיחות מקומית. יכולה להיות חריפה או כרונית.",
    symptoms: ["פריחה אדומה מוגבהת", "גרד עז", "נפיחות", "תסמינים משתנים"],
    treatment: "אבחון הגורם, טיפול תרופתי, ומעקב במקרים כרוניים.",
  },
  {
    id: "asthma",
    icon: Wind,
    title: "אסתמה אלרגית",
    description:
      "מצב בו דרכי הנשימה מגיבות לגירוי אלרגני. קשר ברור בין אלרגיות לבין הופעת אסתמה בילדים.",
    symptoms: ["צפצופים", "שיעול", "קוצר נשימה", "התקפים חוזרים"],
    treatment: "טיפול תרופתי לשליטה בתסמינים ומניעת התקפים.",
  },
  {
    id: "anaphylaxis",
    icon: AlertTriangle,
    title: "אנפילקסיס",
    description:
      "תגובה אלרגית מסכנת חיים הדורשת התערבות מיידית. חשוב להכיר את הסימנים ולהיערך מראש.",
    symptoms: [
      "ירידת לחץ דם",
      "קוצר נשימה",
      "נפיחות בלשון או בפנים",
      "אובדן הכרה",
    ],
    treatment: "הזרקת אדרנלין מיידית + פינוי למיון.",
  },
  {
    id: "allergic-rhinitis",
    icon: Droplets,
    title: "נזלת אלרגית (Allergic Rhinitis)",
    description:
      "נזלת אלרגית היא דלקת כרונית של רירית האף הנגרמת מחשיפה לאלרגנים כמו אבקנים, אבק בית, פרוות חיות מחמד ועובש. מדובר באחד המצבים האלרגיים הנפוצים ביותר בילדים ובמבוגרים.",
    symptoms: [
      "גודש ונזילה מהאף",
      "עיטושים חוזרים",
      "גרד באף, בעיניים ובחיך",
      "דמעות ואדמומיות בעיניים",
    ],
    treatment:
      "תרסיסי סטרואידים לאף, אנטי-היסטמינים, הימנעות מאלרגנים, ובמקרים כרוניים - אימונותרפיה (טיפול חיסוני).",
  },
  {
    id: "immunotherapy",
    icon: Shield,
    title: "אימונותרפיה (טיפול חיסוני)",
    description:
      "אימונותרפיה היא טיפול מתקדם המכוון לשנות את תגובת מערכת החיסון לאלרגן. הטיפול ניתן כזריקות או טיפות מתחת ללשון, לאורך תקופה של 3-5 שנים, ומטרתו להפחית את הרגישות לאלרגן באופן משמעותי ולאורך זמן.",
    symptoms: [
      "תגובות אלרגיות חוזרות שלא מגיבות לטיפול תרופתי",
      "נזלת אלרגית כרונית",
      "אלרגיה לעקיצות חרקים מסכנת חיים",
      "אסתמה אלרגית שקשה לשלוט בה",
    ],
    treatment:
      "חשיפה הדרגתית לאלרגן במינונים עולים, תחת השגחה רפואית. הטיפול מפחית סימפטומים של אלרגיה ב-70-90% מהמקרים ויכול למנוע התפתחות אסתמה בילדים.",
  },
  {
    id: "pet-allergy",
    icon: Cat,
    title: "אלרגיה לחיות מחמד",
    description:
      "אלרגיה לחיות מחמד (כלבים, חתולים ובעלי חיים אחרים) נגרמת מחלבונים הנמצאים ברוק, בשתן ובקשקשי העור של החיה. האלרגנים נישאים באוויר ונדבקים לרהיטים, בגדים ושטיחים.",
    symptoms: [
      "עיטושים ונזלת",
      "גרד בעיניים ודמעות",
      "פריחה או אורטיקריה",
      "החמרת אסתמה וקוצר נשימה",
    ],
    treatment:
      "הימנעות מחשיפה, ניקוי יסודי של הסביבה, תרופות אנטי-היסטמיניות, ובמקרים חמורים - אימונותרפיה.",
  },
  {
    id: "dust-allergy",
    icon: Home,
    title: "אלרגיה לאבק בית",
    description:
      "אלרגיה לאבק בית נגרמת בעיקר מקרדית אבק הבית - יצורים מיקרוסקופיים החיים במזרנים, כריות, שטיחים ורהיטים מרופדים. זהו אחד האלרגנים הנפוצים ביותר בבתים ישראליים בשל האקלים החם.",
    symptoms: ["גודש באף בעיקר בבוקר", "עיטושים חוזרים", "שיעול יבש", "החמרת אקזמה ואסתמה"],
    treatment:
      "כיסויים אנטי-אלרגניים למזרנים, הורדת לחות, ניקוי תדיר, תרופות לשליטה בסימפטומים של אלרגיה, ובמקרים כרוניים - אימונותרפיה.",
  },
];

const diagnosticServices = [
  {
    icon: TestTube,
    title: "בדיקות עור (Skin Prick Tests)",
    description: "בדיקות דקירה לאבחון מהיר של רגישויות אלרגיות",
  },
  {
    icon: Syringe,
    title: "בדיקות דם לאלרגיות",
    description: "בדיקות IgE ספציפיות לזיהוי אלרגנים",
  },
  {
    icon: Apple,
    title: "בדיקות תגר מזון",
    description: "בדיקות תגר מבוקרות במרפאה לאישוש או שלילת אלרגיה",
  },
  {
    icon: Pill,
    title: "בדיקות תגר תרופות",
    description: "בדיקות מבוקרות לאישוש או שלילת אלרגיה לתרופות",
  },
  {
    icon: Baby,
    title: "אבחון אלרגיות לילדים",
    description: "בדיקות מותאמות לגילאי תינוקות וילדים צעירים",
  },
  {
    icon: Wind,
    title: "בדיקות תפקודי ריאות",
    description: "אבחון והערכת אסתמה ומחלות נשימה אלרגיות",
  },
];

export default function ServicesClient() {
  return (
    <>
      <section className="gradient-hero py-20 md:py-28">
        <div className="container-medical">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <h1 className="mb-6 font-bold text-foreground">
              שירותים ומצבים רפואיים
            </h1>
            <p className="text-lg leading-relaxed text-muted-foreground">
              מגוון רחב של שירותי אבחון וטיפול באלרגיות, מותאמים אישית לכל מטופל.
              המידע להלן מסייע להורים להבין את המצבים השונים ולדעת מתי לפנות
              לאבחון מקצועי.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="section-spacing-lg bg-surface">
        <div className="container-medical">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-14 text-center"
          >
            <h2 className="mb-4 font-bold text-foreground">שירותי אבחון</h2>
            <p className="mx-auto max-w-2xl text-muted-foreground">
              בדיקות מקצועיות ומותאמות לכל גיל לאבחון מדויק של אלרגיות
            </p>
          </motion.div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {diagnosticServices.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                className="card-hover rounded-2xl border border-border/60 bg-card p-7"
              >
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-accent">
                  <service.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="mb-2 text-lg font-semibold text-foreground">
                  {service.title}
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-spacing-lg">
        <div className="container-medical">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-14 text-center"
          >
            <h2 className="mb-4 font-bold text-foreground">מצבים רפואיים</h2>
            <p className="mx-auto max-w-2xl text-muted-foreground">
              מידע מפורט על סוגי אלרגיות שונים, תסמינים ודרכי טיפול
            </p>
          </motion.div>

          <div className="space-y-8">
            {conditions.map((condition, index) => (
              <motion.article
                key={condition.id}
                id={condition.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="card-hover scroll-mt-24 rounded-2xl border border-border/60 bg-card p-7 md:p-9"
              >
                <div className="mb-6 flex items-start gap-4">
                  <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-2xl bg-accent">
                    <condition.icon className="h-7 w-7 text-primary" />
                  </div>
                  <div>
                    <h3 className="mb-2 text-xl font-bold text-foreground md:text-2xl">
                      {condition.title}
                    </h3>
                    <p className="leading-relaxed text-muted-foreground">
                      {condition.description}
                    </p>
                  </div>
                </div>

                <div className="grid gap-6 md:grid-cols-2">
                  <div className="rounded-2xl bg-surface p-5">
                    <h4 className="mb-3 font-semibold text-foreground">
                      תסמינים נפוצים:
                    </h4>
                    <ul className="space-y-2">
                      {condition.symptoms.map((symptom, i) => (
                        <li
                          key={i}
                          className="flex items-center gap-2 text-sm text-muted-foreground"
                        >
                          <span className="h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
                          {symptom}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="rounded-2xl bg-accent/40 p-5">
                    <h4 className="mb-3 font-semibold text-foreground">טיפול:</h4>
                    <p className="text-sm leading-relaxed text-muted-foreground">
                      {condition.treatment}
                    </p>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-spacing-lg bg-surface">
        <div className="container-medical">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-14 text-center"
          >
            <h2 className="mb-4 font-bold text-foreground">
              שאלות נפוצות על שירותי אלרגיה
            </h2>
          </motion.div>

          <div className="mx-auto max-w-4xl space-y-8">
            {[
              {
                q: "מהו תהליך האבחנה של אלרגיה פרטית בארץ?",
                a: "לרוב מתחיל בקליניקה ובאיסוף היסטוריה, לאחר מכן נעשות בדיקות מתאימות. ד״ר אנה ברמלי מסבירה את הצעדים וממליצה על הבדיקות המשלימות במידת הצורך. למידע נוסף ולקביעת תור ניתן לפנות דרך האתר.",
              },
              {
                q: "האם יש אפשרות לתור פרטי לאלרגיה בישראל?",
                a: "כן, ניתן לתאם תור פרטי עם אלרגולוגים בארץ. הבחירה במומחה המתאים חשובה לתוצאות מהימנות ולטיפול מותאם.",
              },
              {
                q: "אילו בדיקות אלרגיה פרטיות זמינות ללקוחות פרטיים?",
                a: "הבדיקות כוללות לעיתים בדיקות עור או דם לפי הצורך. סוג הבדיקה נבחר בהתאם לתסמינים ולשאלת האבחון.",
              },
              {
                q: "איך נכון להתכונן לבדיקת אלרגיה בילדים?",
                a: "חשוב להביא היסטוריה רפואית עדכנית ותרופות קבועות. מומלץ לתאם מראש ולוודא שהבדיקה מותאמת לצרכים של הילד.",
              },
              {
                q: "מה ההבדל בין בדיקות אלרגיה למזון לבין בדיקות לסוגי תרופות?",
                a: "מדובר בבדיקות שונות לפי סוג האלרגן והחשיפה הצפויה. ההתאמה נעשית לפי הסימפטומים וההיסטוריה הרפואית.",
              },
              {
                q: "מה כולל תור אלרגולוג פרטי לעומת ציבורי?",
                a: "בתור פרטי לרוב יש יותר גמישות בזמינות, יותר זמן הסבר ולעיתים גם תהליך בירור מהיר יותר.",
              },
              {
                q: "איך לבחור את האלרגולוג המתאים?",
                a: "כדאי לבחון ניסיון, תחומי התמחות, גישה טיפולית וזמינות למעקב ותמיכה.",
              },
              {
                q: "האם יש תסמינים נפוצים של אלרגיה שאפשר לזהות בבית?",
                a: "נזלת אלרגית, קוצר נשימה, פריחה, נפיחות ושיעול חוזר יכולים להעיד על צורך בבירור אלרגי מסודר.",
              },
              {
                q: "מה עושים אם מופיעים תסמינים חריפים או נפיחות?",
                a: "במקרה של תגובה חריפה או קשיי נשימה יש לפנות לטיפול דחוף. לאחר מכן מומלץ לבצע בירור מסודר אצל רופא אלרגיה.",
              },
              {
                q: "מה כולל התהליך כשפונים לד״ר אנה ברמלי?",
                a: "התהליך מתחיל בסקירה רפואית, הבנת מטרת הבירור, בחירת הבדיקות המתאימות ותכנון המשך טיפול או מעקב.",
              },
            ].map((item, index) => (
              <motion.article
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="rounded-xl border border-border bg-background p-6"
              >
                <h3 className="mb-3 text-lg font-semibold text-foreground">
                  {item.q}
                </h3>
                <p className="leading-relaxed text-muted-foreground">{item.a}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
