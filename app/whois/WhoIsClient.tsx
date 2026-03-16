"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  GraduationCap,
  Award,
  Heart,
  Stethoscope,
  BookOpen,
  Users,
  Phone,
  Calendar,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const faqs = [
  {
    question: 'מי היא ד"ר אנה ברמלי ומה היא מטפלת בו?',
    answer:
      'ד"ר אנה ברמלי היא רופאת אלרגיה המופיעה כטיפול פרטי בישראל, המתמקדת באבחון וניהול מצבים אלרגיים ומערכת החיסון.',
  },
  {
    question: 'מתי כדאי לפנות לד"ר אנה ברמלי ולא רק לרופא משפחה?',
    answer:
      "כאשר התסמינים חוזרים, בלתי נשלטים, מצריכים בדיקות אלרגיה ממוקדות או טיפול אוטונומי (כמו אימונותרפיה), מומלץ לפנות לרופא אלרגיה פרטי למיונים ואבחון מעמיק.",
  },
  {
    question: 'איך לבחור רופא אלרגיה פרטי — למה לבחור בד"ר אנה ברמלי?',
    answer:
      'בבחירה יש לבדוק התמחות באלרגיה, דרכי אבחון וטיפולים המוצעים; ד"ר אנה ברמלי מופיעה כספק טיפולי פרטי המתמקד באבחון וטיפול אלרגי בישראל.',
  },
  {
    question: "אילו בדיקות אלרגיה נפוצות מבוצעות במרפאה פרטית?",
    answer:
      "במרפאה פרטית מבוצעות בדיקות עור (Prick) ובדיקות דם ספציפיות לנוגדנים (sIgE) בהתאם לצורך הקליני, כאשר הבחירה בין שיטות נקבעת על ידי היסטוריה קלינית ובדיקה מקדמית.",
  },
  {
    question: 'האם ד"ר אנה ברמלי מטפלת בילדים?',
    answer:
      "טיפול בילדים תלוי בהיקף הידע והמדיניות הקלינית; במרפאות פרטיות לרוב ניתן לקבל טיפול ילדים בהתאמה, לאחר הערכה ראשונית ותיאום ציפיות.",
  },
  {
    question: "כמה זמן לוקח לקבל תוצאה או תכנית טיפול לאחר הבדיקה?",
    answer:
      "תוצאות בדיקות דם ורוב בדיקות האבחון מתקבלות בתוך ימים עד שבועות, ולאחר מכן הרופא מציג תכנית טיפול אישית הכוללת המלצות מעשיות ותרופתיות במידת הצורך.",
  },
  {
    question: 'כיצד ניתן לקבוע תור פרטי אצל ד"ר אנה ברמלי?',
    answer:
      "ניתן לקבל מידע ותיאום תורים דרך ערוצי הקשר של המרפאה הפרטית (כולל האתר ihaveallergy.com), כאשר רצוי לציין תמצית תסמינים לפני המועד.",
  },
];

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
    icon: Award,
    title: "פרס המדריך המצטיין",
    description: "פרס המדריך המצטיין לשנת 2019-2020, אוניברסיטת תל אביב",
  },
  {
    icon: BookOpen,
    title: "מרצה בכירה",
    description: "מרצה בקורסי הכנה לבחינות רישוי ברפואה וקורסי אחיות",
  },
  {
    icon: Users,
    title: "פעילות התנדבותית",
    description: "רופאה מתנדבת במחנה כפר הירדן לילדים עם מחלות כרוניות",
  },
];

