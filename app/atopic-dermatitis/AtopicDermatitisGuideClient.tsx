"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ChevronLeft, Calendar, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const tocItems = [
  { id: "what-is", label: "מהי אטופיק דרמטיטיס?" },
  { id: "symptoms-by-age", label: "תסמינים לפי גיל" },
  { id: "triggers", label: "טריגרים וגורמים מחמירים" },
  { id: "diagnosis", label: "אבחון" },
  { id: "treatment-tiers", label: "6 שלבי טיפול" },
  { id: "bathing", label: "טיפול אמבטיה ולחות" },
  { id: "biologics", label: "טיפולים ביולוגיים" },
  { id: "daily-management", label: "ניהול יומיומי" },
  { id: "allergy-link", label: "הקשר לאלרגיה" },
  { id: "faq", label: "שאלות נפוצות" },
];

const faqs = [
  {
    question: "מה ההבדל בין אטופיק דרמטיטיס לאגזמה?",
    answer:
      "אטופיק דרמטיטיס ואגזמה הם שמות שונים לאותה מחלה – עור כרונית, דלקתית ומגרדת. המונח 'אטופיק' מציין קשר לנטייה אלרגית כללית, בעוד 'אגזמה' הוא השם המוכר יותר בשפה היומיומית.",
  },
  {
    question: "האם אטופיק דרמטיטיס קשור לאלרגיה למזון?",
    answer:
      "יש קשר, אך לא תמיד סיבתי. כ-35% מהתינוקות עם AD בינוני-חמור סובלים גם מאלרגיה למזון. אכילת המזון האלרגני עלולה להחמיר את ה-AD, אך הימנעות ממנו אינה תמיד פותרת את ה-AD.",
  },
  {
    question: "מה הם הטריגרים הנפוצים ביותר להתלקחות AD?",
    answer:
      "גורמים מחמירים נפוצים: עור יבש מחוסר לחות, חום וזיעה מוגזמת, בגדי צמר או סינתטיים גסים, סבון וחומרי ניקיי, עשן סיגריות, עקה (סטרס) רגשית, זיהומים ויראליים, וחשיפה לאלרגנים סביבתיים כמו קרדית אבק הבית.",
  },
  {
    question: "האם ניתן לרפא לחלוטין אטופיק דרמטיטיס?",
    answer:
      "אין ריפוי מוחלט, אך ניתן להשיג שליטה מצוינת. כ-60% מהילדים עם AD חווים שיפור משמעותי עד הבגרות. עם טיפול נכון – לחות קבועה, טיפולים מקומיים, והימנעות מטריגרים – ניתן לנהל חיים תקינים לחלוטין.",
  },
  {
    question: "מתי כדאי לפנות לאלרגולוג ולא לרופא עור?",
    answer:
      "כשה-AD מלווה בחשד לאלרגיה למזון, כשיש נזלת אלרגית או אסתמה נלוות, כשהטיפול הרגיל לא עוזר, כשמעוניינים בהערכה לטיפולים ביולוגיים כמו dupilumab, או כשיש חשד לאלרגיה לחומר בטיפול.",
  },
  {
    question: "כמה פעמים ביום צריך למרוח קרם לחות?",
    answer:
      "לפחות פעמיים ביום, וכן מיד לאחר אמבטיה (תוך 3 דקות מהיציאה מהמים). בתקופות יבשות או בחורף, ייתכן שיידרש יותר. הכלל: העור לעולם לא אמור להרגיש יבש.",
  },
  {
    question: "האם סטרואידים מקומיים מסוכנים לשימוש ארוך טווח?",
    answer:
      "כשמשתמשים בצורה נכונה לפי הנחיות הרופא, סטרואידים מקומיים בעוצמה מתאימה לגיל ולאזור הגוף הם בטוחים. הסכנה היא שימוש בעוצמה גבוהה מדי בפנים/קפלים, או לאורך זמן ללא מעקב. טיפול מדורג 'proactive' – שימוש פעמיים בשבוע כשהעור רגוע – מפחית הישנויות ואת כמות הסטרואיד הכוללת.",
  },
  {
    question: "האם dupilumab (Dupixent) מתאים לכל הילדים עם AD?",
    answer:
      "Dupixent מאושר בישראל מגיל 6 חודשים לאטופיק דרמטיטיס בינוני-חמור שאינו מגיב לטיפולים אחרים. הוא ביולוגי ממוקד (חוסם IL-4/IL-13) עם פרופיל בטיחות מצוין. ההחלטה מתקבלת לאחר הערכה מקיפה של האלרגולוג.",
  },
];

