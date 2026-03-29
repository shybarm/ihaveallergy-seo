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
  { id: "what-is", label: "מהי אלרגיה למזון?" },
  { id: "allergens", label: "אלרגנים נפוצים בישראל" },
  { id: "symptoms", label: "תסמינים לפי חומרה" },
  { id: "diagnosis", label: "אבחון אלרגיה למזון" },
  { id: "treatment", label: "טיפול ואימונותרפיה" },
  { id: "anaphylaxis", label: "אנפילקסיס ואפיפן" },
  { id: "labels", label: "קריאת תוויות מזון" },
  { id: "daily-life", label: "חיים עם אלרגיה בישראל" },
  { id: "children", label: "אלרגיה למזון בילדים" },
  { id: "faq", label: "שאלות נפוצות" },
];

const faqs = [
  {
    question: "מהם 8 האלרגנים הנפוצים ביותר בישראל?",
    answer:
      "שמונת האלרגנים המובילים הם: חלב פרה, ביצים, בוטנים, אגוזי עץ, שומשום (טחינה), חיטה, דגים ופירות ים, וסויה. בישראל שומשום נפוץ במיוחד בשל צריכת טחינה גבוהה.",
  },
  {
    question: "מה ההבדל בין אלרגיה למזון לאי-סבילות למזון?",
    answer:
      "אלרגיה למזון היא תגובה חיסונית הכוללת ייצור נוגדני IgE ועלולה לגרום לאנפילקסיס מסכן חיים. אי-סבילות (כמו לאקטוז) היא תגובת מערכת העיכול שאינה מסוכנת. ההבדל קריטי לאבחון ולניהול הנכון.",
  },
  {
    question: "האם אפשר לגדל מחדש סבילות לאלרגן מזון?",
    answer:
      "כן - אימונותרפיה אוראלית (OIT) היא טיפול מוכח שבו חושפים את הגוף לכמויות הולכות וגדלות של האלרגן עד להשגת סבילות. הטיפול מתבצע תחת פיקוח אלרגולוג מנוסה ויכול לאפשר אכילה מבוקרת של האלרגן.",
  },
  {
    question: "מה עושים בתגובה אנפילקטית חמורה?",
    answer:
      "מזריקים אפינפרין (אפיפן) מיד לשריר הירך, קוראים לאמבולנס (101), שוכבים עם רגליים מורמות (אם אין קשיי נשימה), ואם אין שיפור לאחר 5-10 דקות - מזריקים מנה שנייה. אפיפן תמיד קודם לאנטיהיסטמין.",
  },
  {
    question: "איך קוראים תוויות מזון בישראל לצורך זיהוי אלרגנים?",
    answer:
      "לפי תקנות תיווית מזון ישראליות, יצרנים חייבים לציין בבירור את האלרגנים המוגדרים. חפשו את הסעיף 'מכיל' ו'עלול להכיל' בתווית. שימו לב לשמות נסתרים: קזאין=חלב, גלוטן=חיטה, אלבומין=ביצה.",
  },
  {
    question: "האם ילד עם אלרגיה למזון יכול לאכול במסעדות?",
    answer:
      "כן, אך בזהירות. מומלץ להתקשר מראש, לציין את האלרגיה בבירור, לשאול על זיהום צולב במטבח, ולהקפיד על שאילת שאלות לגבי כל מנה. מסעדות רבות בישראל עוברות הכשרות בנושא.",
  },
  {
    question: "מתי כדאי לפנות לאלרגולוג ולא לרופא ילדים?",
    answer:
      "כשיש תגובה חמורה לאחר אכילה, כשתסמינים חוזרים ואינם מוסברים, כשנדרש אפיפן, כשרוצים לבצע בדיקות RAST/SPT מקיפות, או כשמעוניינים בהערכה לפני אימונותרפיה אוראלית.",
  },
  {
    question: "האם אלרגיה למזון עוברת בגיל מבוגר?",
    answer:
      "חלק מהאלרגיות נעלמות עם הגיל - אלרגיה לחלב וביצים ב-80% מהילדים עד גיל 16. אלרגיה לבוטנים, שומשום ואגוזי עץ נוטה להישאר לכל החיים. בדיקות תקופתיות עם האלרגולוג יכולות לאשר האם חלה שינוי.",
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
          חשד לאלרגיה למזון?
        </h3>
        <p className="mb-5 leading-relaxed text-muted-foreground">
          בדיקה מקיפה ואבחון מדויק הם הצעד הראשון לניהול בטוח של אלרגיה למזון.
          ניתן לקבוע ייעוץ ולקבל תוכנית טיפול מותאמת אישית.
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
        צריכים ליווי מקצועי לאלרגיה למזון?
      </h2>
      <p className="mx-auto mb-6 max-w-2xl leading-relaxed text-muted-foreground">
        אבחון מדויק, הדרכה מעשית לקריאת תוויות, תוכנית חירום אישית, והכוונה
        לטיפולים מתקדמים כולל אימונותרפיה אוראלית.
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

export default function FoodAllergyGuideClient() {
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
            <span className="text-foreground">אלרגיה למזון - מדריך מקיף</span>
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
              אלרגיה למזון - מדריך מקיף: אלרגנים, תסמינים, אבחון וטיפול
            </h1>
            <p className="mb-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
              כל מה שצריך לדעת על אלרגיה למזון - מזיהוי אלרגנים נפוצים ותסמינים,
              דרך אבחון נכון, ועד ניהול בטוח של חיי יומיום בישראל. מידע רפואי
              מהימן ומבוסס ראיות מאת ד״ר אנה ברמלי.
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

        {/* What is food allergy */}
        <motion.section
          id="what-is"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="mb-4 text-xl font-bold text-foreground md:text-2xl">
            מהי אלרגיה למזון?
          </h2>
          <div className="space-y-4 leading-relaxed text-muted-foreground">
            <p>
              אלרגיה למזון היא תגובת יתר של מערכת החיסון לחלבון במזון מסוים.
              בניגוד לאי-סבילות למזון - שהיא תגובת מערכת העיכול בלבד - אלרגיה
              למזון מערבת נוגדני IgE וגורמת לתגובה מערכתית שעלולה לסכן חיים תוך
              דקות מהחשיפה.
            </p>
            <p>
              בישראל, כ-6-8% מהילדים וכ-2-3% מהמבוגרים סובלים מאלרגיה למזון
              מאובחנת. הנתון האמיתי עשוי להיות גבוה יותר בשל תת-אבחון. אלרגיה
              למזון היא אחת הסיבות השכיחות לאנפילקסיס - תגובה אלרגית חמורה
              הדורשת טיפול חירום מיידי.
            </p>
            <p>
              מנגנון המחלה: בחשיפה ראשונה לאלרגן, מערכת החיסון מייצרת נוגדני IgE
              ספציפיים. בחשיפה חוזרת, נוגדנים אלה מפעילים תאי פיטום ובזופילים
              שמשחררים היסטמין וחומרים נוספים - הגורמים לתסמינים האלרגיים.
            </p>
          </div>
        </motion.section>

        {/* Common allergens */}
        <motion.section
          id="allergens"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="mb-4 text-xl font-bold text-foreground md:text-2xl">
            אלרגנים נפוצים בישראל
          </h2>
          <div className="space-y-6 leading-relaxed text-muted-foreground">
            <div>
              <h3 className="mb-2 text-lg font-semibold text-foreground">
                חלב פרה
              </h3>
              <p>
                האלרגן השכיח ביותר בתינוקות ופעוטות. כ-2-3% מהתינוקות מפתחים
                אלרגיה לחלב. רוב הילדים מתגברים עליה עד גיל 5-6, אך ב-20% היא
                נמשכת לבגרות. חשוב: אלרגיה לחלב שונה לחלוטין מאי-סבילות
                ללאקטוז.
              </p>
            </div>
            <div>
              <h3 className="mb-2 text-lg font-semibold text-foreground">
                ביצים
              </h3>
              <p>
                אחד האלרגנים הנפוצים ביותר בילדים בישראל. רוב הילדים מתגברים על
                אלרגיה לביצים עד גיל 16. חלקם יכולים לסבול ביצים אפויות בחום גבוה
                (עוגיות, לחם) אך לא ביצה גולמית או חצי-מבושלת.
              </p>
            </div>
            <div>
              <h3 className="mb-2 text-lg font-semibold text-foreground">
                בוטנים
              </h3>
              <p>
                אחת האלרגיות המסוכנות יותר - עלולה לגרום לאנפילקסיס בכמויות
                זעירות. כ-80% מהאלרגיה לבוטנים נמשכת לכל החיים. עם זאת,
                מחקר LEAP הוכיח שחשיפה מוקדמת (4-6 חודשים) מפחיתה את הסיכון
                לפיתוח האלרגיה ב-80%.
              </p>
            </div>
            <div>
              <h3 className="mb-2 text-lg font-semibold text-foreground">
                שומשום (טחינה)
              </h3>
              <p>
                אלרגן ייחודי לאוכלוסייה הישראלית בשל צריכה גבוהה של טחינה, חומוס
                ומאכלים מזרח-תיכוניים. שומשום נחשב לאחד מ-14 האלרגנים הגדולים
                ומחויב בסימון בתיוג מזון. תגובות יכולות להיות חמורות מאוד.
              </p>
            </div>
            <div>
              <h3 className="mb-2 text-lg font-semibold text-foreground">
                אגוזי עץ
              </h3>
              <p>
                קבוצה הכוללת אגוזי מלך, שקדים, קשיו, אגוזי לוז, פקאן, פיסטוק
                ועוד. אלרגיה לאגוז אחד אינה מחייבת אלרגיה לכולם, אך שכיחה
                יותר. יש לבצע בדיקות ספציפיות לכל אגוז בנפרד.
              </p>
            </div>
            <div>
              <h3 className="mb-2 text-lg font-semibold text-foreground">
                חיטה, סויה, דגים ופירות ים
              </h3>
              <p>
                חיטה - הגלוטן הוא הרכיב האחראי לתגובה אלרגית (שונה ממחלת
                צליאק). סויה - שכיחה בתינוקות, רובם מתגברים עליה. דגים ופירות ים
                - נוטים להישאר לכל החיים ועלולים לגרום לתגובות חמורות.
              </p>
            </div>
          </div>
        </motion.section>

        <ArticleCTA variant="inline" />

        {/* Symptoms */}
        <motion.section
          id="symptoms"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="mb-4 text-xl font-bold text-foreground md:text-2xl">
            תסמינים לפי חומרה
          </h2>
          <div className="space-y-6 leading-relaxed text-muted-foreground">
            <div className="rounded-2xl border border-green-200 bg-green-50 p-5">
              <h3 className="mb-2 font-semibold text-green-900">קלה-בינונית</h3>
              <ul className="list-inside list-disc space-y-1 text-green-800">
                <li>אורטיקריה (פריחה/אדמומיות/גרד בעור)</li>
                <li>נפיחות בשפתיים, לשון או עיניים</li>
                <li>עיטושים, נזילת אף, גרד בגרון</li>
                <li>בחילה, כאבי בטן, הקאות</li>
                <li>גרד בפה (תסמונת אלרגיה אוראלית)</li>
              </ul>
            </div>
            <div className="rounded-2xl border border-red-200 bg-red-50 p-5">
              <h3 className="mb-2 font-semibold text-red-900">
                חמורה - אנפילקסיס (חירום רפואי)
              </h3>
              <ul className="list-inside list-disc space-y-1 text-red-800">
                <li>קשיי נשימה, צרידות, צפצופים</li>
                <li>נפיחות בגרון וקשיי בליעה</li>
                <li>ירידה חדה בלחץ דם, סחרחורת, עלפון</li>
                <li>דופק מהיר וחלש</li>
                <li>שינוי בתודעה, בלבול</li>
              </ul>
              <p className="mt-3 text-sm font-medium text-red-900">
                ⚠ אנפילקסיס הוא מצב חירום - יש להזריק אפיפן ולהתקשר ל-101 מיד.
              </p>
            </div>
            <p>
              תסמינים מופיעים בדרך כלל תוך דקות עד שעתיים מהאכילה. תגובות
              ביפאזיות (גל שני של תסמינים 4-8 שעות לאחר הראשון) מתרחשות ב-5-20%
              מהמקרים - ולכן חשוב לנטר לאחר תגובה גם לאחר שהתסמינים שוכחו.
            </p>
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
            אבחון אלרגיה למזון
          </h2>
          <div className="space-y-4 leading-relaxed text-muted-foreground">
            <p>
              אבחון מדויק מתחיל בהיסטוריה קלינית מפורטת: אילו מזונות נאכלו,
              כמה זמן לאחר האכילה הופיעו התסמינים, מה חומרתם וכמה פעמים
              חזרו. מידע זה מכוון את שלב הבדיקות.
            </p>
            <h3 className="text-lg font-semibold text-foreground">
              בדיקות עיקריות
            </h3>
            <ul className="list-inside list-disc space-y-2">
              <li>
                <strong className="text-foreground">SPT (תבחין עור)</strong> -
                בדיקה מהירה שמניחה כמות זעירה של אלרגן על העור. תוצאה חיובית
                (בועית אדומה) מצביעה על רגישות IgE.
              </li>
              <li>
                <strong className="text-foreground">RAST/ImmunoCAP (בדיקת דם)</strong> -
                מדידת רמת IgE ספציפי לאלרגן בדם. אמינה גם בעת תגובות עוריות
                פעילות או בתינוקות.
              </li>
              <li>
                <strong className="text-foreground">Component Testing</strong> -
                בדיקת רכיבי חלבון ספציפיים (כגון Ara h 2 לבוטנים) שמאפשרת
                לחזות חומרת תגובה אפשרית בדיוק גבוה יותר.
              </li>
              <li>
                <strong className="text-foreground">אתגר מזון (OFC)</strong> -
                חשיפה מבוקרת ומדורגת לאלרגן החשוד תחת פיקוח רפואי. נחשב
                לסטנדרט הזהב לאבחון ולמעקב אחרי הנסייה לסבול.
              </li>
            </ul>
            <p>
              תוצאה חיובית בבדיקת עור או דם אינה מספיקה לאבחון - נדרשת
              קורלציה קלינית. אלרגולוג מנוסה יפרש את הממצאים בהקשר התסמינים
              וההיסטוריה.
            </p>
          </div>
        </motion.section>

        {/* Treatment */}
        <motion.section
          id="treatment"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="mb-4 text-xl font-bold text-foreground md:text-2xl">
            טיפול ואימונותרפיה
          </h2>
          <div className="space-y-4 leading-relaxed text-muted-foreground">
            <p>
              הטיפול הסטנדרטי באלרגיה למזון כולל שני עקרונות: הימנעות מהאלרגן
              ונשיאת תרופות חירום. אולם בשנים האחרונות פותחו טיפולים מתקדמים
              שמאפשרים לשנות את תגובת מערכת החיסון.
            </p>
            <div>
              <h3 className="mb-2 text-lg font-semibold text-foreground">
                אימונותרפיה אוראלית (OIT)
              </h3>
              <p>
                הטיפול המתקדם ביותר זמין כיום. מתחילים בכמויות זעירות של האלרגן
                ומגדילים בהדרגה לאורך חודשים. מטרה: השגת סבילות שתאפשר אכילה
                מבוקרת ובטוחה. יעיל במיוחד לבוטנים, חלב וביצים. מתבצע אך ורק
                תחת פיקוח רפואי צמוד.
              </p>
            </div>
            <div>
              <h3 className="mb-2 text-lg font-semibold text-foreground">
                תרופות לניהול תגובות
              </h3>
              <ul className="list-inside list-disc space-y-1">
                <li>
                  <strong className="text-foreground">אפינפרין (אפיפן)</strong> -
                  תרופת קו ראשון לאנפילקסיס. כל מטופל עם אלרגיה חמורה חייב
                  לשאת שני עטי אפיפן בכל עת.
                </li>
                <li>
                  <strong className="text-foreground">אנטיהיסטמינים</strong> -
                  לתסמינים קלים-בינוניים (פריחה, גרד). אינם טיפול לאנפילקסיס.
                </li>
                <li>
                  <strong className="text-foreground">קורטיקוסטרואידים</strong> -
                  לדיכוי תגובות נמשכות, בפרט כשיש חשש לתגובה ביפאזית.
                </li>
              </ul>
            </div>
          </div>
        </motion.section>

        {/* Anaphylaxis */}
        <motion.section
          id="anaphylaxis"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="mb-4 text-xl font-bold text-foreground md:text-2xl">
            אנפילקסיס ואפיפן
          </h2>
          <div className="space-y-4 leading-relaxed text-muted-foreground">
            <p>
              אנפילקסיס היא תגובה אלרגית חמורה ומסכנת חיים שמשפיעה על מספר
              מערכות גוף בו-זמנית. היא מתפתחת מהר - לעיתים תוך דקות - ודורשת
              טיפול חירום מיידי.
            </p>
            <div className="rounded-2xl border border-blue-200 bg-blue-50 p-5">
              <h3 className="mb-3 font-semibold text-blue-900">
                אפיפן ותוכנית חירום
              </h3>
              <p className="text-blue-800 text-sm leading-relaxed">
                אנשים עם סיכון לאנפילקסיס מקבלים מרשם לאפיפן ותוכנית חירום אישית (AEAP) מהאלרגולוג המטפל. הרופא מדריך כיצד להשתמש במכשיר ומתי לפנות לטיפול חירום. אם קיבלתם מרשם לאפיפן ולא קיבלתם הדרכה - פנו לאלרגולוג המטפל.
              </p>
            </div>
            <p>
              אנטיהיסטמינים אינם טיפול לאנפילקסיס. בכל חשד לתגובה חמורה יש לפנות לטיפול רפואי חירום ולא לחכות לראות אם הסימנים חולפים.
            </p>
          </div>
        </motion.section>

        {/* Labels */}
        <motion.section
          id="labels"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="mb-4 text-xl font-bold text-foreground md:text-2xl">
            קריאת תוויות מזון בישראל
          </h2>
          <div className="space-y-4 leading-relaxed text-muted-foreground">
            <p>
              לפי תקנות תיוג המזון הישראליות, כל מוצר מזון חייב לציין בבירור
              אלרגנים ממקורות ה-14 הגדולים. חפשו:
            </p>
            <ul className="list-inside list-disc space-y-2">
              <li>
                <strong className="text-foreground">״מכיל״</strong> -
                האלרגן קיים בהרכב המוצר
              </li>
              <li>
                <strong className="text-foreground">״עלול להכיל״</strong> -
                אזהרת זיהום צולב בקו הייצור
              </li>
            </ul>
            <p>
              שמות נסתרים לאלרגנים נפוצים: קזאין/לקטוז/וויי=חלב;
              אלבומין/מאיונז=ביצה; גלוטן/דגנת=חיטה; טחינה/חומוס/חלווה=שומשום;
              אדממה/טופו=סויה.
            </p>
            <p>
              בעת ספק - אל תאכלו. בפגישה עם המסעדה - שאלו במפורש על כל
              מרכיב ועל נהלי הכנת מזון נפרד לאלרגיים.
            </p>
          </div>
        </motion.section>

        {/* Daily life */}
        <motion.section
          id="daily-life"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="mb-4 text-xl font-bold text-foreground md:text-2xl">
            חיים עם אלרגיה למזון בישראל
          </h2>
          <div className="space-y-4 leading-relaxed text-muted-foreground">
            <p>
              ניהול נכון של אלרגיה למזון בישראל מחייב תכנון מוקדם בכל תחום
              חיים. הנה עיקרי ההנחיות:
            </p>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-xl border border-border/60 bg-card p-4">
                <h3 className="mb-2 font-semibold text-foreground">בבית</h3>
                <ul className="list-inside list-disc space-y-1 text-sm">
                  <li>הפרדת כלי בישול לאלרגן הספציפי</li>
                  <li>שטיפת ידיים לפני הכנת מזון</li>
                  <li>סימון ברור של מוצרים בשנאים</li>
                  <li>כל בני הבית מודעים לאלרגיה</li>
                </ul>
              </div>
              <div className="rounded-xl border border-border/60 bg-card p-4">
                <h3 className="mb-2 font-semibold text-foreground">
                  בגן/בית ספר
                </h3>
                <ul className="list-inside list-disc space-y-1 text-sm">
                  <li>אישור רפואי מפורט לצוות</li>
                  <li>הדרכה לשימוש באפיפן לכל הצוות</li>
                  <li>תוכנית חירום כתובה</li>
                  <li>ארוחה נפרדת בטוחה</li>
                </ul>
              </div>
              <div className="rounded-xl border border-border/60 bg-card p-4">
                <h3 className="mb-2 font-semibold text-foreground">
                  במסעדות
                </h3>
                <ul className="list-inside list-disc space-y-1 text-sm">
                  <li>יידוע המלצר ומנהל המסעדה</li>
                  <li>שאלה על זיהום צולב</li>
                  <li>הזמנת מנות פשוטות עם מרכיבים ברורים</li>
                  <li>אפיפן תמיד זמין</li>
                </ul>
              </div>
              <div className="rounded-xl border border-border/60 bg-card p-4">
                <h3 className="mb-2 font-semibold text-foreground">בנסיעות</h3>
                <ul className="list-inside list-disc space-y-1 text-sm">
                  <li>כרטיס אלרגיה בשפת היעד</li>
                  <li>מלאי מספיק של אפיפן (×2 לפחות)</li>
                  <li>מזון בטוח לדרך</li>
                  <li>מיפוי בתי חולים ביעד</li>
                </ul>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Children */}
        <motion.section
          id="children"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="mb-4 text-xl font-bold text-foreground md:text-2xl">
            אלרגיה למזון בילדים - נקודות מפתח
          </h2>
          <div className="space-y-4 leading-relaxed text-muted-foreground">
            <p>
              ילדים עם אלרגיה למזון זקוקים לתכנית טיפול מיוחדת שמתאימה לגילם
              ולמצבם. כמה עקרונות חשובים:
            </p>
            <ul className="list-inside list-disc space-y-2">
              <li>
                <strong className="text-foreground">חשיפה מוקדמת מונעת:</strong>{" "}
                לפי ההנחיות העדכניות, כדאי להכניס אלרגנים כמו בוטנים וביצים
                בגיל 4-6 חודשים (בהתאם לייעוץ רפואי) - זה מפחית ב-80% את
                הסיכון לפיתוח אלרגיה.
              </li>
              <li>
                <strong className="text-foreground">בדיקות קבועות:</strong>{" "}
                ילדים עם אלרגיה למזון צריכים מעקב שנתי אצל אלרגולוג. חלק
                מהאלרגיות נעלמות, ואתגר מזון מבוקר יכול לקבוע אם ניתן להחזיר
                את המזון לתפריט.
              </li>
              <li>
                <strong className="text-foreground">גיל בית ספר:</strong>{" "}
                ילדים בגיל בית ספר צריכים ללמוד לזהות תסמינים ולדעת כיצד
                לבקש עזרה. ילדים מגיל 12 ומעלה יכולים לשאת ולהשתמש באפיפן
                בעצמם בחינוך נכון.
              </li>
              <li>
                <strong className="text-foreground">רכיבי חיסון:</strong>{" "}
                חיסונים עם גלאטין (כגון חיסון MMR) עלולים להיות בעייתיים
                לאלרגיים לגלאטין. יש לידע את הרופא לפני כל חיסון.
              </li>
            </ul>
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
            שאלות נפוצות על אלרגיה למזון
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
              { href: "/alergiya-beyeladim", label: "אלרגיה בילדים - מדריך מלא להורים" },
              { href: "/atopic-dermatitis", label: "אטופיק דרמטיטיס - מדריך מקיף" },
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