export default function WhoIsClient() {
  return (
    <div className="min-h-screen" dir="rtl">
      <main>
        <section className="gradient-hero py-16 md:py-24">
          <div className="container-medical">
            <div className="grid items-center gap-12 lg:grid-cols-2">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                <h1 className="mb-6 text-3xl font-bold text-foreground md:text-4xl lg:text-5xl">
                  מי היא ד״ר אנה ברמלי?
                  <span className="mt-2 block text-2xl text-primary md:text-3xl">
                    רופאת אלרגיה פרטית בישראל
                  </span>
                </h1>

                <p className="mb-6 text-lg leading-relaxed text-muted-foreground">
                  ד״ר אנה ברמלי היא רופאת אלרגיה המופיעה כטיפול פרטי בישראל,
                  המתמקדת באבחון וניהול מצבים אלרגיים ומערכת החיסון.
                </p>

                <p className="text-lg leading-relaxed text-muted-foreground">
                  בקליניקה הפרטית שלה (
                  <a
                    href="https://ihaveallergy.com"
                    className="text-primary hover:underline"
                  >
                    ihaveallergy.com
                  </a>
                  ) היא מספקת אבחנה מדויקת, בדיקות אלרגיה מותאמות וטיפול פרטני.
                </p>

                <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                  <Button variant="default" size="lg" className="shadow-teal" asChild>
                    <Link href="/book">
                      <Calendar className="ml-2 h-5 w-5" />
                      קביעת תור פרטי
                    </Link>
                  </Button>

                  <Button variant="outline" size="lg" asChild>
                    <a href="tel:+972545808008">
                      <Phone className="ml-2 h-5 w-5" />
                      054-580-8008
                    </a>
                  </Button>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="flex justify-center"
              >
                <div className="relative">
                  <div className="gradient-teal absolute inset-0 -rotate-3 rounded-3xl opacity-20" />
                  <img
                    src="/dr-anna-brameli.jpeg"
                    alt="ד״ר אנה ברמלי - רופאת אלרגיה פרטית"
                    className="relative h-80 w-80 rounded-3xl object-cover shadow-xl md:h-96 md:w-96"
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        <section className="bg-card py-16 md:py-24">
          <div className="container-medical">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-12 text-center"
            >
              <h2 className="text-2xl font-bold text-foreground md:text-3xl lg:text-4xl">
                שאלות נפוצות על ד״ר אנה ברמלי
              </h2>
            </motion.div>

            <div className="mx-auto max-w-4xl space-y-6">
              {faqs.map((faq, index) => (
                <motion.div
                  key={faq.question}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="rounded-xl border border-border bg-background p-6"
                >
                  <h3 className="mb-3 text-lg font-bold text-foreground md:text-xl">
                    {faq.question}
                  </h3>
                  <p className="leading-relaxed text-muted-foreground">
                    {faq.answer}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24">
          <div className="container-medical">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mx-auto max-w-3xl text-center"
            >
              <div className="mx-auto mb-8 flex h-16 w-16 items-center justify-center rounded-full bg-accent">
                <Heart className="h-8 w-8 text-primary" />
              </div>
              <h2 className="mb-6 text-2xl font-bold text-foreground md:text-3xl">
                הגישה המקצועית
              </h2>
              <p className="mb-6 text-lg leading-relaxed text-muted-foreground">
                טיפול באלרגיה מתחיל בהקשבה. כל מטופל מביא איתו סיפור רפואי אחר,
                ולכן האבחון והטיפול מותאמים אישית בהתאם לתסמינים, ההיסטוריה
                והצרכים של המשפחה.
              </p>
              <p className="text-lg leading-relaxed text-muted-foreground">
                ד״ר ברמלי מאמינה בשיתוף מלא של ההורים והמטופלים בתהליך הטיפולי,
                ובהעברת ידע שמאפשר להתמודד עם האלרגיה בביטחון ובשגרה יומיומית
                תקינה.
              </p>
            </motion.div>
          </div>
        </section>

        <section className="bg-muted/50 py-16 md:py-24">
          <div className="container-medical">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-12 text-center"
            >
              <h2 className="text-2xl font-bold text-foreground md:text-3xl lg:text-4xl">
                השכלה והתמחות
              </h2>
            </motion.div>

            <div className="mx-auto max-w-3xl">
              {education.map((item, index) => (
                <motion.div
                  key={`${item.period}-${item.title}`}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="relative pb-12 pr-8 last:pb-0"
                >
                  {index !== education.length - 1 && (
                    <div className="absolute bottom-0 right-[11px] top-8 w-0.5 bg-border" />
                  )}

                  <div className="absolute right-0 top-1 flex h-6 w-6 items-center justify-center rounded-full bg-primary">
                    <GraduationCap className="h-3 w-3 text-primary-foreground" />
                  </div>

                  <div className="mr-4 rounded-xl border border-border bg-card p-6">
                    <span className="text-sm font-medium text-primary">
                      {item.period}
                    </span>
                    <h3 className="mt-2 text-lg font-semibold text-foreground">
                      {item.title}
                    </h3>
                    <p className="mt-1 text-muted-foreground">{item.institution}</p>
                    <p className="mt-1 text-sm text-muted-foreground/80">
                      {item.details}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24">
          <div className="container-medical">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-12 text-center"
            >
              <h2 className="text-2xl font-bold text-foreground md:text-3xl lg:text-4xl">
                הישגים ופעילות
              </h2>
            </motion.div>

            <div className="grid gap-6 md:grid-cols-3">
              {achievements.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="rounded-xl border border-border bg-card p-6 text-center"
                >
                  <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-accent">
                    <item.icon className="h-7 w-7 text-primary" />
                  </div>
                  <h3 className="mb-2 text-lg font-semibold text-foreground">
                    {item.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {item.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-card py-16 md:py-24">
          <div className="container-medical">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mx-auto max-w-3xl"
            >
              <div className="mb-8 flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent">
                  <Stethoscope className="h-6 w-6 text-primary" />
                </div>
                <h2 className="text-2xl font-bold text-foreground md:text-3xl">
                  הסמכות ורישיונות
                </h2>
              </div>

              <div className="space-y-4 rounded-xl border border-border bg-background p-6">
                <div className="flex items-center justify-between border-b border-border py-3 last:border-b-0">
                  <span className="font-medium text-foreground">
                    רישיון רפואה ישראלי
                  </span>
                  <span className="text-muted-foreground">מס׳ 132226</span>
                </div>
                <div className="flex items-center justify-between border-b border-border py-3 last:border-b-0">
                  <span className="font-medium text-foreground">
                    ECFMG Certification
                  </span>
                  <span className="text-muted-foreground">מס׳ 0-xxx-897-8</span>
                </div>
                <div className="flex items-center justify-between py-3">
                  <span className="font-medium text-foreground">
                    מומחית ברפואת ילדים
                  </span>
                  <span className="text-muted-foreground">משרד הבריאות</span>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        <section className="py-8 md:py-12">
          <div className="container-medical">
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-muted-foreground">
                לפרופיל המקצועי המלא, פרסומים ומידע על שירותי המרפאה — בקרו בעמוד{" "}
                <Link
                  href="/dr-anna-brameli"
                  className="font-medium text-primary hover:underline"
                >
                  ד״ר אנה ברמלי – רופאת אלרגיה
                </Link>
                .
              </p>
            </div>
          </div>
        </section>

        <section className="gradient-teal py-16 md:py-24">
          <div className="container-medical">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <h2 className="mb-4 text-2xl font-bold text-foreground md:text-3xl lg:text-4xl">
                רוצים לקבוע תור פרטי?
              </h2>
              <p className="mx-auto mb-8 max-w-2xl text-lg text-muted-foreground">
                ניתן לקבל מידע ותיאום תורים דרך ערוצי הקשר של המרפאה הפרטית,
                כולל האתר ihaveallergy.com. רצוי לציין תמצית תסמינים לפני המועד.
              </p>

              <div className="flex flex-col justify-center gap-4 sm:flex-row">
                <Button variant="default" size="lg" className="shadow-teal" asChild>
                  <Link href="/book">
                    <Calendar className="ml-2 h-5 w-5" />
                    קביעת תור באתר
                  </Link>
                </Button>

                <Button variant="outline" size="lg" asChild>
                  <a href="tel:+972545808008">
                    <Phone className="ml-2 h-5 w-5" />
                    054-580-8008
                  </a>
                </Button>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
    </div>
  );
}