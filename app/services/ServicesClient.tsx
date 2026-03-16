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
    symptoms: ["פריחה או שלפוחיות", "נפיחות בפנים", "קוצר נשימה", "חום", "תגובה אנפילקטית"],
    treatment: "אבחון מדויק כולל תשאול, בדיקות דם, ולעיתים תגר תרופתי מבוקר.",
  },
  {
    id: "insect-allergy",
    icon: Bug,
    title: "אלרגיה לדבורים ועקיצות חרקים",
    description:
      "אלרגיה לעקיצת דבורה או צרעה יכולה להיות קלה — או מסכנת חיים. חשוב לאבחן ולהיערך מראש.",
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
    symptoms: ["ירידת לחץ דם", "קוצר נשימה", "נפיחות בלשון או בפנים", "אובדן הכרה"],
    treatment: "הזרקת אדרנלין מיידית + פינוי למיון.",
  },
  {
    id: "allergic-rhinitis",
    icon: Droplets,
    title: "נזלת אלרגית (Allergic Rhinitis)",
    description:
      "נזלת אלרגית היא דלקת כרונית של רירית האף הנגרמת מחשיפה לאלרגנים כמו אבקנים, אבק בית, פרוות חיות מחמד ועובש. מדובר באחד המצבים האלרגיים הנפוצים ביותר בילדים ובמבוגרים.",
    symptoms: ["גודש ונזילה מהאף", "עיטושים חוזרים", "גרד באף, בעיניים ובחיך", "דמעות ואדמומיות בעיניים"],
    treatment:
      "תרסיסי סטרואידים לאף, אנטי-היסטמינים, הימנעות מאלרגנים, ובמקרים כרוניים — אימונותרפיה (טיפול חיסוני).",
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
    symptoms: ["עיטושים ונזלת", "גרד בעיניים ודמעות", "פריחה או אורטיקריה", "החמרת אסתמה וקוצר נשימה"],
    treatment:
      "הימנעות מחשיפה, ניקוי יסודי של הסביבה, תרופות אנטי-היסטמיניות, ובמקרים חמורים — אימונותרפיה.",
  },
  {
    id: "dust-allergy",
    icon: Home,
    title: "אלרגיה לאבק בית",
    description:
      "אלרגיה לאבק בית נגרמת בעיקר מקרדית אבק הבית — יצורים מיקרוסקופיים החיים במזרנים, כריות, שטיחים ורהיטים מרופדים. זהו אחד האלרגנים הנפוצים ביותר בבתים ישראליים בשל האקלים החם.",
    symptoms: ["גודש באף בעיקר בבוקר", "עיטושים חוזרים", "שיעול יבש", "החמרת אקזמה ואסתמה"],
    treatment:
      "כיסויים אנטי-אלרגניים למזרנים, הורדת לחות, ניקוי תדיר, תרופות לשליטה בסימפטומים של אלרגיה, ובמקרים כרוניים — אימונותרפיה.",
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
              מגוון רחב של שירותי אבחון וטיפול באלרגיות, מותאמים אישית לכל מטופל. המידע להלן מסייע להורים להבין את המצבים השונים ולדעת מתי לפנות לאבחון מקצועי.
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
