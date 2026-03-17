"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  ArrowLeft,
  FileText,
  MessageCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const contactItems = [
  {
    icon: Phone,
    title: "קביעת תור",
    description: "לתיאום ביקור, בירור או השארת פרטים יש להמשיך לאתר הראשי.",
    value: "מעבר לאתר הראשי",
    href: "https://ihaveallergy.com/book",
  },
  {
    icon: Mail,
    title: "פנייה כללית",
    description: "עמוד זה מיועד למידע והכוונה. לפעולה בפועל יש להמשיך לאתר הראשי.",
    value: "ihaveallergy.com",
    href: "https://ihaveallergy.com/",
  },
  {
    icon: MapPin,
    title: "האתר הראשי",
    description: "הבוט, קביעת התור והאינטראקציה המלאה זמינים באתר הראשי.",
    value: "https://ihaveallergy.com/",
    href: "https://ihaveallergy.com/",
  },
];

const notes = [
  "עמוד זה הוא חלק משכבת ה-SEO של האתר.",
  "קביעת תור, בוט, ואינטראקציה מלאה מתבצעים באתר הראשי בלבד.",
  "לקריאת מידע, מדריכים ומאמרים ניתן להמשיך לגלוש באתר ה-SEO.",
];

export default function ContactClient() {
  return (
    <>
      <section className="gradient-hero py-20 md:py-28">
        <div className="container-medical">
          <div className="mx-auto max-w-4xl text-center">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="mb-5 inline-flex items-center rounded-full bg-accent px-4 py-2 text-sm font-medium text-primary">
                <MessageCircle className="ml-2 h-4 w-4" />
                יצירת קשר והכוונה
              </div>

              <h1 className="font-bold text-foreground mb-6">
                יצירת קשר עם ד״ר אנה ברמלי
                <span className="block text-primary mt-3 text-[22px] md:text-[28px] lg:text-[32px]">
                  פעולות כמו קביעת תור מתבצעות באתר הראשי
                </span>
              </h1>

              <p className="mx-auto max-w-3xl text-lg leading-8 text-muted-foreground md:text-xl">
                עמוד זה נועד להכוונה בלבד. אם ברצונכם לקבוע תור, להשאיר פרטים,
                או להשתמש בבוט — יש להמשיך לאתר הראשי של הקליניקה.
              </p>

              <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
                <Button size="lg" asChild>
                  <Link href="https://ihaveallergy.com/book">
                    קביעת תור באתר הראשי
                    <ArrowLeft className="mr-2 h-4 w-4" />
                  </Link>
                </Button>

                <Button size="lg" variant="outline" asChild>
                  <Link href="https://ihaveallergy.com/?openChat=1">
                    פתיחת הבוט באתר הראשי
                    <ArrowLeft className="mr-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="section-spacing-lg bg-surface">
        <div className="container-medical">
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {contactItems.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                className="rounded-[2rem] border border-border/60 bg-card p-7 shadow-medical"
              >
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-accent">
                  <item.icon className="h-6 w-6 text-primary" />
                </div>

                <h2 className="text-xl font-bold text-foreground">{item.title}</h2>
                <p className="mt-3 leading-7 text-muted-foreground">
                  {item.description}
                </p>

                <div className="mt-4 text-sm font-medium text-foreground break-all">
                  {item.value}
                </div>

                <div className="mt-6">
                  <Button variant="outline" asChild className="w-full">
                    <Link href={item.href}>
                      מעבר
                      <ArrowLeft className="mr-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-spacing-lg">
        <div className="container-medical">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="rounded-[2rem] border border-border/60 bg-card p-8 shadow-medical"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-accent">
                <Clock className="h-6 w-6 text-primary" />
              </div>

              <h2 className="font-bold text-foreground">מה חשוב לדעת</h2>

              <div className="mt-6 space-y-4">
                {notes.map((note) => (
                  <div
                    key={note}
                    className="rounded-2xl border border-border/50 bg-surface px-5 py-4"
                  >
                    <p className="text-sm leading-7 text-muted-foreground">
                      {note}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="rounded-[2rem] border border-border/60 bg-card p-8 shadow-medical"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-accent">
                <FileText className="h-6 w-6 text-primary" />
              </div>

              <h2 className="font-bold text-foreground">מה אפשר לעשות מכאן</h2>

              <p className="mt-4 text-lg leading-8 text-muted-foreground">
                אם הגעתם לעמוד הזה דרך חיפוש בגוגל, הגעתם למקום הנכון כדי לקרוא
                ולהבין. אבל לכל פעולה מעשית — קביעת תור, פתיחת בוט, או פנייה
                ישירה — יש לעבור לאתר הראשי.
              </p>

              <div className="mt-8 flex flex-col gap-4">
                <Button size="lg" asChild>
                  <Link href="https://ihaveallergy.com/book">
                    קביעת תור באתר הראשי
                    <ArrowLeft className="mr-2 h-4 w-4" />
                  </Link>
                </Button>

                <Button size="lg" variant="outline" asChild>
                  <Link href="https://ihaveallergy.com/?openChat=1">
                    פתיחת הבוט באתר הראשי
                    <ArrowLeft className="mr-2 h-4 w-4" />
                  </Link>
                </Button>

                <Button size="lg" variant="outline" asChild>
                  <Link href="/faq">
                    מעבר לשאלות ותשובות
                    <ArrowLeft className="mr-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