function AuthorBadge({ compact = false }: { compact?: boolean }) {
  return (
    <div
      className={`rounded-2xl border border-border/60 bg-card ${
        compact ? "inline-flex p-4" : "block p-5"
      }`}
    >
      <div className="flex items-center gap-3">
        <div className="flex h-11 w-11 items-center justify-center rounded-full bg-accent font-bold text-primary">
          א
        </div>
        <div>
          <p className="font-semibold text-foreground">ד״ר אנה ברמלי</p>
          <p className="text-sm text-muted-foreground">
            מומחית לאלרגיה ואימונולוגיה
          </p>
        </div>
      </div>
    </div>
  );
}

function ArticleCTA({ variant }: { variant: "inline" | "section" }) {
  if (variant === "inline") {
    return (
      <div className="rounded-2xl border border-border/60 bg-card p-6">
        <h3 className="mb-2 text-lg font-bold text-foreground">
          ייעוץ לאטופיק דרמטיטיס
        </h3>
        <p className="mb-5 leading-relaxed text-muted-foreground">
          אם הטיפול הנוכחי אינו מספיק, יש התלקחויות חוזרות, או שרוצים לשקול
          טיפולים מתקדמים – ניתן לקבוע ייעוץ מסודר עם ד״ר ברמלי.
        </p>
        <div className="flex flex-col gap-3 sm:flex-row">
          <Button asChild>
            <Link href="/contact">
              <Calendar className="ml-2 h-4 w-4" />
              קביעת תור
            </Link>
          </Button>
          <Button variant="outline" asChild>
            <a href="tel:+972545808008">
              <Phone className="ml-2 h-4 w-4" />
              054-580-8008
            </a>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <section className="gradient-teal rounded-3xl p-8 text-center">
      <h2 className="mb-3 text-2xl font-bold text-foreground md:text-3xl">
        צריכים ליווי מקצועי לאטופיק דרמטיטיס?
      </h2>
      <p className="mx-auto mb-6 max-w-2xl leading-relaxed text-muted-foreground">
        הערכה מקיפה, תוכנית טיפול מדורגת מותאמת אישית, הכוונה לטיפולים
        ביולוגיים כולל dupilumab, וליווי שוטף להשגת שליטה מיטבית במחלה.
      </p>
      <div className="flex flex-col justify-center gap-3 sm:flex-row">
        <Button asChild>
          <Link href="/contact">
            <Calendar className="ml-2 h-4 w-4" />
            קביעת תור
          </Link>
        </Button>
        <Button variant="outline" asChild>
          <a href="tel:+972545808008">
            <Phone className="ml-2 h-4 w-4" />
            054-580-8008
          </a>
        </Button>
      </div>
    </section>
  );
}

export default function AtopicDermatitisGuideClient() {
  return (
    <div dir="rtl">
      {/* Hero */}
      <section className="gradient-hero py-12 md:py-16">
        <div className="container-medical max-w-3xl">
          <nav
            aria-label="Breadcrumb"
            className="mb-8 flex items-center gap-2 text-sm text-muted-foreground"
          >
            <Link href="/" className="transition-colors hover:text-foreground">
              ראשי
            </Link>
            <ChevronLeft className="h-3.5 w-3.5" />
            <span className="text-foreground">אטופיק דרמטיטיס – מדריך מקיף</span>
          </nav>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="mb-4 inline-block rounded-full bg-accent px-3 py-1 text-xs font-medium text-primary">
              מדריך מקיף
            </span>
            <h1 className="text-balance mb-6 font-bold text-foreground">
              אטופיק דרמטיטיס (אגזמה) – מדריך מקיף: תסמינים, טיפול וניהול יומיומי
            </h1>
            <p className="mb-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
              כל מה שצריך לדעת על אטופיק דרמטיטיס – מהבנת המחלה ותסמיניה לפי גיל,
              דרך שש שכבות טיפול מדורג, ועד ניהול יומיומי בישראל. מידע רפואי מהימן
              ומבוסס ראיות מאת ד״ר אנה ברמלי.
            </p>
            <AuthorBadge compact />
          </motion.div>
        </div>
      </section>

      {/* TOC */}
      <div className="container-medical max-w-3xl py-8">
        <nav className="rounded-2xl border border-border/60 bg-card p-6">
          <h2 className="mb-4 text-base font-bold text-foreground">
            תוכן עניינים
          </h2>
          <ol className="grid gap-2 sm:grid-cols-2">
            {tocItems.map((item, i) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  className="text-sm text-primary hover:underline"
                >
                  {i + 1}. {item.label}
                </a>
              </li>
            ))}
          </ol>
        </nav>
      </div>

      {/* Sections */}
      <div className="container-medical max-w-3xl space-y-12 pb-16">

        {/* What is AD */}
        <motion.section
          id="what-is"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="mb-4 text-xl font-bold text-foreground md:text-2xl">
            מהי אטופיק דרמטיטיס?
          </h2>
          <div className="space-y-4 leading-relaxed text-muted-foreground">
            <p>
              אטופיק דרמטיטיס (AD) היא מחלת עור כרונית, דלקתית ומגרדת – הנפוצה
              ביותר בקרב ילדים בישראל ובעולם. כ-20% מהילדים ו-5-10% מהמבוגרים
              סובלים ממנה. המחלה מתאפיינת בפרקי התלקחות (flare) שסירוגיהם בתקופות
              של שקט יחסי.
            </p>
            <p>
              המנגנון: AD נובעת משילוב של פגם בחסם העורי (חסר בחלבון פילגרין),
              דיספונקציה חיסונית עם דומיננטיות Th2, וגורמים סביבתיים. הפגם בחסם
              מאפשר כניסה של אלרגנים ומיקרואורגניזמים, הגורמים לדלקת ולגרד.
            </p>
            <p>
              ה-AD היא חלק מ״המסע האטופי״ (Atopic March): רצף מחלות שמתחיל לרוב
              בתינוקות עם AD, ממשיך לאלרגיה למזון, ולאחר מכן לנזלת אלרגית
              ואסתמה. הבנת הקשר הזה חיונית לתכנון טיפול מניעתי.
            </p>
          </div>
        </motion.section>

        {/* Symptoms by age */}
        <motion.section
          id="symptoms-by-age"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="mb-4 text-xl font-bold text-foreground md:text-2xl">
            תסמינים לפי גיל
          </h2>
          <div className="space-y-5 leading-relaxed text-muted-foreground">
            <div className="rounded-2xl border border-border/60 bg-card p-5">
              <h3 className="mb-3 font-semibold text-foreground">
                תינוקות (0–2 שנים)
              </h3>
              <ul className="list-inside list-disc space-y-1 text-sm">
                <li>פריחה אדומה, גסה ומגרדת בפנים ובקרקפת</li>
                <li>פריחה על הלחיים, הסנטר והמצח</li>
                <li>הפריחה נמצאת בדרך כלל בחיצוניות הידיים והרגליים</li>
                <li>בכי, חוסר שינה ושריטות כתוצאה מגרד עז</li>
                <li>עור יבש ומתקלף</li>
              </ul>
            </div>
            <div className="rounded-2xl border border-border/60 bg-card p-5">
              <h3 className="mb-3 font-semibold text-foreground">
                ילדים (2–12 שנים)
              </h3>
              <ul className="list-inside list-disc space-y-1 text-sm">
                <li>פריחה מתמקדת בקפלי הגוף: פרק הגפה, מאחורי הברך</li>
                <li>עור עבה ומחוספס (lichenification) באזורי שריטה כרונית</li>
                <li>כהות עור סביב העיניים (אלרגי שיינר)</li>
                <li>גרד עז שמחמיר בלילה</li>
                <li>נטייה לזיהומים עוריים חוזרים (staph aureus)</li>
              </ul>
            </div>
            <div className="rounded-2xl border border-border/60 bg-card p-5">
              <h3 className="mb-3 font-semibold text-foreground">
                מתבגרים ומבוגרים
              </h3>
              <ul className="list-inside list-disc space-y-1 text-sm">
                <li>פריחה בפנים, צוואר, פרק כף היד</li>
                <li>עור יבש מאוד ורגיש לאורך כל הגוף</li>
                <li>קשיי שינה, חרדה ודיכאון כתוצאה מגרד כרוני</li>
                <li>עיניים ייתכן שיהיו מעורבות (keratoconus, קטרקט)</li>
                <li>השפעה על איכות חיים ועל תפקוד יומיומי</li>
              </ul>
            </div>
          </div>
        </motion.section>

        {/* Triggers */}
        <motion.section
          id="triggers"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="mb-4 text-xl font-bold text-foreground md:text-2xl">
            טריגרים וגורמים מחמירים
          </h2>
          <div className="space-y-4 leading-relaxed text-muted-foreground">
            <p>
              זיהוי וצמצום הטריגרים האישיים הוא אחד העקרונות המרכזיים
              בניהול AD. הטריגרים שונים מאדם לאדם, אך הנפוצים ביותר הם:
            </p>
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <h3 className="mb-2 font-semibold text-foreground">
                  טריגרים סביבתיים
                </h3>
                <ul className="list-inside list-disc space-y-1 text-sm">
                  <li>קרדית אבק הבית (הנפוץ ביותר)</li>
                  <li>פרוות חיות מחמד</li>
                  <li>עובש ולחות</li>
                  <li>אבקני צמחים</li>
                  <li>עשן סיגריות</li>
                </ul>
              </div>
              <div>
                <h3 className="mb-2 font-semibold text-foreground">
                  טריגרים הקשורים לעור
                </h3>
                <ul className="list-inside list-disc space-y-1 text-sm">
                  <li>עור יבש מחוסר לחות</li>
                  <li>סבון, שמפו, חומרי ניקוי</li>
                  <li>בגדי צמר או סינתטיים</li>
                  <li>זיעה מוגזמת</li>
                  <li>חיכוך מגדי בגד</li>
                </ul>
              </div>
              <div>
                <h3 className="mb-2 font-semibold text-foreground">
                  גורמים פנימיים
                </h3>
                <ul className="list-inside list-disc space-y-1 text-sm">
                  <li>עקה (סטרס) רגשית</li>
                  <li>זיהומים ויראליים ובקטריאליים</li>
                  <li>שינויי הורמונים (גיל ההתבגרות, מחזור)</li>
                  <li>מחלות אחרות</li>
                </ul>
              </div>
              <div>
                <h3 className="mb-2 font-semibold text-foreground">
                  מזון (בחלק מהמקרים)
                </h3>
                <ul className="list-inside list-disc space-y-1 text-sm">
                  <li>חלב וביצים (תינוקות בעיקר)</li>
                  <li>בוטנים ושומשום</li>
                  <li>חיטה וסויה</li>
                  <li>דגים ופירות ים</li>
                </ul>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Diagnosis */}
        <motion.section
          id="diagnosis"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="mb-4 text-xl font-bold text-foreground md:text-2xl">
            אבחון אטופיק דרמטיטיס
          </h2>
          <div className="space-y-4 leading-relaxed text-muted-foreground">
            <p>
              אבחון AD הוא קליני – מבוסס על בדיקה פיזית, היסטוריה רפואית ומשפחתית,
              ועמידה בקריטריוני Hanifin & Rajka המוכרים. אין בדיקת מעבדה ספציפית
              שמאשרת AD, אך בדיקות עוזרות לשלול מצבים אחרים ולהעריך גורמים נלווים.
            </p>
            <ul className="list-inside list-disc space-y-2">
              <li>
                <strong className="text-foreground">IgE כולל ו-RAST ספציפי</strong> –
                לאיתור רגישות אלרגית ממוגדרת לאלרגנים מזון וסביבה
              </li>
              <li>
                <strong className="text-foreground">תבחיני עור (SPT)</strong> –
                לאלרגנים רלוונטיים
              </li>
              <li>
                <strong className="text-foreground">תרבית עורית</strong> –
                לחיפוש Staph aureus שמחמיר AD
              </li>
              <li>
                <strong className="text-foreground">ספירת דם + אאוזינופילים</strong> –
                מדד לפעילות אטופית
              </li>
              <li>
                <strong className="text-foreground">SCORAD / EASI</strong> –
                מדדי חומרה קליניים לתיעוד ולמעקב הטיפול
              </li>
            </ul>
          </div>
        </motion.section>

        <ArticleCTA variant="inline" />

        {/* Treatment tiers */}
        <motion.section
          id="treatment-tiers"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="mb-4 text-xl font-bold text-foreground md:text-2xl">
            6 שלבי טיפול מדורג ב-AD
          </h2>
          <div className="space-y-4 leading-relaxed text-muted-foreground">
            <p>
              הטיפול ב-AD מדורג לפי חומרת המחלה. כל שלב מוסיף על הקודם, ויש לנסות
              כל שלב לפני המעבר לבא אחריו:
            </p>
            <div className="space-y-3">
              {[
                {
                  step: "1",
                  title: "לחות ובסיס",
                  desc: "שמנת לחות ×2-3 ביום, מיד לאחר אמבטיה. Ceramide-based לחות מומלצת. בסיס לכל טיפול.",
                },
                {
                  step: "2",
                  title: "סטרואידים מקומיים (TCS)",
                  desc: "קורטיקוסטרואיד מקומי בעוצמה מותאמת לאזור ולגיל. שימוש קצר להתלקחויות, לאחר מכן מעבר לטיפול proactive (פעמיים בשבוע).",
                },
                {
                  step: "3",
                  title: "מעכבי קלסינאורין (TCI)",
                  desc: "Tacrolimus (Protopic) ו-pimecrolimus (Elidel) – לאזורים רגישים (פנים, קפלים). ללא תופעות הלוואי של סטרואידים.",
                },
                {
                  step: "4",
                  title: "Crisaborole / Tapinarof",
                  desc: "טיפולים מקומיים חדשים שאינם סטרואידים – מעכבי PDE-4. מאושרים לשימוש ממושך.",
                },
                {
                  step: "5",
                  title: "פוטותרפיה (UV)",
                  desc: "קרינת UV-B בעיקר – לAD בינוני-חמור במתבגרים ומבוגרים. טיפול פעמיים-שלוש בשבוע לאורך חודשים.",
                },
                {
                  step: "6",
                  title: "טיפולים ביולוגיים / JAK מעכבים",
                  desc: "Dupilumab (Dupixent), Tralokinumab – ביולוגיים ממוקדים. Upadacitinib, Abrocitinib – JAK מעכבים דרך הפה. לAD בינוני-חמור שלא הגיב לטיפולים קודמים.",
                },
              ].map((tier) => (
                <div
                  key={tier.step}
                  className="flex gap-4 rounded-xl border border-border/60 bg-card p-4"
                >
                  <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-accent text-sm font-bold text-primary">
                    {tier.step}
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">{tier.title}</p>
                    <p className="text-sm leading-relaxed">{tier.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Bathing */}
        <motion.section
          id="bathing"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="mb-4 text-xl font-bold text-foreground md:text-2xl">
            טיפול אמבטיה ולחות
          </h2>
          <div className="space-y-4 leading-relaxed text-muted-foreground">
            <p>
              טיפול נכון באמבטיה הוא אחד העקרונות החשובים ביותר בניהול AD.
              מה עושים ומה לא:
            </p>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-xl border border-green-200 bg-green-50 p-4">
                <h3 className="mb-2 font-semibold text-green-900">
                  מומלץ
                </h3>
                <ul className="list-inside list-disc space-y-1 text-sm text-green-800">
                  <li>מים פושרים (לא חמים) – 10-15 דקות</li>
                  <li>סבון עדין, ללא ניחוח</li>
                  <li>ניגוב עדין עם מגבת רכה (pat, לא שפשוף)</li>
                  <li>מריחת קרם לחות מיד לאחר האמבטיה (תוך 3 דקות)</li>
                  <li>מריחת התרופה המקומית לפני הלחות (אם מיועד לכך)</li>
                </ul>
              </div>
              <div className="rounded-xl border border-red-200 bg-red-50 p-4">
                <h3 className="mb-2 font-semibold text-red-900">
                  להימנע מ-
                </h3>
                <ul className="list-inside list-disc space-y-1 text-sm text-red-800">
                  <li>מים חמים מדי (מגבירים גרד)</li>
                  <li>אמבטיות ארוכות מדי</li>
                  <li>מוצרים עם ניחוח, צבע או כוהל</li>
                  <li>שפשוף אנרגטי עם מגבת</li>
                  <li>אמבטיות בועות (soap bubbles)</li>
                </ul>
              </div>
            </div>
            <p>
              אמבטיות עם תוסף סודה לשתייה (sodium bicarbonate) או תוסף קולואיד
              שיבולת שועל עשויים להקל את הגרד בתקופות התלקחות. יש לשאול את
              הרופא לגבי התאמה אישית.
            </p>
          </div>
        </motion.section>

        {/* Biologics */}
        <motion.section
          id="biologics"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="mb-4 text-xl font-bold text-foreground md:text-2xl">
            טיפולים ביולוגיים ו-JAK מעכבים
          </h2>
          <div className="space-y-4 leading-relaxed text-muted-foreground">
            <p>
              עשור האחרון הביא מהפכה בטיפול ב-AD בינוני-חמור. טיפולים ממוקדים
              שינו את יכולת השליטה במחלה עבור מטופלים שלא הגיבו לטיפולים
              מקומיים:
            </p>
            <div>
              <h3 className="mb-2 text-lg font-semibold text-foreground">
                Dupilumab (Dupixent)
              </h3>
              <p>
                נוגדן חד-שבטי שחוסם את מסלול ה-IL-4/IL-13 – הגורם המרכזי
                לדלקת ב-AD. ניתן בזריקה תת-עורית כל שבועיים. מאושר בישראל מגיל
                6 חודשים לAD בינוני-חמור. יעיל גם לנזלת אלרגית ואסתמה –
                מה שהופך אותו לבחירה אידיאלית למטופלים עם ה-״מסע האטופי״.
              </p>
            </div>
            <div>
              <h3 className="mb-2 text-lg font-semibold text-foreground">
                JAK מעכבים (Upadacitinib, Abrocitinib)
              </h3>
              <p>
                תרופות דרך הפה שחוסמות מסלולי JAK-STAT ומפחיתות דלקת. יעילות
                גבוהה עם תחילת פעולה מהירה יחסית. מאושרים ממגיל 12. דורשים
                בדיקות מעקב ומתאימים למקרים בהם יש צורך בהתחלת טיפול מהירה.
              </p>
            </div>
            <p>
              כל ההחלטות לגבי טיפולים ביולוגיים מתקבלות לאחר הערכה מקיפה,
              ובמעקב רפואי צמוד. חלק מהתרופות מכוסות על ידי קופות החולים לאחר
              הגשת בקשת מימון מיוחד.
            </p>
          </div>
        </motion.section>

        {/* Daily management */}
        <motion.section
          id="daily-management"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="mb-4 text-xl font-bold text-foreground md:text-2xl">
            ניהול יומיומי – טיפים להורים
          </h2>
          <div className="space-y-4 leading-relaxed text-muted-foreground">
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-xl border border-border/60 bg-card p-4">
                <h3 className="mb-2 font-semibold text-foreground">
                  לבוש ובית
                </h3>
                <ul className="list-inside list-disc space-y-1 text-sm">
                  <li>בגדים מכותנה רכה בלבד</li>
                  <li>שמירה על טמפרטורה נוחה (לא חמה מדי)</li>
                  <li>כיסויי מיטה אנטי-קרדית</li>
                  <li>חידור אוויר בחדר שינה</li>
                  <li>הימנעות מבובות קטיפה בחדר</li>
                </ul>
              </div>
              <div className="rounded-xl border border-border/60 bg-card p-4">
                <h3 className="mb-2 font-semibold text-foreground">
                  שינה וגרד לילי
                </h3>
                <ul className="list-inside list-disc space-y-1 text-sm">
                  <li>כפפות קטיפה בלילה לתינוקות</li>
                  <li>מריחת לחות לפני השינה</li>
                  <li>ציפורניים קצרות ומוחלקות</li>
                  <li>אנטיהיסטמינים לפי המלצת רופא לשינה</li>
                  <li>פעילות מרגיעה לפני השינה</li>
                </ul>
              </div>
              <div className="rounded-xl border border-border/60 bg-card p-4">
                <h3 className="mb-2 font-semibold text-foreground">
                  בגן/בית ספר
                </h3>
                <ul className="list-inside list-disc space-y-1 text-sm">
                  <li>תיאום עם הצוות על מריחת לחות</li>
                  <li>סבון עדין לשטיפת ידיים</li>
                  <li>בגד החלפה בתיק</li>
                  <li>הימנעות מחוגים עם זיעה רבה בתקופות התלקחות</li>
                </ul>
              </div>
              <div className="rounded-xl border border-border/60 bg-card p-4">
                <h3 className="mb-2 font-semibold text-foreground">
                  ספורט ופעילות
                </h3>
                <ul className="list-inside list-disc space-y-1 text-sm">
                  <li>שחייה: ניגוב מיידי ולחות לאחר הבריכה</li>
                  <li>לחות לפני פעילות</li>
                  <li>בגדי ספורט מכותנה רכה</li>
                  <li>מקלחת מיד לאחר פעילות</li>
                </ul>
              </div>
            </div>
            <div className="rounded-2xl border border-amber-200 bg-amber-50 p-5">
              <h3 className="mb-2 font-semibold text-amber-900">
                כאשר יש התלקחות
              </h3>
              <p className="text-sm text-amber-800">
                הגדילו את תדירות מריחת הלחות, החלו תרופה מקומית (סטרואיד/TCI)
                מהר ככל האפשר, זיהוי הטריגר, ופנו לרופא אם אין שיפור תוך
                3-5 ימים, אם יש סימני זיהום (מוגלה, חום, קרום צהוב), או אם
                הגרד בלתי-נסבל.
              </p>
            </div>
          </div>
        </motion.section>

        {/* Allergy link */}
        <motion.section
          id="allergy-link"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="mb-4 text-xl font-bold text-foreground md:text-2xl">
            הקשר בין AD לאלרגיה
          </h2>
          <div className="space-y-4 leading-relaxed text-muted-foreground">
            <p>
              AD ואלרגיה קשורים קשר הדוק. כ-35% מהתינוקות עם AD בינוני-חמור
              יפתחו גם אלרגיה למזון. ה-AD מגבירה את חדירות העור ומאפשרת רגישות
              לאלרגנים, בעוד שהאלרגיה עלולה להחמיר את ה-AD.
            </p>
            <p>
              ה-״מסע האטופי״: ילדים שמתחילים עם AD בתינוקות נמצאים בסיכון
              מוגבר לפתח אלרגיה למזון (לרוב עד גיל 2), לאחר מכן נזלת אלרגית
              (גיל 3-5), ולבסוף אסתמה (גיל 5 ומעלה). זיהוי מוקדם ושליטה ב-AD
              עשויים להפחית את הסיכון להמשך המסע.
            </p>
            <p>
              כשיש חשד לאלרגיה למזון המחמירה את ה-AD, חשוב לבצע הערכה מקיפה
              אצל אלרגולוג. הימנעות מאלרגן ללא אבחון מוכח עלולה להזיק יותר
              מאשר להועיל.
            </p>
          </div>
        </motion.section>

        {/* FAQ */}
        <motion.section
          id="faq"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="mb-6 text-xl font-bold text-foreground md:text-2xl">
            שאלות נפוצות על אטופיק דרמטיטיס
          </h2>
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, i) => (
              <AccordionItem
                key={i}
                value={`faq-${i}`}
                className="rounded-2xl border border-border/60 bg-card px-5"
              >
                <AccordionTrigger className="py-4 text-right font-semibold text-foreground hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="pb-4 leading-relaxed text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.section>

        {/* Related links */}
        <motion.section
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-2xl border border-border/60 bg-card p-6"
        >
          <h2 className="mb-4 text-lg font-bold text-foreground">
            מידע נוסף שיעניין אתכם
          </h2>
          <ul className="space-y-2">
            {[
              { href: "/alergiya-beyeladim", label: "אלרגיה בילדים – מדריך מלא להורים" },
              { href: "/alergia-lemazon", label: "אלרגיה למזון – מדריך מקיף" },
              { href: "/faq", label: "שאלות נפוצות על אלרגיה" },
              { href: "/blog", label: "בלוג אלרגיה ואימונולוגיה" },
            ].map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="flex items-center gap-2 text-sm text-primary hover:underline"
                >
                  <ChevronLeft className="h-3.5 w-3.5" />
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </motion.section>

        <ArticleCTA variant="section" />

        {/* Author */}
        <AuthorBadge />
      </div>
    </div>
  );
}
